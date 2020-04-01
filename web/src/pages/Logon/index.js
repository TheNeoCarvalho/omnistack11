import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'
import { toast } from 'react-toastify';

import api from '../../services/api'

import './styles.css'
import logo from '../../assets/logo.svg'
import heroes from '../../assets/heroes.png'

export default function Logon() {

  const [id, setId] = useState('')

  const history = useHistory()

  async function handleLogin(e){
    e.preventDefault()

    try{
      const response = await api.post('session', { id })

      localStorage.setItem('ongId', id)
      localStorage.setItem('ongName', response.data.name)
      toast.success(`${response.data.name} logado com sucesso!`)
      history.push('/profile')

    }catch(err){
      toast.error(`Erro... falha ao tentar realizar login`)
    }

  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logo} alt="Be the Hero"/>
        <form onSubmit={handleLogin}>
          <h1>Faça seu Logon</h1>
          <input 
            value={id} 
            onChange={e => setId(e.target.value)} 
            type="text" placeholder="Sua ID"
          />
          <button  type="submit" className="button">Entrar</button>
          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#e02041"/>
             Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={heroes} alt="Heroes"/>
    </div>
  );
}
