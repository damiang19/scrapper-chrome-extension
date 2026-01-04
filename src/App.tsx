
import './App.css'
import { BrowserRouter, Link, Route, Routes  } from 'react-router-dom'
import Car from "./tracked-products"
import { useEffect, useState } from 'react';

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}

function App() {
  const [url, setUrl] = useState<string>("");

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
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Car />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
