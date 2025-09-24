import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import MenuPage from "./pages/MenuPage.jsx";
import CartPage from "./pages/CartPage.jsx"
import Header from "./components/Header.jsx";

export default function App(props){
    return(<>
    <BrowserRouter>
        <h3> 루트 페이지 </h3>
        <Header />
        <Routes>
                <Route path="/" element = {<HomePage/>}/>
                <Route path="/menu" element = {<MenuPage/>}/>
                <Route path="/cart" element ={<CartPage/>}/>
        </Routes>
    </BrowserRouter>
    </>)
}