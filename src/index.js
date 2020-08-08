/*
//esto todavia no es react es una prueva 
const element = document.createElement('h1')

element.textContent = 'Hello React and Welcome To React'

const container = document.querySelector('div#root')

container.appendChild(element)
*/

import React from 'react'
import ReactDOM from 'react-dom'

//esto es JSX es una extension de la sintaxis de JavaScript
const element = <h1> Hello React </h1>

let name = 'huiter'

//aqui de este modo se declara las variables dentro de JSXs
const h2 = <h2>hello {name}</h2>

const user = {
  fristName : 'Huiter',
  lastName : 'Rodrigues',
  avatar : 'https://avatars1.githubusercontent.com/u/61643960?s=400&u=84e3085a04c42da50d14bbb2c4d40aa06c4d7639&v=4'
}

const getName = (user) => {
  return `${user.fristName} ${user.lastName}`
}

const getGreeting = (user) => {

  if (user) {
    return <h1>Hello {getName(user)}</h1>
  }
  
  return <h1>Hello Stranger</h1>

}

const nombre = <h1>hola {getName(user)}</h1>

//de esta manera es para provar
//const contenedor = <div> {element} {h2} {nombre} {getGreeting()} <img src={user.avatar} /></div>

const contenedor = (
    <div>
      {element}
      {h2}
      {nombre} 
      {getGreeting()}
      <img src={user.avatar} />
    </div>
);

const container = document.querySelector('div#root')

//resibe dos parametros que elemento renderisara y el segundo donde lo va hacer
//ReactDOM.render(__Que__,__Donde__)
ReactDOM.render(contenedor,container)