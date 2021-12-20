import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from "./pages/home";
import { ContactUs } from "./pages/contact-us";
import { NotFound } from "./pages/not-found";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<Home />} />
                    <Route path={'/contact-us'} element={<ContactUs />} />
                    <Route path={'*'} element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
