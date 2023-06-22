import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
import meditation from '../../assets/iconMeditation.svg'
import swiming from '../../assets/iconSwiming.svg'
import bike from '../../assets/iconBike.svg'
import DumbBell from '../../assets/iconDumbBell.svg'
import './menu.css';

/**
* A functional component that represents a menu containing horizontal and vertical menus with links and images.
* @function
* @returns {JSX.Element} A JSX.Element representing the menu component.
*/

function Menu() {

    return (
        <header>
            <div className="horizontal_menu">
                <Link to="/">
                    <img alt='logo' src={logo} className="logo" />
                </Link>
                <div className="nav_menu">
                    <nav className="link_nav_banner">
                        <NavLink to="/">Accueil</NavLink>
                    </nav>
                    <nav className="nav_banner">
                        <p>Profil</p>
                    </nav>
                    <nav className="nav_banner">
                        <p>Réglage</p>
                    </nav>
                    <nav className="nav_banner">
                        <p>Communauté</p>
                    </nav>
                </div>
            </div>
            <div className="vertical_menu">
                <div className="div_img">
                    <img alt='meditation' src={meditation} className="meditation" />
                    <img alt='swiming' src={swiming} className="swiming" />
                    <img alt='bike' src={bike} className="bike" />
                    <img alt='DumbBell' src={DumbBell} className="DumbBell" />
                </div>
                <p className="text">Copiryght, SportSee 2020</p>
            </div>
        </header>
    )
}

export default Menu