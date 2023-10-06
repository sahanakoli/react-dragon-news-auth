
import Header from "../../Sheard/Header/Header";
import RightSideNav from "../../Sheard/RightSideNav/RightSideNav";
import DetailsCard from "../../DetailsCard/DetailsCard";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from 'react-icons/ai'


const News = () => {

    return (
        <div className=" text-center mt-8">
            <Header></Header>
            <div className="grid md:grid-cols-4 gap-10 mt-20">
                <div className=" col-span-3">
                    <h2 className=" text-5xl">News Details</h2>
                    <div className="md:col-span-2">
            <DetailsCard></DetailsCard>
           </div>
           <Link to='/'><button className="btn btn-error"><AiOutlineArrowLeft></AiOutlineArrowLeft> All news in this category</button></Link>
                </div>
                <div>
                <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default News;
