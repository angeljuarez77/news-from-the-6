import React from 'react';

export default class LoginForm extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {};
    }

    render(){
        return(
            <div>
                <h1>Log In!</h1>
                <form onSubmit={this.props.onSubmit} onChange={this.props.onChange}>
                    Username: <input type="text" id="user_name"/>
                    Password: <input type="text" id="password"/>
                    <input type="submit" value="Log In!" />
                </form>
            </div>
        )
    }
}