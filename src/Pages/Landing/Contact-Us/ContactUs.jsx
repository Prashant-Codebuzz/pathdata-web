import React, { useState } from 'react'
import contactemail from '../../../assets/images/contact-email.png';
import contactcall from '../../../assets/images/contact-call.png';

const initialState = {
    firstname: "",
    lastname: "",
    work_email: "",
    image: "",
    organization: "",
    message: ""
}

const ContactUs = () => {

    const [loading, setLoading] = useState(false);
    const [contact, setContact] = useState(initialState);

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        setContact((prev) => ({
            ...prev,
            [name]: files ? files[0] : value,
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

    }
    return (
        <>

            {/* ---- Contact Start ---- */}
            <div className="contact-info">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="info">
                            <h1 className="title">
                                Contact Us
                            </h1>

                            <p className="description">
                                Give us a call or send us an email. We strive to respond to all inquiries within 24 hours on business days and are happy to answer your questions.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="box text-center">
                            <div className="content">

                                <div className="image">
                                    <img src={contactemail} alt="" className='img-fluid' />
                                </div>

                                <h3>Email Us</h3>

                                <div className='shortdesc'>
                                    contact@pathsdata.com
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="box text-center">
                            <div className="content">

                                <div className="image">
                                    <img src={contactcall} alt="" className='img-fluid' />
                                </div>

                                <h3>Call Us</h3>

                                <div className='shortdesc'>
                                    +1 (555) 123‑4567
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ---- Contact End ---- */}


            <div className="lines turningdata"></div>

            {/* ---- Contact-Form Start ---- */}
            <section className='contact landing'>
                <div className="container text-center">
                    <h1 className="title text-white">
                        Book a Demo Today
                    </h1>

                    <p className="description">
                        We’re all ears! Talk to us about your needs, and we’ll provide the best possible solution.
                    </p>
                </div>

                <div className="contact-form">
                    <form className="row" onSubmit={handleSubmit}>
                        <div className='col-lg-6 group'>
                            <label htmlFor="firstname" className='mb-2'>
                                First Name
                            </label>
                            <input
                                type="text"
                                name="firstname"
                                id="firstname"
                                placeholder='Enter first name'
                                // autoComplete='off'
                                value={contact.firstname}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className='col-lg-6 group'>
                            <label htmlFor="lastname" className='mb-2'>
                                Last Name
                            </label>
                            <input
                                type="text"
                                name="lastname"
                                id="lastname"
                                placeholder='Enter last name'
                                // autoComplete='off'
                                value={contact.lastname}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className='col-lg-6 group'>
                            <label htmlFor="work_email" className='mb-2'>
                                Work email
                            </label>
                            <input
                                type="email"
                                name="work_email"
                                id="work_email"
                                placeholder='Enter email'
                                // autoComplete='off'
                                value={contact.work_email}
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
                                // autoComplete='off'
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
                                // autoComplete='off'
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
