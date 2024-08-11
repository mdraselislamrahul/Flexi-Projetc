import Aos from "aos";
import { useEffect } from "react";
import PropTypes from 'prop-types';

const AllFood = ({ allfood }) => {
    // console.log(allfood)
    const { image, titleName, description, profileImg, profileName, date } = allfood;
    useEffect(() => {
        Aos.init();
      }, [])
    return (
        <div
            data-aos="zoom-in-down"
            data-aos-duration="3000"
        >
            <div className="card card-compact bg-base-100 w-full h-full shadow-xl">
                <figure>
                    <img className="w-full"
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className="card-actions justify-start">
                        <button className="btn bg-orange-600 text-white">Food & Wellness
                        </button>
                    </div>
                    <h2 className="card-title mt-5">{titleName}</h2>
                    <p>{description.slice(0, 150)}</p>
                    <div className="mt-5 flex gap-5">
                        <div>
                            <img className="rounded-full mt-2" src={profileImg} alt="" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-600">{profileName}</h3>
                            <p className="font-bold text-gray-400 mt-2">{date}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

AllFood.propTypes = {
    allfood: PropTypes.func,
}

export default AllFood;