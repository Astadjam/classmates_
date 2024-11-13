import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'
export class Card extends React.Component {
    render(){
        const {personFirstName, personLastName, personImage} = this.props;

        return <div className='Card'>
            <Link to={"/details?person=" + personLastName}>
                <div className="img-container">
                    <img src={personImage}/>
                </div>
                <p>{personFirstName} {personLastName}</p>
            </Link>
        </div>
    }
}