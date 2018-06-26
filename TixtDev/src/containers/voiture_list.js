import React, { Component } from 'react'
import {connect} from 'react-redux'
import {selectVoiture} from '../actions/index'
import {bindActionCreators} from 'redux'
import { Button, Card} from 'material-design-for-react';

const PRIX = "Prix par jour (en euros) :"
class VoitureList extends Component {


    render () {
        return (
            <div className="col-md-8">
                <ul>
                    {this.props.voitures.map(voiture => {
                        return (
                                <li key={voiture.id}>
                                        <Card style={{ width: '500px' }} 
                                            title={voiture.name} subtitle = {`${PRIX}${voiture.prix}`}
                                            shadow={false}
                                            orientation='horizontal'
                                            image={"/src/audi.jpg"} imagePosition='left'> 
                                            <Button onClick={ () => {this.props.selectVoiture(voiture) }} > Voir </Button>
                                        </Card>
                                </li>
                                
                        )
                    })}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        voitures : state.voitures
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({selectVoiture:selectVoiture},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(VoitureList)