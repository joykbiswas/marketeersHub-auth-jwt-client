import { useEffect, useState } from "react";
import AuthorsCard from "./AuthorsCard";

const TeamMember = () => {

    const [authors, setAuthors] = useState([]);
    useEffect(() =>{
        fetch("/author.json")
        .then(res=>res.json())
        .then(data=>{
            setAuthors(data)
            console.log(data);
        })
    })
    return (
        <div data-aos="fade-up"
        data-aos-offset="300" >
            <div>
                <h3 className="text-4xl font-bold mt-10 mb-6" data-aos="fade-right"
        data-aos-offset="200">Meet Our professionals</h3>
                <hr className="w-14 border-2 mb-6 border-zinc-950" />
            </div>
          
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-4">
            {
                authors.map(aAuthor=>(<AuthorsCard key={aAuthor.id} author={aAuthor}></AuthorsCard>))
            }
            </div>
        </div>
    );
};

export default TeamMember;