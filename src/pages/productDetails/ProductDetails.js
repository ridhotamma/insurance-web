import React from "react";
import { useParams } from "react-router-dom";
import DetailContainer from "./styles";
import dummyData from "../../utils/dummy";
import { Heading, Paragraph, TextWrapper } from "../products/styles";

const ProductDetails = () => {
    const { slug } = useParams();
    const data = dummyData.filter(item => item.slug === slug)[0];
    return (
        <React.Fragment>
            <DetailContainer>
                <img src={data.thumbnail} alt="asdf" width={200}/>
                <TextWrapper direction='column'>
                    <Heading color="black">{data.name}</Heading>
                    <Paragraph color="black" style={{ marginBottom: '20px' }}>{data.description}</Paragraph>
                    <Paragraph color="black" style={{ marginBottom: '20px' }}>{data.description}</Paragraph>
                    <Paragraph color="black" style={{ marginBottom: '20px' }}>{data.description}</Paragraph>
                </TextWrapper>
                <TextWrapper direction='column'>
                    <Heading color="black">Benefit</Heading>
                    <Paragraph color="black" style={{ marginBottom: '20px' }}>{data.description}</Paragraph>
                    <Paragraph color="black" style={{ marginBottom: '20px' }}>{data.description}</Paragraph>
                    <Paragraph color="black" style={{ marginBottom: '20px' }}>{data.description}</Paragraph>
                </TextWrapper>
                <TextWrapper direction='column'>
                    <Heading color="black">Term and Condition</Heading>
                    <Paragraph color="black" style={{ marginBottom: '20px' }}>{data.description}</Paragraph>
                    <Paragraph color="black" style={{ marginBottom: '20px' }}>{data.description}</Paragraph>
                    <Paragraph color="black" style={{ marginBottom: '20px' }}>{data.description}</Paragraph>
                </TextWrapper>
            </DetailContainer>
        </React.Fragment>
    );
};

export default ProductDetails;
