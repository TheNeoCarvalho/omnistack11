import React, { useEffect, useState } from 'react'
import { Linking } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import * as MailComposer from 'expo-mail-composer'
import { Feather } from '@expo/vector-icons'

import { 
  Container, 
  Header, 
  Image, 
  HeaderText,
  ButtonBack,
  TextButton,
  Incident,
  IncidentProperty,
  IncidentValue,
  ContactBox,
  HeroTitle,
  HeroDesc,
  Actions,
  ButtonActions,
  TextButtons  

} from './styles'
import logo  from "../../assets/logo.png"

export default function Detail() {
  const route = useRoute()
  const incident = route.params.incident

  const navigation = useNavigation()
  const message = `Olá, ${incident.name } essa mensagem de teste.`


  function navigationToIncidents(){
    navigation.goBack()
  }

  function sendMail(){
    MailComposer.composeAsync({
      subject: `Herói do caso: ${ incident.title }`,
      recipients: [incident.email],
      body: message,

    })
  }

  function sendWhats(){
    Linking.openURL(`whatsapp://send?phone=+55${incident.whatspapp}&text=${message}`)
  }

  return (
    <Container>
      <Header>
        <Image source={logo} />
        <ButtonBack onPress={navigationToIncidents}>
          <TextButton>
            <Feather name="arrow-left" size={28} color="#e02041" />
          </TextButton>
        </ButtonBack>
      </Header>

      <Incident>
        <IncidentProperty style={{ marginTop: 0}}>ONG:</IncidentProperty>
        <IncidentValue>{`${incident.name} - ${incident.city}/${incident.uf}`}</IncidentValue>

        <IncidentProperty>Caso:</IncidentProperty>
        <IncidentValue>{incident.description}</IncidentValue>

        <IncidentProperty>Valor:</IncidentProperty>
        <IncidentValue>{Intl.NumberFormat(
            'pt-BR', 
            { style: 'currency', currency: 'BRL'}
          ).format(incident.value) }</IncidentValue>
      </Incident>

      <ContactBox>
        <HeroTitle>Salve o dia</HeroTitle>
        <HeroTitle>Seja o herói deste caso!</HeroTitle>

        <HeroDesc>Entre em contato</HeroDesc>

        <Actions>
          <ButtonActions onPress={sendWhats}>
            <TextButtons>Whatsapp</TextButtons>
          </ButtonActions>

          <ButtonActions onPress={sendMail}>
            <TextButtons>E-mail</TextButtons>
          </ButtonActions>
        </Actions>

      </ContactBox>

    </Container>
    )
}
