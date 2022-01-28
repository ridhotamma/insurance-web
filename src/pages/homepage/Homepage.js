import React from "react";
import PersonImg from "../../assets/img/person-1.png";
import {
    Hero,
    TextWrapper,
    Paragraph,
    Heading,
    Container,
    Items,
    ButtonSubmit,
} from "./styles";
import GojekImg from "../../assets/img/gojek.jpeg";
import TokopediaImg from "../../assets/img/tokopedia.png";
import GrabImg from "../../assets/img/grab.png";
import colors from "../../constants/css/colors";

const Homepage = () => {
    return (
        <React.Fragment>
            <Container background={colors.blue500}>
                <Hero>
                    <img
                        src={PersonImg}
                        alt="orang"
                        style={{ margin: "40px 40px 0px 20px" }}
                    />
                    <TextWrapper direction="column">
                        <Heading>Penuh cinta dengan asuransi</Heading>
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
                </Hero>
                <Items direction="column" background="white" align='center' divide responsive>
                    <Heading color="black">Trusted By</Heading>
                    <Items style={{ gap: "15px" }}>
                        <img src={GojekImg} alt="icons" width={200} />
                        <img src={TokopediaImg} alt="icons" width={200} />
                        <img src={GrabImg} alt="icons" width={170} />
                    </Items>
                </Items>
            </Container>
            <Container>
                <Items
                    background="white"
                    justify="space-around"
                    align="flex-start"
                    container
                    divide
                    outer
                    responsive
                >
                    <Items
                        direction="column"
                        align="flex-start"
                        responsive
                        style={{ width: "100%", padding: "20px", marginRight: '25px' }}
                    >
                        <Heading color="black">Contact Us</Heading>
                        <input type="text" placeholder="Your Phone" />
                        <input type="text" placeholder="Your Email" />
                        <textarea type="text" placeholder="Messages" />
                        <ButtonSubmit>Submit</ButtonSubmit>
                    </Items>
                    <Items>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63457.145794759526!2d106.72016808309785!3d-6.254295791017643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f0f1234eaf69%3A0x3eb2c878c19909f3!2sKec.%20Pesanggrahan%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1643249324487!5m2!1sid!2sid"
                            width="600"
                            height="450"
                            loading="lazy"
                            title="maps"
                            style={{
                                border: "none",
                                padding: "20px 20px 0px 0px",
                            }}
                        ></iframe>
                    </Items>
                </Items>
            </Container>
        </React.Fragment>
    );
};

export default Homepage;
