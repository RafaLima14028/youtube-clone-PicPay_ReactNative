import React from "react";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

import {
  Wrapper,
  Container,
  Header,
  Input,
  TextInput,
  Text,
  Divider,
} from "./styles";
import Suggestions from "../../components/Suggestions";
import Services from "../../components/Services";

export default function Pay() {
  return (
    <Wrapper>
      <Container>
        <Header>
          <MaterialCommunityIcons
            name="qrcode-scan"
            size={25}
            color="#10c86e"
          />

          <Input>
            <AntDesign name="search1" size={20} color="#fff" />
            <TextInput
              placeholder="Quem você quer pagar?"
              keyboardAppearance="dark"
            />
          </Input>
        </Header>
        <Text>Sugestões para Você</Text>
        <Suggestions />
        <Divider />
        <Services />
      </Container>
    </Wrapper>
  );
}
