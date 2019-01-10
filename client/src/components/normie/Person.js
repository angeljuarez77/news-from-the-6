import React from 'react';

export default class Person extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      view: '',
    };
    // this.setView = this.setView.bind(this);
  }
  render(){
    return(
      <div>
        <h1>user_name: {this.props.info.journalist.user_name}</h1>
        <h2>email: {this.props.info.journalist.email}</h2>

        {this.props.info.posts.map(
          post => 
            <div key={post.id} className="person-post" onClick={this.props.setView} data-view="single-article-view" data-postid={post.id} data-userid={post.user_id}>
              <h1 onClick={this.props.setView} data-view="single-article-view" data-postid={post.id} data-userid={post.user_id}>{post.title}</h1>
              <p onClick={this.props.setView} data-view="single-article-view" data-postid={post.id} data-userid={post.user_id}>{post.content}</p>
            </div>
        )}
      </div>
    )
  }
}