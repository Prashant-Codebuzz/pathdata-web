import React, { useState } from 'react'
import everystep from '../../../assets/images/every-step.png';
import stage from '../../../assets/images/stage.png';
import focusareas from '../../../assets/images/focus-areas.png';
import engineering from '../../../assets/images/engineering.png';
import technology from '../../../assets/images/technology.png';
import consulting1 from '../../../assets/images/consulting1.png';
import consulting2 from '../../../assets/images/consulting2.png';
import consulting3 from '../../../assets/images/consulting3.png';
import consulting4 from '../../../assets/images/consulting4.png';
import consulting5 from '../../../assets/images/consulting5.png';
import startupsliderright from '../../../assets/images/startup-slider-right.png';
import { Link } from 'react-router-dom';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from 'react-responsive';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const StartupProgram = () => {

    const [activeProgram, setActiveProgram] = useState(0);

    const ProgramJourney = [
        {
            name: "1. Program Eligibility",
            title: "Program Eligibility",
            description: "We begin by confirming your startup’s stage, focus area, and readiness for AI-driven growth. This ensures we tailor the program to your specific needs.",
            list: [
                "Confirm stage & focus",
                "Validate startup readiness"
            ]
        },
        {
            name: "2. Application",
            title: "Application",
            description: "A simple, streamlined application captures the essentials: your team, business problem, technology stack, and goals.",
            list: [
                "Quick online form"
            ]
        },
        {
            name: "3. Discovery & Use Case Workshop",
            title: "Discovery & Use Case Workshop",
            description: "An interactive session with our experts to map your business challenges to AI-driven solutions. We define measurable success metrics to ensure your investment drives results.",
            list: [
                "Workshop with founders",
                "Map business problem → Gen AI / Agentic AI / Data solution",
                "Define success criteria"
            ]
        },
        {
            name: "4. Proof of Concept (POC)",
            title: "Proof of Concept (POC)",
            description: "Within 2–4 weeks, we help you build a quick-win prototype that demonstrates the impact of AI agents, LLM-powered applications, or intelligent data pipelines. AWS credits and demo delivery are included.",
            list: [
                "Rapid 2–4 week build",
                "Quick - win prototype(AI agents, LLM apps, intelligent pipelines)",
                "AWS credits + demo delivery"
            ]
        },
        {
            name: "5. Future State Planning",
            title: "Future State Planning",
            description: "We guide you in designing a scalable architecture roadmap that ensures your AI & agent-based solutions can grow efficiently. Cost optimization, governance, security, and compliance are all included.",
            list: [
                "Scalable architecture roadmap",
                "Total cost of ownership estimates & optimization",
                "Governance, security & compliance guidance"
            ]
        },
        {
            name: "6. Close Out & Next Steps",
            title: "Close Out & Next Steps",
            description: "Your POC results are delivered with a clear AWS adoption plan. We also connect you to AWS Activate, VC networks, and explore long-term partnership opportunities.",
            list: [
                "POC results + AWS adoption plan",
                "Connect to AWS Activate & VC networks",
                "Long - term partnership discussion"
            ]
        },
    ];


    const isMobile = useMediaQuery({ maxWidth: 576 });
    const isTablet = useMediaQuery({ minWidth: 577, maxWidth: 991 });
    const isLaptop = useMediaQuery({ minWidth: 992, maxWidth: 1199 });
    const isDesktop = useMediaQuery({ minWidth: 1200, maxWidth: 1399 });

    const slidesToShow = isMobile ? 1 : isTablet ? 1 : isLaptop ? 2.3 : isDesktop ? 3 : 3.5;

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

    const sliderRef = React.useRef(null);

    const settings = {
        // centerMode: true,
        // centerPadding: "0px",
        // slidesToShow: 3,
        centerPadding: isMobile ? "20px" : isTablet ? "80px" : isLaptop ? "40px" : "0px",
        slidesToShow,
        slidesToScroll: 1,
        infinite: false,
        speed: 500,
        arrows: false,
    };



    const owlSettings = {
        // items: 3.5, // slidesToShow
        loop: false,
        margin: 0,
        nav: false,
        dots: false,
        autoplay: false,
        smartSpeed: 500,
        // responsive: {
        //     0: { items: 1 },
        //     577: { items: 1 },
        //     992: { items: 2.3 },
        //     1200: { items: 3 },
        //     1400: { items: 3.5 }
        // },
        responsive: {
            0: {
                items: 1,
                // stagePadding: 20
            },
            577: {
                items: 1,
                // stagePadding: 40
            },
            767: {
                items: 1.5,
                stagePadding: 40
            },
            992: {
                items: 2,
                stagePadding: 60   // looks like 2.3
            },
            1200: {
                items: 3,
                stagePadding: 50   // looks like 3.3
            },
            1400: {
                items: 3,
                stagePadding: 120  // looks like 3.5
            }
        }
        // onaChanged: (event) => setActiveIndex(event.item.index)
    };


    return (
        <>

            {/* ---- Banner Start ---- */}
            {/* <div className="turning_banner wd text-center">
                <div className="left">
                    <p className="description f">
                        PATHSDATA
                        <br />

                        <div>
                            Startup Program.
                        </div>
                    </p>

                    <h1 className="title">
                        Helping Pre-Seed to Series B Startups Accelerate with Generative AI, Agentic AI, and Data/ML Solutions on AWS
                    </h1>
                </div>

                <div className='squre s1'></div>
                <div className='squre s2'></div>
                <div className='squre s3'></div>
                <div className='squre s4'></div>
                <div className='squre s5'></div>
                <div className='squre s6'></div>
            </div> */}

            <div className="new_banner">
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-8 col-xl-8">
                        <div className="left text-center">
                            <h1 className="title">
                                PATHSDATA
                                <br className='' />

                                <span>
                                    Startup Program.
                                </span>
                            </h1>

                            <p className="description">
                                Helping Pre-Seed to Series B Startups Accelerate with Generative AI, <br className='d-none d-md-block' />
                                Agentic AI, and Data/ML Solutions on AWS
                            </p>

                            <div className="buttons">
                                <Link
                                    to="/contact-us"
                                    className="main-button book-btn discover-btn"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ---- Vision Start ---- */}
                <div className="vision text-center">
                    <div>
                        <h1 className="title">
                            Who’s Eligible?
                        </h1>

                        <p className="description">
                            Our program empowers <span className="px-2">startups to accelerate growth</span> and scale with smart, sustainable strategies.
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



            {/* ----Who’s-Eligible? Start ---- */}
            <div className="brands sub waypoint startup-program wd text-center d-none">
                {/* <p className="description mb-4">
                    Who’s Eligible?
                </p>

                <p className='short-description mx-auto'>Our program is designed for startups that are ready to move fast and scale intelligently.</p> */}

                <div className="drives row justify-content-center g-4 g-md-4">
                    <div className="col-xxl-3 col-lg-4 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="content">
                                <div className='text-center'>
                                    <img src={stage} alt="" className='img-fluid' />
                                </div>

                                <div className="title m-auto">
                                    Stage
                                </div>

                                <div className='shortdesc text-center'>
                                    Pre-Seed →
                                    Series A/B
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-lg-4 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="content">
                                <div className='text-center'>
                                    <img src={focusareas} alt="" className='img-fluid' />
                                </div>

                                <div className="title m-auto">
                                    Focus Areas
                                </div>

                                <div className='shortdesc text-center'>
                                    Generative AI, Agentic
                                    AI, or Data/ML
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-lg-4 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="content">
                                <div className='text-center'>
                                    <img src={engineering} alt="" className='img-fluid' />
                                </div>

                                <div className="title m-auto">
                                    Engineering
                                    Orientation
                                </div>

                                <div className='shortdesc text-center'>
                                    Solving real-world
                                    AI-driven problems
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-lg-4 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="content">
                                <div className='text-center'>
                                    <img src={technology} alt="" className='img-fluid' />
                                </div>

                                <div className="title m-auto">
                                    Technology
                                </div>

                                <div className='shortdesc text-center'>
                                    Open to AWS-native
                                    solutions & rapid
                                    prototyping
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="step startup-program">
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6">
                        <div className="box h-100">
                            <div className='mb-4'>
                                <img src={stage} alt="" className='img-fluid' />
                            </div>
                            <div className="title">
                                Stage
                            </div>
                            <div className="description">
                                From Pre-Seed to Series A/B — fueling growth at every step.
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="box h-100">
                            <div className='mb-4'>
                                <img src={focusareas} alt="" className='img-fluid' />
                            </div>
                            <div className="title">
                                Focus Areas
                            </div>
                            <div className="description">
                                Generative AI, Agentic AI, and Data/ML innovation.
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="box h-100">
                            <div className='mb-4'>
                                <img src={engineering} alt="" className='img-fluid' />
                            </div>
                            <div className="title">
                                Engineering Orientation
                            </div>
                            <div className="description">
                                Building real-world solutions powered by AI.
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="box h-100">
                            <div className='mb-4'>
                                <img src={technology} alt="" className='img-fluid' />
                            </div>
                            <div className="title">
                                Technology
                            </div>
                            <div className="description">
                                Optimized for AWS-native tools & rapid prototyping.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ----Who’s-Eligible? End ---- */}


            {/* ---- How it Works  Start ---- */}
            {/* <div className="step">
                <div className="vision text-center">
                    <div>
                        <h1 className="title">
                            How it Works ?
                        </h1>

                        <p className="description">
                            Program Journey
                        </p>

                    </div>
                </div>
                <div className="step-tabs d-flex">
                    {ProgramJourney?.map((tab, index) => (
                        <button
                            className={`step-tab ${activeProgram === index ? "active" : ""}`}
                            onClick={() => setActiveProgram(index)}
                        >
                            {tab?.name}
                        </button>
                    ))}

                </div>
                <div className="row g-5">
                    <div className="col-12">
                        <div className="box h-100">
                            <div className="num">
                                {activeProgram + 1}
                            </div>
                            <div className="title">
                                {ProgramJourney[activeProgram]?.title}
                            </div>
                            <div className="description">
                                <div className='mb-2' style={{ lineHeight: '136%' }}>
                                    {ProgramJourney[activeProgram]?.description}
                                </div>

                                {
                                    ProgramJourney[activeProgram]?.list?.length > 0 &&
                                    <ul className=''>
                                        {ProgramJourney[activeProgram]?.list?.map((i) => (
                                            <li style={{ lineHeight: '136%' }}>{i}</li>
                                        ))}
                                    </ul>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* <div className="brands">
                <h1 className="title">
                    How it Works ?
                </h1>

                <div className="row justify-content-center justify-content-lg-between align-items-lg-end mb-2 mb-md-3 mb-lg-5">
                    <div className="col-lg-6 col-6 col-12">
                        <p className="desc text-center text-lg-start">
                            We’ve made the process <br className='d-none d-xxl-block' />
                            simple, so you can focus on<br className='d-none d-xxl-block' />
                            building — not bureaucracy.
                        </p>
                    </div>
                    <div className="col-lg-6 col-xl-5 col-xxl-4 col-6 col-12">
                        <p className="description text-center text-lg-end mb-lg-0">
                            From application to acceleration, here’s how we help your startup grow:
                        </p>
                    </div>
                </div>

                <div className="step startup p-0">
                    <Slider ref={sliderRef} {...settings}>
                        {ProgramJourney?.map((item, index) => (
                            <div key={index} className='d-flex align-items-center'>
                                <div className="box h-100">
                                    <div className="num">
                                        0{index + 1}.
                                    </div>
                                    <div className="title mb-0 px-0 border-0">
                                        {item?.title}
                                    </div>
                                    <div className="description pt-3">
                                        <div className='mb-2' style={{ lineHeight: '26px' }}>
                                            {item?.description}
                                        </div>

                                        {
                                            item?.list?.length > 0 &&
                                            <ul className='pt-3'>
                                                {item?.list?.map((i) => (
                                                    <li style={{ lineHeight: '26px' }}>{i}</li>
                                                ))}
                                            </ul>
                                        }
                                    </div>
                                </div>

                                {index !== ProgramJourney.length - 1 && (
                                    <div className="step-arrow mx-4">
                                        <img src={startupsliderright} alt="arrow" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </Slider>
                </div>
            </div> */}

            <div className="brands">
                <h1 className="title">
                    How it Works ?
                </h1>

                <div className="row justify-content-center justify-content-lg-between align-items-lg-end mb-2 mb-md-3 mb-lg-5">
                    <div className="col-lg-6 col-6 col-12">
                        <p className="desc text-center text-lg-start">
                            We’ve made the process <br className='d-none d-xxl-block' />
                            simple, so you can focus on<br className='d-none d-xxl-block' />
                            building — not bureaucracy.
                        </p>
                    </div>
                    <div className="col-lg-6 col-xl-5 col-xxl-4 col-6 col-12">
                        <p className="description text-center text-lg-end mb-lg-0">
                            From application to acceleration, here’s how we help your startup grow:
                        </p>
                    </div>
                </div>

                <div className="step startup p-0">
                    <OwlCarousel className='owl-theme'{...owlSettings}>
                        {ProgramJourney?.map((item, index) => (
                            <div key={index} className='d-flex align-items-center h-100'>
                                <div className="box h-100">
                                    <div className="num">
                                        0{index + 1}.
                                    </div>
                                    <div className="title mb-0 px-0 border-0 ms-0">
                                        {item?.title}
                                    </div>
                                    <div className="description pt-3">
                                        <div className='mb-2' style={{ lineHeight: '26px' }}>
                                            {item?.description}
                                        </div>

                                        {
                                            item?.list?.length > 0 &&
                                            <ul className='pt-3'>
                                                {item?.list?.map((i) => (
                                                    <li style={{ lineHeight: '26px' }}>{i}</li>
                                                ))}
                                            </ul>
                                        }
                                    </div>
                                </div>

                                {index !== ProgramJourney.length - 1 && (
                                    <div className="step-arrow mx-4">
                                        <img src={startupsliderright} alt="arrow" className='w-auto' />
                                    </div>
                                )}
                            </div>
                        ))}
                    </OwlCarousel>
                </div>
            </div>
            {/* <div className="step startup p-0">
                <Slider ref={sliderRef} {...settings}>
                    {ProgramJourney?.map((item, index) => (
                        <div key={index} >
                            <div className="box h-100">
                                <div className="num">
                                    0{index + 1}.
                                </div>
                                <div className="title">
                                    {item?.title}
                                </div>
                                <div className="description pt-3">
                                    <div className='mb-2' style={{ lineHeight: '26px' }}>
                                        {item?.description}
                                    </div>

                                    {
                                        item?.list?.length > 0 &&
                                        <ul className='pt-3'>
                                            {item?.list?.map((i) => (
                                                <li style={{ lineHeight: '26px' }}>{i}</li>
                                            ))}
                                        </ul>
                                    }
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div> */}
            {/* ---- How it Works  End ---- */}


            {/* ---- Product-Consulting Start ---- */}
            <div className="vision s startup-program text-center ">
                <div>
                    <h1 className="title">
                        Product Consulting
                    </h1>

                    <p className="description   s">
                        Building With Purpose
                    </p>

                    <p className="description   s">
                        At PATHSDATA, <span className="px-2">we help founders shape product and company</span> strategy, align technology with business goals, and build a foundation for scalable <br className='d-none d-block' />
                        <span>
                            growth. We empower your teams with guidance, frameworks, and insights to move faster and smarter.
                        </span>
                    </p>


                    <div className='images d-flex gap-2 gap-sm-3 gap-lg-4 flex-wrap justify-content-center align-items-center'>
                        <img src={consulting1} alt="" className="company-logo img-fluid" />
                        <img src={consulting2} alt="" className="company-logo img-fluid" />
                        <img src={consulting5} alt="" className="company-logo img-fluid" />
                        <img src={consulting3} alt="" className="company-logo img-fluid" />
                        <img src={consulting4} alt="" className="company-logo img-fluid" />
                    </div>
                </div>
            </div>
            {/* ---- Product-Consulting End ---- */}


            <div className="brands sub waypoint startup-program outcomes text-center pt-5 pb-0 mt-md-3 mt-lg-5 " style={{ backgroundImage: 'none' }}>
                <h1 className="title mx-auto ms-0">
                    Program Outcomes
                </h1>

                <p className="description ms-0">
                    The outcomes you can expect from this program.
                </p>
            </div>

            <div className="brands sub waypoint startup-program outcomes text-center py-3 py-md-5">

                <div className="drives row justify-content-center g-4 g-md-4">
                    <div className="col-xxl-4 col-lg-4 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="content d-flex flex-column">
                                <img src={everystep} alt="" className='every-step img-fluid' />

                                <div className="title text-start">
                                    Clarity
                                </div>

                                <div className='shortdesc'>
                                    A validated AI use case with measurable success criteriatied to business goals.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-lg-4 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="content d-flex flex-column">
                                <img src={everystep} alt="" className='every-step img-fluid' />

                                <div className="title text-start">
                                    Momentum
                                </div>

                                <div className='shortdesc'>
                                    A working prototype that proves value in weeks, not months.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xxl-4 col-lg-4 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="content d-flex flex-column">
                                <img src={everystep} alt="" className='every-step img-fluid' />

                                <div className="title text-start">
                                    Confidence
                                </div>

                                <div className='shortdesc'>
                                    A secure, scalable technical foundation aligned with best practices.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-lg-4 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="content d-flex flex-column">
                                <img src={everystep} alt="" className='every-step img-fluid' />

                                <div className="title text-start">
                                    Capability
                                </div>

                                <div className='shortdesc'>
                                    Teams equipped with the knowledge, tools, and playbooks to keep building.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-lg-4 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="content d-flex flex-column">
                                <img src={everystep} alt="" className='every-step img-fluid' />

                                <div className="title text-start">
                                    Vision
                                </div>

                                <div className='shortdesc'>
                                    A strategic roadmap that connects today’s prototype to tomorrow’s market impact.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-lg-4 col-md-6 col-sm-6">
                    </div>
                </div>
            </div>




            <div className="copyright contact startup text-center" style={{ backgroundImage: 'none' }}>
                <h1 className="title m-auto mb-4">
                    Contact us
                </h1>

                <p className=''>
                    <span>
                        Ready to Accelerate Your AI Startup?
                    </span>
                </p>

                <div className='description'>
                    PATHSDATA Startup Program: Fast, focused, and future-ready.
                </div>


                <div className='d-flex gap-3 flex-wrap justify-content-center d-sm-block pt-sm-4 '>
                    <Link
                        to="/application"
                        className="main-button book-btn discover-btn wd me-sm-3 me-md-4 me-lg-5 mt-0"
                    >
                        Apply Now
                    </Link>

                    <Link
                        to="/contact-us"
                        className="main-button book-btn discover-btn wd call mt-0"
                    >
                        Book a Call
                    </Link>
                </div>

            </div>

        </>
    )
}

export default StartupProgram;