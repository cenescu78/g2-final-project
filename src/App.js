import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from "./pages/home";
import { ContactUs } from "./pages/contact-us";
import { NotFound } from "./pages/not-found";
import { Menu } from "./components/menu";
import { Products } from "./pages/products";
import { About } from "./pages/about/about";
import { anonymousUserInfo, Login, UserInfo } from "./components/login";
import { useState } from "react";
import { AddProduct } from "./pages/admin/add-product";
import {AddFeedback} from "./pages/feedback/add-feedback";
import {AboutCompany} from "./pages/about/about-company";
import {AboutUs} from "./pages/about/about-us";
import {Reviews} from "./pages/reviews";
import {Footer} from "./components/footer";


const userInfoStoreKey = 'userInfo'

let currentUser = anonymousUserInfo;
const storedUserInfoStr = sessionStorage.getItem(userInfoStoreKey);
if (storedUserInfoStr) {
    currentUser = JSON.parse(storedUserInfoStr)
}

function App() {
    const [userInfo, setUserInfo] = useState(currentUser)

    function handleLogin(newUser) {
        setUserInfo(newUser);
        sessionStorage.setItem(userInfoStoreKey, JSON.stringify(newUser))
    }

    function handleLogout() {
        setUserInfo(anonymousUserInfo);
        sessionStorage.setItem(userInfoStoreKey, JSON.stringify(anonymousUserInfo))
    }

    return (
        <div className="App">
            <UserInfo.Provider value={userInfo}>
                <BrowserRouter>
                    <div className={'header'}>
                        <Menu />
                        <Login onLogin={handleLogin} onLogout={handleLogout} />
                    </div>
                    <Routes>
                        <Route path={'/'} element={<Home />} />
                        <Route path={'/contact-us'} element={<ContactUs />} />
                        <Route path={'/about/*'} element={<About />} />
                        <Route path={'/about/about-company'} element={<AboutCompany />} />
                        <Route path={'/about/about-us'} element={<AboutUs />} />
                        <Route path={'/produse/*'} element={<Products />} />
                        <Route path={'/feedback/*'} element={<AddFeedback />} />
                        <Route path={'/reviews/*'} element={<Reviews />} />
                        <Route path={'/admin/add-product'} element={<AddProduct />} />
                        <Route path={'*'} element={<NotFound />} />
                    </Routes>
                    <div>
                        <Footer/>
                    </div>
                </BrowserRouter>

            </UserInfo.Provider>
        </div>
    );
}

export default App;
