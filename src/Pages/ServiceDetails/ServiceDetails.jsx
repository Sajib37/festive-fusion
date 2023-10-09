import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const [service, setService] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch('/events.json')
            .then(res => res.json())
            .then(data => {
                const selectedService = data.find(item => item.id === parseInt(id));
                setService(selectedService);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [id]);

    if (!service) {
        return <span className="loading loading-spinner loading-lg absolute top-24 left-[48%]"></span>
    }
    const { service_type, long_description, image, price_range, availability, included_features, service_location } = service;

    return (
        <div className='my-12'>
            <Helmet>
                <title>Festive Fusion || service details</title>
            </Helmet>
            <h1 className='text-center text-2xl md:text-4xl font-bold mb-8'>Event details: </h1>
            <img className='w-full h-[40vh] md:h-[70vh] lg:h-[80vh]' src={image} alt={service_type} />
            <div className='space-y-2 px-2 text-justify max-w-screen-xl mx-auto'>
                <h1 className='text-2xl md:-4xl font-bold text-center my-4'>{service_type}</h1>
                <p className='text-gray-500 '>{long_description}</p>
                <h1 className='text-xl font-semibold text-center underline'>Event Features:</h1>
                <ul className=' text-center text-base font-medium'>
                    {included_features.map(feature => <li key={feature} data-aos="flip-right">{feature}</li>)}
                </ul>
            </div>
        </div>
    );
};

export default ServiceDetails;
