import styled from "styled-components/native";

export const Wrapper = styled.SafeAreaView`
  background-color: #000;
  flex: 1;
`;

export const Header = styled.View`
  height: 50px;
  padding: 0 16px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;

export const Main = styled.ScrollView``;

export const Notification = styled.View`
  background-color: #1e232a;
  
`;

export const NotificationContainer = styled.View`
  padding: 15px;
`;

export const Title = styled.Text`
  color: #fff;
`;

export const Dates = styled.Text`
  color: rgba(255, 255, 255, 0.6);
  margin-top: 5px;
  font-size: 12px;
`;

export const Divider = styled.View`
  border: 0.3px solid #bfb6b6;
`;
