import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleTestimonial from './SingleTestimonial';

const Testimonial = () => {

    const testimonials = useLoaderData();
    return (
        <div className='mt-8 md:mt-12 mb-4'>
            <h1 className='text-3xl md:text-4xl font-bold text-center mb-4 font-serif'>Previous Customer review</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    testimonials.map((test,idx)=><SingleTestimonial key={idx} test={test}></SingleTestimonial>)
                }
            </div>
        </div>
    );
};

export default Testimonial;