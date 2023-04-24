import '../Styles/environment.css'

import { SiAdobe, SiDropbox, SiPaypal, SiNike } from 'react-icons/si';
import dell from '../Images/Vector (12).png'
import spotify from '../Images/Vector (13).png'
import { FaMicrosoft } from 'react-icons/fa';


const Environment = () => {
    return (
        <div className='environment'>
            <div className='left'>
                <h1>The Environment is All We Have In Common</h1>
                <p>Turning the ship around takes a lot of willpower and ingenuity.</p>
            </div>
            <div className='right'>
                <div className='top'>
                    <div className='adobe common'><SiAdobe size={30} color='#b7b2b2'/><h3>Adobe</h3></div>
                    <img src={dell} alt='' height='20px'/>
                    <h3>Uber</h3>
                </div>
                <div className='center'>
                    <div className='paypal'><SiPaypal size={30} color='#b7b2b2'/><i>PayPal</i></div>
                    <div className='microsoft common'><FaMicrosoft size={30} color='#b7b2b2'/><h3>MICROSOFT</h3></div>
                    <h3>Google</h3>
                </div>
                <div className='bottom'>
                    <img src={spotify} alt='' height='30px'/>
                    <div className='dropbox common'><SiDropbox size={30} color='#b7b2b2'/><h3>Dropbox</h3></div>
                    <SiNike size={50} color='#b7b2b2'/>
                </div>
            </div>
        </div>
    )
}

export default Environment