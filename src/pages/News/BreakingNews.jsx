import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex bg-base-200 mt-6">
           <button className=" btn btn-error">Breaking News</button>
           <Marquee pauseOnHover={true} speed={150}>
           <Link className="mr-12" to="/">I can be a React component, multiple React components.....</Link>
           <Link className="mr-12" to="/">I can be a React component, multiple React components.....</Link>
           <Link className="mr-12" to="/">I can be a React component, multiple React components.....</Link>
           </Marquee> 
        </div>
    );
};

export default BreakingNews;