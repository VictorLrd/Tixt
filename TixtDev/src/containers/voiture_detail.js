import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Pickers, Button, Dialog} from 'material-design-for-react';

var similarity = require("similarity") 
class VoitureDetail extends Component {

    constructor(props){
        super(props),
        this.state={
            showDateA: false,
            selectedDateValueA : null,
            showDateB: false,
            selectedDateValueB : null,
            showDialog: false,
            test:[{test:"kala"}]
        }
    }
    

    render () {

        const{activeVoiture} = this.props
        if(!activeVoiture){
            return <div> Sélectionner la voiture que vous souhaitez réserver</div>
        }
        return (
            <div className="col-md-4">
                <h1>{this.state.test.test}</h1>
                <h3>Détail de {activeVoiture.name}</h3>
                <ul>
                    <p> Kilométrage : {activeVoiture.kilometrage}</p>
                    <p> Année : {activeVoiture.annee} </p>
                    <p> Prix par jour : {activeVoiture.place} </p>
                    <p> Propriétaire : {activeVoiture.proprietaire}</p>
                    <p> Prix par jour : {activeVoiture.prix}€ </p>
                    <p> Sélectionner vos dates ci-dessous</p>
                    <Button onClick={this.showDatePickerA.bind(this)} raised={true}>A partir</Button>
                    <Button onClick={this.showDatePickerB.bind(this)} raised={true}>Jusqu'au</Button>
                    <Pickers show={this.state.showDateA} 
                        dateUntil={this.state.selectedDateValueA || new Date(2018, 12, 15)} 
                        type='date'  
                        onChange={this.callBackDateA.bind(this)} 
                    />
                    <Pickers show={this.state.showDateB} 
                        dateUntil={new Date(2018, 12, 15)} 
                        type='date'  
                        onChange={this.callBackDateB.bind(this)} 
                    />
                    <p>{this.state.selectedDateValueA}{this.state.selectedDateValueB}</p>
                    <Button onClick={(() => {
                        this.setState({ showDialog: true});
                        })}
                        raised={true} className="mdc-button mdc-button--raised">Réserver</Button>
                    <Dialog id='d1'
                            onAccept={(() => {
                                this.setState({ showDialog: false });
                            })}
                            onCancel={(() => {
                                this.setState({ showDialog: false });
                            })}
                            show={this.state.showDialog}
                            title='VALIDATION'
                            body="Etes-vous sur de vouloir réserver ?"
                            acceptText='OUI' 
                            declineText='NON'/>
                            
                </ul>

                
            </div>
        )
    }

    callBackDateA(value) {
        this.setState({ selectedDateValueA: 
         'A partir du : ' + value.toISOString().substring(0, 10), 
         showDateA: false });
      }

      showDatePickerA() {
        this.setState({ showDateA: true, type: 'date' });
      }

      callBackDateB(value) {
        this.setState({ selectedDateValueB: 
         ' au : ' + value.toISOString().substring(0, 10), 
         showDateB: false });
      }

      showDatePickerB() {
        this.setState({ showDateB: true, type: 'date' });
      }
}
  
function mapStateToProps(state){
    return {
        activeVoiture : state.activeVoiture,
    }
}




export default connect(mapStateToProps)(VoitureDetail)