import React from 'react';
import axios from 'axios';
import JournyList from './JournyList';
import Navbar from './NavBar';
import MyList from './MyList';
import NewArticle from './NewArticle';

const BASEURL = 'http://localhost:3001/';
export default class LoggedinJourny extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      news: [],
      view: '',
    };
    this.setView = this.setView.bind(this);
  }
  async getNews(){
    const news = await axios.get(`${BASEURL}posts`);
    this.setState({news: news.data.posts});
  }
  async componentDidMount(){
    await this.getNews();
  }

  async setView(e){
    this.setState({
      view: e.target.id
    })
   await this.componentDidMount() 
  }
  getView(){
    switch(this.state.view){
      case 'Home':
        return ( <JournyList info={this.state.news} userInfo={this.props.userInfo} />)
      case 'My Articles':
        return( <MyList userInfo={this.props.userInfo} /> )
      case 'New Article':
        return( <NewArticle userInfo={this.props.userInfo} />)
      default: 
        return ( <JournyList info={this.state.news} userInfo={this.props.userInfo} /> )
    }
  }
  render(){
    return(
      <div>
        <Navbar onClick={this.setView} /> 
        {this.getView()}
      </div>
    )
  }
}