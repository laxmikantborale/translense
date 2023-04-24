import '../Styles/intro.css'

const Intro = () => {
    return (
        <div className='intro'>
            <h2>Help <span>Today</span> for</h2>
            <h1>Brighter <span>Tomorrow</span> </h1>
            <p>Leaders acroos the country are trackling the most challenging and pressing issues <br />
                of our time. Earth let us all join to deal with unprecedented threats to earths's Life</p>

            <div className='intro-buttons'>
                <button>Donate now</button>
                <button className='sec-btn'>Contact us</button>
            </div>
        </div>
    )
}

export default Intro