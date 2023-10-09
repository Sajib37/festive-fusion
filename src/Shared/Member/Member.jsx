const Member = ({ member }) => {
    const { name, position, profile_picture, phone, email } = member;
    return (
        <div className="flex flex-col md:flex-row gap-2 border-2 items-center" data-aos="zoom-in-right">
            <img className="w-full md:w-44 h-44" src={profile_picture}></img>
            <div className="py-4">
                <h1 className="text-xl text-center font-bold">{name}</h1>
                <h1 className="text-lg font-semibold text-center">{position}</h1>
                <div className="mt-1 text-center">
                    <p className="text-blue-800"><a href="#">{phone}</a></p>
                    <p className="text-blue-800"><a href="#">{ email}</a></p>
                </div>
            </div>
        </div>
    );
};

export default Member;