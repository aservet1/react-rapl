import React from 'react';
import axios from 'axios';


class EnergySampler extends React.Component {

    constructor(props) {
        super(props)

        this.energy = 'null';
        this.askForEnergy = this.askForEnergy.bind(this)
    }

    askForEnergy(e) {
        e.preventDefault()
        axios.get(`/api/getSample`)
            .then(res => {
                console.log('success')
                console.log(res.data)
            }).catch(e =>{
                console.log('not success')
                console.log(e)
            })
        this.energy = 'not null'
        this.setState({}) // there should be a better way to force re-rendering than this...
    }


    render() {
        return (
            <div className="EnergySampler">
                <input type="button" value="getEnergy()" onClick={this.askForEnergy}/>
                <br></br>
                {this.energy}
            </div>
        )
    }



}

export default EnergySampler;