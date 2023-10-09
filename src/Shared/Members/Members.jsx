import { useEffect, useState } from "react";
import Member from "../Member/Member";

const Members = () => {

    const [members, setMembers] = useState([]);
    useEffect(() => {
        fetch('/team.json')
            .then(result => result.json())
            .then(data => setMembers(data));
    }, [])
    
    return (
        <div >
            <h1 className="text-center text-3xl md:text-4xl mb-8 font-bold">Our Teams</h1>
            <div className="grid grid-cols-1 px-4 mb-12 lg:mb-24 lg:grid-cols-2 gap-4 max-w-screen-xl mx-auto">
                 {
                     members.map((member,idx)=><Member key={idx} member={member}></Member>)
                 }
            </div>
        </div>
    );
};

export default Members;