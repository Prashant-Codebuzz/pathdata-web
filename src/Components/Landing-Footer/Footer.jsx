import React from 'react'
import './Footer.css';

import logo from '../../assets/images/logo.png';

import sociallinkedin from '../../assets/images/social-linkedin.png';
import socialgit from '../../assets/images/social-git.png';
import socialm from '../../assets/images/social-m.png';

import { Link, useLocation } from 'react-router-dom';

const Footer = () => {

    const { pathname } = useLocation();


    return (
        <>

            {/* ---- Copyright Start ---- */}
            {
                (pathname === "/" ||
                    pathname === "/pathiq" ||
                    pathname === "/waypoint") &&
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
                        Join our insights list and receive strategic content on <br />
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
                <div className='first d-flex justify-content-between align-items-center'>
                    <div className="logo">
                        {/* <div className='logo'>Logo</div> */}
                        <img src={logo} alt="" />
                    </div>

                    <div className="menu d-flex m-md-auto flex-wrap">
                        <ul className="d-flex flex-wrap">
                            <li className="mb-2 mb-lg-0" style={{ marginTop: '10px' }}>
                                <Link className="" >
                                    About Us
                                </Link>
                            </li>
                            <li className="mb-2 mb-lg-0" style={{ marginTop: '10px' }}>
                                <Link className="" >
                                    Our Vision
                                </Link>
                            </li>
                            <li className="mb-2 mb-lg-0" style={{ marginTop: '10px' }}>
                                <Link className="" >
                                    Team
                                </Link>
                            </li>
                            <li className="mb-2 mb-lg-0" style={{ marginTop: '10px' }}>
                                <Link className="" >
                                    Blog
                                </Link>
                            </li>
                            <li className="mb-2 mb-lg-0 " style={{ marginTop: '10px' }}>
                                <Link className="" >
                                    Contacts
                                </Link>
                            </li>
                        </ul>
                    </div >

                    <Link
                        // to="https://app.usemotion.com/meet/dhruvil-shah-hqmeetingvx/"
                        // to="/sign-in"
                        // target='_blank'    
                        className='main-button book-btn'>
                        {/* Book a Demo */}
                        Explore PATHSDATA
                    </Link>
                </div >

                <p className='copy text-center'>
                    © Copyright 2025 - Pathdata. All rights reserved
                </p>
            </footer >
        </>
    )
}

export default Footer;