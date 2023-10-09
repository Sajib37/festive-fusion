const Banner = () => {
    return (
        <div className="h-[45vh] md:h-[60vh] lg:h-[80vh] relative">
            <img className="h-full w-full" src="https://i.ibb.co/9stzjqq/diverse-business-people-dinner-party-1.jpg"></img>
            <div className="bg-black absolute top-0 left-0 w-full h-full opacity-60"></div>
        </div>
    );
};

export default Banner;