import React, { useState } from 'react'
import everystep from '../../../assets/images/every-step.png';
import stage from '../../../assets/images/stage.png';
import focusareas from '../../../assets/images/focus-areas.png';
import engineering from '../../../assets/images/engineering.png';
import technology from '../../../assets/images/technology.png';
import { Link } from 'react-router-dom';

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

    return (
        <>

            {/* ---- Banner Start ---- */}
            <div className="turning_banner wd text-center">
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
            <div className="brands sub waypoint startup-program wd text-center">
                <p className="description mb-4">
                    Who’s Eligible?
                </p>

                <p className='short-description mx-auto'>Our program is designed for startups that are ready to move fast and scale intelligently.</p>

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
            {/* ----Who’s-Eligible? End ---- */}


            {/* ---- Step Start ---- */}
            <div className="step">
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
                <div className="step-tabs d-flex flex-wrap">
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
                    {/* {ProgramJourney?.map((i, index) => {
                        return ( */}
                    <div className="col-12">
                        <div className="box h-100">
                            <div className="num">
                                {activeProgram + 1}
                            </div>
                            <div className="title">
                                {ProgramJourney[activeProgram]?.title}
                            </div>
                            <div className="description">
                                <div className='mb-2'>
                                    {ProgramJourney[activeProgram]?.description}
                                </div>

                                {
                                    ProgramJourney[activeProgram]?.list?.length > 0 &&
                                    <ul className=''>
                                        {ProgramJourney[activeProgram]?.list?.map((i) => (
                                            <li>{i}</li>
                                        ))}
                                    </ul>
                                }
                            </div>
                        </div>
                    </div>
                    {/* )
                    })} */}
                </div>
            </div>
            {/* ---- Step End ---- */}


            <div className="brands sub waypoint startup-program text-center py-5">
                <h1 className="title m-auto">
                    Program Outcomes
                </h1>

                <p className="description">
                    Outcome of Startup
                </p>

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

            <div className="brands sub waypoint startup-program text-center ">
                <h1 className="title m-auto">
                    Product Consulting
                </h1>

                <p className="description">
                    Building With Purpose
                </p>

                <p className='short-description mb-3 mb-lg-4'>
                    At PATHSDATA, we help founders shape their product and company strategy from the ground up.
                </p>

                <p className='short-description mb-3 mb-lg-4'>
                    Our focus is on aligning technology with business goals, clarifying direction, and building a strong foundation for scalable growth.
                </p>

                <p className='short-description'>
                    We don’t replace your product or design teams — we empower them with the right guidance, frameworks, and technical insight to move faster and smarter.
                </p>
            </div>




            <div className="copyright contact text-center" style={{ backgroundImage: 'none' }}>
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
                        className="main-button book-btn discover-btn wd mt-0"
                    >
                        Book a Call
                    </Link>
                </div>

            </div>

        </>
    )
}

export default StartupProgram;