import React from 'react'
import everystep from '../../../assets/images/every-step.png';
import stage from '../../../assets/images/stage.png';
import focusareas from '../../../assets/images/focus-areas.png';
import engineering from '../../../assets/images/engineering.png';
import technology from '../../../assets/images/technology.png';
import { Link } from 'react-router-dom';

const StartupProgram = () => {
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



            {/* ---- Key-Benefits Start ---- */}
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
            {/* ---- Key-Benefits End ---- */}


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