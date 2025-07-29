import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { authorizationHeaders, Axios } from '../../../helper/Axios';
import { useNavigate } from 'react-router-dom';

const initialState = {
    role_name: "",
    description: "",
    permissions: "",
};

const EditRole = ({ show, handleClose, GetRoleList, role }) => {

    const navigate = useNavigate();

    const familyId = localStorage.getItem("family_id");
    const UserOrgId = localStorage.getItem("user_org_id");

    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState(initialState);
    console.log(formData);

    const handleCloseHide = () => {
        handleClose();
        setFormData(initialState);
    }

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: files ? files[0] : value,
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        const permissionsClean = formData?.permissions?.replace(/\\\\/g, '')?.replace(/\\"/g, '"');


        try {
            const url = UserOrgId
                ? `/roles`
                : `/roles`;

            // const payload = { family_id: familyId, ...formData }

            const payload = {
                ...formData,
                permissions: permissionsClean,
                ...(UserOrgId ? { org_id: UserOrgId } : { family_id: familyId }),
            }

            const res = await Axios.patch(url, payload, authorizationHeaders());

            if (res?.data?.statusCode === 200) {
                toast.success(res?.data?.message);
                setFormData(initialState);
                handleCloseHide();
                GetRoleList();
            } else {
                toast.error(res?.data?.message);
            }
        } catch (err) {
            console.error("Error Patch Role++", err);

            if (err?.message === "Network Error") {
                toast.error(err?.message);
            }
            if (err?.response?.data?.statusCode === 400) {
                toast.error(err?.response?.data?.message);
            }
            if (err?.response?.data?.statusCode === "440") {
                toast.error("Session expired. Please log in again.");
                localStorage.clear();
                localStorage.setItem("openCloudOption", false);
                navigate("/sign-in");
            } else {
                toast.error(err?.response?.data?.message || "An error occurred");
            }
        } finally {
            setLoading(false);
        }
    }


    useEffect(() => {
        setFormData({
            role_name: role?.role_name,
            description: role?.description,
            permissions: JSON.stringify(role?.permissions),
        });
    }, [role]);


    return (
        <Modal show={show} onHide={handleCloseHide} centered className='user-modal'>
            <div className="modal-header">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleCloseHide}></button>
            </div>
            <div className="modal-body mt-3">
                <div className="content text-center">
                    <span className="mb-1 delete-modal-title">Edit Role</span>
                    <p className='mt-3 mt-lg-4'>
                        Edit a user role by giving it a name, a short
                        description, and defining what it can do using permissions
                        in JSON format.
                    </p>
                </div>
                <div className="mt-4">
                    <form onSubmit={handleSubmit}>
                        <div className="add-input d-inline mb-4">
                            <label htmlFor="role_name" className="form-label">Name</label>
                            <input
                                type="text"
                                id='role_name'
                                name='role_name'
                                placeholder="Enter Name"
                                className='mb-4'
                                value={formData.role_name}
                                onChange={handleChange}
                                autoFocus
                                readOnly
                            />
                        </div>
                        <div className="add-input d-inline mb-4">
                            <label htmlFor="description" className="form-label">Description</label>
                            <input
                                type="text"
                                id='description'
                                name='description'
                                placeholder="Describe what this role is for"
                                className='mb-4'
                                value={formData.description}
                                onChange={handleChange}
                                autoFocus
                                required
                            />
                        </div>
                        <div className="add-input d-inline mb-4">
                            <label htmlFor="permissions" className="form-label">Permissions (JSON)</label>
                            <input
                                type="text"
                                id='permissions'
                                name='permissions'
                                placeholder="Define custom permissions in JSON format"
                                className='mb-4'
                                value={formData.permissions}
                                onChange={handleChange}
                                autoFocus
                                required
                            />
                        </div>

                        <div className="add-input d-inline mb-4">
                            <span>Need help? See AWS IAM JSON examples</span>
                        </div>

                        <div className="mt-4 w-100 d-flex justify-content-between">
                            <button
                                type="submit"
                                // className="save-button w-50 mt-2"
                                className={`w-50 mt-2 save-button ${loading ? 'loading' : ''} `}
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

                            <button type="submit" className="cancel-button w-50 mt-2" onClick={handleCloseHide}>
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Modal>
    )
}

export default EditRole