import styled from "styled-components/native";

export const Wrapper = styled.SafeAreaView`
  background: #000;
  flex: 1;
`;

export const Container = styled.ScrollView`
  background-color: #1e232a;
  flex: 1;
`;

export const Title = styled.Text`
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  font-size: 14px;
  margin-left: 12px;
  margin-top: 40px;
`;

export const Option = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom-width: 1px;
  border-color: rgba(255, 255, 255, 0.1);
  font-size: 16px;
`;

export const OptionAction = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const OptionLabel = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const OptionComplement = styled.Text`
  color: #fff;
  font-weight: bold;
`;
