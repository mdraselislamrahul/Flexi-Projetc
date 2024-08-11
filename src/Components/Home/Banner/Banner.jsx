
const Banner = () => {
    return (
        <div className="mt-5">
            <div 
                className="hero"
                style={{
                    height: "500px",
                    backgroundImage: "url(https://i.ibb.co/PcWg7bJ/image-1.jpg)",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-left">
                    <div className="max-w-2xl">
                        <h1 className=" mt-60 leading-relaxed text-5xl font-bold">Here’s What I’ve Learnt  Over The Past Seven Years</h1>
                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;