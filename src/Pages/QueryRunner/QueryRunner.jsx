import React from 'react'
import rightarrow from "../../assets/images/right-arrow.png";
import { Link, useNavigate } from 'react-router-dom';

const QueryRunner = () => {

    const navigate = useNavigate();

    return (
        <>

            <div className='pd mt-4 query-execution query-runner'>
                <div className='query-interface mb-4 d-flex align-items-center'>
                    <div className='me-3'>
                        <img src={rightarrow} alt="Right" className='img-fluid' />
                    </div>

                    <Link>Query Interface</Link>

                    <div className='mx-3'>
                        <img src={rightarrow} alt="Right" className='img-fluid' />
                    </div>

                    <Link>Query Runner</Link>
                </div>

                <div className="btn-group">
                    <button type="button" className="group-btn active">SQL</button>
                    <button type="button" className="group-btn">Natural Language</button>
                </div>

                <div className="row my-4 my-lg-5">
                    <div className="col-lg-12">
                        <div className='query-execution-section h-100'>
                            <ul>
                                <li><span className='purple'>SELECT</span> name, email <span className='purple'>From</span> users</li>
                                <li><span className='purple'>WHERE</span> sign_up_date == <span className='green'>"2025-09-06"</span> <span className='purple'>ORDER BY</span> sign_up_d <span className='purple'>DESC;</span></li>
                            </ul>
                        </div>
                    </div>

                    <div className="d-flex mt-5">
                        <button
                            type="button"
                            className={`save-button me-2 me-md-4`}
                        >
                            Run
                        </button>
                        <button
                            type="button"
                            className="cancel-button"
                            onClick={() => navigate("/query-execution")}
                        >
                            Cancel
                        </button>
                    </div>
                </div>

                <div className="row mb-4">
                    <div className="col-lg-12">
                        <div className='query-execution-section h-100'>
                            <div className="sql-title">Query Plan</div>

                            <ul className='sql'>
                                <li><span className='yellow'>step 1:</span> Scan <span className='purple'>table</span> "users" (<span className='purple'>cost:</span> <span className='yellow'>sales)</span></li>
                                <li><span className='yellow'>step 2:</span> Apply <span className='purple'>filter on</span> sign_up_date = <span className='yellow'>2025-09-06</span></li>
                                <li><span className='yellow'>step 3:</span> Sort <span className='purple'>by</span> sign_up_date <span className='purple'>DESC</span></li>
                            </ul>

                            <div className="sql-title">Estimated Cost: <span className='yellow'>0.45</span> </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default QueryRunner