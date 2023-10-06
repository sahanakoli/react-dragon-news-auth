import { useLoaderData } from "react-router-dom";
import Header from "../../Sheard/Header/Header";
import LeftSideNav from "../../Sheard/LeftSideNav/LeftSideNav";
import Navbar from "../../Sheard/Navbar/Navbar";
import RightSideNav from "../../Sheard/RightSideNav/RightSideNav";
import BreakingNews from "../News/BreakingNews";
import NewsCard from "../../NewsCard/NewsCard";

const Home = () => {

    const news = useLoaderData();
    console.log(news)
    return (
        <div className=" text-center mt-14">
            <Header></Header>
            <BreakingNews></BreakingNews>
           <Navbar></Navbar>
           <div className=" grid grid-cols-1 md:grid-cols-4 gap-6">
           <div className="">
            <LeftSideNav></LeftSideNav>
           </div>
           {/* news container */}
           <div className="md:col-span-2">
            {
                news.map(aNews =><NewsCard key={aNews._id} news={aNews}></NewsCard>)
            }
           </div>
           <div className="">
            <RightSideNav></RightSideNav>
           </div>
           </div>
        </div>
    );
};

export default Home;