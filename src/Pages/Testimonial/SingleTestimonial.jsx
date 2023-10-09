const SingleTestimonial = ({ test }) => {
    const {author, rating ,content ,date, image}=test
    return (
        <div className="flex flex-col gap-2 mx-2 p-2 rounded-md" data-aos="zoom-in" data-aos-duration="2000">
            <img className="w-32 h-32 rounded-full mx-auto" src={image}></img>
            <div>
                <h1 className="text-center text-xl font-semibold">{author}</h1>
                <p className="text-gray-500 my-2 text-center">{content}</p>
                <div className="flex gap-4 justify-center">
                    <p className="font-semibold text-center">rating: <span className="text-green-600">{rating}</span> Out of 5</p>
                    <p>Date: {date}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleTestimonial;