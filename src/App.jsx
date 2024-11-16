import './App.css'
import { HashRouter, Routes, Route } from "react-router-dom";
import  Homepage  from './Homepage/homepage.jsx'
import ShopPage from './ShopPage/ShopPage.jsx'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/ShopPage" element={<ShopPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
