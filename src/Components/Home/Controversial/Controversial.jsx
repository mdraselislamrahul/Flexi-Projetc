import img1 from "./Image/jane-smith.webp"
import img2 from "./Image/steve-grant.webp"
import img3 from "./Image/florrie-jacobs.webp"
import img4 from "./Image/sponsor.webp"
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Controversial = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className="mt-20 px-5">
            <div className="flex justify-between">
                <h2 className="text-3xl ml-20 text-black">Controversial News</h2>
                <h2 className="text-3xl mr-20 font-bold text-gray-400">Topics</h2>
            </div>
            <div className="flex gap-5 mt-20">
                <div className="w-9/12 grid grid-cols-2 gap-5">
                    {/* 1st Card */}
                    <div
                        data-aos="fade-down-right"
                        data-aos-duration="2000"
                    >
                        <div className="card bg-base-100 w-full shadow-xl ">
                            <div className="card-body">
                                <div className="justify-end">
                                    <button className="bg-secondary btn text-white">Fashion & Style</button>
                                </div>
                                <h2 className="card-title mt-5">Three New Outfit Formulas To Add To Your Capsule Wardrobe</h2>
                                <p className="mt-5">Me clausere Erigonen ego Lorem markdownum sustineant oscula caespite ad gratia motus silvis…</p>

                                <div className="mt-5 flex gap-2">
                                    <div>
                                        <img className="rounded-full" src={img1} alt="" />
                                    </div>
                                    <div>
                                        <button className="font-bold text-gray-400 hover:text-blue-400">Jane Smith</button>
                                        <p>April 16, 2020</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* 2nd Card */}
                    <div
                        data-aos="fade-down-left"
                        data-aos-duration="2000"

                    >
                        <div className="card bg-base-100 w-full shadow-xl">
                            <div className="card-body">
                                <div className="justify-end">
                                    <button className="bg-secondary btn text-white">Fashion & Style</button>
                                </div>
                                <h2 className="card-title mt-5">Three New Outfit Formulas To Add To Your Capsule Wardrobe</h2>
                                <p className="mt-5">Me clausere Erigonen ego Lorem markdownum sustineant oscula caespite ad gratia motus silvis…</p>

                                <div className="mt-5 flex gap-2">
                                    <div>
                                        <img className="rounded-full" src={img2} alt="" />
                                    </div>
                                    <div>
                                        <button className="font-bold text-gray-400 hover:text-blue-400">Steve Grant</button>
                                        <p>April 16, 2020</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* 3th card */}
                    <div
                        data-aos="fade-up-right"
                        data-aos-duration="2000"
                    >
                        <div className="card bg-base-100 w-full shadow-xl">
                            <div className="card-body">
                                <div className="justify-end">
                                    <button className="bg-orange-500 btn text-white">Fashion & Welness</button>
                                </div>
                                <h2 className="card-title mt-5">Three New Outfit Formulas To Add To Your Capsule Wardrobe</h2>
                                <p className="mt-5">Me clausere Erigonen ego Lorem markdownum sustineant oscula caespite ad gratia motus silvis…</p>

                                <div className="mt-5 flex gap-2">
                                    <div>
                                        <img className="rounded-full" src={img1} alt="" />
                                    </div>
                                    <div>
                                        <button className="font-bold text-gray-400 hover:text-blue-400">Jane Smith</button>
                                        <p>April 16, 2020</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* 4th Card */}
                    <div
                        data-aos="fade-up-left"
                        data-aos-duration="2000"
                    >
                        <div className="card bg-base-100 w-full shadow-xl">
                            <div className="card-body">
                                <div className="justify-end">
                                    <button className="bg-orange-500 btn text-white">Fashion & Welness</button>
                                </div>
                                <h2 className="card-title mt-5">Three New Outfit Formulas To Add To Your Capsule Wardrobe</h2>
                                <p className="mt-5">Me clausere Erigonen ego Lorem markdownum sustineant oscula caespite ad gratia motus silvis…</p>

                                <div className="mt-5 flex gap-2">
                                    <div>
                                        <img className="rounded-full" src={img3} alt="" />
                                    </div>
                                    <div>
                                        <button className="font-bold text-gray-400 hover:text-blue-400">Florrie Jacobs</button>
                                        <p>April 16, 2020</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-3/12">
                    <Link to="/buty" className="btn btn-wide text-gray-500 font-bold text-xl bg-white hover:text-white hover:bg-secondary rounded-xl ">Beauty</Link>
                    <Link to="/style" className="btn btn-wide text-gray-500 font-bold text-xl bg-white hover:text-white hover:bg-secondary  mt-5 rounded-xl">Fashion & Style</Link>
                    <Link to="/food" className="btn btn-wide text-gray-500 font-bold text-xl bg-white hover:text-white hover:bg-secondary  mt-5 rounded-xl">Food & Wellness</Link>
                    <Link to="/lifeStyle" className="btn btn-wide text-gray-500 font-bold text-xl bg-white hover:text-white hover:bg-secondary  mt-5 rounded-xl">Lifestyle</Link>
                    <h1 className="text-gray-500 text-3xl font-bold text-center mt-20">Our Sponsor</h1>
                    <img className="mt-20 rounded-xl" src={img4} alt="" />
                    <h1 className="text-center font-bold text-xs text-gray-500">ADVERTISE WITH US</h1>
                </div>
            </div>
        </div>
    );
};

export default Controversial;