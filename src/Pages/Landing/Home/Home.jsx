import React from 'react'
import './Home.css';

import rightarrow from '../../../assets/images/home/right-arrow.png';
import logoicon from '../../../assets/images/logo-icon.png';
import bannerright from '../../../assets/images/banner-right.png';
import company1 from '../../../assets/images/home/company1.png';
import company2 from '../../../assets/images/home/company2.png';
import company3 from '../../../assets/images/home/company3.png';
import company4 from '../../../assets/images/home/company4.png';
import ourvision1 from '../../../assets/images/ourvision1.png';
import ourvision2 from '../../../assets/images/ourvision2.png';
import ourvision3 from '../../../assets/images/ourvision3.png';
import ourvision4 from '../../../assets/images/ourvision4.png';
import ourvision5 from '../../../assets/images/ourvision5.png';
import pathiq from '../../../assets/images/pathiq.png';
import waypoint from '../../../assets/images/waypoint.png';
import redirect from '../../../assets/images/redirect.png';

import { Link, useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();

    return (
        <>

            {/* ---- Banner Start ---- */}
            <div className="new_banner">
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-7 col-xl-6">
                        <div className="left text-center">
                            {/* <Link>
                                <div className='logo'>
                                    <img src={logoicon} alt="Logo" />
                                </div>
                            </Link> */}

                            <h1 className="title">
                                Simplify the Journey.
                                <br className='' />

                                <span>
                                    Empower the Outcome.
                                </span>
                            </h1>

                            <p className="description">
                                Pathsdata transforms complexity into clarity - <br className='d-none d-md-block' />
                                helping you move forward with confidence.
                            </p>

                            <div className="buttons">
                                <Link
                                    // to=""
                                    className="main-button book-btn discover-btn"
                                >
                                    Contact Us
                                </Link>

                                {/* <Link
                                    to="/turning-data"
                                    className="main-button book-btn discover-btn me-sm-4 me-xl-5"
                                >
                                    Book a Demo
                                    <img src={rightarrow} className='ms-2' />
                                </Link> */}


                                {/* <Link
                                    to="/turning-data"
                                    className="main-button book-btn discover-btn"
                                >
                                    Speak to an Expert
                                    <img src={rightarrow} className='ms-2' />
                                </Link> */}
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-lg-5 col-xl-6">
                        <div className="right d-flex justify-content-center justify-content-lg-end mt-5 mt-xl-0">
                            <div className='logo'>
                                <img src={bannerright} alt="Logo" className='img-fluid' />
                            </div>
                        </div>
                    </div> */}
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
                            Why PATHSDATA Born
                        </h1>

                        <p className="description">
                            A strategic technology partner delivering <span className='px-2'>real-world business</span> impact through
                            premium consulting and AI solution.
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



            {/* ---- Step Start ---- */}
            <div className="step">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="box">
                            <div className="num">
                                1
                            </div>
                            <div className="title">
                                Born from the Real
                                Struggle
                            </div>
                            <div className="description">
                                PATHSDATA wasn’t born in a boardroom — it came from real-world frustration: too many tools, no alignment, wasted effort. We’ve lived it — that’s why we built a better way.
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="box">
                            <div className="num">
                                2
                            </div>
                            <div className="title">
                                Experience Over
                                Explanation
                            </div>
                            <div className="description">
                                We don’t overpromise or overcomplicate. We let people feel the difference —through clarity in our approach, honesty in our conversations, and calm in the chaos.

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="box">
                            <div className="num">
                                3
                            </div>
                            <div className="title">
                                A Journey Brand, Not a
                                Transaction Brand
                            </div>
                            <div className="description">
                                We’re not here to sell and disappear. PATHSDATA walks with you — as a partner, not a vendor. Our impact lasts because
                                we build trust, not transactions.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ---- Step End ---- */}



            {/* ---- Vision Start ---- */}
            <div className="vision s text-center ">
                <div>
                    <h1 className="title">
                        Our Vision
                    </h1>

                    <p className="description s">
                        To empower businesses to achieve outcomes <br />
                        <span>
                            effortlessly, while making their journey toward <br />
                            success easier at every step.
                        </span>
                    </p>


                    <div className='images d-flex gap-4 flex-wrap justify-content-center align-items-center'>
                        <img src={ourvision1} alt="" className="company-logo img-fluid" />
                        <img src={ourvision2} alt="" className="company-logo img-fluid" />
                        <img src={ourvision5} alt="" className="company-logo img-fluid" />
                        <img src={ourvision3} alt="" className="company-logo img-fluid" />
                        <img src={ourvision4} alt="" className="company-logo img-fluid" />
                    </div>
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
            <div className="brands">
                <h1 className="title">
                    The Two Brands
                </h1>

                <div className="row justify-content-between">

                    <div className="col-lg-6">
                        <p className="desc">
                            Navigating complexity. <br />
                            Clearing the path. Delivering <br />
                            results.
                        </p>
                    </div>
                    <div className="col-lg-4 text-center text-lg-end">
                        <p className="description">
                            At PATHSDATA, we bring together two powerful brands under one vision - transforming how   businesses
                            harness data and AI, and making every step of
                            the journey smarter, simpler, and inevitable.
                        </p>
                    </div>
                </div>

                <div className="drives row justify-content-center g-5 g-md-0">
                    <div className="col-xxl-6 col-lg-5 col-md-6">
                        <div className="box">
                            <div className="content d-flex flex-column">
                                <div className=''>
                                    <img src={pathiq} alt="" className='img-fluid' />
                                </div>

                                <h3>Path<span>IQ</span></h3>

                                <p>
                                    One copilot, endless flexibility - from your stack to our engine, Pathiq guides the way. Design, orchestrate,
                                    and optimize your data and AI flow -
                                    with confidence and speed.
                                </p>

                                <button type='button' className='bg-transparent border-0' onClick={() => navigate('/pathiq')}>
                                    <img src={redirect} alt="" className='img-fluid' />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-lg-5 col-md-6">
                        <div className="box">
                            <div className="content d-flex flex-column">
                                <div className=''>
                                    <img src={waypoint} alt="" className='img-fluid' />
                                </div>

                                <h3>Waypoint</h3>

                                <p>
                                    One partner, real expertise - guiding your data and AI journey with clarity and outcome-driven strategy. From strategy to execution, Waypoint helps you overcome complexity and move with confidence.
                                </p>

                                <button type='button' className='bg-transparent border-0' onClick={() => navigate('/waypoint')}>
                                    <img src={redirect} alt="" className='img-fluid' />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


                {/* ---- Square Start ---- */}
                {/* <div className='squre s1'></div>
                <div className='squre s2'></div>
                <div className='squre s3'></div>
                <div className='squre s4'></div> */}
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