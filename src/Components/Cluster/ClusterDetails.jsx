import React, { useEffect, useState } from 'react'
import upicon from "../../assets/images/upIcon.png";
import downicon from "../../assets/images/downIcon.png";
import plusicon from "../../assets/images/plus.png";
import checkedIcon from "../../assets/images/checked.png";
import uncheckIcon from "../../assets/images/unchecked.svg";
import filter from "../../assets/images/filter.png";
import editbtn from "../../assets/images/edit-btn.png";
import deletebtn from "../../assets/images/delete-btn.png";
import editing from "../../assets/images/editing.png";
import restart from "../../assets/images/restart.png";
import disabled from "../../assets/images/disabled.png";

import { useLocation, useParams } from 'react-router-dom';
import { authorizationHeaders, Axios } from '../../helper/Axios';
import { toast } from 'react-toastify';

import pauseIcon from "../../assets/images/pause.png"; // running state
import videoIcon from "../../assets/images/video.png"; // stopped state
import DeleteVpc from '../Modal/Delete/DeleteVpc';



const ClusterDetails = () => {

    const { id } = useParams();
    const location = useLocation();
    const token = localStorage.getItem("jwt_token");


    const { family_id, cluster_name, region, cluster_type, status } = location.state || {};


    const [getClusterDetail, setGetClusterDetail] = useState({});

    const [isRunning, setIsRunning] = useState(status === "Running");
    const [loading, setLoading] = useState(false);

    const [clusterDeleteLoader, setClusterDeleteLoader] = useState(false);
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    }

    const GetClusterDetails = async () => {
        try {
            const res = await Axios.get(`/clusters?family_id=${family_id}&region=${region}&cluster_name=${cluster_name}`, authorizationHeaders());
            console.log("Get-ClusterDetails", res);


            if (res.data?.statusCode === 200) {
                setGetClusterDetail(res?.data?.data);
            }
            else {
                toast.error(res.data?.message);
            }

        } catch (err) {
            console.error("Error Get-ClusterDetails++", err);

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

    const handleClusterToggle = async () => {
        setLoading(true);

        const url = getClusterDetail?.status === "running"
            ? "/clusters/stopCluster"
            : "/clusters/startCluster";

        const payload = {
            family_id: family_id,
            cluster_name: cluster_name,
            region: region,
        };

        try {
            // const res = await Axios.post(url, {
            //     family_id,
            //     cluster_name,
            //     region,
            // });
            const res = await Axios.post(url, payload, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                }
            });

            if (res?.data?.statusCode === 200) {
                toast.success(res?.data?.message);
                // setIsRunning(!isRunning); // toggle state
                GetClusterDetails();
            } else {
                toast.error(res?.data?.message || "Unexpected response");
            }
        } catch (err) {
            console.error(err);
            toast.error(err?.response?.data?.message || "API error");
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async () => {
        setClusterDeleteLoader(true);

        try {
            const res = await Axios.delete(`/clusters`, {
                data: { cluster_name: cluster_name, cluster_type: cluster_type, family_id: family_id },
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            }
            );

            if (res?.data?.statusCode === 200) {
                toast.success(res.data?.message);
                handleClose();
                GetClusterDetails();
            }
            else {
                toast.error(res.data?.message);
            }

        } catch (err) {
            console.error("Error-Delete-Clusters++", err);

            if (err?.response?.data?.statusCode === 500) {
                toast.error(err?.response?.data?.message);
            }
        } finally {
            setClusterDeleteLoader(false);
        }
    }


    useEffect(() => {
        GetClusterDetails();
    }, [family_id, region, cluster_name]);

    return (
        <>
            {/* Loader Overlay */}
            {loading && (
                <div className="loader-overlay-cluster">
                    <div className="loader-cluster"></div>
                </div>
            )}

            <div className={`cluster_detail`}>
                <div className="add-section row">
                    <div className="col-lg-12">
                        {/* <p className="add-title">New_Cluster</p> */}
                        <p className="add-title">{cluster_name}</p>
                    </div>

                    <div className="top_btn mt-2">
                        {/* <button type="button" className="detail-btn">
                                    <img src={editing} className='img-fluid me-2' />
                                    Edit
                                </button>

                                <button type="button" className="detail-btn">
                                    <img src={restart} className='img-fluid me-2' />
                                    Restart
                                </button> */}


                        {
                            getClusterDetail?.status !== "terminated" && (
                                <button type="button" className="detail-btn" style={{ padding: '14px' }} onClick={() => {
                                    setShow(true)
                                }}>
                                    <img src={disabled} className='img-fluid me-2' />
                                    Terminate
                                </button>
                            )
                        }

                        {/* <button type="button" className="detail-btn">
                                        <img src={pause} className='img-fluid me-2' />
                                        Stop
                                    </button> */}
                        {/* Start/Stop Cluster Button */}

                        {
                            (getClusterDetail?.status === "running" || getClusterDetail?.status === "stopped") && (
                                <button
                                    type="button"
                                    className="detail-btn"
                                    onClick={handleClusterToggle}
                                    disabled={loading}
                                >
                                    <img
                                        src={getClusterDetail?.status === "running" ? pauseIcon : videoIcon}
                                        className="img-fluid me-2"
                                        alt={getClusterDetail?.status === "running" ? "Pause" : "Start"}
                                        style={{ height: '22px', width: '22px' }}
                                    />
                                    {getClusterDetail?.status === "running" ? "Stop" : "Start"}
                                </button>
                            )
                        }

                    </div>
                </div>



                <section className='content-section mt-4'>
                    <div className="second mt-3 mt-lg-4">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="fisrt mt-4 mb-3 mb-lg-4">
                                    <div className="row justify-content-between align-items-center">
                                        <div className="col-lg-6 mt-3 mt-lg-0  d-flex align-items-center">
                                            <div className='table-title active cursor-pointer'>
                                                Configuration
                                            </div>

                                            <div className='table-title cursor-pointer'>
                                                Events logs
                                            </div>

                                            <div className='table-title cursor-pointer'>
                                                libraries
                                            </div>
                                        </div>

                                        <div className="col-lg-6 d-flex align-items-center justify-content-end">
                                            <div>
                                                <button className="filter boreder-0 " type="button">
                                                    <img src={filter} className='me-2' /> Filter
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="second table-responsive mb-3">

                                    <div className='table-title'>
                                        Cluster
                                    </div>

                                    <table>
                                        <thead>
                                            <tr>
                                                <th>
                                                    Cluster Name
                                                </th>
                                                <th>
                                                    Status
                                                </th>
                                                <th>
                                                    Created By
                                                </th>
                                                <th>
                                                    Creation Date
                                                </th>
                                                <th>Region</th>
                                                <th>
                                                    {getClusterDetail?.cluster_type === 'distributed' && "Auto scaling"}
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    {getClusterDetail?.cluster_name || '-'}
                                                </td>
                                                <td className={`running ${['creating', 'initializing', 'running', 'starting'].includes(getClusterDetail?.status)
                                                    ? 'green'
                                                    : 'red'
                                                    }`}>
                                                    {/* Running */}
                                                    {/* {getClusterDetail?.status === "Running" ? "Running" : getClusterDetail?.status === "Stopped" ? "Stopped" : "Creating"} */}
                                                    {getClusterDetail?.status || '-'}
                                                </td>
                                                <td>
                                                    {getClusterDetail?.created_by || '-'}
                                                </td>
                                                <td>
                                                    {/* 2025-04-03 12:56:11 NZST */}
                                                    {new Date(getClusterDetail?.created_at).toLocaleDateString('en-GB', {
                                                        day: '2-digit',
                                                        month: 'long',
                                                        year: 'numeric'
                                                    })}
                                                </td>
                                                <td>
                                                    {/* us-central1 */}
                                                    {getClusterDetail?.region || '-'}
                                                </td>
                                                <td className={`${getClusterDetail?.cluster_type === 'distributed' ? getClusterDetail?.asg === false ? 'enabled red' : 'enabled green' : ''}`}>
                                                    {getClusterDetail?.cluster_type === 'distributed' && (
                                                        getClusterDetail?.asg === false ? "False" : "True"
                                                    )}
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>


                                    <div className='table-title'>
                                        {getClusterDetail?.cluster_type === 'distributed' && "Master"} Compute Resources
                                    </div>

                                    <table>
                                        <thead>
                                            <tr>
                                                <th>
                                                    Node Type
                                                </th>
                                                <th>
                                                    CPU per Node
                                                </th>
                                                <th>
                                                    Memory per Node
                                                </th>
                                                <th>
                                                    {/* Auto scaling */}
                                                </th>
                                                <th>
                                                    {/* Number of Nodes */}
                                                </th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    {/* n1-standard-4 */}
                                                    {getClusterDetail?.instance_type || "-"}
                                                </td>
                                                <td>
                                                    {/* 4 vCPU */}
                                                    {getClusterDetail?.vcpus || 0}
                                                </td>
                                                <td>
                                                    {/* 16 GB RAM */}
                                                    {getClusterDetail?.memory || 0}
                                                </td>
                                                <td
                                                // className={`enabled ${getClusterDetail?.asg === false ? 'red' : 'green'}`}
                                                >
                                                    {/* {getClusterDetail?.asg === false ? "False" : "True"} */}
                                                </td>
                                                <td>
                                                    {/* {getClusterDetail?.number_of_nodes || "-"} */}
                                                </td>
                                                <td></td>
                                            </tr>

                                        </tbody>
                                    </table>


                                    {getClusterDetail?.cluster_type === 'distributed' && (
                                        <>
                                            <div className='table-title'>
                                                Worker Compute Resources
                                            </div>

                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th>
                                                            Number of Nodes
                                                        </th>
                                                        <th>
                                                            Node Type
                                                        </th>
                                                        <th>
                                                            CPU per Node
                                                        </th>
                                                        <th>
                                                            Memory per Node
                                                        </th>
                                                        <th>
                                                            {/* Auto scaling */}
                                                        </th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            {getClusterDetail?.worker_details?.number_of_nodes || "-"}
                                                        </td>
                                                        <td>
                                                            {/* n1-standard-4 */}
                                                            {getClusterDetail?.worker_details?.nodes[0]?.instance_type || "-"}
                                                        </td>
                                                        <td>
                                                            {/* 4 vCPU */}
                                                            {getClusterDetail?.worker_details?.vcpus || 0}
                                                        </td>
                                                        <td>
                                                            {/* 16 GB RAM */}
                                                            {getClusterDetail?.worker_details?.memory || 0}
                                                        </td>
                                                        <td
                                                        // className={`enabled ${getClusterDetail?.asg === false ? 'red' : 'green'}`}
                                                        >
                                                            {/* {getClusterDetail?.asg === false ? "False" : "True"} */}
                                                        </td>
                                                        <td></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </>
                                    )}



                                    <div className='table-title'>
                                        {getClusterDetail?.cluster_type === 'distributed' && "Master"} Storage Configuration
                                    </div>

                                    <table>
                                        <thead>
                                            <tr>
                                                <th>
                                                    Disk Type
                                                </th>
                                                <th>
                                                    Disk Size
                                                </th>
                                                <th>
                                                    Data Encryption
                                                </th>
                                                <th>
                                                    {/* Creation Date */}
                                                </th>
                                                <th>
                                                    {/* Region */}
                                                </th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    {/* SSD */}
                                                    {getClusterDetail?.storage?.disk_type || "-"}
                                                </td>
                                                <td>
                                                    {/* 100 GB */}
                                                    {getClusterDetail?.storage?.disk_size || "-"}
                                                </td>
                                                <td className={`encryption ${getClusterDetail?.storage?.encryption === 'Enabled' ? 'green' : 'red'} `}>
                                                    {/* Enabled */}
                                                    {getClusterDetail?.storage?.encryption || "-"}
                                                </td>
                                                <td>
                                                    {/* 2025-04-03 12:56:11 NZST */}
                                                </td>
                                                <td>
                                                    {/* us-central1 */}
                                                </td>
                                                <td></td>
                                            </tr>

                                        </tbody>
                                    </table>

                                    {getClusterDetail?.cluster_type === 'distributed' && (
                                        <>
                                            <div className='table-title'>
                                                Worker Storage Configuration
                                            </div>

                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th>
                                                            Disk Type
                                                        </th>
                                                        <th>
                                                            Disk Size
                                                        </th>
                                                        <th>
                                                            Data Encryption
                                                        </th>
                                                        <th>
                                                            {/* Creation Date */}
                                                        </th>
                                                        <th>
                                                            {/* Region */}
                                                        </th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            {/* SSD */}
                                                            {getClusterDetail?.worker_details?.storage?.disk_type || "-"}
                                                        </td>
                                                        <td>
                                                            {/* 100 GB */}
                                                            {getClusterDetail?.worker_details?.storage?.disk_size || "-"}
                                                        </td>
                                                        <td className={`encryption ${getClusterDetail?.worker_details?.storage?.encryption === 'Enabled' ? 'green' : 'red'} `}>
                                                            {/* Enabled */}
                                                            {getClusterDetail?.worker_details?.storage?.encryption || "-"}
                                                        </td>
                                                        <td>
                                                            {/* 2025-04-03 12:56:11 NZST */}
                                                        </td>
                                                        <td>
                                                            {/* us-central1 */}
                                                        </td>
                                                        <td></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </>
                                    )}

                                    <div className='table-title'>
                                        Network Settings
                                    </div>

                                    <table>
                                        <thead>
                                            <tr>
                                                <th>
                                                    VPC Network
                                                </th>
                                                <th>
                                                    Subnetwork
                                                </th>
                                                <th>
                                                    {/* IP Allocation */}
                                                </th>
                                                <th>
                                                    {/* Creation Date */}
                                                </th>
                                                <th>
                                                    {/* Region */}
                                                </th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    {/* default */}
                                                    {getClusterDetail?.vpc_id || '-'}
                                                </td>
                                                <td>
                                                    {/* default-subnet */}
                                                    {getClusterDetail?.subnet_id || '-'}
                                                </td>
                                                <td>
                                                    {/* {getClusterDetail?.private_ip || '-'} */}
                                                </td>
                                                <td>
                                                    {/* 2025-04-03 12:56:11 NZST */}
                                                </td>
                                                <td>
                                                    {/* us-central1 */}
                                                </td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <DeleteVpc show={show} handleClose={handleClose} handleDelete={handleDelete} isDeleteLoading={clusterDeleteLoader} />

            </div>
        </>
    )
}

export default ClusterDetails;