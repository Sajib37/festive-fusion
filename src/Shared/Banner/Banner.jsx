const Banner = () => {
    const bg_style = {
        backgroundImage: `url("https://i.ibb.co/YBYmf3f/andreas-ronningen-S2-Yss-Lw97l4-unsplash.jpg")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }
    
    const setOverlay = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.5)'
    }
    
    return (
        <div className='w-full h-[60vh] md:h-[75vh] lg:h-[90vh] '>
            <div className="w-full h-[60vh] md:h-[75vh] lg:h-[90vh]  absolute top-0 left-0 z-10 ">
                <div className="w-full h-full  absolute bottom-0 left-0" style={bg_style}>
                </div>
                <div style={setOverlay}></div>
            </div>

            <div className="w-full h-[60vh] md:h-[75vh] lg:h-[90vh] absolute top-0 left-0 z-20">
                <div className=" flex items-center text-center h-full justify-center flex-col gap-4">
                    <h1 className="text-2xl font-bold md:text-3xl lg:text-5xl">Welcome to Festive Fusion!</h1>
                    <p className=" text-xl md:text-2xl font-semibold">Where Memories are Crafted, Moments are Celebrated</p>
                    {/* <p className="max-w-lg font-semibold">Explore our services, meet our talented team. Your vision is our mission, and we can't wait to make your next event a resounding success.Let's celebrate life together!</p> */}
                </div>
            </div>
            
        </div>
    );
};

export default Banner;

// 