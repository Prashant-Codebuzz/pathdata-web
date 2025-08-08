import React from 'react'
import "./MeetTeam.css"
import { Link, useNavigate } from 'react-router-dom';
import dhruvilshah from "../../../assets/images/dhruvil-shah.png";
import jubyjose from "../../../assets/images/juby-jose.png";
import komalpatel from "../../../assets/images/komal-patel.png";
import jigarsanghavi from "../../../assets/images/jigar-sanghavi.png";
import harshpatel from "../../../assets/images/harsh-patel.png";
import linkedin from "../../../assets/images/linkedin.png";
import twitter from "../../../assets/images/twitter.png";


import meetteam1 from "../../../assets/images/meet-team-1.png";
import meetteam2 from "../../../assets/images/meet-team-2.png";
import meetteam3 from "../../../assets/images/meet-team-3.png";
import meetteam4 from "../../../assets/images/meet-team-4.png";
import meetteam5 from "../../../assets/images/meet-team-5.png";
import meetframe1 from "../../../assets/images/meet-frame-1.png";
import meetframe2 from "../../../assets/images/meet-frame-2.png";


const MeetTeam = () => {

    const navigate = useNavigate();

    const Exports = [
        {
            image: dhruvilshah,
            name: "Dhruvil Shah",
            role: "Founder / CEO"
        },
        {
            image: jubyjose,
            name: "Juby Jose",
            role: "Principal Consultant"
        },
        {
            image: komalpatel,
            name: "Komal Patel",
            role: "Sales & Project Manager"
        },
        {
            image: jigarsanghavi,
            name: "Jigar Sanghavi",
            role: "Data Engineer"
        },
        {
            image: harshpatel,
            name: "Harsh Patel",
            role: "Advisory"
        },
    ];


    return (
        <>


            {/* ---- Meet-Team Start ---- */}
            <div className="meet_team">
                <h1 className="title text-center">
                    Meet Our
                    <br />

                    <span>
                        PATHSDATA Team.
                    </span>
                </h1>

                <p className="description text-center">
                    Meet the Brains Behind the Breakthroughs.
                </p>

                <div className="row g-4 g-md-3">
                    <div className="col-lg-4 col-md-6 d-none d-lg-block">
                        <div className="box d-flex flex-column">
                            <div className="image w-100 h-100">
                                <img src={meetteam1} alt="" className='img-fluid' loading='lazy' draggable={false} />
                            </div>

                            <div className="info">
                                <h3>Dhruvil Shah</h3>

                                <div className='shortdesc'>
                                    Founder / CEO
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="row g-4 g-md-3">
                            <div className="col-lg-4 col-md-6 col-sm-6 d-lg-none">
                                <div className="box d-flex flex-column">
                                    <div className="image w-100 h-100">
                                        <img src={meetteam1} alt="" className='img-fluid' loading='lazy' draggable={false} />
                                    </div>

                                    <div className="info">
                                        <h3>Dhruvil Shah</h3>

                                        <div className='shortdesc'>
                                            Founder / CEO
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="box d-flex flex-column">
                                    <div className="image">
                                        <img src={meetteam2} alt="" className='img-fluid' loading='lazy' draggable={false} />
                                    </div>

                                    <div className="info">
                                        <h3>Juby Jose</h3>

                                        <div className='shortdesc'>
                                            Principal Consultant
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 d-none d-lg-block">
                                <div className="box d-flex flex-column">
                                    <div className="image">
                                        <img src={meetframe1} alt="" className='img-fluid' loading='lazy' draggable={false} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="box d-flex flex-column">
                                    <div className="image">
                                        <img src={meetteam3} alt="" className='img-fluid' loading='lazy' draggable={false} />
                                    </div>

                                    <div className="info">
                                        <h3>Komal Patel</h3>

                                        <div className='shortdesc'>
                                            Sales & Project Manager
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 d-none d-lg-block">
                                <div className="box d-flex flex-column">
                                    <div className="image">
                                        <img src={meetframe2} alt="" className='img-fluid' loading='lazy' draggable={false} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="box d-flex flex-column">
                                    <div className="image">
                                        <img src={meetteam4} alt="" className='img-fluid' loading='lazy' draggable={false} />
                                    </div>

                                    <div className="info">
                                        <h3>Jigar Sanghavi</h3>

                                        <div className='shortdesc'>
                                            Data Engineer
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="box d-flex flex-column">
                                    <div className="image">
                                        <img src={meetteam5} alt="" className='img-fluid' loading='lazy' draggable={false} />
                                    </div>

                                    <div className="info">
                                        <h3>Harsh Patel</h3>

                                        <div className='shortdesc'>
                                            Advisory
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ---- Square Start ---- */}
                <div className='squre s1'></div>
                <div className='squre s2'></div>
                <div className='squre s3'></div>
                <div className='squre s4'></div>
                {/* ---- Square End ---- */}
            </div>
            {/* ---- Meet-Team End ---- */}


            {/* ---- Join Start ---- */}
            <div className="join_team">
                <div className="row align-items-center">
                    <div className="col-lg-9 text-center text-lg-start">
                        <div className="title">
                            Interested in Joining With Us ?
                        </div>
                        <div className="description">
                            Please Send Your Details With Your Resume
                        </div>
                    </div>
                    <div className="col-lg-3 text-center text-lg-end mt-4 mt-lg-4">
                        <button
                            type='submit'
                            className={`main-button book-btn`}
                            onClick={() => navigate("/join-team")}
                        >
                            Join Us
                        </button>
                    </div>
                </div>
            </div>
            {/* ---- Join End ---- */}


        </>
    )
}

export default MeetTeam;
