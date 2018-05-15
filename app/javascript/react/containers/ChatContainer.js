import React, { Component } from 'react';

class ChatContainer extends Component {
  constructor(props){
    super(props)
    this.state={

    }
  }
  componentDidMount(){
    App.ChatChannel = App.cable.subscriptions.create(
      {
        channel: "ChatChannel",
        Chat_id: this.props.ChatId
      },
      {
        connected: () => console.log("ChatChannel connected"),
        disconnected: () => console.log("ChatChannel disconnected"),
        received: data => {
          console.log(data)
        }
      }
    );

    App.ChatChannel.send({
      message: "Hello from an ActionCable client!"
    })

    received: data => {
      this.setState( {messages: [...this.state.messages, data]} )
    }
  }

  render(){
    return(

    )
  }
}

export default ChatContainer;
