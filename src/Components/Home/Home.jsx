
import Banner from "./Banner/Banner";
import Beauty from "./Beauty/Beauty";
import Controversial from "./Controversial/Controversial";
import Fashions from "./Fashions/Fashions";
import Trending from "./Trending/Trending";
import Wellness from "./Wellness/Wellness";


const Home = () => {
    return (
        <div className="bg-purple-50">
            <Banner></Banner>
            <Controversial></Controversial>
            <Beauty></Beauty>
            <Fashions></Fashions>
            <Trending></Trending>
            <Wellness></Wellness>
        </div>
    );
};

export default Home;