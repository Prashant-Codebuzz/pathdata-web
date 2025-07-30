import React from 'react'
import "./MeetTeam.css"
import { Link } from 'react-router-dom';
import dhruvilshah from "../../../assets/images/dhruvil-shah.png";
import jubyjose from "../../../assets/images/juby-jose.png";
import komalpatel from "../../../assets/images/komal-patel.png";
import jigarsanghavi from "../../../assets/images/jigar-sanghavi.png";
import harshpatel from "../../../assets/images/harsh-patel.png";
import linkedin from "../../../assets/images/linkedin.png";
import twitter from "../../../assets/images/twitter.png";

const MeetTeam = () => {

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
            <div className=" meet_team">
                <h1 className="title text-center">
                    Meet Our Team
                </h1>

                <p className="description text-center">
                    Meet the Brains Behind the Breakthroughs.
                </p>

                <div className="row g-5 g-md-5">
                    {
                        Exports.map((i, index) => {
                            return (
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12" key={index}>
                                    <div className="box">
                                        <div className="content d-flex flex-column">
                                            <div className="image">
                                                <img src={i.image} alt={i.name} className='img-fluid' loading='lazy' />
                                            </div>

                                            <div className="info">
                                                <h3>{i.name}</h3>

                                                <div className='shortdesc'>
                                                    {i.role}
                                                </div>
                                                <div className="d-flex gap-3">
                                                    <img src={linkedin} alt="" className='img-fluid' />
                                                    <img src={twitter} alt="" className='img-fluid' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {/* ---- Meet-Team End ---- */}

        </>
    )
}

export default MeetTeam;
