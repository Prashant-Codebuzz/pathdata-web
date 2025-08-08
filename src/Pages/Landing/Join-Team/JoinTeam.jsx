import React, { useState } from 'react';
import "./JoinTeam.css";
import CloseImg from "../../../assets/images/Close.png";

const initialState = {
    firstname: "",
    lastname: "",
    work_email: "",
    image: "",
    organization: "",
    message: ""
}

const JoinTeam = () => {

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
            <section className='contact landing'>
                <div className="container text-center">
                    <h1 className="title">
                        Join Our Team.
                    </h1>

                    <p className="description">
                        If you would like to join our team, please fill out the form. We will get back to you.
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
                            <label htmlFor="email" className='mb-2'>
                                Email
                            </label>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                placeholder='Enter email'
                                // autoComplete='off'
                                value={contact.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className='col-lg-6 group'>
                            <label htmlFor="phone" className='mb-2'>
                                Phone
                            </label>
                            <input
                                type="number"
                                name="phone"
                                id="phone"
                                placeholder='Enter phone'
                                // autoComplete='off'
                                value={contact.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className='col-lg-12 group'>
                            <label htmlFor="image" className="form-label mb-2 w-100">
                                Resume (PDF, Docx, JPG - Max. file size: 5 MB)

                                <div className="input-group  mt-2" style={{ height: "200px" }}>
                                    {
                                        contact.image ? (
                                            <div className="logo position-relative" style={{ width: '165px', height: '165px' }}>
                                                <img
                                                    src={URL?.createObjectURL(contact?.image)}
                                                    alt="Image"
                                                    className="img-fluid logo-img"
                                                />

                                                <button
                                                    type='button'
                                                    className='close_btn bg-transparent border-0 position-absolute' style={{ top: "8px", right: "8px" }}
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        e.preventDefault();

                                                        setContact((prev) => ({ ...prev, image: "" }))
                                                    }
                                                    }
                                                >
                                                    <img src={CloseImg} alt="Close" className='img-fluid' />
                                                </button>
                                            </div>
                                        ) : (
                                            <div className='w-100 align-content-center text-center'>

                                                <div className='txt m-0'>Drop your file here</div>
                                                <div className='txt'>or</div>


                                                <div
                                                    className="main-button submitreq-btn position-relative m-auto"
                                                >
                                                    Select file
                                                    <input
                                                        type="file"
                                                        id="image"
                                                        name="image"
                                                        accept="image/*"
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>

                                            </div>
                                        )
                                    }
                                </div>
                            </label>

                        </div>

                        <div className='col-lg-12 group'>
                            <label htmlFor="message" className='mb-2'>
                                About Your Interest
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
            {/* ---- Contact End ---- */}

        </>
    )
}

export default JoinTeam;
