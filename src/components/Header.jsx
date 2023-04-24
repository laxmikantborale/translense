import '../Styles/header.css'
import { Link } from 'react-router-dom';

import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { TbHandClick } from 'react-icons/tb';
import { FiSearch } from 'react-icons/fi';

import Logo from '../Images/logo 1.png'

const Header = () => {
  return (
    <div className='header'>
      <div className='header-top'>
        <div className='left-icons'>
          <FaFacebookF size='25px' color='#0fe70f' cursor='pointer' />
          <FaLinkedinIn size='25px' color='#0fe70f' cursor='pointer' />
          <FaInstagram size='25px' color='#0fe70f' cursor='pointer' />
          <FaTwitter size='25px' color='#0fe70f' cursor='pointer' />
        </div>
        <div className='right-icons'>
          <TbHandClick size='25px' color='#0fe70f' cursor='pointer' />
          <p>Join the fight, become the volunteer</p>
        </div>
      </div>
      <div className='navbar'>
        <div className='nav-left'>
          <img src={Logo} alt='' />
        </div>
        <div className='nav-center'>
          <Link to='/home'>Home</Link>
          <Link to='/cause'>Our Cause</Link>
          <Link to='/contact'>Contact Us</Link>
          <Link to='/cases'>Cases</Link>
          <Link to='/banefactors'>Our Banefactors</Link>
        </div>
        <div className='nav-right'>
          <FiSearch size='30px' color='#0fe70f' cursor='pointer' />
          <button>Help us Fight</button>
        </div>
      </div>
    </div>
  )
}

export default Header