const React = require('react');

class Login extends React.Component {
 	render() {
 		return (
 			<div className="form-group">
	 			<div className="input-group col-md-6">
	 				<input type="text"
	 					className="form-control" 
	 					ref={(ref) => this.textInput = ref} 
	 					placeholder="Email" />
                         <input type="text"
	 					className="form-control" 
	 					ref={(ref) => this.textInput = ref} 
	 					placeholder="Mot de passe" />
	                
	                <span className="input-group-btn">
	        			<button className="btn btn-primary" type="button">
	        				<span className="glyphicon glyphicon-search"></span>
	        			</button>
	      			</span>
	 			</div>
	 		</div>
 		)
  	}
}

module.exports = Login;