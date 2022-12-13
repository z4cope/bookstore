import { Link, Outlet } from 'react-router-dom';
import { NavbarNav, NavItems, UserProfile } from './styles/navbar';
import user from '../../assets/user.png';

const Navbar = () => (
  <>
    <NavbarNav>
      <NavItems>
        <li className="logo">
          <Link to="/">Bookstore CMS</Link>
        </li>
        <li>
          <Link to="/">Books</Link>
        </li>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
      </NavItems>
      <UserProfile>
        <button type="button">
          <img src={user} alt="user profile" />
        </button>
      </UserProfile>
    </NavbarNav>
    <Outlet />
  </>
);

export default Navbar;
