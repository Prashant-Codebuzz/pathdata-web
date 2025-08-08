import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Header.css';
import logos from '../../assets/images/logo.png';
import logo from '../../assets/images/logo-icon.png';

const Header = () => {
    return (
        <>

            {/* ---- Header Start ---- */}
            <header className='webpage-header landing'>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">

                        <div className='navbar-brand py-0'>
                            <Link to="/">
                                <div className='logo'>
                                    <img src={logo} alt="" />
                                </div>
                            </Link>
                        </div>

                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                            <div className="offcanvas-header">
                                <div className='navbar-brand'>
                                    <Link to="/">
                                        <img src={logo} alt="" />
                                    </Link>
                                </div>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                                    <li className="nav-item mb-2 mb-lg-0" data-bs-dismiss="offcanvas">
                                        <Link className="nav-link">About Us</Link>
                                    </li>
                                    <li className="nav-item mb-2 mb-lg-0" data-bs-dismiss="offcanvas">
                                        <Link className="nav-link">Our Vision</Link>
                                    </li>
                                    <li className="nav-item mb-2 mb-lg-0" data-bs-dismiss="offcanvas">
                                        <Link to="/meet-team" className="nav-link">Team</Link>
                                    </li>
                                    <li className="nav-item mb-2 mb-lg-0" data-bs-dismiss="offcanvas" >
                                        <Link className="nav-link">Blog</Link>
                                    </li>
                                    <li className="nav-item mb-2 mb-lg-0" data-bs-dismiss="offcanvas" >
                                        <Link to="/contact-us" className="nav-link">Contact Us</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav >
            </header>
            {/* ---- Header Start ---- */}

        </>
    )
}

export default Header;  