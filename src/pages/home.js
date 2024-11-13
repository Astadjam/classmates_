import React from 'react';
import './home.css'
import {Card} from "../components/Card/Card.js"
export class Home extends React.Component {
    constructor(){
        super()
        this.state = {
            datas: []
        }
    }

    componentDidMount(){
        const personsDatas = []

        fetch("/configurations/map.json")
            .then(response => response.json())
            .then((map) => {
                map.forEach((personName,index) => {
                    personName = personName.toLowerCase()
                    const path = `/configurations/${personName}/${personName}.json` 

                    fetch(path)
                        .then(personResponse => personResponse.json())
                        .then(datas => {

                            personsDatas.push({
                                firstname: datas.firstname,
                                lastname: datas.lastname,
                                imagePath: `/configurations/${personName}/images/${datas.images[0]}`
                            })

                            if(index == map.length - 1)
                                this.setState({datas: personsDatas})
                        })
                        .catch(err => console.log(err)) 
                });
            })
            .catch(err => console.log(err))
    }

    render(){
        const {datas} = this.state

        return <div className='Home'>  
        {datas.map(data => <Card 
            personFirstName={data.firstname}
            personLastName={data.lastname}
            personImage={data.imagePath}
        />)}
        </div>
    }
}