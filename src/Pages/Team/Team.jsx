import { useLoaderData } from "react-router-dom";
import TeamMember from "./TeamMember";

const Team = () => {

    const teamMembers = useLoaderData();
    return (
        <div className="mt-8 md:mt-12 mb-4">
            <h1 className='text-3xl md:text-5xl font-bold text-center mb-4 font-serif'>Our Team Members</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
                
                {
                    teamMembers.map((team,idx)=><TeamMember key={idx} team={team}></TeamMember>)
                }
            </div>
        </div>
    );
};

export default Team;