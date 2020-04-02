import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'

import api from '../../service/api'

import { 
  Container, 
  Header, 
  Image, 
  HeaderText, 
  TextTitle, 
  TextDescription, 
  TextBold,
  IncidentsList,
  IncidentsView,
  Incident,
  IncidentProperty,
  IncidentValue,
  Button,
  TextButton
} from './styles'
import logo  from "../../assets/logo.png"

export default function Incidents() {

  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [incidents, setIncidents] = useState([])


  const navigation = useNavigation()

  async function loadIncidents(){
    if(loading){
      return
    }

    if(total > 0 && incidents.length === total){
      return
    }
    setLoading(true)

    const response = await api.get('incidents', {
      params: { page }
    })

    setIncidents([...incidents, ...response.data])
    setTotal(response.headers[ 'x-total-count'])
    setPage(page + 1)
    setLoading(false)
  }

  useEffect(()=>{
    loadIncidents()
  },[])

  function navigationToDetail(incident){
    navigation.navigate('Detail', {incident})
  }

  return (
    <Container>
      <Header>
        <Image source={logo} />
        <HeaderText>
          Total de <TextBold>{total} casos</TextBold>
        </HeaderText>
      </Header>
      <TextTitle>
        Bem-vindo!
      </TextTitle>
      <TextDescription>
        Escolha um dos casos abaixo e salve!
      </TextDescription>

    <IncidentsList 
      data={incidents}
      onEndReached={loadIncidents}
      onEndReachedThreshold={0.2}
      keyExtractor={ incident => String(incident)}
      renderItem={({ item: incident})=>(
        <Incident>
        <IncidentProperty>ONG:</IncidentProperty>
        <IncidentValue>{incident.name}</IncidentValue>

        <IncidentProperty>Caso:</IncidentProperty>
        <IncidentValue>{incident.title}</IncidentValue>

        <IncidentProperty>Valor:</IncidentProperty>
        <IncidentValue>{ 
          Intl.NumberFormat(
            'pt-BR', 
            { style: 'currency', currency: 'BRL'}
          ).format(incident.value) 
        }</IncidentValue>

        <Button onPress={() => navigationToDetail(incident)}>
          <TextButton>Ver mais</TextButton>
          <Feather name="arrow-right" size={16} color="#e02041" />
        </Button>

        </Incident>
      )}
    />

    <IncidentsView>
      
    </IncidentsView>

   
    </Container>
  );
}
