
import PropTypes from 'prop-types';
const Beaute = ({ beaute }) => {
    // console.log(beaute)
    const { image, titleName, profileImg, profileName, date, description} = beaute;
    return (
        <div
        data-aos="zoom-in-down"
        data-aos-duration="3000"
        >

            <div className="card card-side bg-base-100 shadow-xl">
                <figure className="w-4/12">
                    <img className=" h-full w-64"
                        src={image}
                        alt="Movie" />
                </figure>
                <div className="card-body w-7/12">
                    <h2 className="card-title">{titleName}</h2>
                    <p className='mt-5'>{description.slice(0, 50)}...</p>

                    <div className="flex gap-5 mt-5">
                        <div className="">
                            <img className="rounded-full" src={profileImg} alt="" />
                        </div>
                        <div>
                            <h3 className="text-xl text-gray-500 font-bold">{profileName}</h3>
                            <p className="text-gray-400 mt-2">{date}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Beaute.propTypes = {
    beaute: PropTypes.func,
}

export default Beaute;