import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { toast } from 'react-toastify';

import api from '../../services/api'

import './styles.css';

import logo from '../../assets/logo.svg'

export default function Register() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [whatspapp, setWhatspapp] = useState('')
  const [city, setCity] = useState('')
  const [uf, setUf] = useState('')

  const history = useHistory()

  async function handleRegister(event){
    event.preventDefault()

    const data = {
      name, 
      email, 
      whatspapp, 
      city, 
      uf
    }
    
    try{
      const response = await api.post('ongs', data)
      toast.success(`ONG cadastrada! Seu ID é ${response.data.id}`)

      history.push('/')

    }catch(err){
      toast.error(`Erro ${err}`)
    }  




  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logo} alt="Hero"/>
          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#e02041"/>
             Já possuo uma conta
          </Link>
        </section>
        <form onSubmit={handleRegister}>
          <input
            required 
            value={name} 
            onChange={e => setName(e.target.value)} 
            placeholder="Nome da ONG"
          />
          <input
            required 
            value={email} 
            onChange={e => setEmail(e.target.value)}
            type="email" 
            placeholder="Email"
          />
          <input
            required 
            value={whatspapp} 
            onChange={e => setWhatspapp(e.target.value)} 
            placeholder="Whatsapp"
          />

          <div className="input-group">
            <input
              required 
              value={city}  
              onChange={e => setCity(e.target.value)} 
              placeholder="Nome da cidade"
            />  
            <input
              required
             value={uf} 
             onChange={e => setUf(e.target.value)} 
             placeholder="UF" 
             style={{ width: 80}}
            />
          </div>
          <button className="button" type="submit">Enviar</button>
        </form>
      </div>
    </div>
  )
}
