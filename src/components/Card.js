import React from "react";
import { Card, Button, CardTitle, CardText, CardImg } from 'reactstrap';
import styled from "styled-components";

const Wrapper = styled.div`
    background: rgb(155, 158, 158);
    width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    text-size-adjust: 1.5rem;
    margin-bottom:5rem;
`;

// card creator

const Cards = (props) => {
  return (
    <Wrapper>
      <Card body className="text-center">
        <CardTitle><h1>{props.title}</h1></CardTitle>
        <CardText>{props.date}</CardText>
        <CardImg top width="100%" src={props.picture} />
        <CardText>{props.description}</CardText>
        <Button ><a style={{ textDecoration: 'none', color: 'black' }} href="https://apod.nasa.gov/apod/astropix.html">NASA Website</a></Button>
        {/* style={{alignSelf: 'center'}}  ??? */}
      </Card>
    </Wrapper>
  );
};

export default Cards;