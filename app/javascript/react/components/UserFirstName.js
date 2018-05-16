import React from 'react';

const UserFirstName = (props) => {
  return(
    <div>
      <label>
        {props.label}
      </label>
      <textarea
        name={props.first_name}
        type='text'
        value={props.first_name}
        onChange={props.handleFirstName}
      />
    </div>
  )
}

export default UserFirstName;
