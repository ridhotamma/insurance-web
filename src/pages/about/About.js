import React from "react";
import PersonImg from "../../assets/img/person-2.png";
import PersonImg2 from "../../assets/img/person-3.png";
import PersonImg3 from "../../assets/img/person-4.png";
import colors from "../../constants/css/colors";
import GojekImg from "../../assets/img/gojek.jpeg";
import TokopediaImg from "../../assets/img/tokopedia.png";
import GrabImg from "../../assets/img/grab.png";
import { Hero, TextWrapper, Paragraph, Heading, Container, Items } from "./styles";

const About = () => {
    return (
        <React.Fragment>
            <Container background={colors.blue500}>
                <Hero>
                    <TextWrapper direction="column">
                        <Heading>About Us</Heading>
                        <Paragraph>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industrys standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                        </Paragraph>
                    </TextWrapper>
                    <img
                        src={PersonImg}
                        alt="orang"
                        width={400}
                        style={{ marginLeft: "20px" }}
                    />
                </Hero>
            </Container>
            <Container background="white" divide>
                <Hero background="white">
                    <img src={PersonImg2} alt="orang" width={400} />
                    <TextWrapper direction="column">
                        <Heading color="black">Our Vision</Heading>
                        <Paragraph color="black">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industrys standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                        </Paragraph>
                    </TextWrapper>
                </Hero>
            </Container>
            <Container background="white" divide>
                <Hero background="white">
                    <TextWrapper direction="column">
                        <Heading color="black">Our Mission</Heading>
                        <Paragraph color="black">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industrys standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                        </Paragraph>
                    </TextWrapper>
                    <img src={PersonImg3} alt="orang" width={400} />
                </Hero>
            </Container>
            <Items direction="column" background="white" align='center' divide responsive>
                <Heading color="black">Trusted By</Heading>
                <Items style={{ gap: "15px" }}>
                    <img src={GojekImg} alt="icons" width={200} />
                    <img src={TokopediaImg} alt="icons" width={200} />
                    <img src={GrabImg} alt="icons" width={170} />
                </Items>
            </Items>
        </React.Fragment>
    );
};

export default About;
