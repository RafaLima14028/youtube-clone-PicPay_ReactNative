import React from "react";

import {
  Wrapper,
  Header,
  Text,
  Main,
  Notification,
  NotificationContainer,
  Title,
  Dates,
  Divider,
} from "./styles";

const items = [
  {
    key: String(Math.random()),
    title:
      "Identificamos um novo acesso à sua conta. Toque aqui para saber mais",
    date: "Ontem às 22:50",
  },
  {
    key: String(Math.random()),
    title:
      "Você tem 10% por nossa conta pra pagar um boleto hoje! Toque para saber mais",
    date: "30 de mai às 17:12",
  },
  {
    key: String(Math.random()),
    title:
      "Tá devendo aquela grana pra um amigo? Pague com PicPay e ganhe 20% de volta, SÓ HOJE!",
    date: "29 de mai às 13:31",
  },
  {
    key: String(Math.random()),
    title:
      "20% por nossa conta pra você pagar estabelecimentos ou comprar na PicPay Store hoje!",
    date: "29 de mai às 10:02",
  },
  {
    key: String(Math.random()),
    title:
      "Divida a conta do happy hour com seus amigos com PicPay e ganhe 40% de volta, SÓ HOJE! Toque para saber mais",
    date: "28 de mai às 09:45",
  },
  {
    key: String(Math.random()),
    title:
      "Você tem 10% por nossa conta pra pagar um boleto hoje! Toque para saber mais",
    date: "27 de mai às 17:12",
  },
  {
    key: String(Math.random()),
    title:
      "Identificamos um novo acesso à sua conta. Toque aqui para saber mais",
    date: "27 de mai às 12:31",
  },
  {
    key: String(Math.random()),
    title:
      "Você tem 10% por nossa conta pra pagar um boleto hoje! Toque para saber mais",
    date: "23 de mai às 17:12",
  },
];

export default function Notifications() {
  return (
    <Wrapper>
      <Header>
        <Text>Notificações</Text>
      </Header>
      <Main>
        {items.map((item) => (
          <Notification key={item.key}>
            <NotificationContainer>
              <Title>{item.title}</Title>
              <Dates>{item.date}</Dates>
            </NotificationContainer>
            <Divider />
          </Notification>
        ))}
      </Main>
    </Wrapper>
  );
}
