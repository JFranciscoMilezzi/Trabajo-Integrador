import style from './Card.module.css'
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../../Redux/action';
import {connect} from 'react-redux'
import { useState, useEffect } from 'react';

const Card = ({id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites}) => {
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () =>{
      isFav ? removeFav(id) : addFav({id, name, status, species, gender, origin, image, onClose});
      setIsFav(!isFav)
    };
  
    useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
    
   return (
      <div className={style.Card}>
         {
          (
            <button onClick={handleFavorite}>{isFav ? '❤️' : '🤍'}</button>) 
        }


        <img className={style.Imagen} src={image} alt=''/>
        <Link to={`/detail/${id}`}>
        <h2>{name}</h2>
         </Link>
        <div className={style.Paneles}> 
         
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>

         </div>
        
         <button className={style.Button} onClick={() => {onClose(id)}}>Close</button>
         
      </div>
   );
};

const mapDispatchToProps = (dispatch)=>{
   return {
     addFav: (character) => dispatch(addFav(character)),
     removeFav: (id) => dispatch(removeFav(id)),
   }
 };
 
 const mapStateToProps =(state)=>{
    return{
       myFavorites: state.myFavorites
      }
   };
   
   export default connect(mapStateToProps,mapDispatchToProps)(Card)