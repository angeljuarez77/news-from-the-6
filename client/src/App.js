import React, { Component } from 'react';
import './App.css';
import Welcome from './components/Welcome'
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
			newUser: {
				user_name: '',
				access_level: 1,
				email: '',
				password: '',
			},
			login: {
				user_name: '',
				password: '',
			},
      token: null,
      view: '',
		};
    this.logInSubmit = this.logInSubmit.bind(this);
    this.submitNew = this.submitNew.bind(this);
    this.newUserInfo = this.newUserInfo.bind(this);
    this.loginChange = this.loginChange.bind(this);
  }

  submitNew(e){
		e.preventDefault();
		axios.post('http://localhost:3001/users', this.state.newUser)
		.then(res => this.setState({token: res.data.jwt})).catch(e => console.log(e));
	}
  logInSubmit(e){
		e.preventDefault();
		axios.post('http://localhost:3001/signin', this.state.login)
		.then(res => this.setState({token: res.data.jwt})).catch(e => console.log(e));
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
	loginChange(e){
		const field = e.target.id;
		const value = e.target.value;
		this.setState(prevState => ({
			login: {
				...prevState.login, [field]: value
			}
		}));
  }
  
  switchViews(){

  }

  render() {
    return (
      <div className="App">
         <Welcome submitNew={this.submitNew} logInSubmit={this.logInSubmit} loginChange={this.loginChange} newUserInfo={this.newUserInfo} />
      </div>
    );
  }
}

export default App;
