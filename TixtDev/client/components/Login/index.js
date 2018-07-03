import React, { Component } from 'react'
import { Form, Input, DatePicker } from 'antd';
const FormItem = Form.Item;



class Login extends Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  render() {

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


    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem
            {...formItemLayout}
            label="E-mail"
          >
          <Input type="text" name="name" />
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Mot de passe"
        >
        <Input type="password" />
        </FormItem>
        <FormItem
            {...formItemLayout}
            label="Prénom"
          >
          <Input type="text" name="name" />
        </FormItem>
        <FormItem
            {...formItemLayout}
            label="Nom"
          >
          <Input type="text" name="name" />
        </FormItem>
        <FormItem
            {...formItemLayout}
            label="Année de naissance"
          >
          <DatePicker />
        </FormItem>
        <FormItem
            {...formItemLayout}
            label="Adresse"
          >
          <Input type="text" name="name" />
        </FormItem>
        <FormItem
            {...formItemLayout}
            label="Code Postal"
          >
          <Input type="text" name="name" />
        </FormItem>
        <FormItem
            {...formItemLayout}
            label="Ville"
          >
          <Input type="text" name="name" />
        </FormItem>
        <FormItem
            {...formItemLayout}
            label="Pays"
          >
          <Input type="text" name="name" />
        </FormItem>
        <FormItem
            {...formItemLayout}
            label="Votre photo de profil"
          >
       </FormItem>
      </Form>
    );
  }
}


export default Login;