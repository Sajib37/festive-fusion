import { useLoaderData } from "react-router-dom";
import TeamMember from "./TeamMember";

const Team = () => {

    const teamMembers = useLoaderData();
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {
                teamMembers.map((team,idx)=><TeamMember key={idx} team={team}></TeamMember>)
            }
        </div>
    );
};

export default Team;