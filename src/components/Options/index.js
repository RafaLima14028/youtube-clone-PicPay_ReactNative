import React from "react";
import { AntDesign } from "@expo/vector-icons";

import {
  Wrapper,
  Container,
  Title,
  Option,
  OptionAction,
  OptionLabel,
  OptionComplement,
} from "./styles";

export default function Options() {
  return (
    <Wrapper>
      <Title>Minha conta</Title>
      <Container>
        <Option>
          <OptionLabel>Meu PicPay</OptionLabel>
          <OptionAction>
            <OptionComplement>@RafaeLima</OptionComplement>
            <AntDesign
              name="right"
              size={14}
              color="#fff"
              style={{ marginLeft: 13 }}
            />
          </OptionAction>
        </Option>

        <Option>
          <OptionLabel>Meu Número</OptionLabel>
          <OptionAction>
            <OptionComplement>(34) 99863-7942</OptionComplement>
            <AntDesign
              name="right"
              size={14}
              color="#fff"
              style={{ marginLeft: 13 }}
            />
          </OptionAction>
        </Option>

        <Option>
          <OptionLabel>Meu E-mail</OptionLabel>
          <OptionAction>
            <OptionComplement>rafael.alv334@gmail.com</OptionComplement>
            <AntDesign
              name="right"
              size={14}
              color="#fff"
              style={{ marginLeft: 13 }}
            />
          </OptionAction>
        </Option>

        <Option>
          <OptionLabel>Dados Pessoais</OptionLabel>
          <OptionAction>
            <AntDesign
              name="right"
              size={14}
              color="#fff"
              style={{ marginLeft: 13 }}
            />
          </OptionAction>
        </Option>

        <Option>
          <OptionLabel>Conta Bancária</OptionLabel>
          <OptionAction>
            <AntDesign
              name="right"
              size={14}
              color="#fff"
              style={{ marginLeft: 13 }}
            />
          </OptionAction>
        </Option>

        <Option>
          <OptionLabel>Taxas e Limites</OptionLabel>
          <OptionAction>
            <AntDesign
              name="right"
              size={14}
              color="#fff"
              style={{ marginLeft: 13 }}
            />
          </OptionAction>
        </Option>

        <Option>
          <OptionLabel>Meus Endereços</OptionLabel>
          <OptionAction>
            <AntDesign
              name="right"
              size={14}
              color="#fff"
              style={{ marginLeft: 13 }}
            />
          </OptionAction>
        </Option>

        <Option>
          <OptionLabel>Meus Favoritos</OptionLabel>
          <OptionAction>
            <AntDesign
              name="right"
              size={14}
              color="#fff"
              style={{ marginLeft: 13 }}
            />
          </OptionAction>
        </Option>
      </Container>
    </Wrapper>
  );
}
