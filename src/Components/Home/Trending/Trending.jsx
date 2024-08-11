
import img1 from "./Image/image.webp"
import img2 from "./Image/florrie-jacobs.webp"
import img3 from "./Image/image (1).webp"
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Trending = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div className=" px-5 mt-28">
            <h1 className="text-5xl font-bold text-center text-gray-500">Trending Now</h1>
            <div className="flex mt-20 gap-5">
                {/* 1st side */}
                <div className="w-1/2 flex">
                    <div
                     data-aos="fade-right"
                     data-aos-offset="300"
                     data-aos-easing="ease-in-sine"
                     data-aos-duration="2000"
                    className="card card-side bg-base-100 shadow-xl">
                        <figure className="w-1/2">
                            <img className="h-full"
                                src={img1}
                                alt="Movie" />
                        </figure>
                        <div className="card-body w-1/2">
                            <div className="card-actions justify-start">
                                <button className="btn bg-orange-500 px-5 text-white">Food & Wellness</button>
                            </div>
                            <h2 className="card-title font-bold mt-5">Charlie and the Chocolate Factory Afternoon Tea</h2>
                            <p className="text-gray-500 mt-5">Primo in altis pelle alumnae Lorem markdownum obvius in seque opus, est bicorni forte; laeva…</p>

                            <div className="mt-5 flex gap-5">
                                <div className="mt-4">
                                    <img className="rounded-full" src={img2} alt="" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-600">Flowriya jekbos</h3>
                                    <p className="text-gray-400 font-bold mt-2">April 16, 2020</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* 2nd side */}
                <div className="w-1/2">
                    <div
                     data-aos="fade-left"
                     data-aos-offset="300"
                     data-aos-easing="ease-in-sine"
                     data-aos-duration="2000"
                    className="card card-side bg-base-100 shadow-xl">
                        <figure className="w-1/2">
                            <img className="h-full"
                                src={img3}
                                alt="Movie" />
                        </figure>
                        <div className="card-body w-1/2">
                            <div className="card-actions justify-start">
                                <button className="btn btn-primary">Food & Wellness</button>
                            </div>
                            <h2 className="card-title font-bold mt-5">Charlie and the Chocolate Factory Afternoon Tea</h2>
                            <p className="text-gray-500 mt-5">Primo in altis pelle alumnae Lorem markdownum obvius in seque opus, est bicorni forte; laeva…</p>

                            <div className="mt-5 flex gap-5">
                                <div className="mt-4">
                                    <img className="rounded-full" src={img2} alt="" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-600">Flowriya jekbos</h3>
                                    <p className="text-gray-400 font-bold mt-2">April 16, 2020</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trending;