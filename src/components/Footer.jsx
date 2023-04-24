import '../Styles/footer.css'
import { Link } from 'react-router-dom';

import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';



const Footer = () => {
    return (
        <div className='footer'>
            <div className='top'>
                <div className='left'>
                    <h1>ENVIRONMENTAL</h1>
                    <div className='icons'>
                        <FaFacebookF size='20px' color='#0fe70f' cursor='pointer' />
                        <FaLinkedinIn size='20px' color='#0fe70f' cursor='pointer' />
                        <FaInstagram size='20px' color='#0fe70f' cursor='pointer' />
                        <FaTwitter size='20px' color='#0fe70f' cursor='pointer' />
                    </div>
                </div>
                <div className='center'>
                    <div className='center-top'>
                        <Link to='/cause'>Our Cause</Link>
                        <Link to='/contact'>Contact Us</Link>
                        <Link to='/cases'>Cases</Link>
                        <Link to='/banefactors'>Our Banefactors</Link>
                    </div>
                    <div className='center-bottom'>
                        <h1>Join Our Cause, Become a Member</h1>
                        <input type='search' placeholder='Enter your Email address' />
                        <button>JOIN</button>
                    </div>
                </div>
                <div className='right'>
                    <p>4517 Washington Ave. Manchester,<br /> Kentucky 39495<br /> (505) 555-0125,<br /> (406) 555-0120 binhan628@gmail.com<br /> manhhachkt08@gmail.com</p>
                </div>
            </div>
            <div className='bottom'>
                <p>All rights are reserved Eylsien Multipurpose Theme</p>
                <div className='b-right'>
                    <Link>Terms & condition</Link>
                    <Link>Privacy & cookies</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer