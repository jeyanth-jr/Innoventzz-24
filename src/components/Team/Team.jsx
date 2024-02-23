import './Team.css'
import React from "react";
import Card from './TeamCard/TeamCard'
import Rissi from '../../assets/images/organisers/Rissi.jpg'
import Kabilesh from '../../assets/images/organisers/Kabilesh.jpg'
import Nikitha from '../../assets/images/organisers/Nikitha.jpg'
import Revatthy from '../../assets/images/organisers/Revatthy.jpg'
import Pradeepta from '../../assets/images/organisers/Pradeepta.jpg'
import Sunil from '../../assets/images/organisers/Sunil.jpg'
import Jay_Shree from '../../assets/images/organisers/Jay Shree.jpg'
import img from '../../assets/images/img_1.jpg'
import Carousel from '../Carousel/Carousel'

const Team = () => {
    const coordinator = [<Card name='Rissi Kumar P' designation='coordinator' image={Rissi} />, <Card name='Nikitha KR' designation='coordinator' image={Nikitha} />, <Card name='Pradeepta G' designation='coordinator' image={Pradeepta}/>,
        <Card name='Kabilesh S' designation='coordinator' image={Kabilesh} />,<Card name='Sunil Kumar R' designation='coordinator' image={Sunil} />]
    const faculty_coordinator=[<Card name='Mrs.P.Jayasri' designation='coordinator' image={Jay_Shree} />,
                <Card name='Dr.Revatthy Krishnamurthy' designation='coordinator' image={Revatthy} />,
                <Card name='Mrs.J.Adlin Loyola' designation='coordinator' image={img} />]
    return (
        <div className='team' id='team'>
            <div className='team__container'>
                <h3 className='team__title'>Faculty Coordinators</h3>
                <Carousel elements={faculty_coordinator} />
                <h3 className='team__title'>Student Coordinators</h3>
                <Carousel elements={coordinator} />
            </div>
        </div>
    )
}

export default Team