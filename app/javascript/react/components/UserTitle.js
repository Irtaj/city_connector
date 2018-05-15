import React from 'react';

const UserTitle = (props) => {
  return(
    <div>
      <label>
        {props.label}
      </label>
      <textarea
        name={props.title}
        type='text'
        value={props.title}
        onChange={props.handleTitle}
      />
    </div>
  )
}

export default UserTitle;
