import React, { useState } from 'react'
import './Waypoint.css';

import rightarrow from '../../../assets/images/home/right-arrow.png';
import logoicon from '../../../assets/images/logo-icon.png';
import bannerright from '../../../assets/images/banner-right.png';
import whypathdata from '../../../assets/images/why_pathdata.png';
import turningright from '../../../assets/images/turning-right.png';
import aws_left from '../../../assets/images/aws_left.png';
import aws_right from '../../../assets/images/aws_right.png';

import { Link } from 'react-router-dom';

const Waypoint = () => {

    const AWSData = [
        {
            title: "Cloud Architecture & Migration",
            intro: "We build secure, scalable, and resilient AWS environments tailored to your goals.",
            content: [
                "Architect AWS infrastructure aligned with best practices.",
                "Seamlessly migrate legacy workloads with minimal downtime.",
                "Optimize cost, performance, and compliance with the Well-Architected Framework.",
            ],
        },
        {
            title: "Modern Data Platforms & Analytics",
            intro: "We unlock the power of your data through governed, scalable pipelines.",
            content: [
                "Design and build data lakes, warehouses, and lakehouses using AWS Glue, EMR, Redshift, Lake Formation, and S3.",
                "Enable business intelligence and real-time analytics with QuickSight and OpenSearch.",
                "Implement data governance to keep your data clean, secure, and trusted.",
            ],
        },
        {
            title: "Machine Learning & Generative AI",
            intro: "We bring intelligence to your business with production-ready AI — powered by AWS.",
            content: [
                "Train, tune, and deploy models on SageMaker — from classical ML to deep learning.",
                "Integrate Generative AI (via Bedrock or custom fine-tuned LLMs) into your workflows.",
                "Guide you through prompt engineering, model evaluation, and responsible AI.",
            ],
        },
        {
            title: "MLOps & Model Governance",
            intro: "We make sure your models stay robust, fair, and aligned with business needs over time.",
            content: [
                "Automate deployment with CI/CD pipelines and SageMaker Pipelines.",
                "Monitor, retrain, and optimize models in production.",
                "Ensure explainability, bias testing, and compliance.",
            ],
        },
    ];

    const [activeTab, setActiveTab] = useState(0);

    const handlePrev = () => {
        setActiveTab((prev) => (prev > 0 ? prev - 1 : AWSData.length - 1));
    };

    const handleNext = () => {
        setActiveTab((prev) => (prev < AWSData.length - 1 ? prev + 1 : 0));
    };



    return (
        <>

            {/* ---- Banner Start ---- */}
            <div className="turning_banner text-center">
                <div className="left">
                    <p className="description f">
                        <span>WAYPOINT</span> by PATHSDATA
                    </p>

                    <h1 className="title">
                        From vision to real-world impact.
                    </h1>

                    <p className="description">
                        Consulting that builds — not just advises.
                    </p>

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

                {/* ---- Vision Start ---- */}
                <div className="vision text-center">
                    <div>
                        <h1 className="title">
                            Every Idea Has a Story. We Help You Build It.
                        </h1>

                        <p className="description">
                            You have the vision.
                        </p>

                        <p className="description">
                            From cloud to AI, we turn your vision into scalable platforms, smarter products, and real outcomes.
                        </p>

                    </div>
                </div>
                {/* ---- Vision End ---- */}


                {/* ---- Square Start ---- */}
                <div className='squre s1'></div>
                <div className='squre s2'></div>
                <div className='squre s3'></div>
                <div className='squre s4'></div>
                {/* <div className='squre s5'></div>
                <div className='squre s6'></div> */}
                {/* ---- Square End ---- */}
            </div>
            {/* ---- Banner End ---- */}


            {/* ---- Banner Start ---- */}
            <div className="new_banner turningdata d-none">
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-3 mb-lg-0">
                        <div className="left">
                            <h1 className="title">
                                Every Idea Has a Story.
                                <br className='d-none d-md-block' />
                                We Help You Build It.
                            </h1>

                            <p className="description">
                                You have the vision. <br />
                                From cloud to AI, we turn your vision into scalable <br className='d-none d-md-block' />
                                platforms, smarter products, and real outcomes.
                            </p>

                            {/* <div className="buttons">
                                <Link
                                    to="/contact-us"
                                    className="main-button book-btn discover-btn"
                                >
                                    Contact Us
                                    <img src={rightarrow} className='ms-2' />
                                </Link>
                            </div> */}
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


            {/* ---- Content End ---- */}
            <div className="vision turningdata text-center">
                <div>
                    <p className="description">
                        At <span>PATHSDATA</span>, we walk alongside you on this journey - helping you <span>design, build, and scale your Data, Cloud, Machine Learning, and Generative AI initiatives</span>, entirely on AWS. From laying the foundation of a modern data platform to deploying cutting-edge AI models in production, we help transform your data into real-world business outcomes.
                    </p>

                    <div className="drives d-flex flex-column gap-3 gap-lg-4">
                        <div className="gradient-border">
                            <div className="content">
                                We don’t just build infrastructure - we craft intelligence.
                            </div>
                        </div>

                        <div className="gradient-border">
                            <div className="content">
                                We don’t just implement services - we deliver measurable value.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ---- Content End ---- */}

            <div className="lines turningdata"></div>


            {/* ---- AWS-Service Start ---- */}
            <div className="aws_service">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h2 className="title mb-0">What We Do – On AWS</h2>

                    <div className="d-none d-md-block">
                        <button onClick={handlePrev} className="me-4 bg-transparent">
                            <img src={aws_left} className='img-fluid' />
                        </button>
                        <button onClick={handleNext} className=" bg-transparent">
                            <img src={aws_right} className='img-fluid' />
                        </button>
                    </div>
                </div>

                <div className="aws-wrapper">
                    <div className="aws-tabs d-flex flex-wrap">
                        {AWSData?.map((tab, index) => (
                            <div
                                key={index}
                                className={`aws-tab ${index === activeTab ? 'active' : ''}`}
                                onClick={(e) => {
                                    setActiveTab(index);

                                    if (window.innerWidth < 768) {

                                        const tabElement = e.currentTarget;
                                        const container = tabElement.parentElement;

                                        const tabRect = tabElement.getBoundingClientRect();
                                        const containerRect = container.getBoundingClientRect();

                                        const offset =
                                            tabRect.left -
                                            containerRect.left -
                                            containerRect.width / 2 +
                                            tabRect.width / 2;

                                        container.scrollBy({
                                            left: offset,
                                            behavior: 'smooth',
                                        });

                                    }
                                }}
                            >
                                {tab.title}
                            </div>
                        ))}

                    </div>

                    <div className="aws-content-section">
                        <div className="aws-content">
                            <p className="aws-intro t">
                                {AWSData[activeTab].intro}
                            </p>
                            <ul className="aws-list list-unstyled">
                                {AWSData[activeTab].content.map((item, idx) => (
                                    <li key={idx} className="aws-intro">{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* ---- AWS-Service End ---- */}




            {/* ---- Why-Pathdata Start ---- */}
            <div className="why_pathdata">

                <div className="row">
                    <div className="col-lg-8 col-md-8">
                        <div className="right">
                            <h1 className="title">
                                Why PATHSDATA
                            </h1>

                            <p className="description">
                                We Bring It All Together.
                            </p>

                            <ul>
                                <li>
                                    <p className='description'>Deep AWS-certified expertise in cloud and data.</p>
                                </li>
                                <li>
                                    <p className='description'>Advanced skills in model design, deployment, and governance.</p>
                                </li>
                                <li>
                                    <p className='description'>A clear focus on business outcomes, not just technology.</p>
                                </li>
                                <li>
                                    <p className='description'>Responsible AI baked into everything we deliver.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


                {/* <div className='text-center'>
                    <p className="description mb-4">
                        We don’t just set up AWS services - we orchestrate them to deliver value at scale.
                    </p>

                    <p className='description mt-0'>
                        We don’t just deploy models - we design the right models, for your data, your business, your future.
                    </p>
                </div> */}
            </div>
            {/* ---- Why-Pathdata End ---- */}



            {/* ---- Inevitable Start ---- */}
            <div className="inevitable turningdata text-center">
                <h1 className="title">
                    Let’s Build Your Data Story - Together.
                </h1>

                <p className="description pb-2">
                    Your data has the power to drive smarter decisions, unlock new opportunities, and create meaningful impact.
                    Let PATHSDATA help you get there - with AWS as the foundation, and intelligence at the core.
                </p>

                <h1 className="title mt-4">
                    Speak to an AWS & AI Expert Today.
                </h1>

                <p className="description">
                    Call Us:
                    <Link to="tel:+1 (555) 123‑4567"> +1 (555) 123‑4567</Link>
                    <span className='mx-3'>|</span>

                    <br className='d-md-none' />

                    Email Us:
                    <Link to="mailto:contact@pathsdata.com"> contact@pathsdata.com</Link>
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
            {/* ---- Inevitable End ---- */}

        </>
    )
}

export default Waypoint;





