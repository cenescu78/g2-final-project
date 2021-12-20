import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from "./pages/home";
import { ContactUs } from "./pages/contact-us";
import { NotFound } from "./pages/not-found";
import { Menu } from "./components/menu";
import { ProductDetails } from "./pages/product-details";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Menu />
                <Routes>
                    <Route path={'/'} element={<Home />} />
                    <Route path={'/contact-us'} element={<ContactUs />} />
                    <Route path={'/produse/:productName-id-:productId'} element={<ProductDetails />} />
                    <Route path={'*'} element={<NotFound />} />
                </Routes>
                <div>
                    footer copyright 2021
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
