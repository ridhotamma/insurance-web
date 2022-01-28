import styled from "styled-components";
import breakpoints from "../../constants/css/breakpoints";
import colors from "../../constants/css/colors";

const FooterSection = styled.footer`
    width: 100%;
    padding: 20px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${colors.blue500};
    color: white;

    @media ${breakpoints.tablet} {
        flex-direction: column;
        align-items: flex-start;
    }
`;

const Left = styled.div``;
const Middle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media ${breakpoints.tablet} {
        justify-content: flex-start;
        align-items: flex-start;
        margin: 20px 0px;
    }
`;
const Right = styled.div``;
const Item = styled.p`
    font-weight: ${props => (props.bold ? "bold" : "300")};
    text-transform: ${props => (props.upper ? "uppercase" : "")};
    margin-bottom: ${props => (props.gutter ? "10px" : "5px")};
    cursor: pointer;
`;
const Items = styled.div`
    display: flex;
    flex-direction: ${props => props.direction || "row"};
    gap: ${props => props.gap || 0} + px;
`;

export { FooterSection, Left, Middle, Right, Item, Items };
