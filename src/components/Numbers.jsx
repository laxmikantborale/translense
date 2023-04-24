import '../Styles/numbers.css'

import flower from '../Images/Vector (14).png'
import people from '../Images/Group (8).png'
import hand from '../Images/Vector (15).png'
import hands from '../Images/Group (9).png'

const Numbers = () => {
    return (
        <div className='numbers'>
            <div className='dis-first common'>
                <div className='circle'>
                    <img src={flower} alt='' />
                </div>
                <h1>5,534</h1>
                <p>Trees Planted</p>
            </div>
            <div className='dis-second common'>
                <div className='circle'>
                    <img src={people} alt='' />
                </div>
                <h1>1,994</h1>
                <p>Changing life Since</p>
            </div>
            <div className='dis-third common'>
                <div className='circle'>
                    <img src={hand} alt='' />
                </div>
                <h1>21+</h1>
                <p>Our Partners</p>
            </div>
            <div className='dis-fourth common'>
                <div className='circle'>
                    <img src={hands} alt='' />
                </div>
                <h1>385</h1>
                <p>Volunteers</p>
            </div>
        </div>
    )
}

export default Numbers