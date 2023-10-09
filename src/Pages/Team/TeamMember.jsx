const TeamMember = ({ team }) => {
    const { name, position, email, phone, profile_picture, bio } = team;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl rounded-md">
            <figure>
                <img
                    src={profile_picture}
                    alt="Shoes"
                    className="h-60 w-full"
                />
            </figure>
            <div className="card-body">
                <h1 className="text-lg font-bold">Name: {name}</h1>
                <h1 className="text-lg font-semibold">Position: {position}</h1>
                <p className="text-gray-500">Bio: {bio}</p>
                <p className="text-base font-serif">Email: <a href="#">{email}</a></p>
                <p className="text-base font-serif">Phone: { phone}</p>
            </div>
        </div>
    );
};

export default TeamMember;
