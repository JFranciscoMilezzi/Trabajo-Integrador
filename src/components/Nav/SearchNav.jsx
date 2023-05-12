import SearchBar from "../Searchbar/SearchBar";
import style from './SearchNav.module.css'
import { Link, NavLink } from "react-router-dom";



const Nav = ({onSearch}) => {
    return (
        <div className={style.SearchNav}>
          <SearchBar onSearch={onSearch} />
    
          <Link to="/home">
            <button className={style.Buttoncitos}>Home</button>
          </Link>
    
          <NavLink to="/about">
            <button className={style.Buttoncitos}>About</button>
          </NavLink>
    
          <NavLink to='/favorites'>
              <button className={style.Buttoncitos}>Favorites</button>
          </NavLink>
    
        </div>
      );
    };
    

export default Nav;