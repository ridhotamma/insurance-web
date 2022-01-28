import React from "react";
import { Link } from "react-router-dom";
import LogoImg from "../../assets/img/logo.png";
import Hamburger from "../../assets/img/hamburger.png";

import { Navbar as Nav, Items, Item, Logo, Right, Mobile } from "./styles";

const Navbar = () => {
    return (
        <React.Fragment>
            <Nav>
                <Logo>
                    <Link to="/">
                        <img src={LogoImg} alt="insurance" width={200} />
                    </Link>
                </Logo>
                <Right>
                    <Items>
                        <Item>
                            <Link to="/">Home</Link>
                        </Item>
                        <Item>
                            <Link to="/product">Product</Link>
                        </Item>
                        <Item>
                            <Link to="/about">About</Link>
                        </Item>
                    </Items>
                    <Mobile>
                        <img
                            src={Hamburger}
                            alt="icon mobile"
                            width={50}
                            height={40}
                        />
                    </Mobile>
                </Right>
            </Nav>
        </React.Fragment>
    );
};

export default Navbar;
