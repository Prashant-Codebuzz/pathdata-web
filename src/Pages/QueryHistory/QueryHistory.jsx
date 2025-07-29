import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import upicon from "../../assets/images/upIcon.png";
import downicon from "../../assets/images/downIcon.png";
import plusicon from "../../assets/images/plus.png";
import checkedIcon from "../../assets/images/checked.png";
import uncheckIcon from "../../assets/images/unchecked.svg";
import rightarrow from "../../assets/images/right-arrow.png";
import editing from "../../assets/images/editing.png";
import filter from "../../assets/images/filter.png";
import bottomarrow from "../../assets/images/bottom-arrow.png";
import videoIcon from "../../assets/images/video.png";
import deletebtn from "../../assets/images/delete-btn.png";
import restart from "../../assets/images/restart.png";
import { toast } from 'react-toastify';

const QueryHistory = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const [selectedRows, setSelectedRows] = useState([]);
    const [sortOrder, setSortOrder] = useState('asc');
    const [isChecked, setIsChecked] = useState(false);
    const [queryHistoryList, setQueryHistoryList] = useState([
        { mode: 'NL', query: 'How many users signed up in April?', status: 'Succeesed', startedAt: ' 1 March, 2025 12:43', rows: 154 },
        { mode: 'SQL', query: ' Where is test sales in 2023?', status: 'Failed', startedAt: ' 1 March, 2025 12:45', rows: 0 },
        { mode: 'NL', query: ' Show top 10 selling categories', status: 'Succeesed', startedAt: ' 1 March, 2025 12:34', rows: 10 },
        { mode: 'SQL', query: "SELECT COUNT(*) FROM orders WHERE status = 'cancelled'", status: 'Failed', startedAt: ' 1 March, 2025 12:12', rows: 0 },
        { mode: 'NL', query: "SELECT * FROM users WHERE age > 30", status: 'Succeesed', startedAt: ' 1 March, 2025 12:34', rows: 10 },
    ]);

    const [loader, setLoader] = useState(false);


    const toggleCheckbox = () => {
        if (isChecked) {
            setSelectedRows([]);
        } else {
            setSelectedRows(queryHistoryList.map((_, index) => index));
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
        if (selectedRows.length === queryHistoryList?.length) {
            setIsChecked(true);
        } else {
            setIsChecked(false);
        }
    }, [selectedRows, queryHistoryList?.length]);

    // Sort table by column (e.g., by Name)
    const handleSort = () => {
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    };

    return (
        <>

            <section className='content-section mt-4'>
                <div className="second mt-3 mt-lg-4">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="fisrt mb-3 mb-lg-5">
                                <div className="row justify-content-between align-items-center">
                                    <div className="col-lg-6 col-xl-3 mt-3 mt-lg-0 ">
                                        <div className='table-title'>
                                            Your History
                                        </div>
                                    </div>
                                </div>

                                <div className='query-interface my-4 d-flex align-items-center'>
                                    <div className='me-3'>
                                        <img src={rightarrow} alt="Right" className='img-fluid' />
                                    </div>

                                    <Link>Query Interface</Link>

                                    <div className='mx-3'>
                                        <img src={rightarrow} alt="Right" className='img-fluid' />
                                    </div>

                                    <Link to="/query-history">History</Link>
                                </div>

                                <div className="query_btn mt-2">
                                    <button type="button" className="q-btn">
                                        <img src={filter} className='img-fluid me-2' />
                                        Filter
                                    </button>

                                    <button type="button" className="q-btn">
                                        Mode
                                        <img src={bottomarrow} className='img-fluid ms-2' />
                                    </button>


                                    <button type="button" className="q-btn">
                                        Status
                                        <img src={bottomarrow} className='img-fluid ms-2' />
                                    </button>

                                    <button type="button" className="q-btn">
                                        Date Range
                                        <img src={bottomarrow} className='img-fluid ms-2' />
                                    </button>
                                </div>
                            </div>

                            <div className="second table-responsive">
                                {(!queryHistoryList || queryHistoryList.length === 0) ? (
                                    <div className="data-not-found my-5">
                                        Data Not Found
                                    </div>
                                ) : (
                                    <>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th className='d-flex'>
                                                        <div className="d-flex justify-content-left align-items-center me-3">
                                                            <div onClick={toggleCheckbox} >
                                                                {isChecked ?
                                                                    <img src={checkedIcon} className='checkbox-view' /> :
                                                                    <img src={uncheckIcon} className='checkbox-view' />
                                                                }
                                                            </div>
                                                        </div>
                                                        <div className='mt-1'>
                                                            <p> Mode</p>
                                                        </div>
                                                    </th>
                                                    <th onClick={handleSort} style={{ cursor: 'pointer' }}>
                                                        Query
                                                    </th>
                                                    <th onClick={handleSort} style={{ cursor: 'pointer' }}>
                                                        Status
                                                    </th>
                                                    <th onClick={handleSort} style={{ cursor: 'pointer' }}>
                                                        Started At
                                                        {sortOrder === 'asc' ? <img src={upicon} style={{ paddingLeft: '10px' }} /> : <img src={downicon} style={{ paddingLeft: '10px' }} />}
                                                    </th>
                                                    <th onClick={handleSort} style={{ cursor: 'pointer' }}>
                                                        Rows
                                                    </th>
                                                    <th>
                                                        Action
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {queryHistoryList?.map((item, index) => (
                                                    <tr key={index}>
                                                        <td style={{ width: '50px' }}>
                                                            {item.mode}
                                                        </td>
                                                        <td>
                                                            {/* <div onClick={() => navigate(`/cluster-details/${item?.id}`)} className='text-decoration-underline'>
                                                                {item.cluster_name}
                                                            </div> */}
                                                            <div
                                                                onClick={() =>
                                                                    navigate(`/query-execution`)
                                                                }
                                                                className="cursor-pointer"
                                                            >
                                                                {item.query}
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div
                                                                className={`querystatus ${item.status === "Succeesed" ? 'green' : 'red'}`}
                                                            >
                                                                {item.status}
                                                            </div>
                                                        </td>
                                                        <td>
                                                            {/* {new Date(item.startedAt).toLocaleDateString('en-GB', {
                                                                day: '2-digit',
                                                                month: 'long',
                                                                year: 'numeric'
                                                            })} */}
                                                            {item.startedAt}
                                                        </td>
                                                        <td>
                                                            {item.rows}
                                                        </td>
                                                        <td>
                                                            <div>
                                                                <img
                                                                    src={deletebtn}
                                                                    alt="Delete"
                                                                    className='cursor-pointer me-4'
                                                                />

                                                                <img
                                                                    src={restart}
                                                                    alt="ReStart"
                                                                    className='cursor-pointer'
                                                                />
                                                            </div>
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
            </section>

        </>
    )
}

export default QueryHistory;