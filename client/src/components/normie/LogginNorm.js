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
    };
    this.setView = this.setView.bind(this);
    this.findPerson = this.findPerson.bind(this);
    this.findViewandPerson = this.findViewandPerson.bind(this);
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
    // debugger;
    const chosenJournalist = e.target.id;    
    console.log(chosenJournalist);
    const person = await axios.get(`${BASEURL}aboutjournalist/${chosenJournalist}`);
    console.log(person);
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
  async findViewandPerson(e){
    this.setView(e);
    await this.findPerson(e);
  }
  getView(){
    switch(this.state.view){
      case 'Journalists':
        return(
          <JournaList findViewandPerson={this.findViewandPerson} />
        )
      case 'Dashboard':
        return(
          <ArticleList articles={this.state.news} />
        )
      case 'Person':
          return(
            <Person />
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