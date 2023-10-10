import React from "react";
import decor from "../../../public/images/decor2.png";
import flexib from "/images/flexibility.png";
import exp from "/images/guest_exp.jpg";
import satisfaction from "/images/satisfaction.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

const bg_style = {
    backgroundImage: `url("https://i.ibb.co/rm2vQNQ/nicholas-green-n-Pz8akk-Um-DI-unsplash.jpg")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
};
const setOverlay = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0,0, 0.8)",
};

const ChoosenUs = () => {
    return (
        <div className="w-full h-[100vh] md:h-[80vh] lg:h-[70vh] py-8 relative  my-12 md:my-20" data-aos="flip-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="3000">
            <div
                className="w-full h-full absolute top-0 left-0"
                style={bg_style}
            ></div>
            <div
                className="w-full h-full absolute top-0 left-0"
                style={setOverlay}
            ></div>
            <div className="w-full h-full absolute top-0 left-0 z-20 py-12">
                <h1 className="text-3xl font-bold text-white text-center mb-4">
                    Why Choosen Us?
                </h1>
                <div className="flex flex-col md:flex-row items-center justify-center h-full gap-2">
                    <div className="mx-auto flex flex-col  items-center ">
                        <img className="w-40" src={decor}></img>
                        <h1 className="text-lg font-semibold text-white">
                            Unique Decor
                        </h1>
                        <p className="text-white max-w-xs text-center">
                            Our creative team designs one-of-a-kind decor
                            concepts that transform your event space into a
                            magical setting.
                        </p>
                    </div>
                    <div className="mx-auto  lg:flex-col items-center hidden lg:flex">
                        <img className="w-40 h-32" src={flexib}></img>
                        <h1 className="text-lg font-semibold text-white">
                            Flexibility
                        </h1>
                        <p className="text-white max-w-xs text-center">
                            No matter the size or scale of your event, we are
                            flexible and adaptable to meet your needs and
                            expectations.
                        </p>
                    </div>
                    <div className="mx-auto flex flex-col items-center">
                        <img className="w-40 h-32" src={satisfaction}></img>
                        <h1 className="text-lg font-semibold text-white">
                            Customer Satisfaction
                        </h1>
                        <p className="text-white max-w-xs text-center">
                            {" "}
                            Our track record is a testament to our commitment to
                            customer satisfaction. We go above and beyond to
                            make your event a resounding success.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChoosenUs;

// https://i.ibb.co/2PqSbPf/decorated-banquet-hall-with-served-round-table-with-hydrangea-centerpiece-chiavari-chairs-1.jpg
// <div ">