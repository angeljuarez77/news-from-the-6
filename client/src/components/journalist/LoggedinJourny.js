import React from 'react';
import axios from 'axios';
import JournyList from './JournyList';
import Navbar from './NavBar';
import MyList from './MyList';
import NewArticle from './NewArticle';
import EditView from './EditView';

const BASEURL = 'http://localhost:3001/';
export default class LoggedinJourny extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      news: [],
      view: '',
      edit: {
        title: '',
        content: '',
      },
    };
    this.setView = this.setView.bind(this);
    this.deleteSubmit = this.deleteSubmit.bind(this);
    this.editChoose = this.editChoose.bind(this);
  }
  async getNews(){
    const news = await axios.get(`${BASEURL}posts`);
    this.setState({news: news.data.posts});
  }
  async componentDidMount(){
    await this.getNews();
  }

  async setView(e){
    const view = e.target.id || e.target.dataset.view;
    this.setState({
      view: view
    })
   await this.componentDidMount() 
  }

  async deleteSubmit(e){
    await axios.delete(`${BASEURL}posts/${e.target.id}`);
    await this.componentDidMount();
  }

  async editChoose(e){
    const chosen = e.target.dataset.articlenum;
    this.setView(e);
    const chosenArticle = await axios.get(`${BASEURL}post/${chosen}`);
    this.setState({edit: chosenArticle.data.post})
  }
  getView(){
    switch(this.state.view){
      case 'Home':
        return ( 
          <JournyList 
          info={this.state.news}
          userInfo={this.props.userInfo}
          onClick={this.deleteSubmit} 
          editClick={this.editChoose}/>
         )
      case 'My Articles':
        return( 
          <MyList 
          userInfo={this.props.userInfo} 
          onClick={this.deleteSubmit} /> 
        )
      case 'New Article':
        return( 
          <NewArticle 
          userInfo={this.props.userInfo} />
        )
      case 'Edit View':
        return(
          <EditView chosenArticle={this.state.edit} />
        )
      default: 
        return ( 
          <JournyList 
          info={this.state.news} 
          userInfo={this.props.userInfo} 
          onClick={this.deleteSubmit} 
          editClick={this.editChoose} />
        )
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