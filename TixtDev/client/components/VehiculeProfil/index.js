import React, { Component } from 'react';

import Input from 'antd/lib/input';
import ImageVoiture from '../ImageVoiture';
import { DatePicker, InputNumber, Cascader, Form } from 'antd';
const { RangePicker } = DatePicker;
const FormItem = Form.Item;

const options = [{
  value: 'Manuelle',
  label: 'Manuelle',
}, {
  value: 'Automatique',
  label: 'Automatique',

}];


const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};


class VoitureProfil extends Component {
  

  
   

  render() {

    return (
      <div >
        <Form>
          
        <FormItem 
        {...formItemLayout}
        label="Marque">         
            <Input type="text" name="name" />
        </FormItem>
        <FormItem 
            {...formItemLayout}
            label="Modèle">
                <Input type="text" name="name" />
        </FormItem>
        <FormItem 
            {...formItemLayout}
            label="Année">
            <Input type="text" name="name" />
          </FormItem>
          <FormItem 
            {...formItemLayout}
            label="Kilométrage">
            <Input type="text" name="name" />
          </FormItem>
          <FormItem 
            {...formItemLayout}
            label="Nombre de place">
            <InputNumber
              defaultValue={2}
              min={1}
              max={9}
              formatter={value => `${value}`}
              parser={value => value.replace('%', '')}
            />
          </FormItem>
          <FormItem 
            {...formItemLayout}
            label="Energie">
            <Input type="text" name="name" />
          </FormItem>
          <FormItem 
            {...formItemLayout}
            label="Boite de vitesse">
            <Cascader options={options} placeholder="Choisissez votre boite de vitesse.." />
          </FormItem>
          <FormItem 
            {...formItemLayout}
            label="Adresse">
            <Input type="text" name="name" />
          </FormItem>
          <FormItem 
            {...formItemLayout}
            label="Prix">
            <InputNumber
              defaultValue={20}
              min={0}
              max={100}
              formatter={value => `€ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              parser={value => value.replace('%', '')}
            />
          </FormItem>
          <br/>
          <FormItem 
            {...formItemLayout}
            label="Contact">
            <Input type="text" name="name" />
          </FormItem>
          <FormItem 
            {...formItemLayout}
            label="Modèle">
          <ImageVoiture/>
          </FormItem>
          <FormItem 
            {...formItemLayout}
            label="Période">
            <RangePicker />
          </FormItem>
          <br />
          <FormItem 
            {...formItemLayout}
            label="Description">
            <Input type="text" name="name" />
          </FormItem>
        
        </Form>
      </div>
    );
  }
}


export default VoitureProfil;
