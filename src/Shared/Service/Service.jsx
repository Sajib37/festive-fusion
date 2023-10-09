import React from "react";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
    const {id, image ,service_type ,short_description,price_range}=service
    return (
        <div className="card card-compact max-w-md bg-base-100 shadow-x rounded-lg mx-auto" data-aos="zoom-in" data-aos-duration="2000">
            <figure>
                <img
                    src={image}
                    className="w-full h-52"
                    alt="event image"
                />
            </figure>
            <div className="card-body">
                <h1 className="text-lg font-semibold">{service_type}</h1>
                <p>{short_description}</p>
                <p>{price_range}</p>      
            </div>

            <Link className="w-full" to={`/event/${id}`}>
                <button className="bg-teal-700 py-2 rounded-b-lg text-white w-full font-semibold">Show details</button>
            </Link>
        </div>
    );
};

export default Service;
