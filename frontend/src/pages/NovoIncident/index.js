import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import logo from '../../assets/logo.svg';
import api from '../../services/api';

import './styles.css';
//import { useState } from 'react';

export default function NovoIncident(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const onId = localStorage.getItem('ongId');
    const history = useHistory();

    async function handleNewIncident(e){
        e.preventDefault();

        const data = {
            title,
            description,
            value,

        };

        try {
            await api.post('incidents', data, {
                headers:{
                    Authorization: onId,
                }

                
            })

            history.push('/profile');

        } catch (err) {
            alert('Erro ao cadastrar o novo caso.')
        }
    }

    return (
        <div className="novo-incident-container">
            <div className="content">
                <section>
                    <img src={logo} alt="Be The Hero"/>

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um heroi</p>
                    
                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para inicio
                    </Link>
                </section>
                <form onSubmit={handleNewIncident}>
                    <input 
                        placeholder="Titulo do caso" value={title}
                        onChange = {e =>setTitle(e.target.value)}
                    />

                    <textarea 
                        placeholder="Descrição" 
                        value={description}
                        onChange = {e => setDescription(e.target.value)}                 />
                    <input 
                        placeholder="Valor em Reais" value={value}
                        onChange = {e  => setValue(e.target.value)}
                    />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}