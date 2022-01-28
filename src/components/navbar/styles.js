import styled from "styled-components";
import fonts from "../../constants/css/fonts";
import colors from "../../constants/css/colors";
import breakpoints from "../../constants/css/breakpoints";

const Navbar = styled.nav`
    width: 100%;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    font-family: ${fonts.sansPro};
    background-color: ${colors.blue500};
    font-weight: bold;
    color: white;
`;

const Logo = styled.div``;

const Items = styled.ul`
    display: flex;
    align-items: center;

    @media ${breakpoints.tablet} {
        display: none;
    }
`;

const Right = styled.div`
    display: flex;
    align-items: center;
`;

const Item = styled.li`
    font-size: 20px;
    margin-right: 20px;
    list-style: none;
    cursor: pointer;
`;

const Mobile = styled.div`
    display: none;
    @media ${breakpoints.tablet} {
        display: block;
    }
`;

export { Navbar, Items, Item, Logo, Right, Mobile };
