import React, { useState } from 'react'
import contactemail from '../../../assets/images/contact-email.png';
import contactcall from '../../../assets/images/contact-call.png';
import { Link } from 'react-router-dom';
import { AxiosWeb } from '../../../helper/Axios';
import { toast } from 'react-toastify';

const initialState = {
    first_name: "",
    last_name: "",
    email: "",
    organization: "",
    message: ""
}


const ContactUs = () => {

    const [loading, setLoading] = useState(false);
    const [contact, setContact] = useState(initialState);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setContact((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
            const res = await AxiosWeb.post("/contact_us", contact, {
                headers: {
                    "Content-Type": 'application/json'
                }
            });

            if (res.data?.statusCode) {
                toast.success(res.data?.message);

                setContact(initialState);
            }
        }
        catch (err) {
            console.error(err);
        }
        finally {
            setLoading(false);
        }
    }

    return (
        <>

            {/* ---- Contact Start ---- */}
            <div className="contact-info">
                <div className="info">
                    <h1 className="title text-center">
                        Contact Us.
                    </h1>

                    <p className="description text-center">
                        Give us a call or send us an email. We strive to respond to all inquiries within 24 hours on business days and are happy to answer your questions.
                    </p>
                </div>

                <div className="row justify-content-center g-5 g-lg-0">
                    <div className="col-lg-5 col-xl-4 col-xxl-3 col-sm-6">
                        <div className="box text-center">
                            <div className="content">

                                <div className="image">
                                    <img src={contactemail} alt="" className='img-fluid' />
                                </div>

                                <h3>Email Us</h3>

                                <span className='shortdesc'>
                                    <Link to="mailto:contact@pathsdata.com">
                                        contact@pathsdata.com
                                    </Link>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-xl-4 col-xxl-3 col-sm-6">
                        <div className="box text-center">
                            <div className="content">

                                <div className="image">
                                    <img src={contactcall} alt="" className='img-fluid' />
                                </div>

                                <h3>Call Us</h3>

                                <span className='shortdesc'>
                                    <Link to="tel:+1555123‑4567">
                                        +1 (555) 123‑4567
                                    </Link>
                                </span>
                            </div>
                        </div>
                    </div>
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
            {/* ---- Contact End ---- */}


            {/* <div className="lines turningdata"></div> */}

            {/* ---- Contact-Form Start ---- */}
            <section className='contact landing'>
                <div className="container text-center">
                    <h1 className="title">
                        Book a Demo Today.
                    </h1>

                    <p className="description">
                        We’re all ears! Talk to us about your needs, and we’ll provide the best possible solution.
                    </p>
                </div>

                <div className="contact-form">
                    <form className="row" onSubmit={handleSubmit}>
                        <div className='col-lg-6 group'>
                            <label htmlFor="first_name" className='mb-2'>
                                First Name
                            </label>
                            <input
                                type="text"
                                name="first_name"
                                id="first_name"
                                placeholder='Enter first name'
                                autoComplete='off'
                                value={contact.first_name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className='col-lg-6 group'>
                            <label htmlFor="last_name" className='mb-2'>
                                Last Name
                            </label>
                            <input
                                type="text"
                                name="last_name"
                                id="last_name"
                                placeholder='Enter last name'
                                autoComplete='off'
                                value={contact.last_name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className='col-lg-6 group'>
                            <label htmlFor="email" className='mb-2'>
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder='Enter email'
                                autoComplete='off'
                                value={contact.email}
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
                                placeholder='Enter organization name'
                                autoComplete='off'
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
                                autoComplete='off'
                                value={contact.message}
                                onChange={handleChange}
                                required
                                style={{ height: "200px" }}
                            />
                        </div>

                        <div className="text-center submit">
                            <button
                                type='submit'
                                className={`main-button book-btn submitreq-btn ${loading ? 'loading' : ''}`}
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
                                    "Submit"
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </section>
            {/* ---- Contact-Form End ---- */}

        </>
    )
}

export default ContactUs;
