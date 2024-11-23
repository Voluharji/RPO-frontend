import './App.css'
import { HashRouter, Routes, Route } from "react-router-dom";
import  Homepage  from './Homepage/homepage.jsx'
import ShopPage from './ShopPage/ShopPage.jsx'
import LoginPage from './LoginPage/LoginPage.jsx'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/ShopPage" element={<ShopPage />} />
        <Route path="/LoginPage" element={<LoginPage/>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
