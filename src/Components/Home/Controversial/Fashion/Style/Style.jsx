import PropTypes from 'prop-types';
const Style = ({ style }) => {
    // console.log(style)
    const { image, titleName, description, profileImg, profileName, date} = style;
    return (
        <div>
            <div className="card bg-base-100 w-full h-full shadow-xl">
                <figure>
                    <img
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                <div className="card-actions justify-start">
                        <button className="btn btn-secondary px-5">Fashion & Style</button>
                    </div>
                    <h2 className="card-title mt-5">{titleName}</h2>
                    <p className="mt-5">{description.slice(0, 150)}</p>
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

Style.propTypes = {
    style: PropTypes.func,
}

export default Style;