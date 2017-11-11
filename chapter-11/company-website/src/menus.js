import HomeIcon from 'react-icons/lib/fa/home'
import { NavLink } from 'react-router-dom'
import './stylesheets/menus.scss'

const selectedStyle = {
    backgroundColor: "white",
    color: "slategray"
}

export const MainMenu = () =>
    <nav className="main-menu">
        <NavLink to="/"><HomeIcon/></NavLink>
        <NavLink to="/about" activeStyle={selectedStyle}>[회사 소개]</NavLink>
        <NavLink to="/events" activeStyle={selectedStyle}>[이벤트]</NavLink>
        <NavLink to="/products" activeStyle={selectedStyle}>[제품]</NavLink>
        <NavLink to="/contact" activeStyle={selectedStyle}>[고객 지원]</NavLink>
    </nav>

export const AboutMenu = ({ match }) =>
    <div className="about-menu">
        <li>
            <NavLink to="/about"
                  style={match.isExact && selectedStyle}>
                [회사]
            </NavLink>
        </li>
        <li>
            <NavLink to="/about/history"
                  activeStyle={selectedStyle}>
                [연혁]
            </NavLink>
        </li>
        <li>
            <NavLink to="/about/services"
                  activeStyle={selectedStyle}>
                [서비스]
            </NavLink>
        </li>
        <li>
            <NavLink to="/about/location"
                  activeStyle={selectedStyle}>
                [위치]
            </NavLink>
        </li>
    </div>
