import React from 'react'
import "./Pathiq.css"

import rightarrow from '../../../assets/images/home/right-arrow.png';
import logoicon from '../../../assets/images/logo-icon.png';
import bannerright from '../../../assets/images/banner-right.png';
import whypathdata from '../../../assets/images/why_pathdata.png';
import turningright from '../../../assets/images/turning-right.png';
import aws_left from '../../../assets/images/aws_left.png';
import aws_right from '../../../assets/images/aws_right.png';
import powerby_1 from '../../../assets/images/powerby_1.png';
import powerby_2 from '../../../assets/images/powerby_2.png';
import powerby_3 from '../../../assets/images/powerby_3.png';
import powerby_4 from '../../../assets/images/powerby_4.png';
import whyrightarrow from '../../../assets/images/why-right-arrow.png';

import { Link } from 'react-router-dom';

const Pathiq = () => {
    return (
        <>

            {/* ---- Banner Start ---- */}
            <div className="turning_banner sub text-center">
                <div className="left">
                    <p className="description f">
                        <span>PATHIQ</span> by PATHSDATA
                    </p>

                    <h1 className="title">
                        Your AI Data Copilot.
                    </h1>

                    <div className="buttons position-relative">
                        <Link
                            to="/contact-us"
                            className="main-button book-btn discover-btn"
                        >
                            Contact Us
                            <img src={rightarrow} className='ms-2' />
                        </Link>
                    </div>
                </div>

                <section className='company'>
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
                </section>



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


            {/* ---- Banner Start ---- */}
            <div className="new_banner turningdata d-none">
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-3 mb-lg-0">
                        <div className="left">
                            <h1 className="title">
                                Empower your teams to achieve
                                {/* <br className='d-none d-md-block' /> */}
                                business outcomes, effortlessly
                                {/* <br className='d-none d-md-block' /> */}
                                and at scale
                            </h1>

                            <p className="description">
                                PATHSDATA is the AI-native platform where your AI Copilot intelligently orchestrates your entire data, ML, and AI lifecycle. It understands your business goals and automates complex workflows, allowing you to execute seamlessly on your existing stack—or our blazing-fast, Rust-native PathsData Engine for a performance boost.
                            </p>

                            <div className="buttons">
                                <Link
                                    to="/contact-us"
                                    className="main-button book-btn discover-btn"
                                >
                                    Contact Us
                                    <img src={rightarrow} className='ms-2' />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-5 mt-lg-0">
                        <div className="right d-flex justify-content-center justify-content-lg-end">
                            <div className='logo'>
                                <img src={turningright} alt="Logo" className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>



                {/* ---- Square Start ---- */}
                {/* <div className='squre s1'></div>
                <div className='squre s2'></div> */}
                <div className='squre s3'></div>
                <div className='squre s4'></div>
                <div className='squre s5'></div>
                <div className='squre s6'></div>
                {/* ---- Square End ---- */}
            </div>
            {/* ---- Banner End ---- */}




            {/* ---- Key Features Start ---- */}
            <div className="brands sub text-center">
                <h1 className="title">
                    Key Features
                </h1>

                <p className="desc">
                    PATHSDATA: The Intelligent Core of Your Data & AI Operations.
                </p>

                <p className="description">
                    Here are the features that enable your team to build, manage, and scale with unprecedented speed and simplicity.
                </p>

                <div className="drives row justify-content-center g-5 g-md-5">
                    <div className="col-xxl-5 col-lg-5 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="content d-flex flex-column">
                                <div className='shortdesc'>
                                    <span>AI-Native Orchestration</span> Your
                                    <span>AI Copilot</span> automates complex
                                    workflows, from data lineage to dependency management, allowing
                                    you to build and manage robust
                                    pipelines with natural language
                                    instead of code.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-5 col-lg-5 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="content d-flex flex-column">
                                <div className='shortdesc'>
                                    <span>Universal Stack Connectivity</span> PathsData integrates seamlessly with your existing data lakes, warehouses, and ML platforms. You can choose to run on your infrastructure or on our high-performance, <span>Rust-native PathsData Engine</span> for maximum speed
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-5 col-lg-5 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="content d-flex flex-column">
                                <div className='shortdesc'>
                                    <span>Business Outcome-Driven</span> Every
                                    function is designed to deliver
                                    a tangible business result.
                                    Focus on defining the outcome,
                                    and our platform handles the
                                    tedious, technical work required
                                    to get there, faster.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-5 col-lg-5 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="content d-flex flex-column">
                                <div className='shortdesc'>
                                    <span>Rust-Powered Performance</span> Experience unparalleled efficiency and scalability.
                                    Our distributed compute engine,
                                    built on Rust, is engineered to handle
                                    even your most demanding data transformations and analytical
                                    workloads with blazing speed.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ---- Key Features End ---- */}


            <div className="lines turningdata"></div>


            {/* ---- Why-Pathdata Start ---- */}
            <div className="why_pathdata sub">
                <div className="text-center">

                    <h1 className="title">
                        Why PATHSDATA?
                    </h1>

                    <p className="description">
                        The data landscape is cluttered with tools, but your business needs outcomes. We cut through the complexity by transforming how you approach data, ML, and AI.
                    </p>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <div className="content">
                            <h5 className="title">
                                The Old Way
                            </h5>

                            <ul>
                                <li>
                                    <div className="que">
                                        <span className='me-2'>
                                            {/* 🡪 */}
                                            <img src={whyrightarrow} alt="" />
                                        </span> 
                                        Brittle, Manual Pipelines</div>

                                    <p className='ans'>Hours spent writing and maintaining complex YAML and brittle scripts.</p>
                                </li>
                                <li>
                                    <div className="que">
                                        <span className='me-2'>
                                            {/* 🡪 */}
                                            <img src={whyrightarrow} alt="" />
                                        </span> 
                                        Slow Time-to-Insight</div>
                                    <p className='ans'>Getting from an idea to a deployable model takes weeks, not hours.</p>
                                </li>
                                <li>
                                    <div className="que">
                                        <span className='me-2'>
                                            {/* 🡪 */}
                                            <img src={whyrightarrow} alt="" />
                                        </span> 
                                        Silos and Complexity</div>
                                    <p className='ans'>Engineers are isolated, and leaders are disconnected from the data that drives their decisions.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="content">
                            <h5 className="title">
                                The Pathsdata Way
                            </h5>

                            <ul>
                                <li>
                                    <div className="que">
                                        <span className='me-2'>
                                            {/* 🡪 */}
                                            <img src={whyrightarrow} alt="" />
                                        </span> 
                                        AI-Powered Orchestration</div>

                                    <p className='ans'>Your <span>AI Copilot</span> handles the complexity, letting you focus on the outcome.</p>
                                </li>
                                <li>
                                    <div className="que">
                                        <span className='me-2'>
                                            {/* 🡪 */}
                                            <img src={whyrightarrow} alt="" />
                                        </span> 
                                        Accelerated Outcomes</div>
                                    <p className='ans'>Go from idea to production in minutes, not weeks. The power of our AI Copilot delivers this speed on <span>your existing stack</span> or with a supercharged boost from our <span>Rust-native engine</span>.</p>
                                </li>
                                <li>
                                    <div className="que">
                                        <span className='me-2'>
                                            {/* 🡪 */}
                                            <img src={whyrightarrow} alt="" />
                                        </span> 
                                        Unified & Collaborative</div>
                                    <p className='ans'>PathsData intelligently connects your teams and tools, enabling effortless collaboration across your entire data and AI lifecycle. </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* ---- Why-Pathdata End ---- */}

        </>
    )
}

export default Pathiq;
