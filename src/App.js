import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from "./pages/home";
import { ContactUs } from "./pages/contact-us";
import { NotFound } from "./pages/not-found";
import { Menu } from "./components/menu";
import { Products } from "./pages/products";
import { About } from "./pages/about/about";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Menu />
                <Routes>
                    <Route path={'/'} element={<Home />} />
                    <Route path={'/contact-us'} element={<ContactUs />} />
                    <Route path={'/about/*'} element={<About />} />
                    <Route path={'/produse/*'} element={<Products />} />
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
