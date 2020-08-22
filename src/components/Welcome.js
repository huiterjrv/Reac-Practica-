import React from 'react'
import './styles/Welcome.css'
//esto es para declarar de forma rapida un componente, lo malo es que no puedes declarar las stados y su siclo de vida 
//function Welcome(props){} es lo mismo 
const Welcome = (props) => {
    return (
        <div className="container">
            <div className="Fitness-User-Info">
                <h1>Hello {props.name}!</h1>
                <p>Let´s workout to get someone gains!</p>
            </div>
        </div>    
    )
}
// se usa en el caso que solo lo quieres renderizar sin modificar 

export default Welcome