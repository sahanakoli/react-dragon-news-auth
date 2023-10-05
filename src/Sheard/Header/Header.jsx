import moment from 'moment';
import logo from '../../assets/logo.png'


const Header = () => {
    return (
        <div>
            <img className='mx-auto' src={logo} alt="" />
          <p>Journalism without Fear or Favour</p>
          <p className=' text-xl'>{moment().format("dddd, MMMM D, YYYY")}</p>  
        </div>
    );
};

export default Header;