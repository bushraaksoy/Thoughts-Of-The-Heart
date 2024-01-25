import './navbar.css'
import { NavLink } from 'react-router-dom';

const navItems: string[] = ['HOME', 'BLOGS', 'ABOUT', 'CONTACT'];

const Navbar = () => {
    return (
        <nav>
            <ul>
                {navItems.map((item, inx) => {
                    const link = '/' + (!item.includes('HOME') ? item.toLowerCase() : '');
                    return (
                        <li className='nav-item' key={inx}>
                            <NavLink
                                to={link}
                                className={({ isActive }) => isActive ? 'active nav-item' : 'nav-item'}>
                                {item}
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}




export default Navbar;  
