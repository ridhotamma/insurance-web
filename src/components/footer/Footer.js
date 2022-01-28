import React from "react";
import { FooterSection, Left, Middle, Right, Items, Item } from "./styles";
import Logo from '../../assets/img/logo.png';

const Footer = () => {
    return (
        <FooterSection>
            <Left>
                <Items direction="column">
                    <Item>Privacy and Policy</Item>
                    <Item>Terms and Condition</Item>
                </Items>
            </Left>
            <Middle center>
                <img src={Logo} alt='symbol' width={100}/>
                <Item>Copyright Gilang Insurance, 2022</Item>
            </Middle>
            <Right>
                <Items direction="column">
                    <Item bold>Contact Us</Item>
                    <Item>insurance@ui.co.id</Item>
                    <Item>(021) 567890</Item>
                </Items>
            </Right>
        </FooterSection>
    );
};

export default Footer;
