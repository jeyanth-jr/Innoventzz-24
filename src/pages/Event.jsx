import './Event.css'
import React, { useState } from "react";
import EventCanvas from '../canvas/Event';
import { AiOutlineClose } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button/Button';
import Loader from '../components/Loader/Loader';

const Event = () => {
    const [started, setStarted] = useState(false);
    const navigate = useNavigate()
    return (
        <div className="eventPage">
            <Loader started={started} setStarted={setStarted} />
            {started && (
                <>
                    <EventCanvas />
                    <div className='eventPage__back__container' onClick={() => {
                        navigate(-1)
                    }}>
                        <h1 className='eventPage__back' >X </h1>
                    </div>
                    <div className='eventPage__container'>
                        <div className='eventPage__details'>
                            <h1 className='eventPage__title'>24hrs Hackthon</h1>
                            <p className='eventPage__para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur fugiat rem impedit animi possimus quos doloremque maxime perspiciatis aliquam quisquam distinctio, omnis voluptatem sapiente mollitia ea nam, qui eaque ipsum.</p>
                            <div className='eventPage__detail'>
                                <h3 className='eventPage__detail__title'>Venue</h3>
                                <p className='eventPage__detail__para'>Purple Hall</p>
                            </div>
                            <div className='eventPage__detail'>
                                <h3 className='eventPage__detail__title'>Round 1</h3>
                                <p className='eventPage__detail__para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit asperiores harum provident dolor fugit praesentium, nisi nulla qui temporibus maxime sequi quod quibusdam quaerat id eos assumenda illum enim. Perspiciatis!</p>
                            </div>
                            <div className='eventPage__detail'>
                                <h3 className='eventPage__detail__title'>Round 2</h3>
                                <p className='eventPage__detail__para'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia a adipisci rem velit sit repellat blanditiis veritatis ducimus fugit, tempore pariatur sed, voluptas itaque soluta ex deleniti voluptatibus. Sit, aperiam.</p>
                            </div>
                        </div>
                        <div className='eventPage__coordinators'>
                            <h1 className='eventPage__title'>Coordinator</h1>
                            <div className='eventPage__detail'>
                                <h3 className='eventPage__detail__title'>Hursun</h3>
                                <p className='eventPage__detail__para'>8056201341</p>
                            </div>
                            <div className='eventPage__detail'>
                                <h3 className='eventPage__detail__title'>Hursun</h3>
                                <p className='eventPage__detail__para'>8056201341</p>
                            </div>
                        </div>
                    </div>
                    <div className='eventPage__btn'>
                        <Button>Register</Button>
                    </div>
                </>
            )}

        </div>
    )
}

export default Event