import React from 'react';
import WelcomeForm from './WelcomeForm';
// import axios from 'axios';
import Login from './Login';

export default class Welcome extends React.Component{
	constructor(props){
		super(props);
		
		this.state = {};
	}

	render(){
		return(
			<div>
				<h1>News From The 6 (With My Woes)</h1>
				<Login onSubmit={this.props.logInSubmit} onChange={this.props.loginChange}/>
				<div className="welcome-section">
				{/* add an image here to make the welcome page cool */}
					<WelcomeForm onSubmit={this.props.submitNew} onChange={this.props.newUserInfo} />
				</div>
			</div>
		)
	}
}