import React, { useState } from 'react'
import newchat from "../../assets/images/ai-chat.png";
import plusicon from "../../assets/images/plus.png";
import aifile from "../../assets/images/ai-file.png";
import aivoice from "../../assets/images/ai-voice.png";
import aisend from "../../assets/images/ai-send.png";
import aimenu from "../../assets/images/ai-menu.png";
import aishare from "../../assets/images/ai-share.png";
import aiedit from "../../assets/images/ai-edit.png";
import aidelete from "../../assets/images/ai-delete.png";

const AIChat = () => {

    const [view, setView] = useState('new');

    return (
        <>

            <div className="pd">

                <section className="aichat">
                    <div className="row h-100">

                        {/* Left Panel */}
                        <div className="col-lg-9 h-100">
                            <div className="chat h-100">

                                <div className="body">

                                    {
                                        view === 'new' ? (
                                            <div className="new">
                                                <div className="chat_img">
                                                    <img src={newchat} alt="AI" className="img-fluid" />
                                                </div>

                                                <h4>Hi there, Khushi</h4>
                                                <h1 className='mt-0'>How can I help you today ?</h1>

                                                <p>I’ m a professionals looking for an assistant that heat with their workflows automates routine tasks , gives valuable insights based on real- time data.</p>
                                            </div>
                                        ) : (
                                            <div className="chating">
                                                <div className="receive">
                                                    <h5>Machine Learning</h5>
                                                </div>
                                                <div className="sent">
                                                    <p>What is  machine learning</p>
                                                </div>
                                                <div className="receive">
                                                    <p>Machine learning enables computers to improve automatically through experience — just like humans learn from past experiences.</p>
                                                </div>
                                                <div className="sent">
                                                    <p>Benefits of machine learning</p>
                                                </div>
                                                <div className="receive">
                                                    <p>
                                                        1. Automation of Tasks <br />
                                                        2. Improves Over Time (Self-Learning) <br />
                                                        3. Handles Complex Data <br />
                                                        4. Makes Faster and Smarter Decisions <br />
                                                        5. Cost-Efficiency <br />
                                                        6. Personalization <br />
                                                        7. Enhanced Accuracy <br />
                                                        8. Scalability <br />
                                                    </p>
                                                </div>
                                            </div>
                                        )
                                    }


                                </div>


                                <div className="chat-input">
                                    <div className="searching">
                                        <input type="text" placeholder='Ask Anything' className='form-control' />
                                    </div>

                                    <div className="menu_btn">
                                        <button type='button' className='ai-btn'>
                                            <img src={aifile} alt="" className='img-fluid' />
                                        </button>
                                        <button type='button' className='ai-btn'>
                                            <img src={aivoice} alt="" className='img-fluid' />
                                        </button>
                                        <button type='button' className='ai-btn'>
                                            <img src={aisend} alt="" className='img-fluid' />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Panel */}
                        <div className="col-lg-3 h-100">
                            <div className="history h-100">
                                <button type="button" className="add-btn boreder-0 ms-auto" onClick={() => setView('new')}>
                                    <img src={plusicon} className='me-2' />
                                    New Chat
                                </button>

                                <div className="history-list">
                                    <h5>History</h5>

                                    <ul>
                                        <li className='d-flex justify-content-between cursor-pointer' onClick={() => setView('chat')}>
                                            <div>
                                                <div className="name">Story of AI</div>
                                                <span className='date'>08 Jul</span>
                                            </div>
                                            <div>
                                                <button type='button' className='menu' id="history-menu-dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <img src={aimenu} alt="Menu" className='img-fluid' />
                                                </button>

                                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="history-menu-dropdown">
                                                    <li className=''>
                                                        <button type='button' className="dropdown-item d-flex align-items-center">
                                                            <img src={aishare} alt="share" className='img-fluid me-2' />

                                                            Share
                                                        </button>
                                                    </li>
                                                    <li className=''>
                                                        <button type='button' className="dropdown-item d-flex align-items-center">
                                                            <img src={aiedit} alt="share" className='img-fluid me-2' />

                                                            Rename
                                                        </button>
                                                    </li>
                                                    <li className=''>
                                                        <button type='button' className="dropdown-item d-flex align-items-center">
                                                            <img src={aidelete} alt="share" className='img-fluid me-2' />

                                                            Delete
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className='d-flex justify-content-between cursor-pointer' onClick={() => setView('chat')}>
                                            <div>
                                                <div className="name">Machine Learning</div>
                                                <span className='date'>05 Apr</span>
                                            </div>
                                            <div>
                                                <button type='button' className='menu' id="history-menu-dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <img src={aimenu} alt="Menu" className='img-fluid' />
                                                </button>

                                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="history-menu-dropdown">
                                                    <li className=''>
                                                        <button type='button' className="dropdown-item d-flex align-items-center">
                                                            <img src={aishare} alt="share" className='img-fluid me-2' />

                                                            Share
                                                        </button>
                                                    </li>
                                                    <li className=''>
                                                        <button type='button' className="dropdown-item d-flex align-items-center">
                                                            <img src={aiedit} alt="share" className='img-fluid me-2' />

                                                            Rename
                                                        </button>
                                                    </li>
                                                    <li className=''>
                                                        <button type='button' className="dropdown-item d-flex align-items-center">
                                                            <img src={aidelete} alt="share" className='img-fluid me-2' />

                                                            Delete
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className='d-flex justify-content-between cursor-pointer' onClick={() => setView('chat')}>
                                            <div>
                                                <div className="name">SEO Optimized</div>
                                                <span className='date'>03 Apr</span>
                                            </div>
                                            <div>
                                                <button type='button' className='menu' id="history-menu-dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <img src={aimenu} alt="Menu" className='img-fluid' />
                                                </button>

                                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="history-menu-dropdown">
                                                    <li className=''>
                                                        <button type='button' className="dropdown-item d-flex align-items-center">
                                                            <img src={aishare} alt="share" className='img-fluid me-2' />

                                                            Share
                                                        </button>
                                                    </li>
                                                    <li className=''>
                                                        <button type='button' className="dropdown-item d-flex align-items-center">
                                                            <img src={aiedit} alt="share" className='img-fluid me-2' />

                                                            Rename
                                                        </button>
                                                    </li>
                                                    <li className=''>
                                                        <button type='button' className="dropdown-item d-flex align-items-center">
                                                            <img src={aidelete} alt="share" className='img-fluid me-2' />

                                                            Delete
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>

        </>
    )
}

export default AIChat;