import React, { Component } from "react";
// import MessageHistoryTile from '../components/MessageHistoryTile';

class MessageList extends Component{
  constructor(props){
    super(props);
    this.state = {
      messages:[],
    }
  }

  componentDidMount(){
    fetch('/api/v1/messages')
      .then(response => {
        if (response.ok){
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(body => {
        this.setState({
          messages: body,
        });
      })
      .catch(error => console.error(`Error in ${error.message}`));
  }

  render(){
    let messages = this.state.resources.map(message => {

      return(
        <MessageHistoryTile
          key={resource.id}
          id={resource.id}
          body={resource.body}
          current_user={current_user}
        />
      )
    })

    return(
      <div>
        <ul>
          {messages}
        </ul>
      </div>
    )
  }
}


export default MessageList;
