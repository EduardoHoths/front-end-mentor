import React from "react";
import { Nav } from "./Style";
import {ReactComponent as Close} from '../../../Assets/icon-close.svg'

const HeaderNav = ({mobileMenu, setShowMenu, showMenu}) => {
    return (
        <Nav mobileMenu={mobileMenu} showMenu={showMenu}>
            {mobileMenu && <button onClick={() => setShowMenu(!showMenu)}><Close/></button>}
            
            <a href="">Collections</a>
            <a href="">Men</a>
            <a href="">Women</a>
            <a href="">About</a>
            <a href="">Contact</a>
        </Nav>
    );
};

export default HeaderNav;
