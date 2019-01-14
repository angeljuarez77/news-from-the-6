import React from 'react';
import axios from 'axios';
import JournyList from './JournyList';

const BASEURL = 'https://sleepy-badlands-74953.herokuapp.com/'

export default class MyList extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      news: [],
    };
  }

  async myNews(){
    const newsCall = await axios.get(`${BASEURL}posts`);
    const posts = newsCall.data.posts;
    const filtered = posts.filter(item => item.user_id === this.props.userInfo.id);
    this.setState({
      news: filtered
    });
  }
  async componentDidMount(){
    await this.myNews();
  }
  render(){
    return(
      <div>
        <h1>My List</h1>
        <JournyList info={this.state.news} userInfo={this.props.userInfo}/>
      </div>
    )
  }
}