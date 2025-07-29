import bronzeicon from "../../assets/images/bronze.png";
import settingbilling from "../../assets/images/setting-billing.png";
import visa from "../../assets/images/visa.png";
import email from "../../assets/images/email.png";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { authorizationHeaders, Axios } from "../../helper/Axios";
import { useEffect, useState } from "react";

const initialState = {
    name: "",
    phone_number: "",
    language: "",
    country: "",
}

const EditProfile = () => {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [profileData, setProfileData] = useState(initialState);

    const GetProfileData = async () => {
        try {
            const res = await Axios.get(`/profile`, authorizationHeaders());

            if (res?.data?.statusCode === 200) {
                setProfileData({
                    name: res?.data?.data?.name || "",
                    phone_number: res?.data?.data?.phone_number || "",
                    language: res?.data?.data?.language || "",
                    country: res?.data?.data?.country || "",
                });
            }
            else {
                toast.error(res.data?.message);
            }

        } catch (err) {
            console.error("Error Profile++", err);

            if (err?.message === "Network Error") {
                toast.error(err.message);
            }
            if (err?.response?.data?.statusCode === "440") {
                toast.error("Session expired. Please log in again.");
                localStorage.clear();
                navigate("/sign-in");
            } else {
                toast.error(err?.response?.data?.message || "An error occurred");
            }
        }
    }


    const handleChange = (e) => {
        const { name, value } = e.target;

        setProfileData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
            const res = await Axios.patch(`/profile`, profileData, authorizationHeaders());

            if (res?.data?.statusCode === 200) {
                toast.success(res?.data?.message);
                GetProfileData();

                navigate("/setting");
            }
            else {
                toast.error(res.data?.message);
            }

        } catch (err) {
            console.error("Error Profile++", err);

            if (err?.message === "Network Error") {
                toast.error(err.message);
            }
            if (err?.response?.data?.statusCode === "440") {
                toast.error("Session expired. Please log in again.");
                localStorage.clear();
                navigate("/sign-in");
            } else {
                toast.error(err?.response?.data?.message || "An error occurred");
            }
        } finally {
            setLoading(false);
        }

    }


    useEffect(() => {
        GetProfileData();
    }, []);

    return (
        <>

            <section className='setting-sec pd'>
                <div className='setting-form'>
                    <div className="">
                        <div className="add-title">Edit Profile</div>
                        <form className="row mt-4" onSubmit={handleSubmit}>
                            <div className="col-lg-6 mb-3 mb-lg-4">
                                <label htmlFor="name" className="form-label">Name</label>
                                <div className="add-input">
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Enter Name"
                                        value={profileData?.name || ""}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="col-lg-6 mb-3 mb-lg-4">
                                <label htmlFor="phone_number" className="form-label">Mobile Number</label>
                                <div className="add-input">
                                    <input
                                        type="text"
                                        pattern='\d*'
                                        maxLength={16}
                                        id="phone_number"
                                        name="phone_number"
                                        placeholder="Enter Mobile Number"
                                        value={profileData?.phone_number || ""}
                                        onChange={handleChange}
                                        onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="col-lg-6 mb-3 mb-lg-4">
                                <label htmlFor="language" className="form-label">Language</label>
                                <div className="add-input">
                                    <select
                                        name="language"
                                        id="language"
                                        value={profileData?.language || ""}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select Language</option>
                                        {languages?.map((lang, index) => (
                                            <option key={index} value={lang}>
                                                {lang}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="col-lg-6 mb-3 mb-lg-4">
                                <label htmlFor="country" className="form-label">Country</label>
                                <div className="add-input">
                                    <select
                                        name="country"
                                        id="country"
                                        value={profileData?.country || ""}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select Country</option>
                                        {countries?.map((country, index) => (
                                            <option key={index} value={country}>
                                                {country}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="d-flex justify-content-end mt-3">
                                <button type="button" className="edit-profile cancel-btn me-2 me-md-4" onClick={() => navigate(-1)}>
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className={`edit-profile save-btn ${loading ? 'loading' : ''}`}
                                    disabled={loading}
                                >
                                    {
                                        loading ? (
                                            <span
                                                className="spinner-border spinner-border-sm me-2"
                                                role="status"
                                                aria-hidden="true"
                                            ></span>
                                        ) : (
                                            "Edit"
                                        )
                                    }
                                </button>
                            </div>
                        </form>
                    </div >
                </div >
            </section >

        </>
    )
}

export default EditProfile;



export const languages = [
    "Afrikaans", "Albanian", "Amharic", "Arabic", "Armenian", "Azerbaijani", "Basque", "Belarusian", "Bengali",
    "Bosnian", "Bulgarian", "Burmese", "Catalan", "Cebuano", "Chichewa", "Chinese (Simplified)", "Chinese (Traditional)",
    "Corsican", "Croatian", "Czech", "Danish", "Dutch", "English", "Esperanto", "Estonian", "Filipino", "Finnish",
    "French", "Frisian", "Galician", "Georgian", "German", "Greek", "Gujarati", "Haitian Creole", "Hausa", "Hawaiian",
    "Hebrew", "Hindi", "Hmong", "Hungarian", "Icelandic", "Igbo", "Indonesian", "Irish", "Italian", "Japanese", "Javanese",
    "Kannada", "Kazakh", "Khmer", "Kinyarwanda", "Korean", "Kurdish", "Kyrgyz", "Lao", "Latin", "Latvian", "Lithuanian",
    "Luxembourgish", "Macedonian", "Malagasy", "Malay", "Malayalam", "Maltese", "Maori", "Marathi", "Mongolian", "Nepali",
    "Norwegian", "Odia", "Pashto", "Persian", "Polish", "Portuguese", "Punjabi", "Romanian", "Russian", "Samoan", "Scots Gaelic",
    "Serbian", "Sesotho", "Shona", "Sindhi", "Sinhala", "Slovak", "Slovenian", "Somali", "Spanish", "Sundanese", "Swahili",
    "Swedish", "Tajik", "Tamil", "Tatar", "Telugu", "Thai", "Turkish", "Turkmen", "Ukrainian", "Urdu", "Uyghur", "Uzbek",
    "Vietnamese", "Welsh", "Xhosa", "Yiddish", "Yoruba", "Zulu"
];


export const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Armenia",
    "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados",
    "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina",
    "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia",
    "Cameroon", "Canada", "Cape Verde", "Central African Republic", "Chad", "Chile",
    "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus",
    "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador",
    "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia",
    "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece",
    "Grenada", "Guatemala", "Guinea", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland",
    "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan",
    "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia",
    "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
    "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius",
    "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar",
    "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
    "North Korea", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea",
    "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia",
    "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Samoa", "San Marino", "Saudi Arabia",
    "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia",
    "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain",
    "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Tajikistan",
    "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey",
    "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom",
    "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela",
    "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];