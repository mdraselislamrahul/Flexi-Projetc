import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Fashon from "./Fashon/Fashon";

const Fashions = () => {
    const [fashionData, setFashonDAta]=useState([])
    useEffect(()=>{
        fetch('Fashion.json')
      .then(response => response.json())
      .then(json => setFashonDAta(json))
    } ,[])
    return (
        <div className="mt-20 px-5">
            <div className="flex justify-between">
                <h1 className="text-3xl font-bold text-gray-500 ml-10">Fashion & Style</h1>
                <Link to="/style" className="bg-gray-300 px-3 py-3   rounded-lg">View More</Link>
            </div>
            <div className="grid grid-cols-3 gap-5 mt-20">
                {
                    fashionData.slice(0, 6).map(fashin=><Fashon fashin={fashin} key={fashin.id}></Fashon>)
                }
            </div>
        </div>
    );
};

export default Fashions;