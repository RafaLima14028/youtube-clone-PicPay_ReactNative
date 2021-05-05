import styled from "styled-components/native";

export const Wrapper = styled.SafeAreaView`
  background: #000;
  flex: 1;
`;

export const Container = styled.ScrollView``;

export const Main = styled.View``;

export const Header = styled.View`
  height: 50px;
  padding: 0 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Input = styled.View`
  margin-left: 20px;
  padding: 10px 20px;
  flex: 1;
  border-radius: 50px;
  background-color: #1e232a;
  border-width: 2px;
  border-color: rgba(255, 255, 255, 0.6);
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const TextInput = styled.TextInput.attrs({
  placeholderTextColor: "#aaafbb",
})`
  margin: 0 20px;
  flex: 1;
`;

export const Text = styled.Text`
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 14px;
  background-color: #1e232a;
  padding: 20px 16px;
  margin: 10px 0 -10px;
`;

export const Divider = styled.View`
  border: 0.3px solid #bfb6b6;
`;
