import React, { useEffect, useState } from 'react';
import setting2 from "../../assets/images/setting2.png";
import edit from "../../assets/images/edit.png";
import Delete from "../../assets/images/delete.png";
import upicon from "../../assets/images/upIcon.png";
import downicon from "../../assets/images/downIcon.png";
import plusicon from "../../assets/images/plus.png";
import { NavLink } from 'react-router-dom';
import checkedIcon from "../../assets/images/checked.png";
import uncheckIcon from "../../assets/images/unchecked.svg";
import Pagination from '../../Components/Pagination/Pagination';
import filter from "../../assets/images/filter.png";

const Database = () => {

    const [selectedRows, setSelectedRows] = useState([]);
    const [sortOrder, setSortOrder] = useState('asc');
    const [isChecked, setIsChecked] = useState(false);

    const databaseList = [
        { id: '1', name: 'Default', description: 'Default Hive Database', url: 'file:/tmp/spark-warehouse', date: 'December 15,2024  at 14:35:36' },
        { id: '2', name: 'Dhruvil', description: 'Demo Database', url: 'file:/s2/dhruvil-demo-test', date: 'January 20,2025 at 12:30:50' }
    ]

    const toggleCheckbox = () => {
        if (isChecked) {
            setSelectedRows([]);
        } else {
            setSelectedRows(databaseList.map((_, index) => index));
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
        if (selectedRows.length === databaseList.length) {
            setIsChecked(true);
        } else {
            setIsChecked(false);
        }
    }, [selectedRows, databaseList.length]);


    // Sort table by column (e.g., by Name)
    const handleSort = () => {
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    };

    return (
        <>

            {/* <section className="title pd">
                <div className="row">
                    <div className="col-12 mt-4 mb-4">
                        <h3>Data Catalog</h3>
                    </div>
                </div>
            </section> */}

            {/* <section className="title pd">
                <div className="row align-items-center">
                    <div className="col-lg-6 mt-4 mb-4">
                        <h3>Welcome back, Jameson 👋</h3>
                    </div>
                </div>
            </section> */}

            <section className='content-section mt-4'>
                <div className="top">
                    <div className="row justify-content-between">
                        <div className="col-lg-6 mb-3 mb-lg-0">
                            <div className="title mb-3 mb-lg-3">Databases <span>(02)</span></div>
                            <p>
                                A database is a set of associate table definitions
                            </p>
                        </div>
                        <div className="col-lg-6 mb-2 mb-lg-0">
                            <div className='d-flex justify-content-end align-items-center'>
                                <div>
                                    <span className='text-end'>Last updated (UTC)</span><br />
                                    <span className='text-end'>January 23, 2025 at  20:46:39</span>
                                </div>
                                <button className="add-btn boreder-0 ms-3" type="button">
                                    <img src={setting2} alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="second mt-3 mt-lg-4">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="fisrt mb-2 mb-lg-4">
                                <div className="row justify-content-between align-items-center">
                                    <div className="col-lg-6 d-flex">
                                        {/* <button className="add-btn edit-btn boreder-0 ms-3" type="button">
                                            <img src={edit} alt="" />
                                        </button> */}
                                        <button
                                            className="add-btn delete-btn boreder-0 ms-3"
                                            type="button"
                                            disabled={selectedRows.length === 0}
                                        >
                                            <img src={Delete} alt="" />
                                        </button>

                                        {selectedRows.length > 0 && (
                                            <span className="row-text ms-3">{selectedRows.length} row selected</span>
                                        )}

                                    </div>
                                    <div className="col-lg-6 mt-3 mt-lg-0  d-flex align-items-center justify-content-end">
                                        <div>
                                            <button className="filter boreder-0 " type="button">
                                                <img src={filter} className='me-2' /> Filter
                                            </button>
                                        </div>

                                        <div className='ms-3 me-3'>
                                            <div className="pseudo-search">
                                                <button className="fa fa-search" type="submit" />

                                                <input type="text" placeholder="Search Database" autoFocus required />
                                            </div>
                                        </div>

                                        <button className="add-btn boreder-0 " type="button">
                                            Add Database
                                            <img src={plusicon} className='ms-2' />
                                        </button>
                                    </div>

                                </div>
                            </div>
                            <div className="second table-responsive">
                                <table>
                                    <thead>
                                        <tr>
                                            <th style={{ width: '50px', paddingLeft: '30px' }}>
                                                <div className="d-flex justify-content-left align-items-center">
                                                    <div onClick={toggleCheckbox} >
                                                        {isChecked ?
                                                            <img src={checkedIcon} className='checkbox-view' /> :
                                                            <img src={uncheckIcon} className='checkbox-view' />
                                                        }
                                                    </div>
                                                </div>
                                            </th>
                                            <th onClick={handleSort} style={{ cursor: 'pointer' }}>
                                                Name {sortOrder === 'asc' ? <img src={upicon} style={{ paddingLeft: '10px' }} /> : <img src={downicon} style={{ paddingLeft: '10px' }} />}
                                            </th>
                                            <th onClick={handleSort} style={{ cursor: 'pointer' }}>
                                                Description {sortOrder === 'asc' ? <img src={upicon} style={{ paddingLeft: '10px' }} /> : <img src={downicon} style={{ paddingLeft: '10px' }} />}
                                            </th>
                                            <th onClick={handleSort} style={{ cursor: 'pointer' }}>
                                                Location URL {sortOrder === 'asc' ? <img src={upicon} style={{ paddingLeft: '10px' }} /> : <img src={downicon} style={{ paddingLeft: '10px' }} />}
                                            </th>
                                            <th onClick={handleSort} style={{ cursor: 'pointer' }}>
                                                Current on (UTC) {sortOrder === 'asc' ? <img src={upicon} style={{ paddingLeft: '10px' }} /> : <img src={downicon} style={{ paddingLeft: '10px' }} />}
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {databaseList.map((item, index) => {
                                            return (
                                                <>
                                                    <tr>
                                                        <td style={{ width: '50px', paddingLeft: '30px' }}>
                                                            <div
                                                                onClick={() => handleCheckboxChange(index)}
                                                            >
                                                                {selectedRows.includes(index) ? (
                                                                    <img src={checkedIcon} className='checkbox-view' />
                                                                ) : (
                                                                    <img src={uncheckIcon} className='checkbox-view' />

                                                                )}
                                                            </div>
                                                        </td>
                                                        <td><NavLink to={"/table-details"}>{item?.name}</NavLink></td>
                                                        <td>{item?.description}</td>
                                                        <td>{item?.url}</td>
                                                        <td>{item?.date}</td>
                                                    </tr>
                                                </>
                                            )
                                        })}
                                    </tbody>
                                    {/* <tfoot>
                                        <tr>
                                            <td colSpan="5">
                                                <div className='d-flex justify-content-between align-items-center'>
                                                    <button className="prev-btn" type="button">
                                                        Previous
                                                    </button>

                                                    <div className='page'>
                                                        Page 1 of 10
                                                    </div>

                                                    <button className="prev-btn" type="button">
                                                        Next
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tfoot> */}
                                </table>

                                {/* Pagination */}
                                {/* <Pagination /> */}


                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}



export default Database