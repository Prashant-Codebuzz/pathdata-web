import React, { useEffect, useRef, useState } from 'react'
import './Waypoint.css';

import rightarrow from '../../../assets/images/home/right-arrow.png';
import logoicon from '../../../assets/images/logo-icon.png';
import bannerright from '../../../assets/images/banner-right.png';
import whypathdata from '../../../assets/images/why_pathdata.png';
import turningright from '../../../assets/images/turning-right.png';
import aws_left from '../../../assets/images/aws_left.png';
import aws_right from '../../../assets/images/aws_right.png';
import everystep from '../../../assets/images/every-step.png';

import finance from '../../../assets/images/finance.png';
import healthcare from '../../../assets/images/healthcare.png';
import telecommunications from '../../../assets/images/telecommunications.png';
import manufacturing from '../../../assets/images/manufacturing.png';
import setusleft from '../../../assets/images/setus-left.png';
import setusright from '../../../assets/images/right-left.png';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";


import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "react-responsive";

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


    const isMobile = useMediaQuery({ maxWidth: 576 });
    const isTablet = useMediaQuery({ minWidth: 577, maxWidth: 991 });
    const isLaptop = useMediaQuery({ minWidth: 992, maxWidth: 1199 });

    const slidesToShow = isMobile ? 1 : isTablet ? 1 : isLaptop ? 2.3 : 3;

    const SetsUSData = [

        {
            title: "Every Project is Crafted Like a Product",
            desc: " At Waypoint by PATHSDATA, we don’t just deliver tools — we design and build solutions like products. Each project is treated with care, precision, and dedication, ensuring it’s scalable, adaptable, and built for long-term impact",
        },
        {
            title: "Simplifying Complex Journeys, Delivering Real Outcomes",
            desc: " We take you from vision to reality, simplifying even the most complex challenges. With a focus on outcomes at every step, our solutions are designed to drive measurable business results, not just technical implementations."
        },
        {
            title: "Cost-Conscious, Outcome-Driven",
            desc: " We understand the importance of efficiency. Every solution is optimized to maximize value while minimizing costs, ensuring that your investment drives meaningful, long-term business success."
        },
        {
            title: "Built on Ethical Principles",
            desc: "  At Waypoint by PATHSDATA, ethics are at the core of everything we do. From AI to cloud platforms, we prioritize transparency, fairness, and accountability in every solution we build, ensuring responsible practices and trustworthy systems across all our offerings."
        },
        {
            title: "AWS Experts, Delivering Scalable Solutions",
            desc: " As AWS-certified experts, we leverage the power of AWS to build modern, scalable platforms that seamlessly integrate into your business. From architecture to deployment, our team ensures optimized performance and long-term success with AWS solutions, aligning every detail with your strategic goals for sustainable growth."
        }
    ];


    const [activeIndex, setActiveIndex] = useState(0);

    const sliderRef = React.useRef(null);

    const settings = {
        centerMode: true,
        // centerPadding: "0px",
        // slidesToShow: 3,
        centerPadding: isMobile ? "20px" : isTablet ? "80px" : isLaptop ? "40px" : "0px",
        slidesToShow,
        slidesToScroll: 1,
        infinite: true,
        speed: 500,
        arrows: false,
        beforeChange: (current, next) => setActiveIndex(next),
        // responsive: [
        //     {
        //         breakpoint: 1200, // large tablets / small laptops
        //         settings: { slidesToShow: 2, centerPadding: "40px" }
        //     },
        //     {
        //         breakpoint: 992,
        //         settings: { slidesToShow: 1, centerPadding: "200px" }
        //     },
        //     {
        //         breakpoint: 899,
        //         settings: { slidesToShow: 1, centerPadding: "100px" }
        //     },
        //     {
        //         breakpoint: 576,
        //         settings: { slidesToShow: 1, centerPadding: "20px" }
        //     },
        //     {
        //         breakpoint: 475,
        //         settings: { slidesToShow: 1, centerPadding: "20px" }
        //     }
        // ]

    };


    // const scrollRef = useRef(null);
    // const [activeIndex, setActiveIndex] = useState(1); // center one

    // const scrollToCard = (index) => {
    //     const container = scrollRef.current;
    //     const cards = container.querySelectorAll('.col-xxl-4');
    //     const card = cards[index];

    //     if (card && container) {
    //         // const offsetLeft = card.offsetLeft;
    //         // const containerWidth = container.clientWidth;
    //         // const scrollLeft = offsetLeft - containerWidth / 2 + card.clientWidth / 2;

    //         // container.scrollTo({ left: scrollLeft, behavior: 'smooth' });

    //         const offsetLeft = card.offsetLeft;
    //         const containerWidth = container.clientWidth;
    //         const scrollLeft = offsetLeft - containerWidth / 2 + card.clientWidth / 2;

    //         container.scrollTo({
    //             left: scrollLeft,
    //             behavior: 'smooth',
    //         });


    //         setActiveIndex(index);
    //     }
    // };

    // const handleScrollPrev = () => {
    //     if (activeIndex > 0) scrollToCard(activeIndex - 1);
    // };

    // const handleScrollNext = () => {
    //     const total = scrollRef.current.querySelectorAll('.box').length;
    //     if (activeIndex < total - 1) scrollToCard(activeIndex + 1);
    // };

    // useEffect(() => {
    //     scrollToCard(activeIndex);
    // }, []);



    return (
        <>

            {/* ---- Banner Start ---- */}
            <div className="turning_banner w text-center">
                <div className="left">
                    <p className="description f">
                        Waypoint
                        <br className='' />

                        <div>
                            by PATHSDATA.
                        </div>
                    </p>

                    <h1 className="title">
                        From strategy to production - we turn cloud, data, and AI ideas into outcomes.
                    </h1>

                    <div className="buttons position-relative">
                        <Link
                            to="/contact-us"
                            className="main-button book-btn discover-btn"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>

                {/* ---- Vision Start ---- */}
                <div className="vision text-center">
                    <div>
                        <h1 className="title">
                            We Don’t Just Advise. We Build.
                        </h1>

                        <p className="description">
                            At <span className="px-2">Waypoint by PATHSDATA,</span> we partner with visionary companies to turn complex
                            ideas into scalable, intelligent platforms - entirely on <span className="px-2">AWS.</span> From laying the foundation
                            of a modern data platform to deploying production-ready AI and ML models, we bring
                            deep technical execution aligned to real business impact.
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

            {/* ---- Key Features Start ---- */}
            <div className="brands sub waypoint text-center d-none ">
                <h1 className="title m-auto">
                    Every Step of the Way
                </h1>

                <p className="description">
                    Building with You. Delivering for You. Every Step of the Way.
                </p>

                <div className="drives row justify-content-center g-4 g-md-4">
                    <div className="col-xxl-6 col-lg-5 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="content d-flex flex-column">
                                <img src={everystep} alt="" className='every-step img-fluid' />

                                <div className="title text-start">
                                    Data Engineering & Cloud Platforms
                                </div>

                                <div className='shortdesc'>
                                    Design and implement modern, scalable cloud-native data platforms - from data lakes to real-time pipelines. We ensure your data is always available, reliable, and analytics-ready.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-lg-5 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="content d-flex flex-column">
                                <img src={everystep} alt="" className='every-step img-fluid' />

                                <div className="title text-start">
                                    Business Intelligence & Analytics
                                </div>

                                <div className='shortdesc'>
                                    Turn raw data into actionable insights with dashboards, reporting systems, and KPI frameworks that empower decision-makers across your organization.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xxl-6 col-lg-5 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="content d-flex flex-column">
                                <img src={everystep} alt="" className='every-step img-fluid' />

                                <div className="title text-start">
                                    AI & Machine Learning
                                </div>

                                <div className='shortdesc'>
                                    From predictive modeling to deep learning, we build, train, and deploy models that unlock business value - tailored to your
                                    data and workflows.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-lg-5 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="content d-flex flex-column">
                                <img src={everystep} alt="" className='every-step img-fluid' />

                                <div className="title text-start">
                                    Generative AI & LLM Solutions
                                </div>

                                <div className='shortdesc'>
                                    Implement secure and private Generative AI systems using Large Language Models (LLMs) for chatbots, document intelligence, summarization, and internal knowledge systems.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-lg-5 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="content d-flex flex-column">
                                <img src={everystep} alt="" className='every-step img-fluid' />

                                <div className="title text-start">
                                    MLOps & AI DevOps
                                </div>

                                <div className='shortdesc'>
                                    Operationalize your ML models with scalable pipelines, version control, monitoring, and CI/CD - from notebooks to production with confidence.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-lg-5 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="content d-flex flex-column">
                                <img src={everystep} alt="" className='every-step img-fluid' />

                                <div className="title text-start">
                                    Strategy, Advisory & Cost Optimization
                                </div>

                                <div className='shortdesc'>
                                    Not sure where to start? We assess your AI/data maturity, design roadmaps, and help you optimize cloud and data infrastructure for performance and cost
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="step waypoint pb-5 pb-md-2 pb-lg-0">
                <div className="row g-5">
                    <div className="col-lg-4 col-md-6 d-block d-md-none">
                        <div className="intro">
                            <h1 className="title">
                                Every Step of the Way
                            </h1>

                            <p className="description">
                                Building with You. <br className='d-none d-md-block' />
                                Delivering for You. <br className='d-none d-md-block' />
                                Every Step of the Way.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="box h-100">
                            <div className="title pt-0">
                                Data & Analytics
                                Platforms
                            </div>
                            <div className="description">
                                We turn your data into products. From data lakes and data warehouses to ETL pipelines, dashboards, and analytics tools, we ensure your data is reliable, accessible, and ready for insights. Our end-to-end solutions help teams make smarter decisions faster, providing a
                                solid foundation for analytics, AI, and business growth.
                            </div>

                            <Link
                                to="/waypoint/data-analytics-platforms"
                                className="main-button book-btn discover-btn new mt-auto learn_more"
                            >
                                Learn more
                                <img src={rightarrow} className='ms-2' />
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 d-none d-md-block">
                        <div className="intro h-100">
                            <h1 className="title">
                                Every Step of the Way
                            </h1>

                            <p className="description">
                                Building with You. <br />
                                Delivering for You. <br />
                                Every Step of the Way.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="box h-100">
                            <div className="title pt-0">
                                AI, Machine Learning,
                                AI Ops & MLOps
                            </div>
                            <div className="description">
                                We create AI solutions that work in the real world. From predictive models to advanced automation, we make AI scalable, reliable,
                                and easy to integrate into your business processes. With AI Ops and MLOps best practices, we ensure your AI products are production-ready, monitored, and
                                continuously improving.
                            </div>
                            <Link
                                to="/waypoint/ai-machine-learning-ai-ops-mlops"
                                className="main-button book-btn discover-btn new mt-auto learn_more"
                            >
                                Learn more
                                <img src={rightarrow} className='ms-2' />
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="box h-100">
                            <div className="title pt-0">
                                Generative AI &
                                LLM Solutions
                            </div>
                            <div className="description">
                                We build intelligent AI products that understand and generate content. Using Large Language Models (LLMs), we develop chatbots, document summarizers, and knowledge assistants that help teams work faster and smarter. Our solutions are secure, enterprise-ready, and designed to augment workflows.
                            </div>
                            <Link
                                to="/waypoint/generative-al-llm-solutions"
                                className="main-button book-btn discover-btn new mt-auto learn_more"
                            >
                                Learn more
                                <img src={rightarrow} className='ms-2' />
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="box h-100">
                            <div className="title pt-0">
                                IT & Product
                                Engineering
                            </div>
                            <div className="description">
                                We design and build technology products
                                from idea to deployment. This includes
                                cloud architecture, software integration, platform development, and product enablement—ensuring your digital initiatives are robust, scalable, and aligned with
                                business goals.
                            </div>
                            <Link
                                to="/waypoint/it-product-engineering"
                                className="main-button book-btn discover-btn new mt-auto learn_more"
                            >
                                Learn more
                                <img src={rightarrow} className='ms-2' />
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="box h-100">
                            <div className="title pt-0">
                                Strategy &
                                Advisory
                            </div>
                            <div className="description">
                                We help companies turn ideas into actionable technology strategies. By assessing your
                                data, AI, and IT capabilities, we design roadmaps that guide your product, platform, and AI investments, helping you prioritize initiatives and accelerate digital transformation.
                            </div>
                            <Link
                                to="/waypoint/strategy-advisory"
                                className="main-button book-btn discover-btn new mt-auto learn_more"
                            >
                                Learn more
                                <img src={rightarrow} className='ms-2' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* ---- Key Features End ---- */}


            {/* ---- Industry-Experience Start ---- */}
            <div className="brands sub waypoint s text-center">
                <h1 className="title m-auto">
                    Industry Experience
                </h1>

                <p className="description">
                    Our team brings not just technical depth, but real-world domain knowledge in
                </p>

                <div className="drives row justify-content-center g-5 g-md-5">
                    <div className="col-xxl-3 col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="content d-flex flex-column">
                                <div>
                                    <img src={finance} alt="" className='img-fluid' />
                                </div>

                                <div className="title m-auto">
                                    Finance
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="content d-flex flex-column">
                                <div>
                                    <img src={healthcare} alt="" className='img-fluid' />
                                </div>

                                <div className="title m-auto">
                                    Healthcare
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="content d-flex flex-column">
                                <div>
                                    <img src={telecommunications} alt="" className='img-fluid' />
                                </div>

                                <div className="title m-auto">
                                    Telecommunications
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="content d-flex flex-column">
                                <div>
                                    <img src={manufacturing} alt="" className='img-fluid' />
                                </div>

                                <div className="title m-auto">
                                    Manufacturing
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ---- Industry-Experience End ---- */}



            {/* ---- Sets-Us Start ---- */}
            <div className="brands sub setsus  text-center">
                <h1 className="title m-auto">
                    Sets Us
                </h1>

                <p className="description">
                    What Sets Us Apart
                </p>

                <div className="carousel-wrapper position-relative">
                    <div
                        className="drives row justify-content-center g-5 g-md-5"
                    >

                        <Slider ref={sliderRef} {...settings}>
                            {SetsUSData?.map((item, index) => (
                                <div key={index} >
                                    <div className={`box ${activeIndex === index ? 'active' : 'inactive'}`} >
                                        <div className="content d-flex flex-column">
                                            <div className="title m-auto">{item.title}</div>
                                            <div className="shortdesc text-center">{item.desc}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>


                    </div>
                </div>

                <div className='d-flex justify-content-center gap-4 gap-md-5'>
                    <button
                        className="left-arrow"
                        // onClick={handleScrollPrev}
                        onClick={() => sliderRef.current.slickPrev()}
                    >
                        <img src={setusleft} alt="" className='img-fluid' />
                    </button>

                    <button
                        className="right-arrow"
                        // onClick={handleScrollNext}
                        onClick={() => sliderRef.current.slickNext()}
                    >
                        <img src={setusright} alt="" className='img-fluid' />
                    </button>
                </div>

            </div>
            {/* ---- Sets-Us End ---- */}






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
            <div className="vision turningdata text-center d-none">
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

            {/* <div className="lines turningdata"></div> */}


            {/* ---- AWS-Service Start ---- */}
            <div className="aws_service d-none">
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
            <div className="why_pathdata d-none">

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
            <div className="inevitable turningdata text-center d-none">
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





