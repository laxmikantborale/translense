import { useState } from 'react';
import '../Styles/case.css'

import { BsChevronLeft } from 'react-icons/bs';
import { BsChevronRight } from 'react-icons/bs';

const Case = () => {

    const [index, setIndex] = useState(0)


    const cases = [
        {
            image: "https://s3-alpha-sig.figma.com/img/6f3f/3b9a/29f3d472910d5333b1d6f91294691548?Expires=1682899200&Signature=D5dF4G5GuCfSEsBwP6mi0tQPfo1Vb4932SFdW4iKR4x2avbBaOdcdn0uAY2iMbdrikS~LQ461PwtIBV085JRwlSZzF5UD~SDtjHS-rotcz~NrNxk3q-mxDs0fAOfQfWI0E~HzTXjyKfgUF44d4M~1ZNJuEaCbmNZPH1LeHgPeb2LeeiqKvFR4BN9vTcvu5VBJvvuHkuIR4P5v~FDMoQlh26pz38rcGdMrxxG330rMHlSnPMVb7pEH4-~KsEXibgstEB1-gNQkY55Mmr9Ja~Xr9L54f9viB2ArtXD4v5XyJ3HNScT2TBa2tGnds1IV3Vx-XmQoBoAD3XLP6bMvS~y6g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            disaster: "DISASTER MITIGATION",
            headline: "Switching to Clean Energy & Preserving our Abode, Earth.",
            desc: "Planning and zoning are examples of mitigation actions, as are floodplain protection, property acquisition and relocation, and public outreach projects. Installing disaster warning systems, purchasing radio communications equipment, and conducting emergency response training are examples of preparedness actions. Disaster mitigation is at the heart of emergency management."
        },
        {
            image: "https://cdn.pixabay.com/photo/2012/10/26/01/19/hurricane-63005_1280.jpg",
            disaster: "EARTHQUAKE",
            headline: "Earthquake is the deadliest natural disaster",
            desc: "An earthquake is the shaking of the surface of the Earth resulting from a sudden release of energy in the Earth's lithosphere that creates seismic waves."
        },
        {
            image: "https://cdn.pixabay.com/photo/2018/03/23/11/20/city-3253414_1280.jpg",
            disaster: "HURRICANE",
            headline: "HURRICANE is the deadliest natural disaster",
            desc: "A hurricane is a strong tropical cyclone that occurs in the Atlantic Ocean or northeastern Pacific Ocean, and a typhoon occurs in the northwestern Pacific Ocean."
        },
        {
            image: "https://cdn.britannica.com/25/118525-050-5F033B0F/aftermath-tsunami-Indon-Aceh-December-2004.jpg",
            disaster: "TSUNAMI",
            headline: "TSUNAMI is the deadliest natural disaster",
            desc: "A tsunami is a series of waves in a water body caused by the displacement of a large volume of water, generally in an ocean or a large lake."
        }
    ]



    return (
        <div className='case common'>
            <div className='top'>
                <h1>Case study</h1>
                <div className='greenline1'></div>
                <div className='greenline2'></div>
            </div>
            <div className='case-container'>
                <div className='left'>
                    <img src={cases[`${index}`].image} alt='' />
                </div>
                <div className='right'>
                    <div className='ctop'>
                        <div>
                            <p>{cases[`${index}`].disaster}</p>
                            <h3>{cases[`${index}`].headline}</h3>
                        </div>
                        <button>Donate</button>
                    </div>
                    <p className='text'>{cases[`${index}`].desc}</p>
                    <div className='cbottom'></div>
                </div>
            </div>

            <div className='btns'>
                <button onClick={()=> setIndex( index === 0 ? index : index-1 )}><BsChevronLeft size={20} /></button>
                <button onClick={()=> setIndex( index === cases.length-1 ? index : index+1 )}><BsChevronRight size={20} /></button>
            </div>

        </div>
    )
}

export default Case