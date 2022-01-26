import React from "react";
import { Navbar as Nav, Items, Item, Logo } from "./styles";

const Navbar = () => {
    return (
        <React.Fragment>
            <Nav>
                <Logo img="#" />
                <Items>
                    <Item>Home</Item>
                    <Item>Product</Item>
                    <Item>About</Item>
                </Items>
            </Nav>
        </React.Fragment>
    );
};

export default Navbar;
