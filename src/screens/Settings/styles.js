import styled from "styled-components/native";

export const Wrapper = styled.SafeAreaView`
  background: #000;
  flex: 1;
`;

export const Container = styled.ScrollView``;

export const Header = styled.View`
  height: 50px;
  padding: 0 16px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 20px;
`;

export const User = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserImg = styled.Image`
  margin-top: 45px;
  height: 90px;
  width: 90px;
  margin-bottom: 20px;
`;

export const UserNickName = styled.Text`
  font-weight: bold;
  color: #fff;
  font-size: 20px;
  margin-bottom: 5px;
`;

export const UserName = styled.Text`
  color: rgba(255, 255, 255, 0.8);
  font-size: 16px;
  margin-bottom: 10px;
`;

export const UserProfile = styled.TouchableOpacity``;

export const UserProfileLabel = styled.Text`
  color: #0db060;
  font-size: 14px;
`;

