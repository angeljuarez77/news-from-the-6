import React from 'react';

export default class ClientNav extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {};
  }

  render(){
    return(
      <div>
         <nav onClick={this.props.onClick}>
          <button color="link" id="Dashboard">Dashboard</button>
          <button color="link" id="Journalists">Journalists</button>
        </nav>
      </div>
    )
  }
}