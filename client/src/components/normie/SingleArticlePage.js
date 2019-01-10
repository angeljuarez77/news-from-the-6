import React from 'react';

export default class SingleArticlePage extends React.Component{
  constructor(props){
    super(props);

    this.state = {};
  }

  render(){
    return(
      <div>
        <h1>{this.props.articleinfo.title}</h1>
        <p>{this.props.articleinfo.content}</p>
      </div>
    )
  }
}