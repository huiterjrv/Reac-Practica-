import React from 'react'
import exerciseImg from '../images/exercise.png'
import circlesImg from '../images/circles.png'
import imagenImg from '../images/empty.png'
import './styles/Card.css'

class Card extends React.Component {

    constructor(props){

        super(props)
        this.state = {
            image: exerciseImg
        }

    }

    //esto se inbocainmediatamente cuando un componente se monte
    componentDidMount(){

        setTimeout(() => {
            //esto se usa para setera la state del componente 
            this.setState({
                image: imagenImg
            })},5000)
            
    }

    render () {

        const { title, description, img, leftColor, reghtColor} = this.props //metodo de Js6 para escribir menos jajaja

        return (

            <div className="card mx-auto Fitness-Card" style={{
                backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${leftColor}, ${reghtColor})`
                }}>
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={this.state.image} />
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1>{title}</h1>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>     

        )

    }

}

export default Card 