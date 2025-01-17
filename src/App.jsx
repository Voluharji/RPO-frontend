import './App.css'
import { HashRouter, Routes, Route } from "react-router-dom";
import  Homepage  from './Pages/Homepage/homepage.jsx'
import ShopPage from './Pages/Shoppage/ShopPage.jsx'
import LoginPage from './Pages/LoginPage/LoginPage.jsx'
import SignUpPage from "./Pages/SignUpPage/SignUpPage.jsx";
import InfoPage from "./Pages/InfoPage/InfoPage.jsx";
import ProfilePage from "./Pages/ProfilePage/ProfilePage.jsx"
import ProductPage from "./Pages/ProductPage/ProductPage.jsx"
import {CartProvider} from "./Components/CartFunctions/CartFunctions.jsx";
import CheckoutPage from "./Pages/CheckOutPage/CheckoutPage.jsx";

function App() {
  return (
          <CartProvider>
            <HashRouter>
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/ShopPage" element={<ShopPage />} />
                <Route path="/ShopPage/:productId" element={<ProductPage/>} />
                <Route path="/LoginPage" element={<LoginPage/>} />
                <Route path="/SignUpPage" element={<SignUpPage/>} />
                <Route path="/InfoPage" element={<InfoPage/>} />
                <Route path="/ProfilePage" element={<ProfilePage/>} />
                <Route path="/CheckoutPage" element={<CheckoutPage/>} />
              </Routes>
            </HashRouter>
          </CartProvider>
  );
}

export default App;
