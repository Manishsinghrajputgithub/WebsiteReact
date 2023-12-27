import { useRouter } from 'next/router';

import ALink from '~/components/features/alink';
import { Link } from 'react-router-dom';
import { FaSearch,FaHeart,FaShoppingCart, FaUser } from 'react-icons/fa';



function NavbarItems() {
    // const router = useRouter();
    // let path = router.asPath;
    // let query = router.query;

   

    return (
        
        
        <nav className="silverSpirits-navbar">
        <ul>
          <li className='navbar-list'>Rings</li>
          <li className='navbar-list'>Earrings</li>
          <li className='navbar-list'>Bracelets & Bangles</li>
          <li className='navbar-list'>Solitaires</li>
          <li className='navbar-list'>Mangalsutras</li>
          <li className='navbar-list'>Necklaces</li>
        </ul>

        <div className="silverSpirits-navbar-search">
        <input type="text" placeholder="Search for Price, Relationship, and more" />
        <button><FaSearch /></button>
        <span>Delivery&Store</span>
        <span style={{color:'#e83e8c'}}>Enter Pincode</span>
      </div>

      <div className="silverSpirits-navbar-icons">
      <img src="images/country_flag.png" className="countryFlag" width={30} height={30}/>
      <span className="icon" ><FaUser /></span>
        <span className="icon" ><FaHeart /></span>
        <span className="icon" ><FaShoppingCart /></span>
      </div>
     
  
      </nav>
    );
}

export default NavbarItems;