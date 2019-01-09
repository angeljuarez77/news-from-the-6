import React from 'react';

export default class Person extends React.Component{
  constructor(props){
    super(props);

    this.state = {};
  }

  render(){
    return(
      <div>
        <h1>{this.props.info.journalist.user_name}</h1>
        <h2>{this.props.info.journalist.email}</h2>

        {this.props.info.posts.map(
          post => 
            <div key={post.id}>
              <h1>{post.title}</h1>
              <p>{post.content}</p>
            </div>
        )}
      </div>
    )
  }
}