import styled from "styled-components";
import breakpoints from "../../constants/css/breakpoints";
import colors from "../../constants/css/colors";
import fonts from "../../constants/css/fonts";

const Hero = styled.div`
    width: 80%;
    padding: 0 20px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${breakpoints.tablet} {
        flex-direction: column;
        padding-bottom: 40px;
    }
`;

const Container = styled.div`
    width: 100%;
    background-color: ${props => (props.background || 'white')};
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: ${props => props.direction || "row"};
`;

const Heading = styled.h3`
    font-size: 30px;
    font-family: ${fonts.montserrat};
    font-weight: bold;
    margin-bottom: 20px;
    color: ${props => props.color || "white"};
`;

const Paragraph = styled.p`
    font-size: 15px;
    font-family: ${fonts.montserrat};
    color: white;
`;

const Items = styled.div`
    display: flex;
    flex-direction: ${props => props.direction || "row"};
    align-items: ${props => props.align || "center"};
    justify-content: ${props => props.justify || "center"};
    background-color: ${props => props.background || "inherit"};
    padding: ${props => (props.divide ? "20px 0px" : "0px 0px")};
    gap: ${props => props.gap || 0} + px;
    width: ${props => props.container ? '80%': '100%'};
    margin: ${props => props.container ? '20px auto': ''};

    @media ${breakpoints.tablet} {
        flex-direction: ${props => (props.responsive ? 'column' : 'row')};
    }
`;

const SliderContainer = styled.div`
    margin: 0 auto;
    width: 80%;
    color: #333;
`;

const ButtonSubmit = styled.div`
    margin-top: 20px;
    font-size: 15px;
    width: 30%;
    background-color: ${colors.blue300};
    padding: 10px 10px;
    text-align: center;
    cursor: pointer;
`;

export { Hero, TextWrapper, Heading, Paragraph, Container, Items, SliderContainer, ButtonSubmit };
