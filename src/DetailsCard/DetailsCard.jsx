/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */



const DetailsCard = ({news}) => {

    const {_id,title, image_url, details} = news;
    return (
        <div className=" flex justify-center items-center mt-8">
        <div className="card w-full mx-auto bg-base-100 shadow-xl mb-16 ">
        <figure><img src={image_url} alt="" /></figure>
         <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{details}</p>
       </div>
       </div>
    </div>
    );
};

export default DetailsCard;