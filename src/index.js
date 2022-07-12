import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Store from './Store';
import App from './App';
import Home from './Pages/Home';
import Platform from './Pages/Platform';
import Faq from './Pages/Faq';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={Store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Home />} />
                    <Route path="home" element={<Home />} />
                    <Route path="platform" element={<Platform />} />
                    <Route path="faq" element={<Faq />} />
                    <Route path="signup" element={<SignUp />} />
                    <Route path="signin" element={<SignIn />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </Provider>
);