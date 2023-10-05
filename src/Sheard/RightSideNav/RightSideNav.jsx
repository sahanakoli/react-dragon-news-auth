import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';

const RightSideNav = () => {
    return (
        <div>
                <div className=' p-4 space-y-3 mb-6'>
           <h2 className=" text-3xl">Login with</h2> 
           <button className="btn btn-outline w-full">
            <FaGoogle></FaGoogle>
            Google
           </button>
           <button className="btn btn-outline w-full">
            <FaGithub></FaGithub>
            Github
           </button>
        </div>
            <div className=' p-4 mb-6 border-x'>
           <h2 className=" text-3xl">Find us on</h2> 
           <a className=' p-4 flex text-lg items-center border rounded-t-lg' href="">
            <FaFacebook className='mr-3'></FaFacebook>
            Facebook
           </a>
           <a className=' p-4 flex text-lg items-center border' href="">
            <FaTwitter className='mr-3'></FaTwitter>
            Twitter
           </a>
           <a className=' p-4 flex text-lg items-center border rounded-b-lg' href="">
            <FaInstagram className='mr-3'></FaInstagram>
            Instagram
           </a>
        </div>
        </div>
    );
};

export default RightSideNav;