import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Card";
import { Container, Row } from "reactstrap";


export default function PhotoList() {
  // dependancy array
  const [photo, setPhoto] = useState([]);

  // request for photo

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=tAQI0T7EkDJ2b75smGQMSaDgMTAaPnrB6qhHbpm6")
      .then(resp => {
        const photo = resp.data;
        console.log("this is it", photo);
        setPhoto(photo);
      })
      .catch(error => {
        console.log("rip", error);
      });
  }, []);

  // return data

  return (

    <Container>
      <Row>
        <Cards
          title={photo.title}
          picture={photo.url}
          date={photo.date}
          description={photo.explanation}
        />
      </Row>
    </Container>

  )
} 