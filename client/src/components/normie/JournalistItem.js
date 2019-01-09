import React from 'react';

export default class JournalistItem extends React.Component{
  constructor(props){
    super(props);

    this.state = {};
  }

  render(){
    return(
      <div id={this.props.userId} key={this.props.userId} className="journalist-list-item" 
      onClick={this.props.findViewandPerson}
      data-view="Person" data-who={this.props.userId}>

        <h1>{this.props.name}</h1>
        <h2>{this.props.userId}</h2>

      </div>
    )
  }
}