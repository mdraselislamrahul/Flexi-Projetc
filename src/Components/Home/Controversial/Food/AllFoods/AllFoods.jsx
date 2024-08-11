import { useEffect, useState } from "react";
import AllFood from "./AllFood/AllFood";

const AllFoods = () => {
    const [foodsData, setFoodsData] = useState([]);
    useEffect(() => {
        fetch('Food.json')
            .then(response => response.json())
            .then(json => setFoodsData(json))
    }, [])
    return (
        <div className="mt-28 px-5">
            <div>
                <div className="flex gap-5">
                    <h1 className="text-5xl font-bold">Food & Wellness</h1>
                    <h3 className="text-3xl font-bold mt-3 text-blue-400">{foodsData.length}</h3>
                </div>
                <p className="mt-10 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cumque nihil vero laboriosam rerum,!</p>
            </div>

            <div className="grid grid-cols-3 gap-5 mt-20">
                {
                    foodsData.map(allfood => <AllFood allfood={allfood} key={allfood.id}></AllFood>)
                }
            </div>
        </div>
    );
};

export default AllFoods;