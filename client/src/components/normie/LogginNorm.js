import React from 'react';
import axios from 'axios';
import ArticleList from './ArticleList';
import ClientNav from './ClientNav';
import JournaList from './JournaList';
import Person from './Person';
import SingleArticlePage from './SingleArticlePage';
import './Normie.css';

const BASEURL = 'https://sleepy-badlands-74953.herokuapp.com/'
export default class LoggedinNorm extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      view: '',
      news: [],
      chosenAccount: {
        journalist: {
          email: '',
          user_name: '', 
          id: '',
          access_level: '',
        }, 
        posts: [],
      },
    };
    this.setView = this.setView.bind(this);
    this.findPerson = this.findPerson.bind(this);
    this.findAndSet = this.findAndSet.bind(this);
    this.findSingleandSet = this.findSingleandSet.bind(this);
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
  async findPerson(e){
    const chosenJournalist = e.target.dataset.journy;
    const person = await axios.get(`${BASEURL}aboutjournalist/${chosenJournalist}`);
    this.setState({chosenAccount: person.data});
  }
  async componentDidMount(){
    await this.getNews();
  }

  async findSingle(e){
    const byWho = e.target.dataset.userid;
    const chosen = e.target.dataset.postid;
    const article = await axios.get(`${BASEURL}posts/${byWho}/${chosen}`);
    this.setState({
      singleArticle: article.data[0]
    });
  }
  async findSingleandSet(e){
    e.persist();
    await this.findSingle(e);
    this.setView(e);
  }

  async findAndSet(e){
    e.persist();
    await this.findPerson(e);
    this.setView(e);
  }

  setView(e){
    const view = e.target.id || e.target.dataset.view;
    this.setState({
      view: view
    });
  }
  getView(){
    switch(this.state.view){
      case 'Journalists':
        return(
          <JournaList onClick={this.findAndSet}/>
        )
      case 'Dashboard':
        return(
          <ArticleList articles={this.state.news} />
        )
      case 'Person':
          return(
            <Person info={this.state.chosenAccount} setView={this.findSingleandSet}/>
          )
      case 'single-article-view':
            return(
              <SingleArticlePage articleinfo={this.state.singleArticle} />
            )
      default:
        return(
          <ArticleList articles={this.state.news} />
        )
    }
  }

  render(){
    return(
      <div className="norm-root-page">
        <ClientNav onClick={this.setView} />
        {this.getView()}
      </div>
    )
  }
}