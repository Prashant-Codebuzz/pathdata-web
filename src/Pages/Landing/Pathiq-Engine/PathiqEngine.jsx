import React from 'react'


import rightarrow from '../../../assets/images/home/right-arrow.png';
import logoicon from '../../../assets/images/logo-icon.png';
import bannerright from '../../../assets/images/banner-right.png';
import whypathdata from '../../../assets/images/why_pathdata.png';
import turningright from '../../../assets/images/turning-right.png';
import aws_left from '../../../assets/images/aws_left.png';
import aws_right from '../../../assets/images/aws_right.png';
import company1 from '../../../assets/images/home/company1-2.png';
import company2 from '../../../assets/images/home/company2-2.png';
import company3 from '../../../assets/images/home/company3-2.png';
import company4 from '../../../assets/images/home/company4-2.png';
import company5 from '../../../assets/images/home/company5-2.png';
import powerby_1 from '../../../assets/images/powerby_1.png';
import powerby_2 from '../../../assets/images/powerby_2.png';
import powerby_3 from '../../../assets/images/powerby_3.png';
import powerby_4 from '../../../assets/images/powerby_4.png';
import featureicon1 from '../../../assets/images/home/feature-icon1-2.png';
import featureicon2 from '../../../assets/images/home/feature-icon2-2.png';
import featureicon3 from '../../../assets/images/home/feature-icon3-2.png';
import featureicon4 from '../../../assets/images/home/feature-icon4-2.png';
import featureicon5 from '../../../assets/images/home/feature-icon5-2.png';
import featureicon6 from '../../../assets/images/home/feature-icon6-2.png';
import whyrightarrow from '../../../assets/images/why-right-arrow.png';
import { Link } from 'react-router-dom';


const PathiqEngine = () => {

    return (
        <>

            {/* ---- Banner Start ---- */}
            <div className="turning_banner sub engine text-center">
                <div className="left">
                    <p className="description f">
                        The New Dataplace for
                        <br className='' />

                        <div>
                            All Your Data Needs.
                        </div>
                    </p>

                    <h1 className="title">
                        Reclaim control of your data with confidence. Secure, seamless, and built to empower you every step of the way.
                    </h1>

                    <div className="buttons position-relative">
                        <Link
                            to="/contact-us"
                            className="main-button book-btn discover-btn me-sm-4 me-xl-5"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>

                <section className='company d-none'>
                    <div className="container text-center">
                        {/* <h5 className="text-white">Trusted by 30+ Companies</h5> */}

                        <div className="slider-container">
                            <div className='images d-flex flex-wrap justify-content-center align-items-center'>
                                <img src={company1} alt="Company 1" className="company-logo img-fluid" />
                                <img src={company2} alt="Company 2" className="company-logo img-fluid" />
                                <img src={company3} alt="Company 3" className="company-logo img-fluid" />
                                <img src={company4} alt="Company 4" className="company-logo img-fluid" />
                                <img src={company5} alt="Company 5" className="company-logo img-fluid" />
                            </div>
                        </div>
                    </div>
                </section>

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


            {/* ---- Key Features Start ---- */}
            <div className="brands sub text-center mb-5">
                <h1 className="title m-auto">
                    Features
                </h1>

                <p className="description">
                    Simple framework for your business that just works
                </p>

                <div className="drives row justify-content-center g-5 g-md-5">
                    <div className="col-xxl-6 col-lg-6 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="content d-flex flex-column">
                                <div className='text-start mb-3 mb-md-4'>
                                    <img src={featureicon1} alt="" className='img-fluid' />
                                </div>
                                <div className="title text-start">
                                    Rust-based
                                </div>

                                <div className='shortdesc'>
                                    The query engine in PATHADATA is built using Rust for performance, enabling low-latency, highly concurrent queries. Rust ensures memory safety and avoids garbage collection overhead, making it ideal for efficient processing at scale within the platform.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-lg-6 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="content d-flex flex-column">
                                <div className='text-start mb-3 mb-md-4'>
                                    <img src={featureicon2} alt="" className='img-fluid' />
                                </div>
                                <div className="title text-start">
                                    Unifying Analytic Platform
                                </div>

                                <div className='shortdesc'>
                                    PATHADATA serves as an integrated platform that unifies various data  sources (structured and unstructured). It  facilitates real-time and batch analytics,  streamlining workflows and enabling deep insights across all
                                    data sources.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-lg-6 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="content d-flex flex-column">
                                <div className='text-start mb-3 mb-md-4'>
                                    <img src={featureicon3} alt="" className='img-fluid' />
                                </div>
                                <div className="title text-start">
                                    Apache Data Fusion
                                </div>

                                <div className='shortdesc'>
                                    PATHADATA leverages Apache Data Fusion to integrate data sources seamlessly, offering a unified query layer. It enhances the scalability and performance of the query engine, allowing data teams to manage and transform large datasets
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-lg-6 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="content d-flex flex-column">
                                <div className='text-start mb-3 mb-md-4'>
                                    <img src={featureicon4} alt="" className='img-fluid' />
                                </div>
                                <div className="title text-start">
                                    Apache Iceberg
                                </div>

                                <div className='shortdesc'>
                                    PATHADATA uses Apache Iceberg for handling large, high-volume datasets in a transactional manner. Iceberg ensures atomic operations and allows schema evolution, making it ideal for maintaining consistent and reliable datasets on
                                    the platform.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-lg-6 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="content d-flex flex-column">
                                <div className='text-start mb-3 mb-md-4'>
                                    <img src={featureicon5} alt="" className='img-fluid' />
                                </div>
                                <div className="title text-start">
                                    Standalone and Distributed
                                </div>

                                <div className='shortdesc'>
                                    PATHADATA works as a standalone system for smaller tasks
                                    or seamlessly scales across nodes for larger data volumes.
                                    Its advanced query engine ensures fast, reliable
                                    performance, whether on a single machine or multiple
                                    cloud instances.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-lg-6 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="content d-flex flex-column">
                                <div className='text-start mb-3 mb-md-4'>
                                    <img src={featureicon6} alt="" className='img-fluid' />
                                </div>
                                <div className="title text-start">
                                    Cloud Support
                                </div>

                                <div className='shortdesc'>
                                    PATHADATA is fully compatible with cloud environments, offering managed services for easy deployment. Whether using AWS, Azure, or GCP, your platform scales automatically, ensuring optimized resource allocation and minimal operational overhead.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ---- Key Features End ---- */}

        </>
    )
}

export default PathiqEngine;