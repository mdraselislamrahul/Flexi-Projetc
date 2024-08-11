import Banner from "./Banner/Banner";
import Beauty from "./Beauty/Beauty";
import Controversial from "./Controversial/Controversial";
import Fashions from "./Fashions/Fashions";
import Trending from "./Trending/Trending";


const Home = () => {
    return (
        <div className="bg-purple-50">
            <Banner></Banner>
            <Controversial></Controversial>
            <Beauty></Beauty>
            <Fashions></Fashions>
            <Trending></Trending>
        </div>
    );
};

export default Home;