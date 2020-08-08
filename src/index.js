import React from 'react'
import ReactDOM from 'react-dom'
import Card from './components/Card'
import 'bootstrap/dist/css/bootstrap.css'

const container = document.querySelector('div#root')

//const contenedor = ();

//resibe dos parametros que elemento renderisara y el segundo donde lo va hacer
//ReactDOM.render(__Que__,__Donde__)
ReactDOM.render(<Card
          title="Technique Guides"
          description="Learn amazing street workout and calisthenics"
          img=""
          leftColor="#A74CF2"
          reghtColor="#617BFB"
                />,container)
  //esto se le asigno las propiedades al contenido 
  // es para cargar dinamica mente
  