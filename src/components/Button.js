import React from 'react'
import ButtonImg from '../images/add.png'
import './styles/Card.css'

const Button = (props) => {
    return(
        <div className="container" style={{textAlign: "center"}}>
            <img src={ButtonImg} />
        </div>
    )
}

export default Button