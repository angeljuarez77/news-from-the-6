import React from 'react';
import axios from 'axios';
import JournalistItem from './JournalistItem';

const BASEURL = 'http://localhost:3001/';
export default class JournaList extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {
      journalists: [],
    };
  }

  async getJournies(){
    const journalists = await axios.get(`${BASEURL}journalists`);
    this.setState({
      journalists: journalists.data
    });
  }
  async componentDidMount(){
    await this.getJournies();
  }

  render(){
    return(
      <div>
        {
          this.state.journalists.map(
            journalist =>
            <JournalistItem 
            key={journalist.id} 
            name={journalist.user_name} 
            userId={journalist.id}
            setView={this.props.setView}
            />
          )
        }
      </div>
    )
  }
}