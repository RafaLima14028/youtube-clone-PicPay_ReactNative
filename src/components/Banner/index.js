import React from "react";

import { Container, Details, Image, Title, Descriptions } from "./styles";

import img13 from "../../images/13.png";

export default function Banner() {
  return (
    <Container>
      <Details>
        <Title>Cobre um amigo</Title>
        <Descriptions>
          Mantenhas suas parceiras em dia, use o PicPay para fazer suas
          cobranças.
        </Descriptions>
      </Details>
      <Image source={img13} />
    </Container>
  );
}
