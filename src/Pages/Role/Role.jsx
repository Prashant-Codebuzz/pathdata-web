import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom"
import setting2 from "../../assets/images/setting2.png";
import edit from "../../assets/images/edit.png";
import Delete from "../../assets/images/delete.png";
import editbtn from "../../assets/images/edit-btn.png";
import deletebtn from "../../assets/images/delete-btn.png";
import plusicon from "../../assets/images/plus.png";
import back from "../../assets/images/back.png";
import member2 from "../../assets/images/member2.png";
import checkedIcon from "../../assets/images/checked.png";
import uncheckIcon from "../../assets/images/unchecked.svg";
import upicon from "../../assets/images/upIcon.png";
import filter from "../../assets/images/filter.png";
import downicon from "../../assets/images/downIcon.png";
import usericon from "../../assets/images/usericon.png";
import Pagination from '../../Components/Pagination/Pagination';
import { authorizationHeaders, Axios } from '../../helper/Axios';
import { toast } from 'react-toastify';
import { Switch } from 'antd';
import DeleteVpc from '../../Components/Modal/Delete/DeleteVpc';
import CreateUsers from '../../Components/Modal/Users/CreateUsers';
import CreateRole from '../../Components/Modal/Role/CreateRole';
import EditRole from '../../Components/Modal/Role/EditRole';

const initialState = {
    createRole: false,
    editRole: false,
    deleteRole: false,
}

const Role = () => {


    const navigate = useNavigate();

    const token = localStorage.getItem("jwt_token");
    const familyId = localStorage.getItem("family_id");
    const UserOrgId = localStorage.getItem("user_org_id");

    const [selectedRows, setSelectedRows] = useState([]);
    const [sortOrder, setSortOrder] = useState('asc');
    const [isChecked, setIsChecked] = useState(false);
    const [isActivate, setIsActivate] = useState(true); // Default is true
    const [roleList, setRoleList] = useState([]);
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState(null);

    console.log(roleList);

    const [editRole, setEditRole] = useState({});

    const [show, setShow] = useState(initialState);
    const [deleteId, setDeleteId] = useState("");

    const handleClose = () => {
        setShow(initialState);
        setDeleteId('')
    }


    const GetRoleList = async () => {
        setLoader(true);

        try {
            const url = UserOrgId
                ? `/roles?org_id=${UserOrgId}`
                : `/roles?family_id=${familyId}`;

            const res = await Axios.get(url, authorizationHeaders());

            if (res?.data?.statusCode === 200) {
                setRoleList(res?.data?.data);
            }
            else {
                toast.error(res.data?.message);
            }

        } catch (err) {
            console.error("Error Role++", err);

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
        } finally {
            setLoader(false);
        }
    }

    useEffect(() => {
        GetRoleList();
    }, [])

    const handleDelete = async () => {
        handleClose();

        try {
            const url = UserOrgId
                ? `/roles`
                : `/roles`;

            const payload = UserOrgId
                ? { role_name: deleteId, org_id: UserOrgId }
                : { role_name: deleteId, family_id: familyId };

            const res = await Axios.delete(url, {
                data: payload,
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            }
            );

            if (res?.data?.statusCode === 200) {
                toast.success(res.data?.message);
                handleClose();
                GetRoleList();
            }
            else {
                toast.error(res.data?.message);
            }
        } catch (err) {
            console.error("Error Delete Role++", err);
        }
    }


    const toggleCheckbox = () => {
        if (isChecked) {
            setSelectedRows([]);
        } else {
            setSelectedRows(roleList.map((_, index) => index));
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

    // Sort table by column (e.g., by Name)
    const handleSort = () => {
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    };

    useEffect(() => {
        if (selectedRows.length === roleList?.length) {
            setIsChecked(true);
        } else {
            setIsChecked(false);
        }
    }, [selectedRows, roleList?.length]);




    return (
        <>

            <section className='content-section mt-4'>
                <div className="second mt-3 mt-lg-4">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="fisrt mb-3 mb-lg-5">
                                <div className="row justify-content-between align-items-center">
                                    <div className="col-lg-6 col-xl-3 mt-3 mt-lg-0">
                                        <div className='table-title d-flex align-items-center'>
                                            <img src={back} className='me-3 cursor-pointer' onClick={() => navigate("/user-management")} /> Roles
                                        </div>
                                    </div>

                                    <div className="col-lg-6 d-flex align-items-center justify-content-end">
                                        {/* <div>
                                            <button className="filter boreder-0 " type="button">
                                                <img src={filter} className='me-2' /> Filter
                                            </button>
                                        </div>

                                        <div className='ms-3 me-3'>
                                            <div className="pseudo-search">
                                                <button className="fa fa-search" type="submit" />
                                                <input type="text" placeholder="Search Members" autoFocus required />
                                            </div>
                                        </div> */}

                                        <button className="add-btn boreder-0 " type="button"
                                            onClick={() => {
                                                // navigate("/add-member");
                                                setShow((prev) => ({
                                                    prev,
                                                    createRole: true
                                                }))
                                            }}
                                        >
                                            Create Role
                                            <img src={plusicon} className='ms-2' />
                                        </button>

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
                                </div>
                            </div>

                            <div className="second table-responsive">
                                {roleList?.length === 0 ? (
                                    <div className='data-not-found my-5'>
                                        Data Not Found
                                    </div>
                                ) : (
                                    <table>
                                        <thead>
                                            <tr>
                                                <th style={{ width: '50px', paddingLeft: '30px' }}>
                                                    <div>
                                                        <div
                                                            className="d-flex justify-content-left align-items-center"
                                                            onClick={toggleCheckbox}
                                                        >
                                                            {isChecked ?
                                                                <img src={checkedIcon} className='checkbox-view me-2' /> :
                                                                <img src={uncheckIcon} className='checkbox-view me-2' />
                                                            }
                                                            ROLE
                                                        </div>
                                                    </div>
                                                </th>
                                                <th onClick={handleSort} style={{ cursor: 'pointer' }}>Type
                                                    {sortOrder === 'asc' ? <img src={upicon} style={{ paddingLeft: '10px' }} /> : <img src={downicon} style={{ paddingLeft: '10px' }} />}
                                                </th>
                                                <th onClick={handleSort} style={{ cursor: 'pointer' }}>DESCRIPTION
                                                    {sortOrder === 'asc' ? <img src={upicon} style={{ paddingLeft: '10px' }} /> : <img src={downicon} style={{ paddingLeft: '10px' }} />}
                                                </th>
                                                <th onClick={handleSort} style={{ cursor: 'pointer' }}>CREATED AT
                                                    {sortOrder === 'asc' ? <img src={upicon} style={{ paddingLeft: '10px' }} /> : <img src={downicon} style={{ paddingLeft: '10px' }} />}
                                                </th>
                                                {/* <th onClick={handleSort} style={{ cursor: 'pointer' }}>UPDATED AT
                                                    {sortOrder === 'asc' ? <img src={upicon} style={{ paddingLeft: '10px' }} /> : <img src={downicon} style={{ paddingLeft: '10px' }} />}
                                                </th> */}
                                                {/* <th onClick={handleSort} style={{ cursor: 'pointer' }}>Status
                                                {sortOrder === 'asc' ? <img src={upicon} style={{ paddingLeft: '10px' }} /> : <img src={downicon} style={{ paddingLeft: '10px' }} />}
                                            </th> */}
                                                <th onClick={handleSort} style={{ cursor: 'pointer' }}>ACTIONS
                                                    {/* {sortOrder === 'asc' ? <img src={upicon} style={{ paddingLeft: '10px' }} /> : <img src={downicon} style={{ paddingLeft: '10px' }} />} */}
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {roleList?.map((item, index) => {
                                                return (
                                                    <>
                                                        <tr>
                                                            <td style={{ width: '50px', paddingLeft: '30px' }}>
                                                                {/* <div onClick={() => handleCheckboxChange(index)}>
                                                                    {selectedRows.includes(index) ? (
                                                                        <img src={checkedIcon} className='checkbox-view' />
                                                                    ) : (
                                                                        <img src={uncheckIcon} className='checkbox-view' />
                                                                    )}
                                                                </div> */}
                                                                {item?.role_name}
                                                            </td>
                                                            <td>
                                                                {item?.role_type}
                                                            </td>
                                                            <td>
                                                                {item?.description}
                                                            </td>
                                                            <td>
                                                                {item?.createdat}
                                                            </td>
                                                            {/* <td>
                                                                {item?.updatedat}
                                                            </td> */}
                                                            {/* <td>
                                                            <Switch checked={isActivate} onChange={() => handleToggle(item)} />
                                                        </td> */}
                                                            <td>
                                                                <div>
                                                                {item?.role_type === "custom" && (
                                                                    <img src={editbtn} alt="Edit" style={{ cursor: 'pointer' }} className='me-4' onClick={() => {
                                                                        setShow((prev) => ({
                                                                            prev,
                                                                            editRole: true
                                                                        }))
                                                                        setEditRole(item)
                                                                    }} />
                                                                )}

                                                                    <img src={deletebtn} alt="Delete" style={{ cursor: 'pointer' }} onClick={() => {
                                                                        setShow((prev) => ({
                                                                            prev,
                                                                            deleteRole: true
                                                                        }))
                                                                        setDeleteId(item?.role_name)
                                                                    }} />
                                                                    {/* <img src={setting2} alt="Edit" className='ms-3' /> */}
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CreateRole show={show.createRole} handleClose={handleClose} GetRoleList={GetRoleList} />
            <EditRole show={show.editRole} handleClose={handleClose} GetRoleList={GetRoleList} role={editRole} />

            <DeleteVpc show={show.deleteRole} handleClose={handleClose} handleDelete={handleDelete} />

        </>
    )
}

export default Role;    