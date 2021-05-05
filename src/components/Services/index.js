import React from "react";

import {
  Container,
  Text,
  Service,
  Option,
  Img,
  Title,
  SubTitle,
  ServiceContainer,
} from "./styles";

import img01 from "../../images/01.png";
import img06 from "../../images/06.png";
import img07 from "../../images/07.png";
import Img11 from "../../images/11.png";

const items = [
  {
    key: String(Math.random()),
    img: Img11,
    title: "Pagar nas Maquininhas",
    subTitle:
      "Pague com PicPay em máquinas Cielo e Getnet escaneando o QR Code na máquina",
  },
  {
    key: String(Math.random()),
    img: img06,
    title: "Pagar Conta",
    subTitle: "Pague sua conta de luz, água, boletos bancários etc",
  },
  {
    key: String(Math.random()),
    img: img07,
    title: "Cobrar",
    subTitle: "Cobre um amigo",
  },
  {
    key: String(Math.random()),
    img: img01,
    title: "Recarga de Celular",
    subTitle: "Vivo, Claro, Tim, Oi, Nextel, Algar, Sercomtel, Correios",
  },
];

export default function Services() {
  return (
    <Container>
      <Text>Serviços</Text>

      {items.map((item) => (
        <Service key={item.key}>
          <Img source={item.img} />

          <ServiceContainer>
            <Title>{item.title}</Title>
            <SubTitle>{item.subTitle}</SubTitle>
          </ServiceContainer>
        </Service>
      ))}
    </Container>
  );
}
