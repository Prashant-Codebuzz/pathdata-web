import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import './Home.css';
import review1 from '../../../assets/images/home/review1.png';
import review2 from '../../../assets/images/home/review2.png';
import review3 from '../../../assets/images/home/review3.png';
import rightarrow from '../../../assets/images/home/right-arrow.png';
import bannericon1 from '../../../assets/images/home/banner-i1.png';
import bannericon2 from '../../../assets/images/home/banner-i2.png';
import bannericon3 from '../../../assets/images/home/banner-i3.png';
import company1 from '../../../assets/images/home/company1.png';
import company2 from '../../../assets/images/home/company2.png';
import company3 from '../../../assets/images/home/company3.png';
import company4 from '../../../assets/images/home/company4.png';
import feature1 from '../../../assets/images/home/feature-icon1.png';
import feature2 from '../../../assets/images/home/feature-icon2.png';
import feature3 from '../../../assets/images/home/feature-icon3.png';
import feature4 from '../../../assets/images/home/feature-icon4.png';
import feature5 from '../../../assets/images/home/feature-icon5.png';
import WhyQuestion from '../../../assets/images/home/why.png';
import Logo from '../../../assets/images/home/logo.png';
import { Axios } from '../../../helper/Axios';
import { toast } from 'react-toastify';

const initialState = {
    firstname: "",
    lastname: "",
    work_email: "",
    organization: "",
    message: ""
}

const Home = () => {

    const [searchParams] = useSearchParams();

    const [loading, setLoading] = useState(false);
    const [contact, setContact] = useState(initialState);


    useEffect(() => {
        const sectionId = searchParams.get('scrollTo');
        if (sectionId) {
            const el = document.getElementById(sectionId);
            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({ behavior: 'smooth' });
                }, 300);
            }
        }
    }, [searchParams]);


    const handleChange = (e) => {
        const { name, value } = e.target;

        setContact((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        const payload = {
            first_name: contact.firstname,
            last_name: contact.lastname,
            work_email: contact.work_email,
            organization: contact.organization,
            message: contact.message
        }

        try {
            const res = await Axios.post("/auth/contact_us", payload, {
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (res?.data?.statusCode === 200) {
                toast.success(res?.data?.message);
                setContact(initialState);
            }
            else {
                toast.error(res?.data?.message);
            }
        } catch (err) {
            console.error("Error Contact-Us++", err);
        } finally {
            setLoading(false);
        }
    }


    return (
        <>
            {/* ---- Banner Start ---- */}
            <section className='banner'>
                <div className="container text-center">
                    <div className="d-none reviews d-flex justify-content-center align-items-center">
                        <img
                            src={review1}
                            alt="Review 1"
                            className="review-avatar img-fluid"
                        />
                        <img
                            src={review2}
                            alt="Review 2"
                            className="review-avatar img-fluid"
                        />
                        <img
                            src={review3}
                            alt="Review 3"
                            className="review-avatar img-fluid"
                        />
                        <span className='ms-3 me-1'>200+</span>
                        Reviews
                    </div>

                    <h1 className="title">
                        {/* Your Data. One Platform. Zero Bottlenecks. */}
                        PATHSDATA - Fast, Smart, <br className='d-none d-md-block' />
                        Scalable Data Insights
                    </h1>

                    <p className="description">
                        {/* PathsData lets you run fast without sacrificing your data architecture since it is meant for high-throughput environments with low-latency. */}
                        PATHSDATA is an AI-native, high-performance data platform built for cloud-native environments. It handles batch workloads, real-time streaming, and complex transformations with ease. Get fast, scalable results across any data pipeline.
                    </p>

                    <div className="buttons">
                        <Link
                            to="https://app.usemotion.com/meet/dhruvil-shah-hqvx/meeting"
                            target='_blank'
                            className="main-button discover-btn"
                        >
                            Book a Demo
                            <img src={rightarrow} className='ms-2' />
                        </Link>

                        {/* <button type='button' className="main-button">
                            Learn More
                        </button> */}
                    </div>
                </div>

                {/* ---- Company Start ---- */}
                {/* <section className='mt-5 company'>
                    <div className="d-none container text-center">
                        <h5 className="text-white">Trusted by 30+ companies</h5>

                        <div className="slider-container">
                            <div className='images d-flex justify-content-center align-items-center flex-wrap'>
                                <img src={company1} alt="Company 1" className="company-logo" />
                                <img src={company2} alt="Company 2" className="company-logo" />
                                <img src={company3} alt="Company 3" className="company-logo" />
                                <img src={company4} alt="Company 4" className="company-logo" />
                                <img src={company4} alt="Company 5" className="company-logo" />
                            </div>
                        </div>
                    </div>
                </section> */}
                {/* ---- Company End ---- */}


                {/* ---- Content Start ---- */}
                <section className='mt-5 content'>
                    <div className="row g-4">
                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="box d-flex">
                                <div className="icon me-3">
                                    <img src={bannericon1} alt="" className='' />
                                </div>
                                <div className="info">
                                    <div className="name">AI-Powered Querying</div>
                                    <p>
                                        Ask questions in plain language or use SQL to query your data—no code required for business users.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="box d-flex">
                                <div className="icon me-3">
                                    <img src={bannericon2} alt="" className='' />
                                </div>
                                <div className="info">
                                    <div className="name">Distributed Data Processing</div>
                                    <p>
                                        Handle large-scale data efficiently, from batch jobs to real-time
                                        analytics.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="box d-flex">
                                <div className="icon me-3">
                                    <img src={bannericon3} alt="" className='' />
                                </div>
                                <div className="info">
                                    <div className="name">Kubernetes-Native</div>
                                    <p>
                                        Scale effortlessly across cloud-native infrastructure for seamless deployment
                                        and management.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ---- Content End ---- */}


                {/* ---- Square Start ---- */}
                <div className='squre s1'></div>
                <div className='squre s2'></div>
                <div className='squre s3'></div>
                <div className='squre s4'></div>
                <div className='squre s5'></div>
                <div className='squre s6'></div>
                {/* ---- Square End ---- */}
            </section>
            {/* ---- Banner End ---- */}



            {/* ---- Company Start ---- */}
            {/* <section className='company'>
                <div className="container text-center">
                    <h5 className="text-white">Trusted by 30+ companies</h5>

                    <div className="slider-container">
                        <div className='images d-flex justify-content-center align-items-center'>
                            <img src={company1} alt="Company 1" className="company-logo" />
                            <img src={company2} alt="Company 2" className="company-logo" />
                            <img src={company3} alt="Company 3" className="company-logo" />
                            <img src={company4} alt="Company 4" className="company-logo" />
                            <img src={company5} alt="Company 5" className="company-logo" />
                        </div>
                    </div>
                </div>
            </section> */}
            {/* ---- Company End ---- */}



            {/* ---- Feature Start ---- */}
            <section className='features' id="features">
                <div className="container text-center">
                    <h5 className="text-white">Key Features</h5>

                    <h1 className="title text-white">
                        {/* Simple framework for your business
                        <br className='d-none d-md-block' />
                        that just works */}

                        Everything you need to work smarter, faster, and more efficiently, all in <span>one platform.</span>
                    </h1>

                    <p className="description text-white">
                        Discover the unique features designed to enhance your experience. From innovative solutions to user-friendly functionality, we ensure every detail
                        is crafted with your needs in mind.
                    </p>
                </div>

                <div className="info row g-5 justify-content-center">
                    <div className="col-12 col-sm-6 col-lg-4">
                        <div className="box h-100">
                            <div className='icon'>
                                <img src={feature1} alt="" className='img-fluid' />
                            </div>
                            <div className="title">
                                Rust-Powered Performance
                            </div>
                            <p>
                                High-speed processing and low-latency execution for large datasets.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4">
                        <div className="box h-100">
                            <div className='icon'>
                                <img src={feature2} alt="" className='img-fluid' />
                            </div>
                            <div className="title">
                                LLM-Integrated Querying
                            </div>
                            <p>
                                Ask in natural language and let PATHSDATA convert them into optimized queries.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4">
                        <div className="box h-100">
                            <div className='icon'>
                                <img src={feature3} alt="" className='img-fluid' />
                            </div>
                            <div className="title">
                                Cloud-Native Integration
                            </div>
                            <p>
                                Native support for AWS S3, Iceberg, MinIO, and many other popular data storage solutions.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4">
                        <div className="box h-100">
                            <div className='icon'>
                                <img src={feature4} alt="" className='img-fluid' />
                            </div>
                            <div className="title">
                                Kubernetes-Native
                            </div>
                            <p>
                                Scale effortlessly using Helm and Kubernetes-based orchestration.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4">
                        <div className="box h-100">
                            <div className='icon'>
                                <img src={feature5} alt="" className='img-fluid' />
                            </div>
                            <div className="title">
                                Python & Rust SDKs
                            </div>
                            <p>
                                Developer-friendly APIs to embed smart data
                                workflows.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* ---- Feature End ---- */}



            {/* ---- Company Start ---- */}
            <section className='company'>
                <div className="container text-center">
                    <h5 className="text-white">Powered By</h5>

                    <div className="slider-container">
                        <div className='images d-flex justify-content-center align-items-center flex-wrap'>
                            <img src={company1} alt="Company 1" className="company-logo img-fluid" />
                            <img src={company2} alt="Company 2" className="company-logo img-fluid" />
                            <img src={company3} alt="Company 3" className="company-logo img-fluid" />
                            <img src={company4} alt="Company 4" className="company-logo img-fluid" />
                        </div>
                    </div>
                </div>
            </section>
            {/* ---- Company End ---- */}



            {/* ---- Why Start ---- */}
            <section className="why">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="left">
                            <div className="top">
                                <h3>Why PATHSDATA?</h3>
                                <p>Effortless Data Access & Insights for Everyone</p>
                            </div>
                            <div className="second">
                                <div className='content d-flex'>
                                    <div className="icon me-3">
                                        <img src={WhyQuestion} alt="" className='' />
                                    </div>
                                    <div className='info'>
                                        <div className="title">For Technical Teams</div>
                                        <p>Write powerful SQL queries, execute complex data transformations, and run real-time analytics on large-scale datasets with high efficiency.</p>
                                    </div>
                                </div>
                                <div className='content d-flex'>
                                    <div className="icon me-3">
                                        <img src={WhyQuestion} alt="" className='' />
                                    </div>
                                    <div className='info'>
                                        <div className="title">For Business Teams </div>
                                        <p>Use natural language to query your data and get instant, actionable insights—no coding required.
                                        </p>
                                    </div>
                                </div>
                                <div className='content d-flex'>
                                    <div className="icon me-3">
                                        <img src={WhyQuestion} alt="" className='' />
                                    </div>
                                    <div className='info'>
                                        <div className="title">For AI Teams</div>
                                        <p>Streamline access to clean, structured data for AI and machine learning workflows, enabling accurate and timely model training.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 d-none d-lg-block">
                        <div className="right">

                            <div className="round1">
                                <div className="round2">
                                    <div className="round3">
                                        <div className="icon">
                                            <img src={Logo} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
            {/* ---- Why End ---- */}



            {/* ---- Workflow Start ---- */}
            <div className="workflow text-center">
                <div className="content">

                    <h1>Optimized for the Modern Data Workflow</h1>

                    <p>Seamless integration into any cloud-native setup—multi-cloud, hybrid, or on-prem—with Kubernetes-<br />native orchestration, auto-scaling, and zero-downtime upgrades.</p>

                    <Link
                        to="/sign-in"
                        // target='_blank'
                        className="main-button workflow_btn"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
            {/* ---- Workflow End ---- */}




            {/* ---- Contact Start ---- */}
            <section className='contact' id="contact">
                <div className="container text-center">
                    <h5 className="text-white">Contact us</h5>

                    <h1 className="title text-white">
                        {/* Book a demo today */}
                        Ready to Experience?
                    </h1>

                    <p className="description">
                        {/* We’re all ears! Talk to us about your needs, and we’ll provide the best possible solution. */}
                        Book a demo today to see how our AI-native, Kubernetes-ready platform can supercharge your data workflows.
                    </p>
                </div>

                <div className="contact-form">
                    <form className="row" onSubmit={handleSubmit}>
                        <div className='col-lg-6 group'>
                            <label htmlFor="firstname" className='mb-2'>
                                First Name
                            </label>
                            <input
                                type="text"
                                name="firstname"
                                id="firstname"
                                placeholder='Your first name'
                                // autoComplete='off'
                                value={contact.firstname}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className='col-lg-6 group'>
                            <label htmlFor="lastname" className='mb-2'>
                                Last Name
                            </label>
                            <input
                                type="text"
                                name="lastname"
                                id="lastname"
                                placeholder='Your last name'
                                // autoComplete='off'
                                value={contact.lastname}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className='col-lg-6 group'>
                            <label htmlFor="work_email" className='mb-2'>
                                Work email
                            </label>
                            <input
                                type="email"
                                name="work_email"
                                id="work_email"
                                placeholder='Enter work email'
                                // autoComplete='off'
                                value={contact.work_email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className='col-lg-6 group'>
                            <label htmlFor="organization" className='mb-2'>
                                Organization name
                            </label>
                            <input
                                type="text"
                                name="organization"
                                id="organization"
                                placeholder='Your organization name'
                                // autoComplete='off'
                                value={contact.organization}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className='col-lg-12 group'>
                            <label htmlFor="message" className='mb-2'>
                                How can we help you?
                            </label>
                            <textarea
                                type="text"
                                name="message"
                                id="message"
                                placeholder='Enter short message'
                                // autoComplete='off'
                                value={contact.message}
                                onChange={handleChange}
                                required
                                style={{ height: "200px" }}
                            />
                        </div>

                        <div className="text-center submit">
                            <button
                                type='submit'
                                className={`main-button submitreq-btn ${loading ? 'loading' : ''}`}
                                disabled={loading}
                            >
                                {loading ? (
                                    <>
                                        <span
                                            className="me-2 spinner-border spinner-border-sm"
                                            role="status"
                                            aria-hidden="true"
                                            style={{ width: '18px', height: '18px' }}
                                        ></span>
                                    </>
                                ) : (
                                    "Book a Demo Now"
                                )}

                                {/* Submit request */}
                            </button>
                        </div>
                    </form>
                </div>
            </section>
            {/* ---- Contact End ---- */}

        </>
    )
}

export default Home;