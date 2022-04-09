import React from "react";
import HeaderLogo from "../HeaderLogo/HeaderLogo";
import HeaderNav from "../HeaderNav/HeaderNav";
import HeaderCart from "../HeaderCart/HeaderCart";
import HeaderUser from "../HeaderUser/HeaderUser";
import useMedia from "../../Hooks/useMedia";
import { HeaderStyle, Wrapper, Menu } from "./Style";
import { ReactComponent as MenuIcon } from "../../../Assets/icon-menu.svg";

const Header = () => {
    const mobileMenu = useMedia("(max-width: 900px)");
    const [showMenu, setShowMenu] = React.useState(false);

    return (
        <HeaderStyle>
            {mobileMenu && showMenu && (
                <Menu>
                    <HeaderNav
                        showMenu={showMenu}
                        setShowMenu={setShowMenu}
                        mobileMenu={mobileMenu}
                    />
                </Menu>
            )}

            <Wrapper>
                <div className="HeaderDiv">
                    {mobileMenu == true ? (
                        <>
                            <button className="menu" onClick={() => setShowMenu(!showMenu)}>
                                <MenuIcon />
                            </button>
                            <HeaderLogo />
                        </>
                    ) : (
                        <>
                            <HeaderLogo />
                            <HeaderNav />
                        </>
                    )}
                </div>
                <div className="HeaderDiv">
                    <HeaderCart />
                    <HeaderUser />
                </div>
            </Wrapper>
        </HeaderStyle>
    );
};

export default Header;
