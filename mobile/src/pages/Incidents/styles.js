import styled from 'styled-components'

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

export const TextTitle = styled.Text`
  font-size: 30px;
  margin-top: 30px;
  margin-bottom: 15px;
  color: #13131a;
  font-weight: bold;
`

export const TextBold = styled.Text`
  font-weight: bold
`

export const TextDescription = styled.Text`
  font-size: 16px;
  line-height: 24px;
  color: #737380;
  font-weight: bold;  
`

export const IncidentsView = styled.View`
  margin-top: 32px;
`

export const Incident = styled.View`
  padding: 24px;
  border-radius: 6px;
  background-color:#fff;
  margin-bottom: 16px
`

export const IncidentProperty = styled.Text`
  font-size: 14px;
  color: #41414d;
  font-weight: bold
`

export const IncidentValue = styled.Text`
  margin-top: 8px;
  font-size: 15px;
  margin-bottom: 24px;
  color: #737380;
`

export const Button = styled.TouchableOpacity`
  flex-direction:row;
  justify-content: space-between;
  align-items: center
`

export const TextButton = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #e02041
`

export const IncidentsList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false
})`
  margin-top: 32px;
`