import React from 'react';

export default class Article extends React.Component{
  constructor(props){
    super(props);

    this.state = {};
  }

  render(){
    return(
      <div>
        {this.props.news.map(
          article => 
          <div key={article.id}>
            <h1>{article.title}</h1>
            <p>{article.content}</p>
          </div>
        )}
      </div>
    )
  }
}