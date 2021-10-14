import React from 'react';

import './DetalhesUsuario.css';

import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


const DetalhesUsuario = () => {
  
  const { id } = useParams();
  
  return (
    <>
      <h1> ID: { id } </h1>
      <Link to="/usuarios"> Voltar </Link>
    </>
  );
}


export default DetalhesUsuario;