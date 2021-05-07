import React from "react";
import { AntDesign } from "@expo/vector-icons";

import {
  Wrapper,
  Header,
  Container,
  Title,
  User,
  UserImg,
  UserNickName,
  UserName,
  UserProfile,
  UserProfileLabel,
} from "./styles";
import Avatar from "../../images/avatar.png";
import Options from "../../components/Options";

export default function Settings() {
  return (
    <Wrapper>
      <Container>
        <Header>
          <Title>Ajustes</Title>
        </Header>
        <User>
          <UserImg source={Avatar} />
          <UserNickName>@RafaelLima</UserNickName>
          <UserName>Rafael</UserName>
          <UserProfile>
            <UserProfileLabel>
              Ver meu perfil
              <AntDesign name="right" size={14} color="#0db060" />
            </UserProfileLabel>
          </UserProfile>
        </User>

        <Options />
      </Container>
    </Wrapper>
  );
}
