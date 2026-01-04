
import './App.css'
import { BrowserRouter, Link, Route, Routes  } from 'react-router-dom'
import { useEffect, useState } from 'react';
import TrackedProduct from './views/tracked-products';
import ShopView from './views/ShopView';



function App() {
  const [url, setUrl] = useState<string>("");
  const [shops, setShops] = useState<any>([]);

  useEffect(() => {
   chrome.storage.local.get("lastUrl", (data) => {
  const lastUrl = data.lastUrl as string | undefined;

  if (lastUrl) {
    setUrl(lastUrl);
  }
});

    const listener = (message: any) => {
      if (message.type === "PAGE_CHANGED") {
        setUrl(message.url);
      }
    };

    chrome.runtime.onMessage.addListener(listener);
    return () => chrome.runtime.onMessage.removeListener(listener);
  }, []);

  return (
    <BrowserRouter>
    <a>{url}</a>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">Śledzone produkty</Link> |{" "}
      </nav>

      <Routes>
        <Route path="/" element={<ShopView />} />
        <Route path="/about" element={<TrackedProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
