import React from 'react';
import './details.css'
export class Details extends React.Component {
    constructor(){
        super()
        this.state = {
            firstname: "",
            lastname: "",
            birthdate: "",
            nationality: "",
            images: [],
            description: "",
            flag: ""
        }
    }

    componentDidMount(){
        const lowercaseName = new URLSearchParams(document.location.search).get('person').toLocaleLowerCase()
        const filePath = `/configurations/${lowercaseName}/${lowercaseName}.json`

        fetch(filePath)
            .then((response) => response.json())
            .then(informations => this.setState(informations))
    }

    render(){
        const {firstname,birthdate,description,flag,images,lastname,nationality } = this.state

        const lowercaseName = lastname.toLowerCase()

        return <div className='Details'>
            <swiper-container
                // autoplay
                effect="cards"
                slide-shadows="false"
                loop
            >
                {images.map((image) => <swiper-slide>
                    <div className='img-container'>
                        <img src={`/configurations/${lowercaseName}/images/${image}`}></img>
                    </div>
                </swiper-slide>)}
            </swiper-container>
            <h2>{firstname} {lastname} born on {birthdate} at {nationality} <span dangerouslySetInnerHTML={{__html: flag}}></span></h2>
            <p className='description'>{description}</p>
        </div>
    }
}