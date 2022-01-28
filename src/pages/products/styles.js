import styled from "styled-components";
import breakpoints from "../../constants/css/breakpoints";
import colors from "../../constants/css/colors";
import fonts from "../../constants/css/fonts";

const Hero = styled.div`
    width: 80%;
    padding: 0 20px;
    margin: 20px auto 20px auto;
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
    margin: ${props => (props.center ? '0 auto' : '')};
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
    color: ${props => (props.color || 'black')};
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

export { Hero, TextWrapper, Heading, Paragraph, Container, ButtonSubmit };
