import React from 'react';
import { Link} from "react-router-dom";
// import { Navbar, NavItem, Icon } from 'react-materialize'; 

const AppHeader = () => {
    /* Unfortunatedly Navbar from react-materialize is buggued and doesn't work */

    return (
        <>
            <nav>
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo center">Battle Hero</Link>
                <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                <ul className="right hide-on-med-and-down">
                    <li><Link to="/heroes">Heroes</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li><Link to="/">Battle</Link></li>
                <li><Link to="/heroes">Heroes</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </>
    );
}

export default AppHeader;