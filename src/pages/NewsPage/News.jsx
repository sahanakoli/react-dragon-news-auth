
import Header from "../../Sheard/Header/Header";
import RightSideNav from "../../Sheard/RightSideNav/RightSideNav";
import Navbar from "../../Sheard/Navbar/Navbar";
import DetailsCard from "../../DetailsCard/DetailsCard";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";

const News = () => {

    const [isShow, setIsShow] = useState(false);

    
    const news = useLoaderData([]);
    console.log(news)
    return (
        <div className=" text-center mt-8">
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
                <div className=" col-span-3">
                    <h2 className=" text-5xl">News Details</h2>
                    <div className="md:col-span-2">
            {
                news.map(aNews =><DetailsCard key={aNews._id} news={aNews}></DetailsCard>)
            }
           </div>
           {
                news.length > 1 &&
                !isShow && <button onClick={() => setIsShow(!isShow)} className=" mt-10 mb-6 bg-[#009444]  block mx-auto rounded-md px-4 py-2 text-white font-semibold">{isShow ? " " : "See All Category"}</button>
            }
                </div>
                <div>
                <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default News;
