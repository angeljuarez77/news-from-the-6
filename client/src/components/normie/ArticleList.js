import React from 'react';
import Article from './Article';

export default class ArticleList extends React.Component{
  constructor(props){
    super(props);

    this.state = {};
  }

  render(){
    return(
      <div>
        <Article news={this.props.articles} />
      </div>
    )
  }
}