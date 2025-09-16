import React from 'react'
import './Footer.css';

import logos from '../../assets/images/logo.png';

import sociallinkedin from '../../assets/images/social-linkedin.png';
import socialgit from '../../assets/images/social-git.png';
import socialm from '../../assets/images/social-m.png';

import logo from '../../assets/images/logo-icon.png';

import { Link, useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {

    const { pathname } = useLocation();
    const navigate = useNavigate();


    return (
        <>

            {/* ---- Copyright Start ---- */}
            {
                (
                    pathname === "/" ||
                    pathname === "/pathiq" ||
                    pathname === "/pathiq-engine" ||
                    pathname === "/waypoint"
                ) &&
                <div className="copyright text-center">
                    {/* <div className="social d-flex justify-content-center gap-4">
                    <Link>
                        <img src={sociallinkedin} className='img-fluid' />
                    </Link>
                    <Link>
                        <img src={socialgit} className='img-fluid' />
                    </Link>
                    <Link>
                        <img src={socialm} className='img-fluid' />
                    </Link>
                </div> */}

                    <div className="title">
                        Stay Updated
                    </div>

                    <p className=''>
                        Join our insights list and receive strategic content on <br className='d-none d-lg-block' />
                        <span>data, cloud, and AI - straight to your inbox. </span>
                    </p>

                    <form className='d-flex justify-content-center gap-2 '>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className='form-control'
                            placeholder='Enter Email'
                            autoComplete='off'
                            required
                        />

                        <button type='button' className='main-button discover-btn'>
                            Get access
                        </button>
                    </form>
                </div>
            }

            {/* ---- Copyright End ---- */}






            <footer className='s'>
                <div className='first d-flex justify-content-center justify-content-lg-between align-items-center'>
                    <div className="logo">
                        <Link to="/">
                            {/* <div className='logo'>Logo</div> */}
                            <img src={logo} alt="" />
                        </Link>
                    </div>

                    <div className={`menu d-flex my-3 my-md-4 my-lg-0 flex-wrap ${pathname === "/pathiq" ? 'ms-md-auto' : 'ms-md-auto'}`}>
                        <ul className="d-flex flex-wrap justify-content-center flex-column flex-sm-row">
                            <li className={`mb-2 mb-lg-0  ${pathname === "/pathiq" ? 'text-center text-sm-start' : ''}`} style={{ marginTop: '10px' }}>
                                <Link to="/meet-team" className="px-0" >
                                    Team
                                </Link>
                            </li>
                            {
                                (
                                    pathname.startsWith("/waypoint")
                                ) &&
                                <li className="nav-item mb-2 mb-lg-0" data-bs-dismiss="offcanvas" >
                                    <Link to="/startup-program" className="nav-link">Startup Program</Link>
                                </li>
                            }
                            <li className={`mb-2 mb-lg-0 ${pathname === "/pathiq" ? 'text-center text-sm-start mb-4 mb-sm-0' : ''}`} style={{ marginTop: '10px' }}>
                                <Link to="/contact-us" className="px-0" >
                                    Contact Us
                                </Link>
                            </li>

                            {
                                location.pathname === "/pathiq" &&
                                <Link
                                    to="/pathiq-engine"
                                    className="main-button book-btn discover-btn new"
                                >
                                    PATHIQ ENGINE
                                </Link>
                            }
                        </ul>
                    </div >

                    {/* <Link
                        className='main-button book-btn'>
                        Explore PATHSDATA
                    </Link> */}
                </div >

                <div className="d-md-flex justify-content-md-between">
                    <p className='copy text-center'>
                        © Copyright 2025 - PATHSDATA. All rights reserved
                    </p>

                    <p className='copy text-center cursor-pointer mt-3 d-md-none' onClick={() => navigate("/pathdata-privacy-policy")}>
                        Privacy Policy
                    </p>

                    <p className='copy text-center cursor-pointer d-none d-md-block' onClick={() => navigate("/pathdata-privacy-policy")}>
                        Privacy Policy
                    </p>
                </div>
            </footer >
        </>
    )
}

export default Footer;