import { useEffect, useState } from "react";
import Beautye from "../Beautye/Beautye";

const Beautyes = () => {
    const [beautyData, setBeautyData]=useState([]);
    useEffect(()=>{
        fetch('Buety.json')
        .then(response => response.json())
        .then(json => setBeautyData(json))
    } ,[])
    return (
        <div className="mt-28 px-8">
            <div>
                <div className="flex gap-5">
                    <h1 className="text-5xl font-bold">Beauty</h1>
                    <h3 className="text-3xl font-bold mt-3 text-blue-400">{beautyData.length}</h3>
                </div>
                <p className="mt-10 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cumque nihil vero laboriosam rerum,!</p>
            </div>
            <div className="grid grid-cols-3 gap-5 mt-20">
                {
                  beautyData.map(beautye=><Beautye beautye={beautye} key={beautye.id}></Beautye>)  
                }
            </div>
        </div>
    );
};

export default Beautyes;