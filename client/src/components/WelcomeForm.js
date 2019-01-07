import React from 'react';

export default class WelcomeForm extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }

    render(){
        return(
            <div>
                <form onSubmit={this.props.onSubmit} onChange={this.props.onChange} >
                        <h1>Create an account!</h1>
                        email: <input type="text" id="email" />
                        User Name: <input type="text" id="user_name" />
                        Password: <input type="text" id="password" />
                        <input type="submit" value="Create Account!" />
                </form>
            </div>
        )
    }
}