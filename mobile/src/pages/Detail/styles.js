import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  padding: 0 15px;
  padding-top: 40px;
`

export const Header = styled.View`
 flex-direction: row;
 justify-content: space-between;
 align-items: center;

`
export const Image = styled.Image``

export const HeaderText = styled.Text`
  font-size: 15px;
  color: #737380;
`

export const TextButton = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #e02041
`

export const ButtonBack = styled.TouchableOpacity``

export const Incident = styled.View`
  margin-top: 30px;
  padding: 15px;
  border-radius: 8px;
  background-color: #fff;
  margin-bottom:16px;
`

export const IncidentProperty = styled.Text`
  font-size: 14px;
  color: #41414d;
  font-weight: bold;
  margin-top: 24px;

`

export const IncidentValue = styled.Text`
  margin-top: 8px;
  font-size: 15px;
  color: #737380;
`

export const ContactBox = styled.View`
  padding: 15px;
  border-radius: 8px;
  background-color: #fff;
  margin-bottom:16px; 
`

export const HeroTitle = styled.Text`
  font-size: 20px;
  color: #13131a;
  font-weight: bold;
  line-height: 30px;
`

export const HeroDesc = styled.Text`
  font-size: 20px;
  color: #41414d;
  margin-top: 16px;
`

export const Actions = styled.View`
  margin-top: 16px;
  flex-direction: row;
  justify-content: space-between
`

export const ButtonActions = styled.TouchableOpacity`
  background-color: #e02041;
  border-radius: 8px;
  height: 40px;
  width: 48%;
  justify-content: center;
  align-items: center
`

export const TextButtons = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: bold
`
