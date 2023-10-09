import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleTestimonial from './SingleTestimonial';

const Testimonial = () => {

    const testimonials = useLoaderData();
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                testimonials.map((test,idx)=><SingleTestimonial key={idx} test={test}></SingleTestimonial>)
            }
        </div>
    );
};

export default Testimonial;