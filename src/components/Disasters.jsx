import '../Styles/disaster.css'

const Disasters = () => {
    return (
        <div className='disaster'>
            <div className='first'>
                <div className='initial'>
                    <h3>AIR POLLUTION</h3>
                    <p>What’s currently happening<br /> in Air Pollution all around the<br /> world? AQI region-wise.</p>
                </div>
                <div className='after'>
                    <p>Collaborating with local partners to implement community-owned clean drinking water projects in remote communities.</p>
                    <input type='range' min={0} max={100} />
                    <button>Donate</button>
                </div>
            </div>
            <div className='second'>
                <div className='initial'>
                    <h3>WATER POLLUTON</h3>
                    <p>Think up spending hours every day looking for drinking water.</p>
                </div>
                <div className='after'>
                    <p>Collaborating with local partners to implement community-owned clean drinking water projects in remote communities.</p>
                    <input type='range' min={0} max={100} />
                    <button>Donate</button>
                </div>
            </div>
            <div className='third'>
                <div className='initial'>
                    <h3>MELTING ICEBERGS</h3>
                    <p>Negative mass balances due to retiring glaciers is causing them to disappear.</p>
                </div>
                <div className='after'>
                    <p>Collaborating with local partners to implement community-owned clean drinking water projects in remote communities.</p>
                    <input type='range' min={0} max={100} />
                    <button>Donate</button>
                </div>
            </div>
        </div>
    )
}

export default Disasters