import React, { useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { toast } from 'react-toastify';

import './styles.css';

import api from '../../services/api'

import logo from '../../assets/logo.svg'

export default function Register() {

  const history = useHistory()
  const ongId = localStorage.getItem('ongId')

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')

  async function handleSubmit(e){
    e.preventDefault()

    const data = {
      title,
      description,
      value
    }

    try{
      await api.post('incidents', data, {
        headers: {
          Authorization: ongId
        }
      })
      toast.success(`Caso cadastrado com sucesso!`)
      history.push('/profile')

    }catch(err){
      toast.error(`Não foi possível cadastrar o caso!`)
    }

    
  }

  return (
    <div className="incident-container">
      <div className="content">
        <section>
          <img src={logo} alt="Hero"/>
          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#e02041"/>
            Voltar para home
          </Link>
        </section>
        <form onSubmit={ handleSubmit }>
          <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Título do caso"/>
          <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Descrição do caso"></textarea>
          <input value={value} onChange={e => setValue(e.target.value)} placeholder="Valor em reais"/>
          <button className="button" type="submit">Enviar</button>
        </form>
      </div>
    </div>
  )
}
