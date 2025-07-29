import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import download from "../../assets/images/download.png";
import upicon from "../../assets/images/upIcon.png";
import downicon from "../../assets/images/downIcon.png";
import plusicon from "../../assets/images/plus.png";
import checkedIcon from "../../assets/images/checked.png";
import uncheckIcon from "../../assets/images/unchecked.svg";
import rightarrow from "../../assets/images/right-arrow.png";

const QueryExecution = () => {

    const navigate = useNavigate();


    const [selectedRows, setSelectedRows] = useState([]);
    const [sortOrder, setSortOrder] = useState('asc');
    const [isChecked, setIsChecked] = useState(false);
    const [queryList, setQueryList] = useState([
        { country: 'USA', totalSales: 950000, profit: '9,7', order: 32, category: 'Sales' },
        { country: 'Canada', totalSales: 650000, profit: '4,7', order: 45, category: 'Sales' },
        { country: 'Germany', totalSales: 450000, profit: '5,5', order: 34, category: 'Sales' },
        { country: 'France', totalSales: 368000, profit: '2,1', order: 46, category: 'Sales' },
        { country: 'UK', totalSales: 230000, profit: '1,3', order: 47, category: 'Sales' },
    ]);

    const toggleCheckbox = () => {
        if (isChecked) {
            setSelectedRows([]);
        } else {
            setSelectedRows(queryList.map((_, index) => index));
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
        if (selectedRows.length === queryList?.length) {
            setIsChecked(true);
        } else {
            setIsChecked(false);
        }
    }, [selectedRows, queryList?.length]);

    // Sort table by column (e.g., by Name)
    const handleSort = () => {
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    };

    return (
        <>

            <div className='pd mt-4 query-execution'>
                <div className="btn-group">
                    <button type="button" className="group-btn active">SQL</button>
                    <button type="button" className="group-btn">Natural Language</button>
                </div>

                <div className="row my-4 my-lg-5">
                    <div className="col-lg-7">
                        <div className='query-execution-section h-100'>
                            <div className="title">Auto-complete available</div>

                            <ul>
                                <li><span className='purple'>SELECT</span> DATE_TRUNC(<span className='green'>'day'</span>, occurred_at) <span className='purple'>AS day</span>,</li>
                                <li><span className='yellow'>COUNT</span>(<span className='purple'>DISTINCT</span> user_id)</li>
                                <li><span className='purple'>FROM</span> benn.fake_fact_events</li>
                                <li><span className='purple'>WHERE</span> event_name =<span className='green'>'complete_signup'</span></li>
                                <li><span className='purple'>GROUP BY</span> 1</li>
                            </ul>

                            <div className='end_note'>-- Write your SQL query here...\nSELECT * FROM sales_data WHERE year = 2023;</div>
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <div className='query-execution-section h-100'>
                            <div className="sql-title">Generated SQL Preview</div>

                            <div className="form-check ps-0">
                                <input type="checkbox" className="" id="exampleCheck1" />
                                <label className="htmlForm-check-label ms-3" for="exampleCheck1">Edit before run</label>
                            </div>

                            <ul className='sql'>
                                <li><span className='purple'>SELECT * FROM</span> <span className='green'>sales</span></li>
                                <li><span className='purple'>WHERE</span> year = <span className='green'>2023</span></li>
                                <li><span className='purple'>ORDER BY</span> revenue DSC</li>
                                <li><span className='purple'>LIMIT</span> 10;</li>
                            </ul>
                        </div>
                    </div>

                    <div className="d-flex mt-5">
                        <button
                            type="button"
                            className={`save-button me-2 me-md-4`}
                            onClick={() => navigate("/query-runner")}
                        >
                            Run
                        </button>
                        <button
                            type="button"
                            className="cancel-button"
                        >
                            Clear
                        </button>
                    </div>
                </div>

                <div className="row mb-4">
                    <div className="col-lg-6">
                        <div className="btn-group query">
                            <button type="button" className="group-btn active">View as table</button>
                            <button type="button" className="group-btn">View raw JSON</button>
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex justify-content-end">
                        <div className="query_btn mt-2">
                            <button type="button" className="q-btn">
                                Download
                                <img src={download} className='img-fluid ms-2' />
                            </button>

                            <button type="button" className="q-btn">
                                CSV
                            </button>

                            <button type="button" className="q-btn">
                                JSON
                            </button>

                            <button type="button" className="q-btn">
                                EXCEL
                            </button>
                        </div>
                    </div>

                    <div className="col-lg-12 mt-4 mt-lg-5">
                        <div className="second table-responsive query-result-table ">
                            <div className="title mb-4">Query results</div>

                            <table>
                                <thead>
                                    <tr>
                                        <th onClick={handleSort} className='d-flex' style={{ cursor: 'pointer' }}>
                                            <div className="d-flex justify-content-left align-items-center me-3">
                                                <div onClick={toggleCheckbox} >
                                                    {isChecked ?
                                                        <img src={checkedIcon} className='checkbox-view' /> :
                                                        <img src={uncheckIcon} className='checkbox-view' />
                                                    }
                                                </div>
                                            </div>
                                            <div className='mt-1'>
                                                <p> Country {sortOrder === 'asc' ? <img src={upicon} style={{ paddingLeft: '10px' }} /> : <img src={downicon} style={{ paddingLeft: '10px' }} />}</p>

                                            </div>
                                        </th>
                                        <th onClick={handleSort} style={{ cursor: 'pointer' }}>
                                            Total Sales
                                            {sortOrder === 'asc' ? <img src={upicon} style={{ paddingLeft: '10px' }} /> : <img src={downicon} style={{ paddingLeft: '10px' }} />}
                                        </th>
                                        <th onClick={handleSort} style={{ cursor: 'pointer' }}>
                                            Profit Margin
                                            {sortOrder === 'asc' ? <img src={upicon} style={{ paddingLeft: '10px' }} /> : <img src={downicon} style={{ paddingLeft: '10px' }} />}
                                        </th>
                                        <th onClick={handleSort} style={{ cursor: 'pointer' }}>
                                            Orders
                                            {sortOrder === 'asc' ? <img src={upicon} style={{ paddingLeft: '10px' }} /> : <img src={downicon} style={{ paddingLeft: '10px' }} />}
                                        </th>
                                        <th onClick={handleSort} style={{ cursor: 'pointer' }}>
                                            Category
                                            {sortOrder === 'asc' ? <img src={upicon} style={{ paddingLeft: '10px' }} /> : <img src={downicon} style={{ paddingLeft: '10px' }} />}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {queryList?.map((i, index) => (
                                        <tr key={index}>
                                            <td>{i.country}</td>
                                            <td>{i.totalSales}</td>
                                            <td>{i.profit} %</td>
                                            <td>{i.order}</td>
                                            <td>{i.category}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default QueryExecution;