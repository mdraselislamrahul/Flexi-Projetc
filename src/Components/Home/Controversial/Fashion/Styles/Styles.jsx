import { useEffect, useState } from "react";
import Style from "../Style/Style";

const Styles = () => {
    const [styleData, setStyleData]=useState([]);
    
    useEffect(()=>{
        fetch('Fashion.json')
        .then(response => response.json())
        .then(json => setStyleData(json))
    } ,[])
    return (
        <div className="mt-28 px-8">
            <div>
                <div className="flex gap-5">
                    <h1 className="text-5xl font-bold">Fashion & Style</h1>
                    <h3 className="text-3xl font-bold mt-3 text-blue-400">{styleData.length}</h3>
                </div>
                <p className="mt-10 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cumque nihil vero laboriosam rerum,!</p>
            </div>
            <div className="grid grid-cols-3 gap-5 mt-20">
                {
                   styleData.map(style=><Style style={style} key={style.id}></Style>) 
                }
            </div>
        </div>
    );
};

export default Styles;