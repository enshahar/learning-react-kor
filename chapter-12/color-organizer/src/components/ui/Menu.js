import PropTypes from 'prop-types'
import { NavLink as Link } from 'react-router-dom'
import '../../stylesheets/Menu.scss'

const selectedStyle = { color: 'red' }

const Menu = ({ sort }) =>
    <nav className="menu">
        <Link to="/" activeStyle={(sort === '/') ? selectedStyle : {}}>날짜</Link>
        <Link to="/sort/title" activeStyle={selectedStyle}>이름</Link>
        <Link to="/sort/rating" activeStyle={selectedStyle}>평점</Link>
    </nav>

Menu.propTypes = {
    sort: PropTypes.string
}

export default Menu
