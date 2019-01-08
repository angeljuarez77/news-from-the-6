import React from 'react';
import axios from 'axios';
import ArticleList from './ArticleList';
const BASEURL =   'http://localhost:3001/';

export default class LoggedinNorm extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      view: '',
      news: [],
    };
  }
  
  async getNews(){
    try{
      const posts = await axios.get(`${BASEURL}posts`);
      this.setState({
        news: posts.data.posts
      });
    } catch(e){
      console.log(e)
    }
  }
  async componentDidMount(){
    await this.getNews();
  }

  render(){
    return(
      <div>
        <nav>
          <button>Home</button>
        </nav>
        <ArticleList articles={this.state.news} />
      </div>
    )
  }
}