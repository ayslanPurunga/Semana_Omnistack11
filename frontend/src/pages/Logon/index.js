import React, {useState} from 'react'; 
import {Link, useHistory} from 'react-router-dom';
import { FiLogIn} from 'react-icons/fi'; 

import api from '../../services/api';

import './style.css';


import logo from '../../assets/logo.svg';
import heroes from '../../assets/heroes.png';

export default function Logon(){
    const [id, setId] = useState('');
    const history = useHistory();

    history.push('/profile');
    async function handleLogin(e){
        e.preventDefault();

        try{
            const response = await api.post('sessions', {id});
           
        }catch (err){
            alert('falha no login, tente novamente.');
        }
    }

    return (
       <div className="logon-container">
           <section className="form">
               <img src={logo} alt="be the hero"/>

               <form>
                   <h1>Faça seu logon</h1>

                   <input 
                   placeholder="Sua ID"
                   value={id}
                   onChange={e=> setId(e.target.value)}
                   />
                   
                   <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho cadastro
                    </Link>
               </form>

           </section>

           <img src={heroes} alt="Heroes"/>
       </div>
    );
}