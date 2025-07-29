import React from 'react'
import './Home.css';

import rightarrow from '../../../assets/images/home/right-arrow.png';
import logoicon from '../../../assets/images/logo-icon.png';
import bannerright from '../../../assets/images/banner-right.png';
import company1 from '../../../assets/images/home/company1.png';
import company2 from '../../../assets/images/home/company2.png';
import company3 from '../../../assets/images/home/company3.png';
import company4 from '../../../assets/images/home/company4.png';
import powerby_1 from '../../../assets/images/powerby_1.png';
import powerby_2 from '../../../assets/images/powerby_2.png';
import powerby_3 from '../../../assets/images/powerby_3.png';
import powerby_4 from '../../../assets/images/powerby_4.png';

import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>

            {/* ---- Banner Start ---- */}
            <div className="new_banner">
                <div className="row align-items-center">
                    <div className="col-lg-7 col-xl-6 text-center text-lg-start">
                        <div className="left">
                            {/* <Link>
                                <div className='logo'>
                                    <img src={logoicon} alt="Logo" />
                                </div>
                            </Link> */}

                            <h1 className="title">
                                Simplify the Journey.
                                <br className='d-none d-md-block' />
                                Empower the Outcome.
                            </h1>

                            <p className="description">
                                Pathsdata transforms complexity into clarity - <br className='d-none d-md-block' />
                                helping you move forward with confidence.
                            </p>

                            {/* <div className="buttons">
                                <Link
                                    to="/turning-data"
                                    className="main-button book-btn discover-btn me-sm-4 me-xl-5"
                                >
                                    Book a Demo
                                    <img src={rightarrow} className='ms-2' />
                                </Link>


                                <Link
                                    to="/turning-data"
                                    className="main-button book-btn discover-btn"
                                >
                                    Speak to an Expert
                                    <img src={rightarrow} className='ms-2' />
                                </Link>
                            </div> */}
                        </div>
                    </div>
                    <div className="col-lg-5 col-xl-6">
                        <div className="right d-flex justify-content-center justify-content-lg-end mt-5 mt-xl-0">
                            <div className='logo'>
                                <img src={bannerright} alt="Logo" className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>

                {/* <section className='company'>
                    <div className="container text-center">
                        <h5 className="text-white">Powered By</h5>

                        <div className="slider-container">
                            <div className='images d-flex flex-wrap justify-content-center align-items-center'>
                                <img src={powerby_1} alt="Company 1" className="company-logo img-fluid" />
                                <img src={powerby_2} alt="Company 2" className="company-logo img-fluid" />
                                <img src={powerby_3} alt="Company 3" className="company-logo img-fluid" />
                                <img src={powerby_4} alt="Company 4" className="company-logo img-fluid" />
                            </div>
                        </div>
                    </div>
                </section> */}

                {/* ---- Vision Start ---- */}
                <div className="vision text-center">
                    <div>
                        <h1 className="title">
                            Our Vision
                        </h1>

                        <p className="description">
                            To empower businesses to achieve outcomes effortlessly, while making their journey toward success
                            easier at every step.
                        </p>

                    </div>
                </div>
                {/* ---- Vision End ---- */}

                {/* ---- Square Start ---- */}
                <div className='squre s1'></div>
                <div className='squre s2'></div>
                <div className='squre s3'></div>
                <div className='squre s4'></div>
                <div className='squre s5'></div>
                <div className='squre s6'></div>
                {/* ---- Square End ---- */}
            </div>
            {/* ---- Banner End ---- */}



            {/* ---- Vision Start ---- */}
            <div className="vision text-center d-none">
                <div>
                    <h1 className="title">
                        Our Vision
                    </h1>

                    <p className="description">
                        To empower businesses to achieve outcomes effortlessly, while making their journey toward success
                        easier at every step.
                    </p>

                </div>

                {/* <div className="lines"></div>

                <div>
                    <h1 className="title">
                        What <span>Drives Us</span>
                    </h1>

                    <p className="description">
                        We believe the future of data is AI-native - faster, smarter, and designed for every business. By blending expertise, innovation, and care, we help clear the path forward - making success inevitable and
                        the journey simple.
                    </p>

                    <div className="drives d-flex justify-content-center flex-wrap gap-3 gap-lg-4">
                        <div className="gradient-border me-4">
                            <div className="content">
                                We don’t just build infrastructure – we craft intelligence.
                            </div>
                        </div>

                        <div className="gradient-border">
                            <div className="content">
                                We don’t just implement services – we deliver measurable value.
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
            {/* ---- Vision End ---- */}


            {/* ---- Brands Start ---- */}
            <div className="brands text-center">
                <h1 className="title">
                    The Two Brands
                </h1>

                <p className="desc">
                    Navigating complexity. Clearing the path. Delivering results.
                </p>

                <p className="description">
                    At PATHSDATA, we bring together two powerful brands under one vision - transforming how businesses
                    harness data and AI, and making every step of the journey smarter, simpler, and inevitable.
                </p>

                <div className="drives row justify-content-center g-5 g-md-0">
                    <div className="col-xxl-5 col-lg-5 col-md-6">
                        <div className="box">
                            <div className="content d-flex flex-column">
                                <div className=''>
                                    <h3>Path<span>IQ</span></h3>

                                    <div className='shortdesc'>
                                        One copilot, endless flexibility — from
                                        your stack to our engine, Pathiq
                                        guides the way.
                                    </div>
                                </div>

                                <p>
                                    Design, orchestrate, and optimize your data and
                                    AI flow — with confidence and speed.
                                </p>

                                <div className="buttons position-relative top-1">
                                    <Link
                                        to="/pathiq"
                                        className="main-button book-btn discover-btn"
                                    >
                                        Learn More
                                        <img src={rightarrow} className='ms-2' />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-5 col-lg-5 col-md-6">
                        <div className="box">
                            <div className="content d-flex flex-column">
                                <div className=''>
                                    <h3>Waypoint</h3>

                                    <div className='shortdesc'>
                                        One partner, real expertise — guiding
                                        your data and AI journey with clarity
                                        and outcome-driven strategy.
                                    </div>
                                </div>

                                <p>
                                    From strategy to execution, Waypoint helps you overcome complexity and move with confidence.
                                </p>

                                <div className="buttons position-relative top-1">
                                    <Link
                                        to="/waypoint"
                                        className="main-button book-btn discover-btn"
                                    >
                                        Learn More
                                        <img src={rightarrow} className='ms-2' />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* ---- Square Start ---- */}
                <div className='squre s1'></div>
                <div className='squre s2'></div>
                <div className='squre s3'></div>
                <div className='squre s4'></div>
                {/* ---- Square End ---- */}
            </div>
            {/* ---- Brands End ---- */}


            {/* ---- Inevitable Start ---- */}
            {/* <div className="inevitable text-center">
                <h1 className="title">
                    Ready to Make Outcomes Inevitable?
                </h1>

                <p className="description pb-2">
                    Let’s talk about how we can help you move forward - smarter, simpler, and with confidence.
                </p>

                <p className="description">
                    Call Us:
                    <Link to="tel:+1 (555) 123‑4567">+1 (555) 123‑4567</Link>
                    <span className='mx-3'>|</span>

                    <br className='d-md-none' />

                    Email Us:
                    <Link to="mailto:contact@pathsdata.com">contact@pathsdata.com</Link>
                </p>

                <div className="buttons">
                    <Link
                        to="/turning-data"
                        className="main-button book-btn discover-btn me-sm-4 me-xl-5"
                    >
                        Book a Demo
                        <img src={rightarrow} className='ms-2' />
                    </Link>


                    <Link
                        to="/turning-data"
                        className="main-button book-btn discover-btn"
                    >
                        Speak to an Expert
                        <img src={rightarrow} className='ms-2' />
                    </Link>
                </div>

                <div className='squre s1'></div>
                <div className='squre s2'></div>
                <div className='squre s3'></div>
                <div className='squre s4'></div>
            </div> */}
            {/* ---- Inevitable End ---- */}


        </>
    )
}

export default Home;