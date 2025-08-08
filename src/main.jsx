import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 
createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />

        <ToastContainer
            position="top-center"
            autoClose={2000}
            // closeOnClick
            // draggable
            theme="colored"
        />
    </BrowserRouter>
)


// <StrictMode >
// </StrictMode >
