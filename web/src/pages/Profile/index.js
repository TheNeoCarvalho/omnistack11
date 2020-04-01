import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'
import { toast } from 'react-toastify';

import api from '../../services/api'

import logo from '../../assets/logo.svg'

import './styles.css';

export default function Profile() {
  const [incidents, setIncidents] = useState([])
  const history = useHistory()

  const ongName = localStorage.getItem('ongName')
  const ongId = localStorage.getItem('ongId')

  useEffect(()=>{
    api.get('incidents', {
      headers: {
        Authorization: ongId
      }
    }).then(response => {
      setIncidents(response.data)
    })
  },[ongId])

  function handleLogout(){
    localStorage.clear()
    history.push('/')


  }

  async function handleDelete(id){
    try{
      await api.delete(`incidents/${id}` , {
        headers: {
          Authorization: ongId
        }
      })
      
      setIncidents(incidents.filter(incident => incident.id !== id))
      
    }catch(err){
      toast.error(`Erro ao deletar caso!`)
    }
    toast.success(`Caso deletado com sucesso!`)
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logo} alt="Hero"/>
        <span>Bem Vindo, <b>{ongName}</b></span>

        <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
        <button onClick={handleLogout} type="button">
          <FiPower /> 
        </button>
      </header>

      <h1>Casos Cadastrados</h1>
      <ul>

        {
          incidents.map(incident => (
            <li>
            <strong>Caso:</strong>
            <p>{incident.title}</p>
  
            <strong>Descrição:</strong>
            <p>{incident.description}</p>
  
            <strong>Valor:</strong>
            <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL' }).format(incident.value)}</p>
  
             <button onClick={ () => handleDelete(incident.id) } type="button">
              <FiTrash2 size={20} color="#a8a8a8"/>
              </button>
          </li>
          ))
        }
       
      </ul>

    </div>
  );
}
