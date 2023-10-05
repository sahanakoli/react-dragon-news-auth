import Header from "../../Sheard/Header/Header";
import LeftSideNav from "../../Sheard/LeftSideNav/LeftSideNav";
import Navbar from "../../Sheard/Navbar/Navbar";
import RightSideNav from "../../Sheard/RightSideNav/RightSideNav";
import BreakingNews from "../News/BreakingNews";

const Home = () => {
    return (
        <div className=" text-center mt-10">
            <Header></Header>
            <BreakingNews></BreakingNews>
           <Navbar></Navbar>
           <h2 className=" text-2xl font-poppins font-bold">Home page</h2> 
           <div className=" grid grid-cols-1 md:grid-cols-4 gap-6">
           <div className="border">
            <LeftSideNav></LeftSideNav>
           </div>
           <div className="border  md:col-span-2">
            <h2 className=" text-4xl">News coming soon</h2>
           </div>
           <div className=" border">
            <RightSideNav></RightSideNav>
           </div>
           </div>
        </div>
    );
};

export default Home;