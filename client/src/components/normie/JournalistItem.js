import React from 'react';

export default class JournalistItem extends React.Component{
  constructor(props){
    super(props);

    this.state = {};
  }

  render(){
    return(
      <div 
      key={this.props.userId}
      className="journalist-list-item"
      data-view="Person">
        <div data-view="Person" onClick={this.props.setView}>
          <h1 data-view="Person" onClick={this.props.setView}className="list-item-inline">{this.props.name}</h1>
          
          <h2 data-view="Person" onClick={this.props.setView}className="list-item-inline">{this.props.userId}</h2>
        </div>
      </div>
    )
  }
}