import React from 'react';
import axios from 'axios';

const BASEURL = 'https://sleepy-badlands-74953.herokuapp.com/'

export default class NewArticle extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      newArticle: {
        title: '',
        content: '',
      },
      user_info: {
        id: '',
        user_name: '',
        email: '',
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    const field = e.target.id;
    const value = e.target.value;

    this.setState(prevState => ({
      newArticle: {
        ...prevState.newArticle, [field]: value
      }
    }));
    this.user();
  }
  user(){
    this.setState({user_info: this.props.userInfo})
  }
  async handleSubmit(e){
    e.preventDefault();
    await axios.post(`${BASEURL}posts`, this.state);
  }

  render(){
    return(
      <div>
        <h1>Need To Tell The World Something?</h1>
        <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
          title: <input type="text" id="title" />
          content: <textarea type="textArea" id="content" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}