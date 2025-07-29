import React from 'react'
import './Footer.css';

import sociallinkedin from '../../assets/images/social-linkedin.png';
import socialgit from '../../assets/images/social-git.png';
import socialm from '../../assets/images/social-m.png';

import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>

            {/* ---- Copyright Start ---- */}
            <div className="copyright text-center">
                <div className="social d-flex justify-content-center gap-4">
                    <Link>
                        <img src={sociallinkedin} className='img-fluid' />
                    </Link>
                    <Link>
                        <img src={socialgit} className='img-fluid' />
                    </Link>
                    <Link>
                        <img src={socialm} className='img-fluid' />
                    </Link>
                </div>

                <p className='mb-2'>© Copyright 2025 - PATHSDATA</p>

                <p>Your partner on the path to outcomes.</p>
            </div>
            {/* ---- Copyright End ---- */}

        </>
    )
}

export default Footer;