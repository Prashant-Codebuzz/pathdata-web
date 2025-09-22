import React, { useState } from 'react'
import contactemail from '../../../assets/images/contact-email.png';
import contactcall from '../../../assets/images/contact-call.png';
import plusicon from "../../../assets/images/plus.png";
import { Link, useNavigate } from 'react-router-dom';
import { AxiosWeb } from '../../../helper/Axios';
import { toast } from 'react-toastify';

const initialState = {
    // Company Information
    company_name: "",
    company_website: "",
    company_vision: "",
    company_idea: "",
    industry: "",

    // Founder Details
    founders: [
        {
            name: "",
            role: "",
            email: "",
            background: "",
        },
    ],

    // Product & Market
    product_stage: "",
    target_audience: "",
    traction: "",

    // Future Vision
    short_long_goals: "",
    scaling_plan: "",
    ai_plan: "",
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

    const handleFounderChange = (index, e) => {
        const { name, value } = e.target;
        const updatedFounders = [...application.founders];
        updatedFounders[index][name] = value;
        setApplication((prev) => ({ ...prev, founders: updatedFounders }));
    };

    const handleAddFounder = () => {
        if (application.founders.length < 3) {
            setApplication((prev) => ({
                ...prev,
                founders: [...prev.founders, { name: "", role: "", email: "", background: "" }],
            }));
        }
    };

    const handleRemoveFounder = (index) => {
        const updatedFounders = application.founders.filter((_, i) => i !== index);
        setApplication((prev) => ({ ...prev, founders: updatedFounders }));
    };



    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
            const res = await AxiosWeb.post("/application", application, {
                headers: {
                    "Content-Type": 'application/json'
                }
            });

            if (res.data?.statusCode === 200) {
                toast.success(res.data?.message);

                setApplication(initialState);
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
                            Company Information
                        </div>
                        <div className='col-lg-12 group'>
                            <label htmlFor="company_name" className='mb-2'>
                                Company Name
                            </label>
                            <input
                                type="text"
                                name="company_name"
                                id="company_name"
                                placeholder='Enter company name'
                                value={application.company_name}
                                onChange={handleChange}
                                autoComplete='off'
                                required
                            />
                        </div>

                        <div className='col-sm-6 group'>
                            <label htmlFor="company_website" className='mb-2'>
                                Company Website (if any)
                            </label>
                            <input
                                type="text"
                                name="company_website"
                                id="company_website"
                                placeholder='Enter company website'
                                value={application.company_website}
                                onChange={handleChange}
                                autoComplete='off'
                            />
                        </div>

                        <div className='col-sm-6 group'>
                            <label htmlFor="industry" className='mb-2'>
                                Industry/Sector
                            </label>
                            <input
                                type="text"
                                name="industry"
                                id="industry"
                                placeholder='Enter industry/sector *'
                                value={application.industry}
                                onChange={handleChange}
                                autoComplete='off'
                                required
                            />
                        </div>

                        <div className='col-lg-12 group'>
                            <label htmlFor="company_vision" className='mb-2'>
                                Company Vision
                            </label>
                            <textarea
                                type="text"
                                name="company_vision"
                                id="company_vision"
                                placeholder='Describe your long-term vision or mission statement'
                                value={application.company_vision}
                                onChange={handleChange}
                                autoComplete='off'
                                required
                                style={{ height: "200px" }}
                            />
                        </div>

                        <div className='col-lg-12 group'>
                            <label htmlFor="company_idea" className='mb-2'>
                                Company Idea / What does your company do?
                            </label>
                            <textarea
                                type="text"
                                name="company_idea"
                                id="company_idea"
                                placeholder="Briefly describe the problem you're solving and your solution"
                                value={application.company_idea}
                                onChange={handleChange}
                                autoComplete='off'
                                required
                                style={{ height: "200px" }}
                            />
                        </div>

                        <div className='group main-title d-flex justify-content-between align-items-center'>
                            Founder Details

                            <button
                                type="button"
                                className="add-btn boreder-0"
                                onClick={handleAddFounder}
                                disabled={application?.founders?.length >= 3}
                            >
                                <img src={plusicon} className='img-fluid' />
                            </button>
                        </div>

                        {application?.founders?.map((i, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <div className='col-lg-12 group'>
                                        <label htmlFor="name" className='mb-3 d-flex justify-content-between align-items-center'>
                                            Founder Name

                                            {index > 0 && (
                                                <button
                                                    type="button"
                                                    className="close-btn boreder-0"
                                                    onClick={() => handleRemoveFounder(index)}
                                                >
                                                    <img src={plusicon} className='img-fluid' />
                                                </button>
                                            )}
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            placeholder='Enter founder name'
                                            value={i.name}
                                            onChange={(e) => handleFounderChange(index, e)}
                                            autoComplete='off'
                                            required
                                        />
                                    </div>

                                    <div className='col-sm-6 group'>
                                        <label htmlFor="role" className='mb-2'>
                                            Founder Role
                                        </label>
                                        <input
                                            type="text"
                                            name="role"
                                            id="role"
                                            placeholder='Enter founder role'
                                            value={i.role}
                                            onChange={(e) => handleFounderChange(index, e)}
                                            autoComplete='off'
                                            required
                                        />
                                    </div>

                                    <div className='col-sm-6 group'>
                                        <label htmlFor="email" className='mb-2'>
                                            Founder Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder='Enter founder email'
                                            value={i.email}
                                            onChange={(e) => handleFounderChange(index, e)}
                                            autoComplete='off'
                                            required
                                        />
                                    </div>

                                    <div className='col-lg-12 group'>
                                        <label htmlFor="background" className='mb-2'>
                                            Founder Background / Experience
                                        </label>
                                        <textarea
                                            type="text"
                                            name="background"
                                            id="background"
                                            placeholder='Summarize their relevant experience or past ventures'
                                            value={i.background}
                                            onChange={(e) => handleFounderChange(index, e)}
                                            autoComplete='off'
                                            required
                                            style={{ height: "200px" }}
                                        />
                                    </div>
                                </React.Fragment>
                            )
                        })}

                        <div className='group main-title mt-0'>
                            Product & Market
                        </div>
                        <div className='col-sm-6 group'>
                            <label htmlFor="product_stage" className='mb-2'>
                                Stage of Product
                            </label>

                            <select
                                name="product_stage"
                                id="product_stage"
                                className="form-control form-select"
                                value={application.product_stage}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Stage</option>
                                <option value="Idea">Idea</option>
                                <option value="Prototype">Prototype</option>
                                <option value="MVP">MVP</option>
                                <option value="Launched">Launched</option>
                                <option value="Revenue-Generating">Revenue-Generating</option>
                            </select>
                        </div>

                        <div className='col-sm-6 group'>
                            <label htmlFor="target_audience" className='mb-2'>
                                Target Audience
                            </label>
                            <input
                                type="text"
                                name="target_audience"
                                id="target_audience"
                                placeholder='Who are you building this for?'
                                value={application.target_audience}
                                onChange={handleChange}
                                autoComplete='off'
                                required
                            />
                        </div>

                        <div className='col-lg-12 group'>
                            <label htmlFor="traction" className='mb-2'>
                                Traction So Far (if any)
                            </label>
                            <textarea
                                type="text"
                                name="traction"
                                id="traction"
                                placeholder='Enter short message'
                                value={application.traction}
                                onChange={handleChange}
                                autoComplete='off'
                                style={{ height: "200px" }}
                            />
                        </div>

                        <div className='group main-title'>
                            Future Vision
                        </div>

                        <div className='col-lg-12 group'>
                            <label htmlFor="short_long_goals" className='mb-2'>
                                What are your short-term and long-term goals?
                            </label>
                            <textarea
                                type="text"
                                name="short_long_goals"
                                id="short_long_goals"
                                placeholder='Enter short message'
                                autoComplete='off'
                                value={application.short_long_goals}
                                onChange={handleChange}
                                required
                                style={{ height: "200px" }}
                            />
                        </div>

                        <div className='col-lg-12 group'>
                            <label htmlFor="scaling_plan" className='mb-2'>
                                How do you plan to scale your business?
                            </label>
                            <textarea
                                type="text"
                                name="scaling_plan"
                                id="scaling_plan"
                                placeholder='Enter short message'
                                autoComplete='off'
                                value={application.scaling_plan}
                                onChange={handleChange}
                                required
                                style={{ height: "200px" }}
                            />
                        </div>

                        <div className='col-lg-12 group'>
                            <label htmlFor="ai_plan" className='mb-2'>
                                How do you plan to leverage AI or other technologies (if applicable)?
                            </label>
                            <textarea
                                type="text"
                                name="ai_plan"
                                id="ai_plan"
                                placeholder='Enter short message'
                                autoComplete='off'
                                value={application.ai_plan}
                                onChange={handleChange}
                                required
                                style={{ height: "200px" }}
                            />
                        </div>

                        {/* <div className='group main-title'>
                            How it Works:
                        </div>

                        <ul className='group'>
                            <li>Quick online form (~5–10 minutes)</li>
                            <li>We review and confirm eligibility</li>
                            <li>Eligible startups move to the Discovery & Use Case Workshop</li>
                        </ul> */}

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
                                    'Submit'
                                )}
                            </button>
                        </div>
                    </form>
                </div >
            </section >
            {/* ---- Application-Form End ---- */}


        </>
    )
}

export default Application;