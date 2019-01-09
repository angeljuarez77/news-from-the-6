import React from 'react';
import axios from 'axios';

const BASEURL = 'http://localhost:3001/';
export default class EditView extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      article: {
        title: null,
        content: null,
      },
      articleid: '',
    };
    this.sendUpdate = this.sendUpdate.bind(this);
    this.updateChange = this.updateChange.bind(this);
  }

  sendUpdate(e){
    e.preventDefault();
    axios.put(`${BASEURL}post/${this.state.articleid}`, this.state.article).then(
      res => {}
    ).catch(e => console.log(e))
  }
  updateChange(e){
    const field = e.target.id;
    const value = e.target.value;
    this.setState(prevState => ({
      article: {
        ...prevState.article, [field]: value
      }
    }))
    this.setState({
      articleid: this.props.chosenArticle.id
    })
  }
  render(){
    return(
      <div>
        {/* <h1>{this.props.chosenArticle.title}</h1>
        <p>{this.props.chosenArticle.content}</p> */}

        <form onSubmit={this.sendUpdate} onChange={this.updateChange}>

          title: 
          <input 
          id="title" 
          type="text" 
          defaultValue={this.props.chosenArticle.title} />

          content: 
          <input 
          id="content" 
          type="text" 
          defaultValue={this.props.chosenArticle.content} />

          <input type="submit" value="Send In Changes!" />
        </form>
      </div>
    )
  }
}