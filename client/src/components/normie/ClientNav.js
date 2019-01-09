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
          <button id="Dashboard">Dashboard</button>
          <button id="Journalists">Journalists</button>
        </nav>
      </div>
    )
  }
}