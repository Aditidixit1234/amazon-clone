import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import{Link} from 'react-router-dom'
import { useStateValue } from './StateProvider';
 function Header() {
  const [{basket}]=useStateValue();
  return (
    <div className='header'>
      <Link to="/">
      <img className='header_logo'
      src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"  />
      </Link>
     
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className='header_searchIcon'/>
      </div>
      <div className="header_nav">
        <Link to="/login">
        <div className="header_option">
<span className='header__optionLineOne'>Hello Guest</span>
<span className='header__optionLineTwo'>Sign In </span>
        </div>
        </Link>
       
        <div className="header_option">
        <span className='header__optionLineOne'>Returns</span>
        <span className='header__optionLineTwo'>& Orders</span>
            
        </div>
        <div className="header_option">
        <span className='header__optionLineOne'>Your</span>
        <span className='header__optionLineTwo'>Prime</span>
            
        </div>
        <Link to="/checkout">
        <div className="header_basket">
  <ShoppingCartIcon/>
  <span className='header_optionLineTwo
  header_basketCount'>{basket?.length}</span>
</div>
        </Link>


      </div>
    </div>
  );
}
export default Header;