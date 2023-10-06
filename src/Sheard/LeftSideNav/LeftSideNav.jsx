import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import pic1 from '../../assets/1.png'
import pic2 from '../../assets/2.png'
import pic3 from '../../assets/3.png'
import moment from 'moment';
import {  AiOutlineCalendar } from 'react-icons/ai'


const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('/categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <div className=" space-y-4 mt-4">
            <h2 className=" text-2xl text-center font-bold">All Categories</h2>
            {
               categories.map(category => <Link className=" block text-xl ml-4 font-semibold px-4" key={category.id} to={`/category/${category.id}`}>{category.name}</Link>) 
            }
        </div>
        <div>
            <div className=" flex justify-center items-center mt-8">
            <img src={pic1} alt="" />
            </div>
            <h4 className=" text-xl font-semibold mt-4">Bayern Slams Authorities<br/> Over Flight Delay to Club<br/> World Cup</h4>
            <div className="flex justify-center items-center mt-3">
            <p className="mr-4 text-base font-medium">Sports</p>
            <AiOutlineCalendar></AiOutlineCalendar>
            <p className='ml-2 text-sm'>{moment().format(" MMMM D, YYYY")}</p>
            </div>
            <div className=" flex justify-center items-center mt-8">
            <img src={pic2} alt="" />
            </div>
            <h4 className="text-xl font-semibold mt-4">Bayern Slams Authorities<br/> Over Flight Delay to Club<br/> World Cup</h4>
            <div className="flex justify-center items-center mt-3">
            <p className="mr-4 text-base font-medium">Sports</p>
            <AiOutlineCalendar></AiOutlineCalendar>
            <p className='ml-2 text-sm'>{moment().format(" MMMM D, YYYY")}</p>
            </div>
            <div className=" flex justify-center items-center mt-8">
            <img src={pic3} alt="" />
            </div>
            <h4 className="text-xl font-semibold mt-4">Bayern Slams Authorities<br/> Over Flight Delay to Club<br/> World Cup</h4>
            <div className="flex justify-center items-center mt-3">
            <p className="mr-4 text-base font-medium">Sports</p>
            <AiOutlineCalendar></AiOutlineCalendar>
            <p className=' ml-2 text-sm'>{moment().format(" MMMM D, YYYY")}</p>
            </div>
        </div>
        </div>
    );
};

export default LeftSideNav;