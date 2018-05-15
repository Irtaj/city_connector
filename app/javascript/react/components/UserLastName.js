import React from 'react';

const UserLastName = (props) => {
  return(
    <div>
      <label>
        {props.label}
      </label>
      <textarea
        name={props.last_name}
        type='text'
        value={props.last_name}
        onChange={props.handleLastName}
      />
    </div>
  )
}

export default UserLastName;
