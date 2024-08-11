import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Wellnes from "./Wellnes/Wellnes";

const Wellness = () => {
    const [foodData, setFoodData]=useState([]);
    useEffect(() =>{
        fetch('Food.json')
      .then(response => response.json())
      .then(json => setFoodData(json))
    },[])
    return (
        <div className="mt-20 px-5">
             <div className="flex justify-between">
                <h1 className="text-3xl font-bold text-gray-500 ml-10">Food & Wellness</h1>
                <Link to="/food" className="bg-gray-300 px-3 py-3   rounded-lg">View More</Link>
            </div>

            <div className="grid grid-cols-2 mt-20 gap-5">
                    {
                        foodData.slice(0, 6).map(wellnes=><Wellnes wellnes={wellnes}key={wellnes.id}></Wellnes>)
                    }
            </div>
        </div>
    );
};

export default Wellness;