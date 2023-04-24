import '../Styles/benefactors.css'

import { FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';


const Benefactors = () => {

    const benefactors = [
        {
            image: "https://cdn.pixabay.com/photo/2016/07/20/23/31/girl-1531575_1280.jpg",
            name: "Cessar R Watts"
        },
        {
            image: "https://cdn.pixabay.com/photo/2018/01/04/14/16/woman-3060784_1280.jpg",
            name: "James L. stewart"
        },
        {
            image: "https://cdn.pixabay.com/photo/2018/01/04/14/16/woman-3060784_1280.jpg",
            name: "William v. Mejia"
        },
        {
            image: "https://cdn.pixabay.com/photo/2018/01/04/14/16/woman-3060784_1280.jpg",
            name: "Brendon J.Hudgins"
        },
        {
            image: "https://cdn.pixabay.com/photo/2018/01/04/14/16/woman-3060784_1280.jpg",
            name: "James Stewart"
        },
        {
            image: "https://cdn.pixabay.com/photo/2018/01/04/14/16/woman-3060784_1280.jpg",
            name: "Cessar R Watts"
        },
    ]


    return (
        <div className='benefactors common'>
            <div className='top'>
                <h1>Our Benefactors</h1>
                <div className='greenline1'></div>
                <div className='greenline2'></div>
            </div>

            <div className='card-container'>
                {
                    benefactors.map((item, i) => {
                        return <div className='card' key={i}>
                            <img src={item.image} alt='' />
                            <h3>{item.name}</h3>
                            <div className='icons'>
                                <FaInstagram size={30} color='white' />
                                <FaLinkedinIn size={30} color='white' />
                                <FaTwitter size={30} color='white' />
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Benefactors