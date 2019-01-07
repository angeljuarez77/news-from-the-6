import React, { Component } from 'react';
import './App.css';
import Welcome from './components/Welcome'
import axios from 'axios';
import LoggedinNorm from './components/normie/LogginNorm';
import Loggedinadmin from './components/admin/LoggedinAdmin';
import LoggedinAdmin from './components/admin/LoggedinAdmin';
import Loggedinjourny from './components/journalist/LoggedinJourny';

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
      view: 'welcome',
		};
    this.logInSubmit = this.logInSubmit.bind(this);
    this.submitNew = this.submitNew.bind(this);
    this.newUserInfo = this.newUserInfo.bind(this);
    this.loginChange = this.loginChange.bind(this);
  }

  submitNew(e){
		e.preventDefault();
		axios.post('http://localhost:3001/users', this.state.newUser)
		.then(res => this.setState({token: res.data.jwt, view: res.data.loggedin })).catch(e => console.log(e));
	}
  logInSubmit(e){
		e.preventDefault();
		axios.post('http://localhost:3001/signin', this.state.login)
		.then(
      res => 
      this.setState({token: res.data.jwt, view: res.data.view})
      ).catch(e => console.log(e));
  }
  
	newUserInfo(e){
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
    switch(this.state.view){
      case 'loggedinnorm':
      return (<LoggedinNorm />)
      case 'loggedinadmin':
      return(<LoggedinAdmin />)
      case 'loggedinjourny':
      return(<Loggedinjourny />)
      case 'welcome':
      return (<Welcome 
        submitNew={this.submitNew} 
        logInSubmit={this.logInSubmit} 
        loginChange={this.loginChange} 
        newUserInfo={this.newUserInfo} />)
      default:
      return (<Welcome 
        submitNew={this.submitNew} 
        logInSubmit={this.logInSubmit} 
        loginChange={this.loginChange} 
        newUserInfo={this.newUserInfo} />)
    }
  }

  render() {
    return (
      <div className="App">
         {this.switchViews()}
      </div>
    );
  }
}

export default App;
