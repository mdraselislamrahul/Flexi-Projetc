import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Fashon = ({ fashin }) => {
    // console.log(fashin)
    const {image, titleName, description, profileImg, profileName, date }= fashin;


    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div
        data-aos="zoom-in"
        data-aos-duration="3000"
        >
            <div className="card bg-base-100 w-full shadow-xl h-full">
                <figure>
                    <img
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{titleName}</h2>
                    <p className="mt-5">{description.slice(0,50)}</p>
                    <div className="flex gap-5 mt-5">
                        <div>
                            <img className="rounded-full mt-2" src={profileImg} alt="" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-600">{profileName}</h3>
                            <p className="text-gray-400 font-bold mt-3">{date}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Fashon.propTypes = {
    fashin: PropTypes.func,
}

export default Fashon;