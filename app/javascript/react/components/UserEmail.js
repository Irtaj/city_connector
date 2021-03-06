import React from 'react';

const UserEmail = (props) => {
  return(
    <div>
      <label>
        {props.label}
      </label>
      <textarea
        name={props.email}
        type='text'
        value={props.email}
        onChange={props.handleEmail}
      />
    </div>
  )
}

export default UserEmail;
