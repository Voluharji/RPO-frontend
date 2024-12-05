import './App.css'
import { HashRouter, Routes, Route } from "react-router-dom";
import  Homepage  from './Homepage/homepage.jsx'
import ShopPage from './ShopPage/ShopPage.jsx'
import LoginPage from './LoginPage/LoginPage.jsx'
import SignUpPage from "./SignUpPage/SignUpPage.jsx";
import InfoPage from "./InfoPage/InfoPage.jsx";
import ProfilePage from "./ProfilePage/ProfilePage.jsx"

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/ShopPage" element={<ShopPage />} />
        <Route path="/LoginPage" element={<LoginPage/>} />
        <Route path="/SignUpPage" element={<SignUpPage/>} />
        <Route path="/InfoPage" element={<InfoPage/>} />
        <Route path="/ProfilePage" element={<ProfilePage/>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
