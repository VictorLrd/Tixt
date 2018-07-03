import React, { Component } from 'react';

import Button from 'antd/lib/button';

class VoitureProfil extends Component {
  

  render() {

    return (
      <div >
        <Button>TEST</Button>
        <form>
          <label>
            Marque:
            <input type="text" name="name" />
          </label>
          <label>
            Modele:
            <input type="text" name="name" />
          </label>
          <label>
            Annee:
            <input type="text" name="name" />
          </label>
          <label>
            Kilométrage:
            <input type="text" name="name" />
          </label>
          <label>
            Nombre de palce:
            <input type="text" name="name" />
          </label>
          <label>
            Energie:
            <input type="text" name="name" />
          </label>
          <label>
            Boite de vitesse:
            <input type="text" name="name" />
          </label>
          <label>
            Adresse:
            <input type="text" name="name" />
          </label>
          <label>
            Prix:
            <input type="text" name="name" />
          </label>
          <label>
            Contact:
            <input type="text" name="name" />
          </label>
          <label>
            Photos:
            <input type="text" name="name" />
          </label>
          <label>
            Date début:
            <input type="text" name="name" />
          </label>
          <label>
            Date fin:
            <input type="text" name="name" />
          </label>
          <label>
            Description:
            <input type="text" name="name" />
          </label>
          
          
        </form>
    
        
      </div>
    );
  }
}


export default VoitureProfil;