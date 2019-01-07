import React from 'react';
import WelcomeForm from './WelcomeForm';
import axios from 'axios';

export default class Welcome extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			newUser: {
				user_name: '',
				access_level: 1,
				email: '',
				password: ''
			}
		};
		this.submitNew = this.submitNew.bind(this);
		this.newUserInfo = this.newUserInfo.bind(this);
	}

	submitNew(e){
		e.preventDefault();
		axios.post('http://localhost:3001/users', this.state.newUser);
	}
	newUserInfo(e){
		// set new account info to state
		// send a post request to db
		const field = e.target.id;
		const value = e.target.value
		this.setState(prevState => ({
			newUser: {
				...prevState.newUser, [field]: value
			}
		}));
	}


	render(){
		return(
			<div>
				<h1>News From The 6 (With My Woes)</h1>
				<div className="welcome-section">
				{/* add an image here to make the welcome page cool */}
					<WelcomeForm onSubmit={this.submitNew} onChange={this.newUserInfo} />
				</div>
			</div>
		)
	}
}