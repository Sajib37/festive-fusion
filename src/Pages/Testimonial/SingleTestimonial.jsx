const SingleTestimonial = ({ test }) => {
    const {author, rating ,content ,date, image}=test
    return (
        <div className="flex flex-col gap-2 border mx-2 p-2 rounded-md">
            <img className="w-16 h-16 rounded-full mx-auto" src={image}></img>
            <div>
                <h1 className="text-center text-lg font-semibold">{author}</h1>
                <p className="text-gray-500 my-2">{content}</p>
                <div className="flex gap-4 justify-between">
                    <p className="font-semibold text-justify">rating: <span className="text-green-600">{rating}</span> Out of 5</p>
                    <p>Date: {date}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleTestimonial;