import React, { Component } from 'react';
import UserFirstName from '../components/UserFirstName';
import UserLastName from '../components/UserLastName';
import UserTitle from '../components/UserTitle';
import UserUsername from '../components/UserUsername';
import UserEmail from '../components/UserEmail';

class UserFormContainer extends Component {
  constructor(props){
    super(props)
    this.state={
      first_name: '',
      last_name: '',
      title: '',
      username: '',
      mn_email: ''
    }
  this.handleFirstName = this.handleFirstName.bind(this);
  this.handleLastName = this.handleLastName.bind(this);
  this.handleTitle = this.handleTitle.bind(this);
  this.handleUsername = this.handleUsername.bind(this);
  this.handleEmail = this.handleEmail.bind(this);


  // this.editUser = this.editUser.bind(this)
  // this.handleFormSubmit = this.handleFormSubmit.bind(this)
  this.handleClear = this.handleClear.bind(this);
  }

  handleFirstName(event) {
    let newFirstName = event.target.value
      this.setState({ first_name: newFirstName })
      console.log("handleFirstName works");
  }

  handleLastName(event) {
    let newLastName = event.target.value
      this.setState({ last_name: newFirstName })
      console.log("handleLastName works");
  }

  handleTitle(event) {
    let newTitle = event.target.value
      this.setState({ title: newTitle })
      console.log("handleDescrition works");
  }

  handleUsername(event) {
    let newUsername = event.target.value
      this.setState({ username: newUsername })
      console.log("handleUsername works");
  }

  handleEmail(event) {
    let newEmail = event.target.value
      this.setState({ mn_email: newEmail })
      console.log("handleEmail works");
  }

  handleClear(event) {
    event.preventDefault()
    this.setState({
      first_name: '',
      last_name: '',
      title: '',
      username: '',
      mn_email: '',
    })
    console.log("handleClear works");
  }

  // editUser(event){
  //   event.preventDefault();
  //   let formPayload = {
  //     user: {
  //       first_name: this.state.first_name,
  //       last_name: this.state.last_name,
  //       title: this.state.title,
  //       username: this.state.username,
  //       email: this.state.email
  //     }
  //     if (updatedPlayers > 0) {
  //     fetch('/api/v1/users/#{current_user}', {
  //       credentials: 'same-origin',
  //       method: 'PATCH',
  //       body: JSON.stringify(formPayload),
  //       headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
  //     })
  //     .then(response => {
  //      if (response.ok) {
  //        this.setState({
  //          first_name: "",
  //          last_name: "",
  //          title: "",
  //          username: "",
  //          email: ""
  //        })
  //        this.triggerFetch()
  //      } else {
  //        let errorMessage = `${response.status} (${response.statusText})`,
  //            error = new Error(errorMessage);
  //        throw(error);
  //      }
  //     })
  //     }
  //   }
  // }
  //
  // handleFormSubmit(event) {
  //   event.preventDefault()
  //   let formPayload = {
  //     first_name: this.state.first_name,
  //     last_name: this.state.last_name,
  //     title: this.state.title,
  //     username: this.state.username,
  //     email: this.state.email,
  //   }
  //   this.props.editUser(formPayload)
  //   this.handleClear()
  // }

  render(){
    return(
      <form onSubmit={this.handleFormSubmit}>
        <div>
          <UserFirstName
            label="First Name:"
            handleName={this.handleFirstName}
            first_name={this.state.first_name}
          />
        </div>
        <div>
          <UserLastName
            label="Last Name:"
            handleCategory={this.handleCategory}
            last_name={this.state.last_name}
          />
        </div>
        <div>
          <UserTitle
            label="Title"
            handleCategory={this.handleTitle}
            title={this.state.title}
          />
        </div>
        <div>
          <UserUsername
            label="Username"
            handleWebsite={this.handleWebsite}
            website={this.state.website}
          />
        </div>
        <div>
          <UserEmail
            label="Email"
            handleAddress={this.handleAddress}
            email={this.state.email}
          />
        </div>
        <input className="button" type="submit" value="Submit" />
        <button className="button" type="button" onClick={this.handleClear}>Clear</button>
      </form>
    )
  }
}

export default UserFormContainer;
