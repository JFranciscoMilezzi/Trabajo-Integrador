import React from 'react';
import style from './SearchBar.module.css'
import { useState } from 'react';

const SearchBar = ({onSearch}) => {

   const [id, setId] = useState('')

   const handleChange = (event) => {
      setId(event.target.value)
   }

   return (
      <div>
         <input placeholder='  Buscar mas Personajes' className={style.SearchBar} type='search' onChange={handleChange} value={id} /> 
         <button id = '#boton'className={style.Button} onClick={() => {onSearch(id)}}>Agregar</button> 
      </div>
   );
};

export default SearchBar;
