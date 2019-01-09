import React from 'react';
import JArticle from './JArticle';
import axios from 'axios';

const BASEURL = 'http://localhost:3001/';
export default class JournyList extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {};
  }

  render(){
    return(
      <div>
        {
          this.props.info.map(
            article => 
            {
              return (
                <JArticle 
                key={article.id} 
                title={article.title} 
                content={article.content} 
                id={article.id} 
                userid={article.user_id} 
                userInfo={this.props.userInfo} 
                onClick={this.props.onClick}
                editClick={this.props.editClick}
                />
              )
            }
          )
        }
      </div>
    )
  }
}