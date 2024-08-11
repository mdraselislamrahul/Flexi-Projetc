
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

import PropTypes from 'prop-types';
import { useEffect } from 'react';
const Beautye = ({ beautye }) => {
    useEffect(() => {
        AOS.init();
    }, [])
    const { image, titleName, description, profileImg, profileName, date } = beautye;

    const slicetext = true
    return (
        <div
           data-aos="zoom-in-up"
            data-aos-duration="3000"
        >
            <div
                className="card card-compact bg-base-100 w-full shadow-xl p-3 h-full">
                <figure>
                    <img
                        src={image}
                        alt="Shoes" />
                </figure>

                <div className="card-body">
                    <div className="card-actions justify-start">
                        <button className="btn btn-secondary px-8">Beauty</button>
                    </div>
                    <h2 className="card-title mt-5 font-bold text-gray-700">{titleName}</h2>
                    <p className="text-lg text-gray-500">{slicetext ? description.slice(0, 100) : description}....</p>
                    <div className="flex gap-5 mt-5">
                        <div>
                            <img className="rounded-full mt-2" src={profileImg} alt="" />
                        </div>
                        <div>
                            <h3 className="text-lg text-gray-600 font-bold ">{profileName}</h3>
                            <p className="font-bold text-gray-400 mt-3">{date}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
Beautye.propTypes = {
    beautye: PropTypes.func,
}

export default Beautye;

