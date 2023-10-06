import moment from 'moment';
import logo from '../../assets/logo.png'


const Header = () => {
    return (
        <div>
            <img className='mx-auto' src={logo} alt="" />
          <p className='mt-4'>Journalism without Fear or Favour</p>
          <p className='mt-2 text-xl'>{moment().format("dddd, MMMM D, YYYY")}</p>  
        </div>
    );
};

export default Header;