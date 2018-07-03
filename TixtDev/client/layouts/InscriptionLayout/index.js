import React, { Component } from 'react';
import { Steps, Button, message } from 'antd';
import VoitureProfil from '../../components/VehiculeProfil';
import UserLogin from '../../components/Login';
import RecapInscription from '../../components/RecapInscription'

const Step = Steps.Step;

const steps = [{
  title: 'Votre compte',
  content: <UserLogin/>,
}, {
  title: 'Votre premier véhicule',
  content: <VoitureProfil/>,
}, {
  title: 'A vous les pépètes !',
  content: <RecapInscription/>,
}];

class InscriptionLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }
  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }
  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }
  render() {
    const { current } = this.state;
    return (
      <div>
        <Steps current={current}>
          {steps.map(item => <Step key={item.title} title={item.title} />)}
        </Steps>
        <div className="steps-content">{steps[this.state.current].content}</div>
        <div className="steps-action">
          {
            this.state.current < steps.length - 1
            &&
            <Button type="primary" onClick={() => this.next()}>Suivant</Button>
          }
          {
            this.state.current === steps.length - 1
            &&
            <Button type="primary" onClick={() => message.success('Bienvenue chez Tixt!')}>Done</Button>
          }
          {
            this.state.current > 0
            &&
            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
              Précèdent
            </Button>
          }
        </div>
      </div>
    );
  }
}

export default InscriptionLayout;