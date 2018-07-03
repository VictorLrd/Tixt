import React, { Component } from 'react'
import {connect} from 'react-redux'
import {selectVoiture} from '../../../src/actions'
import {bindActionCreators} from 'redux'
import { Card, Icon, Avatar } from 'antd';
const { Meta } = Card;


const PRIX = "Prix par jour (en euros) :"
class VehiculeList extends Component {


    render () {
        return (
            <div className="col-md-8">
                <ul>
                    {this.props.voitures.map(voiture => {
                        return (
                                <li key={voiture.id}>
                                <Card
                                    style={{ width: 300 }}
                                    cover={<img alt="example" src="/src/audi.jpg" />}
                                    actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                                >
                                    <Meta
                                    avatar={<Avatar src="/src/audi.jpg" />}
                                    title={voiture.name}
                                    description={`${PRIX}${voiture.prix}`}
                                    />
                                </Card>
                                        
                                </li>
                                
                        )
                    })}
                </ul>
            </div>
        )
    }
    test(){
        return fetch('/test').then((response) => {
            console.log("dshjfnqdsjkfnsqdljkfnqdsjf");
        }).catch((error) => {
            console.error(error);
        });
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

export default connect(mapStateToProps,mapDispatchToProps)(VehiculeList)