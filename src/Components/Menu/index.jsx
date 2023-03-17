import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
import meditation from '../../assets/iconMeditation.svg'
import swiming from '../../assets/iconSwiming.svg'
import bike from '../../assets/iconBike.svg'
import DumbBell from '../../assets/iconDumbBell.svg'
import './menu.css';

function Menu() {

    return (
        <header>
            <div className="horizontal_menu">
                <Link to="/">
                    <img alt='logo' src={logo} className="logo" />
                </Link>

                <nav className="nav_banner">
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