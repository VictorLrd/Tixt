import React, { Component } from 'react'

import { Card, Icon, Avatar,Button } from 'antd';
const { Meta } = Card;
import axios from 'axios';

class VoitureCard extends Component {

    test() {
        return fetch('http://localhost:4007/voiture',{method: 'get',
        mode: 'cors',cache:'default'
    }).then(data => data.json())
        .then(data => console.log(data))
      }

    render () {
        return (
            <div>
                <Card
                    style={{ width: 300 }}
                    cover={<img alt="example" src="/src/audi.jpg" />}
                    actions={[<Icon type="shop" />]}
                >
                    <Meta
                    avatar={<Avatar src="/src/audi.jpg" />}
                    title="Audi R8"
                    description="10€ par jour  50000 km"
                    />
                </Card>
                <Button type="primary" onClick={() => this.test()}>Test</Button>
            </div>
        )
    }
}

export default VoitureCard