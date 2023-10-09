import { useLoaderData } from "react-router-dom";
import TeamMember from "./TeamMember";
import { Helmet } from "react-helmet-async";

const Team = () => {

    const teamMembers = useLoaderData();
    return (
        <div className="mt-0 md:mt-8 mb-24 max-w-screen-xl mx-auto" data-aos="zoom-in-left"> 
            <Helmet>
                <title>Festive Fusion || Team</title>
            </Helmet>
            <h1 className='text-3xl md:text-5xl font-bold text-center mb-8 font-serif'>Our Team Members</h1>
            <div className="grid grid-cols-1 px-2 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                
                {
                    teamMembers.map((team,idx)=><TeamMember key={idx} team={team}></TeamMember>)
                }
            </div>
        </div>
    );
};

export default Team;