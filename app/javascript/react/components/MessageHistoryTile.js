import React from 'react';
import { Link } from 'react-router';

const MessageHistoryTile = (props) => {

  return (
      <ul>
        <li>{props.current_user} - {props.body}</li>
      </ul>
  )
}

export default MessageHistoryTile;
