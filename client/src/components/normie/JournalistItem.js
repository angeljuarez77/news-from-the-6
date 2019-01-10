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
      data-view="Person"
      data-journy={this.props.userId}
      onClick={this.props.onClick}>
          <div 
          data-view="Person" 
          data-journy={this.props.userId}
          onClick={this.props.onClick}>

                <h1 data-view="Person" 
                className="list-item-inline" 
                data-journy={this.props.userId}
                onClick={this.props.onClick}>{this.props.name}</h1>

                <h2 data-view="Person" 
                className="list-item-inline"
                data-journy={this.props.userId}
                onClick={this.props.onClick}>{this.props.userId}</h2>

          </div>
      </div>
    )
  }
}