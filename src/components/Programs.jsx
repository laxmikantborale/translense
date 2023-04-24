import '../Styles/programs.css'

import global from '../Images/Group (4).png'
import ecosystem from '../Images/Vector (11).png'
import energy from '../Images/Vector (7).png'
import livelyhood from '../Images/Group (3).png'
import toxic from '../Images/Vector (9).png'
import radioactive from '../Images/Group (7).png'

const Programs = () => {

  const programs = [
    {
      image: global,
      title: "Reduce Global Warming Now",
      description: "The warming of the atmosphere has an impact on weather patterns, causing more frequent and severe droughts and storms worldwide."
    },
    {
      image: ecosystem,
      title: "Protecting Ecosystems",
      description: "Higher temperatures are shortening the seasons and, in some places, have already exceeded safe levels for ecosystems and humans."
    },
    {
      image: energy,
      title: "Shift Towards Clean Energy",
      description: "This energy transition has the potential to impact many aspects of life, including the environment, society, the economy, and governance."
    },
    {
      image: livelyhood,
      title: "Safe Coastal Livelihoods",
      description: "Sustainable aquaculture, e.g. grouper aquaculture, meets the high demand for reef fish while potentially preserving coastal communities' livelihoods."
    },
    {
      image: toxic,
      title: "Stop Toxic Chemical in Air",
      description: "Solubility is differentiated by whether the substance is easily dissolved in organic solvents under normal environmental conditions of temperature & pressure."
    },
    {
      image: radioactive,
      title: "Ban Radioactive Contamination",
      description: "Radioactive materials released into the environment can contaminate the air, water, surfaces, soil, plants, buildings, people & animals."
    }
  ]



  return (
    <div className='programs'>
      <h1>Our Continued Project<br />Assistance Program</h1>
      <div className='program-container'>

        {
          programs.map((item, i) => {
            return <div className='card' key={i}>
              <img src={item.image} alt='' />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          })
        }

      </div>
    </div>
  )
}

export default Programs