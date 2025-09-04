import React, { useRef, useState } from 'react'
import './WaypointDetails.css';

import Slider from 'react-slick';

import { Link, useParams } from 'react-router-dom';
import { useMediaQuery } from "react-responsive";

import finance from '../../../assets/images/finance.png';
import healthcare from '../../../assets/images/healthcare.png';
import telecommunications from '../../../assets/images/telecommunications.png';
import manufacturing from '../../../assets/images/manufacturing.png';
import setusleft from '../../../assets/images/setus-left.png';
import setusright from '../../../assets/images/right-left.png';
import everystep from '../../../assets/images/every-step.png';

const WaypointDetails = () => {

    const { name } = useParams();

    const isMobile = useMediaQuery({ maxWidth: 576 });
    const isTablet = useMediaQuery({ minWidth: 577, maxWidth: 991 });
    const isLaptop = useMediaQuery({ minWidth: 992, maxWidth: 1199 });

    const slidesToShow = isMobile ? 1 : isTablet ? 1 : isLaptop ? 2.3 : 3;

    const DeliverDataMap = {
        'data-analytics-platforms': [
            {
                title: "Comprehensive Data Architecture",
                desc: "We design and build cloud-native data platforms that scale with your business, optimized for both storage costs and query performance. Our architectures are built to handle everything from batch processing to real-time streaming analytics.",
            },
            {
                title: "Automated Data Pipelines",
                desc: "Our ETL/ELT pipeline development ensures automated data ingestion, transformation, and loading processes that maintain data freshness and quality. We build robust, self-healing pipelines that minimize manual intervention and maximize reliability."
            },
            {
                title: "Real-Time Analytics Capabilities",
                desc: "Process live data streams for immediate insights and alerts. We implement streaming analytics solutions that enable your business to respond to opportunities and issues as they happen, not after the fact."
            },
            {
                title: "Self-Service Analytics Tools",
                desc: "Interactive dashboards and reporting tools that empower business users to explore data independently. We create intuitive interfaces that make complex data accessible to non-technical stakeholders."
            },
            {
                title: "Data Governance Framework",
                desc: "Automated monitoring, cataloging, and quality assurance frameworks that ensure your data remains trustworthy and compliant with regulatory requirements."
            }
        ],
        'ai-machine-learning-ai-ops-mlops': [
            {
                title: "Custom AI Product Development",
                desc: "We build predictive models and AI systems tailored to your specific business challenges and data. Our approach focuses on creating AI products that solve real user problems and deliver measurable business value.",
            },
            {
                title: "Seamless AI Integration",
                desc: "We embed AI capabilities directly into your existing business processes and applications, ensuring smooth adoption and maximum impact. Our integration approach minimizes disruption while maximizing value.",
            },
            {
                title: "Production-Ready MLOps Infrastructure",
                desc: "Automated model training, validation, deployment, and monitoring pipelines that ensure your AI systems remain reliable and performant in production environments.",
            },
            {
                title: "Continuous AI Operations",
                desc: "Ongoing monitoring, drift detection, and model performance optimization that keeps your AI systems running smoothly and delivering consistent results over time.",
            },
            {
                title: "Scalable AI Architecture",
                desc: "Cloud-native solutions designed to handle varying workloads efficiently, scaling up during peak demands and optimizing costs during quieter periods.",
            },
        ],
        'generative-al-llm-solutions': [
            {
                title: "Intelligent Conversational AI",
                desc: "Sophisticated chatbots and virtual assistants that handle customer service, internal support, and expert knowledge queries with human-like understanding and response quality.",
            },
            {
                title: "Advanced Document Intelligence",
                desc: "Automated summarization, extraction, and analysis of complex documents that transform how your teams process and understand information.",
            },
            {
                title: "AI-Powered Content Generation",
                desc: "Intelligent writing assistance, marketing content creation, and technical documentation tools that maintain your brand voice while accelerating content production.",
            },
            {
                title: "Enterprise Knowledge Systems",
                desc: "AI-powered search and retrieval systems that make your entire organizational knowledge base instantly accessible and queryable in natural language.",
            },
            {
                title: "Custom LLM Solutions",
                desc: "Specialized models fine-tuned on your domain-specific data and requirements, delivering AI capabilities that understand your industry, processes, and terminology.",
            },
        ],
        'it-product-engineering': [
            {
                title: "Cloud Architecture Excellence",
                desc: "Scalable, secure, and cost-optimized cloud infrastructure designed to support your product vision. We architect solutions that grow with your business while maintaining performance and security standards.",
            },
            {
                title: "Full-Stack Product Development",
                desc: "Custom applications, APIs, and integrated systems that deliver seamless user experiences across all touchpoints. Our development approach focuses on creating cohesive products that users love.",
            },
            {
                title: "Platform Engineering Solutions",
                desc: "Developer experience platforms and internal tools that accelerate your team's productivity and enable faster, more reliable product delivery.",
            },
            {
                title: "Legacy System Modernization",
                desc: "Transform outdated systems into modern, scalable platforms without disrupting business operations. We specialize in gradual migrations that minimize risk while maximizing value.",
            },
            {
                title: "DevOps and Automation",
                desc: "Automated deployment pipelines, infrastructure as code, and continuous integration systems that ensure reliable, fast, and repeatable product releases.",
            },
        ],
        'strategy-advisory': [
            {
                title: "Comprehensive Digital Transformation Strategy",
                desc: "Strategic roadmaps that align your technology investments with business objectives, ensuring every initiative drives measurable value and competitive advantage.",
            },
            {
                title: "Data-Driven Investment Prioritization",
                desc: "Evidence-based frameworks that help you prioritize technology initiatives based on potential impact, resource requirements, and strategic alignment.",
            },
            {
                title: "AI and Product Readiness Assessment",
                desc: "Thorough evaluation of your organization's capability to implement and benefit from AI solutions, data platforms, and modern product development practices.",
            },
            {
                title: "Technology Architecture Strategy",
                desc: "Assessment of current systems with detailed recommendations for optimization, modernization, and future-state architecture design.",
            },
            {
                title: "Organizational Change Strategy",
                desc: "Plans to build the capabilities, processes, and culture needed to successfully execute your digital transformation initiatives.",
            },
        ],
    };

    const DeliverData = DeliverDataMap[name] || [];


    const [activeIndex, setActiveIndex] = useState(0);

    const sliderRef = useRef(null);

    const settings = {
        centerMode: true,
        // centerPadding: "0px",
        // slidesToShow: 3,
        centerPadding: isMobile ? "20px" : isTablet ? "80px" : isLaptop ? "40px" : "0px",
        slidesToShow,
        infinite: true,
        speed: 500,
        arrows: false,
        beforeChange: (current, next) => setActiveIndex(next),
        // responsive: [
        //     {
        //         breakpoint: 1200, // large tablets / small laptops
        //         settings: {
        //             slidesToShow: 2,
        //             centerPadding: "40px"
        //         }
        //     },
        //     {
        //         breakpoint: 992,
        //         settings: {
        //             slidesToShow: 1,
        //             centerPadding: "200px"
        //         }
        //     },
        //     {
        //         breakpoint: 899,
        //         settings: {
        //             slidesToShow: 1,
        //             centerPadding: "100px"
        //         }
        //     },
        //     {
        //         breakpoint: 576,
        //         settings: {
        //             slidesToShow: 1,
        //             centerPadding: "20px"
        //         }
        //     },
        //     {
        //         breakpoint: 475,
        //         settings: {
        //             slidesToShow: 1,
        //             centerPadding: "20px"
        //         }
        //     }
        // ]
    };


    return (
        <>

            {/* ---- Banner Start ---- */}
            <div className="turning_banner wd text-center">
                <div className="left">
                    <h1 className="title top">
                        {name === "data-analytics-platforms" && ('Data & Analytics Platforms')}
                        {name === "ai-machine-learning-ai-ops-mlops" && ('AI, Machine Learning, AI Ops & MLOps')}
                        {name === "generative-al-llm-solutions" && ('AI, Machine Learning, AI Ops & MLOps')}
                        {name === "it-product-engineering" && ('IT & Product Engineering')}
                        {name === "strategy-advisory" && ('Strategy & Advisory')}

                    </h1>

                    <p className="description f">
                        {name === "data-analytics-platforms" && (
                            <>
                                Transform Your Data Into
                                <br />

                                <div>
                                    Strategic Products.
                                </div>
                            </>
                        )}

                        {name === "ai-machine-learning-ai-ops-mlops" && (
                            <>
                                Create AI Solutions That Work
                                <br />

                                <div>
                                    in The Real World.
                                </div>
                            </>
                        )}

                        {name === "generative-al-llm-solutions" && (
                            <>
                                Build Intelligent AI Products That
                                <br />

                                <div>
                                    Understand and Generate Content.
                                </div>
                            </>
                        )}

                        {name === "it-product-engineering" && (
                            <>
                                Design and Build Technology
                                <br />

                                <div>
                                    Products from Idea to Deployment.
                                </div>
                            </>
                        )}


                        {name === "strategy-advisory" && (
                            <>
                                Turn Ideas Into Actionable
                                <br />

                                <div>
                                    Technology Strategies.
                                </div>
                            </>
                        )}
                    </p>

                    <h1 className="title">
                        {name === "data-analytics-platforms" && (
                            "We turn your data into products that drive real business value. From data lakes and data warehouses to ETL pipelines, dashboards, and analytics tools, we ensure your data is reliable, accessible, and ready for insights. Our end-to-end solutions help teams make smarter decisions faster, providing a solid foundation for analytics, AI, and business growth."
                        )}

                        {name === "ai-machine-learning-ai-ops-mlops" && (
                            "We create AI solutions that work in the real world. From predictive models to advanced automation, we make AI scalable, reliable, and easy to integrate into your business processes. With AI Ops and MLOps best practices, we ensure your AI products are production-ready, monitored, and continuously improving."
                        )}

                        {name === "generative-al-llm-solutions" && (
                            "We build intelligent AI products that understand and generate content using Large Language Models (LLMs). We develop chatbots, document summarizers, and nowledge assistants that help teams work faster and smarter. Our solutions are secure, enterprise-ready, and designed to augment workflows."
                        )}

                        {name === "it-product-engineering" && (
                            "We design and build technology products from idea to deployment. This includes cloud architecture, software integration, platform development, and product enablement-ensuring your digital initiatives are robust, scalable, and aligned with business goals."
                        )}

                        {name === "strategy-advisory" && (
                            "We help companies turn ideas into actionable technology strategies. By assessing your data, AI, and IT capabilities, we design roadmaps that guide your product, platform, and AI investments, helping you prioritize initiatives and accelerate digital transformation."
                        )}
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


            {/* ---- What-We-Deliver Start ---- */}
            <div className="brands sub setsus wd text-center">
                <p className="description">
                    What We Deliver
                </p>

                <div className="carousel-wrapper position-relative">
                    <div
                        className="drives row justify-content-center g-5 g-md-5"
                    >

                        <Slider ref={sliderRef} {...settings}>
                            {DeliverData?.map((item, index) => (
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
            {/* ---- What-We-Deliver End ---- */}


            {/* ---- Key-Benefits Start ---- */}
            <div className="brands sub waypoint wd text-center">
                <p className="description">
                    Key Benefits
                </p>

                <div className="drives row justify-content-center g-4 g-md-4">
                    {name === "data-analytics-platforms" && (
                        <>
                            <div className="col-xxl-6 col-lg-5 col-md-6 col-sm-6">
                                <div className="box">
                                    <div className="content d-flex flex-column">
                                        <img src={everystep} alt="" className='every-step img-fluid' />

                                        <div className="title text-start">
                                            Accelerated Time to Insights
                                        </div>

                                        <div className='shortdesc'>
                                            Transform your analytics timeline from weeks to hours with automated pipelines and pre-built analytics templates. Our solutions eliminate the traditional bottlenecks in data processing and analysis.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-lg-5 col-md-6 col-sm-6">
                                <div className="box">
                                    <div className="content d-flex flex-column">
                                        <img src={everystep} alt="" className='every-step img-fluid' />

                                        <div className="title text-start">
                                            Enhanced Data Quality
                                        </div>

                                        <div className='shortdesc'>
                                            Automated validation rules and continuous monitoring catch errors before they impact business decisions. We implement comprehensive data quality frameworks that ensure consistency across all data sources.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-lg-5 col-md-6 col-sm-6">
                                <div className="box">
                                    <div className="content d-flex flex-column">
                                        <img src={everystep} alt="" className='every-step img-fluid' />

                                        <div className="title text-start">
                                            Significant Cost Reduction
                                        </div>

                                        <div className='shortdesc'>
                                            Cloud-optimized architectures reduce infrastructure costs by up to 40% through intelligent resource allocation, automated scaling, and efficient storage strategies.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-lg-5 col-md-6 col-sm-6">
                                <div className="box">
                                    <div className="content d-flex flex-column">
                                        <img src={everystep} alt="" className='every-step img-fluid' />

                                        <div className="title text-start">
                                            Business User Empowerment
                                        </div>

                                        <div className='shortdesc'>
                                            Enable self-service analytics that removes IT bottlenecks. Business users can access, analyze, and visualize data without requiring technical expertise or constant support.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-lg-5 col-md-6 col-sm-6">
                                <div className="box">
                                    <div className="content d-flex flex-column">
                                        <img src={everystep} alt="" className='every-step img-fluid' />

                                        <div className="title text-start">
                                            Regulatory Compliance
                                        </div>

                                        <div className='shortdesc'>
                                            Built-in governance frameworks that meet regulatory requirements including GDPR, CCPA, and SOX. We ensure your data practices not only drive business value but also maintain compliance standards.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-lg-5 col-md-6 col-sm-6"></div>
                        </>
                    )}

                    {name === "ai-machine-learning-ai-ops-mlops" && (
                        <>
                            <div className="col-xxl-6 col-lg-5 col-md-6 col-sm-6">
                                <div className="box">
                                    <div className="content d-flex flex-column">
                                        <img src={everystep} alt="" className='every-step img-fluid' />

                                        <div className="title text-start">
                                            Faster Time to Value
                                        </div>

                                        <div className='shortdesc'>
                                            Accelerate your AI product deployment with our pre-built MLOps frameworks and proven methodologies. Get from concept to production-ready AI products in weeks, not months.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-lg-5 col-md-6 col-sm-6">
                                <div className="box">
                                    <div className="content d-flex flex-column">
                                        <img src={everystep} alt="" className='every-step img-fluid' />

                                        <div className="title text-start">
                                            Sustained Model Performance
                                        </div>

                                        <div className='shortdesc'>
                                            Continuous monitoring and automated retraining ensure your AI models stay accurate and relevant as your business and data evolve over time.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-lg-5 col-md-6 col-sm-6">
                                <div className="box">
                                    <div className="content d-flex flex-column">
                                        <img src={everystep} alt="" className='every-step img-fluid' />

                                        <div className="title text-start">
                                            Reduced Implementation Risk
                                        </div>

                                        <div className='shortdesc'>
                                            Robust testing and validation procedures minimize production failures and ensure reliable AI system performance from
                                            day one.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-lg-5 col-md-6 col-sm-6">
                                <div className="box">
                                    <div className="content d-flex flex-column">
                                        <img src={everystep} alt="" className='every-step img-fluid' />

                                        <div className="title text-start">
                                            Optimized Resource Efficiency
                                        </div>

                                        <div className='shortdesc'>
                                            Automated scaling and intelligent resource allocation reduce computational costs while maintaining high performance standards.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xxl-6 col-lg-5 col-md-6 col-sm-6">
                                <div className="box">
                                    <div className="content d-flex flex-column">
                                        <img src={everystep} alt="" className='every-step img-fluid' />

                                        <div className="title text-start">
                                            Enhanced Human Decision-Making
                                        </div>

                                        <div className='shortdesc'>
                                            Our AI solutions are designed to augment, not replace, human expertise—creating systems that make your team more effective and informed.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-lg-5 col-md-6 col-sm-6">
                            </div>
                        </>
                    )}

                    {name === "generative-al-llm-solutions" && (
                        <>
                            <div className="col-xxl-6 col-lg-5 col-md-6 col-sm-6">
                                <div className="box">
                                    <div className="content d-flex flex-column">
                                        <img src={everystep} alt="" className='every-step img-fluid' />

                                        <div className="title text-start">
                                            Dramatic Productivity Gains
                                        </div>

                                        <div className='shortdesc'>
                                            Automate content creation and information processing tasks, freeing your team to focus on high-value strategic work while maintaining quality standards.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-lg-5 col-md-6 col-sm-6">
                                <div className="box">
                                    <div className="content d-flex flex-column">
                                        <img src={everystep} alt="" className='every-step img-fluid' />

                                        <div className="title text-start">
                                            Always-Available AI Assistance
                                        </div>

                                        <div className='shortdesc'>
                                            Deploy AI assistants that provide instant, accurate responses 24/7, improving both customer and employee
                                            experiences.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-lg-5 col-md-6 col-sm-6">
                                <div className="box">
                                    <div className="content d-flex flex-column">
                                        <img src={everystep} alt="" className='every-step img-fluid' />

                                        <div className="title text-start">
                                            Consistent Quality and Standards
                                        </div>

                                        <div className='shortdesc'>
                                            Standardize responses and content generation based on your best practices, ensuring consistent quality across all AI-generated content.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-lg-5 col-md-6 col-sm-6">
                                <div className="box">
                                    <div className="content d-flex flex-column">
                                        <img src={everystep} alt="" className='every-step img-fluid' />

                                        <div className="title text-start">
                                            Unlimited Scalability
                                        </div>

                                        <div className='shortdesc'>
                                            AI systems that handle unlimited simultaneous queries without degrading performance, scaling effortlessly with your
                                            business growth.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-lg-5 col-md-6 col-sm-6">
                                <div className="box">
                                    <div className="content d-flex flex-column">
                                        <img src={everystep} alt="" className='every-step img-fluid' />

                                        <div className="title text-start">
                                            Enhanced Customer Experience
                                        </div>

                                        <div className='shortdesc'>
                                            Deliver faster, more accurate, and more personalized responses to customer inquiries, improving satisfaction and reducing resolution times.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-lg-5 col-md-6 col-sm-6">
                            </div>
                        </>
                    )}

                    {name === "it-product-engineering" && (
                        <>
                            <div className="col-xxl-6 col-lg-5 col-md-6 col-sm-6">
                                <div className="box">
                                    <div className="content d-flex flex-column">
                                        <img src={everystep} alt="" className='every-step img-fluid' />

                                        <div className="title text-start">
                                            Accelerated Product Development
                                        </div>

                                        <div className='shortdesc'>
                                            Modern development practices and streamlined tooling reduce time-to-market by 50%, getting your products to users faster without sacrificing quality.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-lg-5 col-md-6 col-sm-6">
                                <div className="box">
                                    <div className="content d-flex flex-column">
                                        <img src={everystep} alt="" className='every-step img-fluid' />

                                        <div className="title text-start">
                                            Enhanced System Reliability
                                        </div>

                                        <div className='shortdesc'>
                                            Cloud-native architectures with built-in redundancy, monitoring, and self-healing capabilities ensure your products remain available and performant.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-lg-5 col-md-6 col-sm-6">
                                <div className="box">
                                    <div className="content d-flex flex-column">
                                        <img src={everystep} alt="" className='every-step img-fluid' />

                                        <div className="title text-start">
                                            Enterprise-Grade Security
                                        </div>

                                        <div className='shortdesc'>
                                            Security-first design with automated vulnerability scanning, compliance frameworks, and continuous security monitoring throughout the development lifecycle.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-lg-5 col-md-6 col-sm-6">
                                <div className="box">
                                    <div className="content d-flex flex-column">
                                        <img src={everystep} alt="" className='every-step img-fluid' />

                                        <div className="title text-start">
                                            Optimized Operating Costs
                                        </div>

                                        <div className='shortdesc'>
                                            Right-sized infrastructure that automatically scales based on actual usage patterns, eliminating waste while ensuring performance during peak demands.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-lg-5 col-md-6 col-sm-6">
                                <div className="box">
                                    <div className="content d-flex flex-column">
                                        <img src={everystep} alt="" className='every-step img-fluid' />

                                        <div className="title text-start">
                                            Future-Proof Architecture
                                        </div>

                                        <div className='shortdesc'>
                                            Modular, API-first designs that adapt easily to changing
                                            business requirements, new technologies, and evolving
                                            user needs.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-lg-5 col-md-6 col-sm-6">
                            </div>
                        </>
                    )}

                    {name === "strategy-advisory" && (
                        <>
                            <div className="col-xxl-6 col-lg-5 col-md-6 col-sm-6">
                                <div className="box">
                                    <div className="content d-flex flex-column">
                                        <img src={everystep} alt="" className='every-step img-fluid' />

                                        <div className="title text-start">
                                            Clear Strategic Direction
                                        </div>

                                        <div className='shortdesc'>
                                            Strategic roadmaps that provide clear direction for technology investments, ensuring alignment across leadership teams and consistent execution.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-lg-5 col-md-6 col-sm-6">
                                <div className="box">
                                    <div className="content d-flex flex-column">
                                        <img src={everystep} alt="" className='every-step img-fluid' />

                                        <div className="title text-start">
                                            Risk Mitigation
                                        </div>

                                        <div className='shortdesc'>
                                            Identify potential challenges and develop comprehensive mitigation strategies before implementation begins, reducing project risk and increasing success rates.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-lg-5 col-md-6 col-sm-6">
                                <div className="box">
                                    <div className="content d-flex flex-column">
                                        <img src={everystep} alt="" className='every-step img-fluid' />

                                        <div className="title text-start">
                                            Optimized Resource Allocation
                                        </div>

                                        <div className='shortdesc'>
                                            Prioritize initiatives to maximize ROI while minimizing resource waste, ensuring your technology budget delivers maximum business value.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-lg-5 col-md-6 col-sm-6">
                                <div className="box">
                                    <div className="content d-flex flex-column">
                                        <img src={everystep} alt="" className='every-step img-fluid' />

                                        <div className="title text-start">
                                            Accelerated Decision Making
                                        </div>

                                        <div className='shortdesc'>
                                            Data-driven frameworks and clear success metrics that
                                            enable faster, more confident technology investment
                                            decisions.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-lg-5 col-md-6 col-sm-6">
                                <div className="box">
                                    <div className="content d-flex flex-column">
                                        <img src={everystep} alt="" className='every-step img-fluid' />

                                        <div className="title text-start">
                                            Accelerated Decision Making
                                        </div>

                                        <div className='shortdesc'>
                                            Create shared understanding and buy-in across leadership teams, ensuring successful change management and initiative execution.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-lg-5 col-md-6 col-sm-6">
                            </div>
                        </>
                    )}
                </div>
            </div>
            {/* ---- Key-Benefits End ---- */}


            {/* ---- Details Start ---- */}
            <div className="step wd">
                <div className="top text-center">
                    <h1>
                        {name === "data-analytics-platforms" && "Why Choose Our Approach"}
                        {name === "ai-machine-learning-ai-ops-mlops" && "Our Product-Centric Methodology"}
                        {name === "generative-al-llm-solutions" && "Product-First AI Development"}
                        {name === "it-product-engineering" && "Product Engineering Excellence"}
                        {name === "strategy-advisory" && "Product-Centric Strategic Planning"}
                    </h1>

                    <p>
                        {name === "data-analytics-platforms" && " We combine deep product strategy expertise with hands-on technical implementation. Our consultants don't just recommend data solutions-we build them with you, ensuring seamless integration with your existing systems and long-term product success."}
                        {name === "ai-machine-learning-ai-ops-mlops" && "As product consultants, we approach AI/ML not as isolated technical solutions, but as integral product features that enhance user experience and drive business value. We focus on building AI products that users actually want to use and that scale with your business growth."}
                        {name === "generative-al-llm-solutions" && "Our approach goes beyond technical implementation to focus on creating AI products that solve real user problems. We combine generative AI capabilities with thoughtful product design to deliver solutions that users love and businesses can scale."}
                        {name === "it-product-engineering" && "We don't just build software—we engineer products that scale, evolve, and delight users. Our engineering approach combines modern technical practices with deep product thinking to create solutions that drive business growth and competitive advantage."}
                        {name === "strategy-advisory" && "Our strategic approach is rooted in product thinking - we help you identify market opportunities, define user needs, and create technology strategies that deliver measurable product success. Every recommendation is tied to clear product outcomes and business value."}
                    </p>
                </div>

                {
                    name === "data-analytics-platforms" &&
                    <div className="row g-5">
                        <div className="col-lg-4 col-md-6">
                            <div className="box h-100">
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
                        <div className="col-lg-4 col-md-6">
                            <div className="box h-100">
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
                        <div className="col-lg-4 col-md-6">
                            <div className="box h-100">
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
                }
                {
                    name === "ai-machine-learning-ai-ops-mlops" &&
                    <div className="row align-items-center g-5 details ai-machine-learning-ai-ops-mlops">
                        <div className="col-xxl-6 col-lg-6 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="title">
                                    End-to-End Product Development
                                </div>
                                <div className="description">
                                    <ul>
                                        <li className='mb-3'><b>Product Strategy:</b> Define AI product vision and roadmap aligned with market needs</li>
                                        <li className='mb-3'><b>User Experience Design:</b> Create intuitive interfaces that make AI accessible to end users</li>
                                        <li className='mb-3'><b>Technical Architecture:</b> Build scalable, maintainable AI systems with proper MLOps foundations</li>
                                        <li><b>Go-to-Market Support:</b> Help launch and iterate on AI products based on user feedback</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-lg-6 col-md-6 col-sm-6 mt-sm-auto">
                            <div className="box">
                                <div className="title">
                                    Business-First AI Implementation
                                </div>
                                <div className="description">
                                    Every AI solution we build starts with clear business objectives and user needs. We ensure that technical capabilities directly translate into
                                    business value and user satisfaction.
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {
                    name === "generative-al-llm-solutions" &&
                    <div className="row align-items-center g-5 details generative-al-llm-solutions">
                        <div className="col-xxl-6 col-lg-6 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="title">
                                    Security and Compliance Built-In
                                </div>
                                <div className="description">
                                    <ul>
                                        <li className='mb-3'><b>Data Privacy:</b> On-premise and private cloud deployments to protect sensitive information</li>
                                        <li className='mb-3'><b>Access Controls:</b> Role-based permissions and comprehensive audit logging</li>
                                        <li className='mb-3'>Content Safety: Built-in safeguards preventing inappropriate or biased responses</li>
                                        <li>Regulatory Compliance: Solutions designed for HIPAA, SOC 2, ISO 27001, and other standards</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-lg-6 col-md-6 col-sm-6 mt-sm-auto">
                            <div className="box">
                                <div className="title">
                                    Enterprise-Ready Implementation
                                </div>
                                <div className="description">
                                    We understand that enterprise AI products require more than just powerful models—they need robust security, seamless integration, and reliable performance. Our solutions are built with enterprise requirements from day one, not retrofitted later.
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-lg-6 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="title">
                                    User-Centered Design
                                </div>
                                <div className="description">
                                    Every AI solution we build starts with deep user research and experience design, ensuring the final product meets real user needs and integrates seamlessly into existing workflows.
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-lg-6 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="title">
                                    Iterative Product Development
                                </div>
                                <div className="description">
                                    We use agile methodologies to continuously improve AI products based on user feedback, performance data, and evolving business requirements.
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {
                    name === "it-product-engineering" &&
                    <div className="row align-items-center g-5 details">
                        <div className="col-lg-4 col-md-6">
                            <div className="box">
                                <div className="title">
                                    Full-Stack Product Development
                                </div>
                                <div className="description">
                                    Our engineering capabilities span the entire product stack, from user-facing applications to backend infrastructure. We focus on creating cohesive product experiences that work seamlessly across all touchpoints and scale with your business needs.
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="box">
                                <div className="title">
                                    Modern Development
                                    Practices
                                </div>
                                <div className="description">
                                    <ul>
                                        <li className='mb-3'><b>API-First Design:</b> Build flexible, integrable systems from the ground up</li>
                                        <li className='mb-3'><b>Microservices Architecture:</b> Create scalable, maintainable product platforms</li>
                                        <li className='mb-3'><b>Cloud-Native Development:</b> Leverage modern cloud services for optimal performance</li>
                                        <li className='mb-3'><b>Automated Testing:</b> Ensure product quality through comprehensive test coverage</li>
                                        <li className='mb-3'><b>Continuous Deployment:</b> Enable rapid, reliable product updates and feature releases</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="box">
                                <div className="title">
                                    Product-Centric
                                    Engineering Culture
                                </div>
                                <div className="description">
                                    We instill product thinking throughout the engineering process, ensuring technical decisions directly support user needs and business objectives.
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {
                    name === "strategy-advisory" &&
                    <div className="row g-5">
                        <div className="col-lg-6">
                            <div className="box h-100">
                                <div className="title">
                                    Holistic Product Strategy Development
                                </div>
                                <div className="description">
                                    We don't just assess technology - we evaluate your entire product ecosystem, from market positioning to technical architecture, ensuring your strategy creates sustainable competitive advantages and scalable growth.
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="box h-100">
                                <div className="title">
                                    Market-Driven Technology Planning
                                </div>
                                <div className="description">
                                    Our strategies are built on deep market analysis and user research, ensuring your technology investments directly support product success and customer value creation.
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="box h-100">
                                <div className="title">
                                    Execution-Focused Roadmaps
                                </div>
                                <div className="description">
                                    We create detailed implementation plans with clear milestones, success metrics, and resource requirements
                                    that translate strategy into actionable results.
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="box h-100">
                                <div className="title">
                                    Continuous Strategy Evolution
                                </div>
                                <div className="description">
                                    Our strategic frameworks include mechanisms for ongoing evaluation and adjustment, ensuring your strategy remains relevant as markets and technologies evolve.
                                </div>
                            </div>
                        </div>
                    </div>
                }

            </div>
            {/* ---- Details End ---- */}


            {/* ---- Contact-Us Start ---- */}
            <div className="copyright contact text-center">
                <p className=''>
                    {name === "data-analytics-platforms" && <span>Ready to Turn Your Data Into Products?</span>}
                    {name === "ai-machine-learning-ai-ops-mlops" && <span>Ready to Build AI Products That Deliver?</span>}
                    {name === "generative-al-llm-solutions" && <span>Ready to Transform Your Content and Knowledge Work?</span>}
                    {name === "it-product-engineering" && <span>Ready to Build Products That Scale?</span>}
                    {name === "strategy-advisory" && <span>Ready to Transform Strategy Into Results?</span>}
                </p>

                <div className='description'>
                    {name === "data-analytics-platforms" &&
                        "Transform your data from a cost center into a strategic asset that drives business growth. Our product consulting approach ensures your data platform not only meets today's needs but positions you for future success."
                    }
                    {name === "ai-machine-learning-ai-ops-mlops" &&
                        "Transform your AI initiatives from experimental projects into production-ready products that drive real business results. Our product-centric approach ensures your AI investments generate consistent, measurable returns."
                    }
                    {name === "generative-al-llm-solutions" &&
                        "Harness the power of generative AI to create products that revolutionize how your team creates, processes, and interacts with content. Our enterprise-ready solutions deliver immediate productivity gains while ensuring security and compliance."
                    }
                    {name === "it-product-engineering" &&
                        "Transform your product ideas into robust, scalable technology solutions that drive business growth. Our engineering expertise combined with product strategy ensures your digital initiatives deliver lasting competitive advantages."
                    }
                    {name === "strategy-advisory" &&
                        "Turn your technology vision into actionable plans that drive real business outcomes. Our product-centric strategic approach ensures your investments create sustainable competitive advantages and scalable growth."
                    }


                </div>

                <div className='description'>
                    {name === "data-analytics-platforms" &&
                        <>
                            <Link to={"contact-us"}>Contact us today</Link> to schedule a consultation and discover how we can accelerate your
                            data-driven transformation.
                        </>
                    }
                    {name === "ai-machine-learning-ai-ops-mlops" &&
                        <>
                            <Link to={"contact-us"}>Contact us today</Link> to discuss how we can help you create AI solutions that
                            work in the real world.
                        </>
                    }
                    {name === "generative-al-llm-solutions" &&
                        <>
                            <Link to={"contact-us"}>Contact us today</Link> to explore how generative AI can transform your workflows and
                            customer experiences.
                        </>
                    }
                    {name === "it-product-engineering" &&
                        <>
                            <Link to={"contact-us"}>Contact us today</Link> to discuss how we can bring your product vision to life.
                        </>
                    }
                    {name === "strategy-advisory" &&
                        <>
                            <Link to={"contact-us"}>Contact us today</Link>  to schedule a strategic consultation and accelerate your
                            digital transformation journey.
                        </>
                    }

                </div>


                <Link
                    to="/contact-us"
                    className="main-button book-btn discover-btn wd"
                >
                    Contact Us
                </Link>
            </div>
            {/* ---- Contact-Us End ---- */}


        </>
    )
}

export default WaypointDetails;