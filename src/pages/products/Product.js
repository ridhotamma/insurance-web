import React from "react";
import { Link } from "react-router-dom";
import colors from "../../constants/css/colors";
import dummyData from "../../utils/dummy";
import {
    ButtonSubmit,
    Container,
    Heading,
    Hero,
    Paragraph,
    TextWrapper,
} from "./styles";

const Product = () => {
    return (
        <React.Fragment>
            <Heading color="black" style={{ textAlign: 'center', marginTop: '60px' }}>Our Products</Heading>
            <div style={{ width: '200px', height: '15px', backgroundColor: colors.blue200, margin: '0 auto', borderRadius: '30px' }}></div>
            {dummyData.map(data => {
                return (
                    <>
                        <Container background="white">
                            <Hero>
                                <img
                                    src={data.thumbnail}
                                    alt="orang"
                                    style={{ margin: "40px 40px 0px 20px" }}
                                />
                                <TextWrapper direction="column">
                                    <Heading color="black">{data.name}</Heading>
                                    <Paragraph color="black">
                                        {data.description}
                                    </Paragraph>
                                    <Link to={data.slug}>
                                        <ButtonSubmit>Read More</ButtonSubmit>
                                    </Link>
                                </TextWrapper>
                            </Hero>
                        </Container>
                    </>
                );
            })}
        </React.Fragment>
    );
};

export default Product;
