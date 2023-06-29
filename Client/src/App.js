import './App.css';
import Cards from './components/Cards/Cards.jsx';
import { useState, useEffect } from 'react';
import Nav from './components/Nav/SearchNav';
import axios from 'axios'
import { Route, Routes, useLocation, useNavigate, } from 'react-router-dom';
import About from './Views/About/About';
import Detail from './Views/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';


const App = () => {
   const Location = useLocation();
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);
   const email = 'toto@gmail.com'
   const password = 'toto123'
   const navigate = useNavigate();
   
   const onSearch = (id) => {
      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      setCharacters(
         characters.filter((char) => char.id !== Number(id))
      )
         }

         async function login(userData) {
            try {
              const {email, password} = userData;
              const URL = "http://localhost:3001/rickandmorty/login/";
              const {data} = await axios(URL + `?email=${email}&password=${password}`);
              const {access} = data; // true o false
              setAccess(data);
              access && navigate("/home");
            } catch (error) {
              console.log(error);
            }
          }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);
   
   return (
      
      <div className='App'>
         
         {
            Location.pathname !== '/'
             ? (<Nav onSearch={onSearch}/>)
             : null
         }

         <Routes>
         <Route path='/' element={<Form login={login}/>}/>
         <Route path = '/home' element = {<Cards characters={characters} onClose={onClose} />} ></Route>
         <Route  path="/about" element={<About/>} />
         <Route  path="/detail/:id" element={<Detail/>} />
         <Route path="/favorites" element={<Favorites/>}/>
         </Routes>
      </div>
   );
};

export default App;
 

