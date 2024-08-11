import { useEffect, useState } from "react";
import Beaute from "./Beaute/Beaute";
import { Link } from "react-router-dom";


const Beauty = () => {
    const [beautyData, setBeautyData]=useState([]);
    useEffect(()=>{
        fetch('Buety.json')
      .then(response => response.json())
      .then(json => setBeautyData(json))
    } ,[])
    return (
        <div className="mt-20 px-5">
            <div className="flex justify-between">
                <h1 className="text-3xl font-bold text-gray-500 ml-10">Beauty</h1>
                <Link to="/buty" className="bg-gray-300 px-3 py-3   rounded-lg">View More</Link>
            </div>

            <div className="grid grid-cols-2 gap-5 mt-20">
                {
                    beautyData.slice(0, 6).map(beaute=><Beaute beaute={beaute} key={beaute.id}></Beaute>)
                }
            </div>

        </div>
    );
};

export default Beauty;