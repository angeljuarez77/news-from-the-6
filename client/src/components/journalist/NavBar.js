import React from 'react';

export default class Navbar extends React.Component{
  constructor(props){
    super(props);

    this.state = {

    };
  }

  render(){
    return(
      <div>
        <nav onClick={this.props.onClick}>
          <button id="Home">Home</button>
          <button id="My Articles">My Articles</button>
          <button id="New Article">New Article</button>
        </nav>
      </div>
    )
  }
}