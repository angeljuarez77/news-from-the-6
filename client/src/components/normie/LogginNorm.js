import React from 'react';
import axios from 'axios';
import ArticleList from './ArticleList';
import ClientNav from './ClientNav';
import JournaList from './JournaList';
import Person from './Person';
import './Normie.css';

const BASEURL = 'http://localhost:3001/';
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
    const chosenJournalist = e.target.id;
    const person = await axios.get(`${BASEURL}aboutjournalist/${chosenJournalist}`);
    console.log(person.data);
    this.setState({chosenAccount: person.data});
  }
  async componentDidMount(){
    await this.getNews();
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
          <JournaList setView={this.setView} findPerson={this.findPerson} />
        )
      case 'Dashboard':
        return(
          <ArticleList articles={this.state.news} />
        )
      case 'Person':
          return(
            <Person info={this.state.chosenAccount} />
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