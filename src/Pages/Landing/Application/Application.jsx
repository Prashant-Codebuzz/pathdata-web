import React, { useState } from 'react'
import contactemail from '../../../assets/images/contact-email.png';
import contactcall from '../../../assets/images/contact-call.png';
import { Link, useNavigate } from 'react-router-dom';
import { AxiosWeb } from '../../../helper/Axios';
import { toast } from 'react-toastify';

const initialState = {
    first_name: "",
    last_name: "",
    email: "",
    organization: "",
    message: ""
}

const Application = () => {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [application, setApplication] = useState(initialState);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setApplication((prev) => ({
            ...prev,
            [name]: value,
        }));
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
    }


    return (
        <>

            {/* ---- Application-Form Start ---- */}
            <section className='contact landing application'>
                <div className="container text-center">
                    <h1 className="title">
                        Application.
                    </h1>

                    <p className="description">
                        Applying is fast and easy. We focus on the essentials to understand your startup and help you move forward quickly.
                    </p>
                </div>

                <div className="contact-form">
                    <form className="row" onSubmit={handleSubmit}>
                        <div className='group main-title mt-0'>
                            Team Information
                        </div>
                        <div className='col-lg-12 group'>
                            <label htmlFor="name" className='mb-2'>
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder='Enter name'
                                autoComplete='off'
                                required
                            />
                        </div>

                        <div className='col-sm-6 group'>
                            <label htmlFor="role" className='mb-2'>
                                Role
                            </label>
                            <input
                                type="text"
                                name="role"
                                id="role"
                                placeholder='Enter role'
                                autoComplete='off'
                                required
                            />
                        </div>

                        <div className='col-sm-6 group'>
                            <label htmlFor="experience" className='mb-2'>
                                Experience
                            </label>
                            <input
                                type="text"
                                name="experience"
                                id="experience"
                                placeholder='Enter experience'
                                autoComplete='off'
                                required
                            />
                        </div>

                        <div className='group main-title'>
                            Business Problem
                        </div>

                        <div className='col-lg-12 group'>
                            <label htmlFor="message" className='mb-2'>
                                What problem are you solving?
                            </label>
                            <textarea
                                type="text"
                                name="message"
                                id="message"
                                placeholder='Enter short message'
                                autoComplete='off'
                                required
                                style={{ height: "200px" }}
                            />
                        </div>

                        <div className='col-lg-12 group'>
                            <label htmlFor="message" className='mb-2'>
                                Who is your target audience?
                            </label>
                            <textarea
                                type="text"
                                name="message"
                                id="message"
                                placeholder='Enter short message'
                                autoComplete='off'
                                value={application.message}
                                onChange={handleChange}
                                required
                                style={{ height: "200px" }}
                            />
                        </div>

                        <div className='group main-title'>
                            Future Vision
                        </div>

                        <div className='col-lg-12 group'>
                            <label htmlFor="message" className='mb-2'>
                                Your goals for the product and scaling
                            </label>
                            <textarea
                                type="text"
                                name="message"
                                id="message"
                                placeholder='Enter short message'
                                autoComplete='off'
                                required
                                style={{ height: "200px" }}
                            />
                        </div>

                        <div className='col-lg-12 group'>
                            <label htmlFor="message" className='mb-2'>
                                What you want to achieve with AI solutions
                            </label>
                            <textarea
                                type="text"
                                name="message"
                                id="message"
                                placeholder='Enter short message'
                                autoComplete='off'
                                value={application.message}
                                onChange={handleChange}
                                required
                                style={{ height: "200px" }}
                            />
                        </div>

                        <div className='group main-title'>
                            How it Works:
                        </div>

                        <ul className='group'>
                            <li>Quick online form (~5–10 minutes)</li>
                            <li>We review and confirm eligibility</li>
                            <li>Eligible startups move to the Discovery & Use Case Workshop</li>
                        </ul>

                        <div className="text-center submit">
                            <button
                                type='submit'
                                className={`main-button book-btn submitreq-btn ${loading ? 'loading' : ''}`}
                            // disabled={loading}
                            >
                                {/* {loading ? (
                                    <>
                                        <span
                                            className="me-2 spinner-border spinner-border-sm"
                                            role="status"
                                            aria-hidden="true"
                                            style={{ width: '18px', height: '18px' }}
                                        ></span>
                                    </>
                                ) : ( */}
                                Submit
                                {/* )} */}
                            </button>
                        </div>
                    </form>
                </div>
            </section>
            {/* ---- Application-Form End ---- */}


        </>
    )
}

export default Application;