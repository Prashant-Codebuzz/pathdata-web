import { Tooltip } from 'react-tooltip';
import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import plusicon from "../../assets/images/plus.png";
import arrowright from "../../assets/images/arrow-right.png";
import filter from "../../assets/images/filter.png";
import upicon from "../../assets/images/upIcon.png";
import downicon from "../../assets/images/downIcon.png";
import checkedIcon from "../../assets/images/checked.png";
import uncheckIcon from "../../assets/images/unchecked.svg";
import { authorizationHeaders, Axios } from '../../helper/Axios';
import { toast } from 'react-toastify';
import DeleteVpc from '../../Components/Modal/Delete/DeleteVpc';

import settingbtn from "../../assets/images/setting-btn.png";
import editbtn from "../../assets/images/edit-btn.png";
import deletebtn from "../../assets/images/delete-btn.png";
import organization_family from "../../assets/images/organization_family.png";
import Delete from "../../assets/images/delete.png";
import Leave from '../../Components/Modal/Leave/Leave';
import Invites from '../../Components/Modal/Invites/Invites';

const initialState = {
    acceptModal: false,
}

const PendingInvites = () => {

    const navigate = useNavigate();
    const token = localStorage.getItem("jwt_token");

    const [selectedRows, setSelectedRows] = useState([]);
    const [sortOrder, setSortOrder] = useState('asc');
    const [isChecked, setIsChecked] = useState(false);

    const [invitesData, setInvitesData] = useState([]);

    const [show, setShow] = useState(initialState);

    const [verifyType, setVerifyType] = useState(null);
    const [verifyId, setVerifyId] = useState(null);
    const [isVerifyLoading, setIsVerifyLoading] = useState(false);

    const handleClose = () => {
        setShow(initialState);
        setVerifyId(null);
        setVerifyType(null);
    }




    const toggleCheckbox = () => {
        if (isChecked) {
            setSelectedRows([]);
        } else {
            setSelectedRows(invitesData.map((_, index) => index));
        }
        setIsChecked(!isChecked);
    };

    // Handle checkbox selection
    const handleCheckboxChange = (index) => {
        if (selectedRows.includes(index)) {
            setSelectedRows(selectedRows.filter((i) => i !== index));
        } else {
            setSelectedRows([...selectedRows, index]);
        }
    };


    useEffect(() => {
        if (selectedRows.length === invitesData?.length) {
            setIsChecked(true);
        } else {
            setIsChecked(false);
        }
    }, [selectedRows, invitesData?.length]);

    // Sort table by column (e.g., by Name)
    const handleSort = () => {
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    };


    const GetInvites = async () => {
        try {
            const res = await Axios.get(`/invites`, authorizationHeaders());

            if (res.data?.statusCode === 200) {
                setInvitesData(res.data.data);
            }
            else {
                toast.error(res.data?.message);
            }
        } catch (err) {
            console.error("Error GetInvites++", err?.response?.data?.statusCode);

            if (err?.message === "Network Error") {
                setError(err.message);
            }
            if (err?.response?.data?.statusCode === "440") {
                toast.error("Session expired. Please log in again.");
                localStorage.clear();
                localStorage.setItem("openCloudOption", false);
                navigate("/sign-in");
            } else {
                toast.error(err?.response?.data?.message || "An error occurred");
            }
        }
    }



    const handleVerify = async () => {
        setIsVerifyLoading(true);

        try {
            const payload = verifyType === "org" ? { org_id: verifyId } : { family_id: verifyId };

            const res = await Axios.post(`/verify_user`,
                payload,
                authorizationHeaders());

            if (res?.data?.statusCode === 200) {
                toast.success(res.data?.message);
                handleClose();
                GetInvites();



                
            }
            else {
                toast.error(res.data?.message);
            }

        } catch (err) {
            console.error("Error-Verify++", err);

            if (err?.response?.data?.statusCode === 500) {
                toast.error(err?.response?.data?.message);
            }
        } finally {
            setIsVerifyLoading(false);
        }
    }


    useEffect(() => {
        GetInvites();
    }, []);

    return (
        <>



            <section className='content-section mt-4'>
                <div className="second mt-3 mt-lg-4">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="fisrt mb-3 mb-lg-5">
                                <div className="row justify-content-between align-items-center">
                                    <div className="col-lg-6 col-xl-3 mt-3 mt-lg-0 d-flex align-items-center ">
                                        <div className='table-title'>
                                            Invitation
                                        </div>

                                        {/* <button
                                            className="add-btn delete-btn boreder-0 ms-3"
                                            type="button"
                                            disabled={selectedRows.length === 0}
                                        >
                                            <img src={Delete} alt="" />
                                        </button>

                                        {selectedRows.length > 0 && (
                                            <span className="row-text ms-3">{selectedRows.length} row selected</span>
                                        )} */}
                                    </div>

                                    <div className="col-lg-6 d-flex align-items-center justify-content-end">
                                        <div>
                                            <button className="filter boreder-0 " type="button">
                                                <img src={filter} className='me-2' /> Filter
                                            </button>
                                        </div>

                                        <div className='ms-3 me-3'>
                                            <div className="pseudo-search">
                                                <button className="fa fa-search" type="submit" />

                                                <input type="text" placeholder="Search Invitation" autoFocus required />
                                            </div>
                                        </div>

                                        {/* <button className="add-btn boreder-0 " type="button">
                                            Create Invitation
                                            <img src={plusicon} className='ms-2' />
                                        </button> */}
                                    </div>
                                </div>
                            </div>

                            <div className="second table-responsive">
                                {(!invitesData || invitesData.length === 0) ? (
                                    <div className="data-not-found my-5">
                                        Data Not Found
                                    </div>
                                ) : (
                                    <>

                                        <table>
                                            <thead>
                                                <tr>
                                                    {/* <th style={{ width: '50px', paddingLeft: '30px' }}>
                                                        <div className="d-flex justify-content-left align-items-center">
                                                            <div onClick={toggleCheckbox} >
                                                                {isChecked ?
                                                                    <img src={checkedIcon} className='checkbox-view' /> :
                                                                    <img src={uncheckIcon} className='checkbox-view' />
                                                                }
                                                            </div>
                                                        </div>
                                                    </th> */}
                                                    <th onClick={handleSort} style={{ cursor: 'pointer', display: 'flex', flexDirection: 'row' }}>
                                                        <div className="d-flex justify-content-left align-items-center me-3">
                                                            <div
                                                                // className={`custom-checkbox ${isChecked ? 'checked' : ''}`}
                                                                onClick={toggleCheckbox}>
                                                                {isChecked ?
                                                                    <img src={checkedIcon} className='checkbox-view' /> :
                                                                    <img src={uncheckIcon} className='checkbox-view' />
                                                                }
                                                            </div>
                                                        </div>
                                                        <div className='mt-1'>
                                                            <p> Name {sortOrder === 'asc' ? <img src={upicon} style={{ paddingLeft: '10px' }} /> : <img src={downicon} style={{ paddingLeft: '10px' }} />}</p>
                                                        </div>
                                                    </th>
                                                    <th onClick={handleSort} style={{ cursor: 'pointer' }}>
                                                        ROLE
                                                        {/* {sortOrder === 'asc' ? <img src={upicon} style={{ paddingLeft: '10px' }} /> : <img src={downicon} style={{ paddingLeft: '10px' }} />} */}
                                                    </th>
                                                    <th onClick={handleSort} style={{ cursor: 'pointer' }}>
                                                        STATUS
                                                        {/* {sortOrder === 'asc' ? <img src={upicon} style={{ paddingLeft: '10px' }} /> : <img src={downicon} style={{ paddingLeft: '10px' }} />} */}
                                                    </th>
                                                    <th>ACTION</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {invitesData?.map((i, index) => (
                                                    <tr key={index}>
                                                        {/* <td style={{ width: '50px', paddingLeft: '30px' }}>
                                                            <div
                                                                onClick={() => handleCheckboxChange(index)}
                                                            >
                                                                {selectedRows.includes(index) ? (
                                                                    <img src={checkedIcon} className='checkbox-view' />
                                                                ) : (
                                                                    <img src={uncheckIcon} className='checkbox-view' />

                                                                )}
                                                            </div>
                                                        </td> */}
                                                        <td>
                                                            {i.name || "-"}
                                                        </td>
                                                        <td>
                                                            {i.role || "-"}
                                                        </td>
                                                        <td>
                                                            {i.status || "-"}
                                                        </td>
                                                        <td>
                                                            <button
                                                                type="button"
                                                                className="accept boreder-0"
                                                                onClick={() => {
                                                                    setShow({ ...show, acceptModal: true });
                                                                    // setVerifyId(i?.org_id ? i?.org_id : i?.family_id);

                                                                    if (i?.org_id) {
                                                                        setVerifyId(i?.org_id);
                                                                        setVerifyType('org');
                                                                    }
                                                                    else {
                                                                        setVerifyId(i?.family_id);
                                                                        setVerifyType('family');
                                                                    }
                                                                }}
                                                            >
                                                                Accept
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </>
                                )}

                                {/* <Pagination /> */}

                            </div>
                        </div>
                    </div>
                </div>
            </section >

            <Invites show={show.acceptModal} handleClose={handleClose} handleVerify={handleVerify} isVerifyLoading={isVerifyLoading} role={"invitation"} />

        </>
    )
}

export default PendingInvites;