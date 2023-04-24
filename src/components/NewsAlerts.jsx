import '../Styles/newsAlerts.css'

import ReactPlayer from 'react-player'


const NewsAlerts = () => {
    return (
        <div className='news'>
            <div className='text'>
                <h1>Sign Up For Environment News & Alerts</h1>
                <p>We are bringing worldwide concerns and solutions fresh to your emails. As opposed to what others do, we make our contributions timely.</p>
                <input type='email' placeholder='Enter your email' />
                <button>Subscribe</button>
            </div>
            <div className='video'><ReactPlayer  url='https://player.vimeo.com/external/372335193.sd.mp4?s=80151fa22b2eba81883c8641f2c9e493762c7357&profile_id=164&oauth2_token_id=57447761' height={400} width={500} controls/></div>
        </div>
    )
}

export default NewsAlerts