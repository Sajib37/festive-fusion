import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


const Services = () => {

    const [allEvents, setAllEvents] = useState([]);
    const [displayData, setDisplayData]= useState(6)

    useEffect(() => {
        fetch('./events.json')
            .then(res => res.json())
            .then(data => setAllEvents(data));
    },[])

    

    const handleSeemore = () => {
        if (allEvents.length > displayData) {
            setDisplayData(allEvents.length)
        }
    }
    return (
        <div className='md:mt-6 mb-4 max-w-screen-xl mx-auto '>
            <Helmet>
                <title>Festive Fusion || Services</title>
            </Helmet>
            <h1 className='text-3xl md:text-5xl font-bold text-center mb-4 font-serif lg:my-6'>Our Services</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-2 '>
                {
                    allEvents.slice(0,displayData).map((service,idx)=><Service key={idx} service={service}></Service>)
                }
            </div>
            <Link onClick={handleSeemore} to='/services' className={`mx-auto p-2 bg-teal-400 font-semibold rounded-2xl w-28 text-center border-2 mt-6 ${displayData==allEvents.length? 'hidden' : 'block'}`}>See More</Link>
        </div>
    );
};

export default Services;
// ''