
import './App.css'
import {  HashRouter, Link, Route, Routes  } from 'react-router-dom'
import TrackedProduct from './views/tracked-products';
import ShopView from './views/ShopView';



function App() {
  return (
      <HashRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">Śledzone produkty</Link>
      </nav>

      <Routes>
        <Route path="/" element={<ShopView />} />
        <Route path="/about" element={<TrackedProduct />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
