import React from 'react';

export default class NewUser extends React.Component{
  constructor(props){
    super(props);

    this.state = {};
  }

  render(){
    return(
      <div>
        <h1>New User Form</h1>
        <form>
          user_name: <input type="text" />
          email: <input type="text" />
          {/* access_level: <radio */}
        </form>
      </div>
    )
  }
}