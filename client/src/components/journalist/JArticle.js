import React from 'react';

export default class JArticle extends React.Component{
  constructor(props){
    super(props);

    this.state = {}
  }

  applicable(){
    // If this is true then that means that this post is the users. Therefor they could edit or delete their own post otherwise they only get to see it
    if(this.props.userInfo.id === this.props.userid){
      return(
        <div key={this.props.id} className="article-piece">
          <h1>{this.props.title}</h1>
          <p>{this.props.content}</p>
          <button id={this.props.id}>Delete</button><button>Edit</button>
        </div>
      )
    } else{
      return(
        <div key={this.props.id} className="article-piece">
          <h1>{this.props.title}</h1>
          <p>{this.props.content}</p>
        </div>
      )
    }
  }

  render(){
    return(
      <div>
        {this.applicable()}
      </div>
    )
  }
}