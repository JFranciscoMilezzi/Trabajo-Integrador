import { useState } from "react";
import validation from "../Validations/Validations";

const Form = ( { login } ) => {
    const [userData, setUserData] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({})

    const handleChange = (event) => {
        setUserData ({
            ...userData,
            [event.target.name]: event.target.value
          }) 
          setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
          }))
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>

                <label htmlFor="email" >Email: </label>

                <input type="text" name="email" value={userData.email}
                onChange={handleChange}/>

                {errors.email && <p>{errors.email}</p>}
                <hr />

                <label htmlFor="password" >Password: </label>

                <input type="text" name="password" value={userData.password} onChange={handleChange}/>

                {errors.password && <p>{errors.password}</p>}
                <button>Sumbit</button>

            </form>
        </div>

    )
}


export default Form;