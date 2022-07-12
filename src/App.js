import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
    return (
        <>
            <Header />
            <div className='w-full !mx-auto rounded-md xl:!w-3/4 md:!w-3/4'>
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default App;