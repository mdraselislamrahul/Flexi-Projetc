import Aos from 'aos';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
const Wellnes = ({ wellnes }) => {
    // console.log(wellnes)
    const {image, titleName, description, profileImg, date, profileName}=wellnes;
    useEffect(() => {
        Aos.init();
      }, [])
    return (
        <div
        data-aos="zoom-in-down"
        data-aos-duration="3000"
        >
            <div className="card card-side bg-base-100 shadow-xl h-full">
                <figure className="w-2/5">
                    <img className="h-full"
                        src={image}
                        alt="Movie" />
                </figure>
                <div className="card-body w-3/5">
                    <h2 className="card-title">{titleName}</h2>
                    <p className="mt-5">{description.slice(0,50)}</p>
                    

                    <div className="flex mt-5 gap-5">
                        <div>
                            <img className="rounded-full mt-2" src={profileImg} alt="" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-600">{profileName}</h3>
                            <p className="mt-2 text-gray-400 font-bold">{date}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
Wellnes.propTypes = {
    wellnes: PropTypes.func,
}


export default Wellnes;