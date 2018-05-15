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
      userFirstName: '',
      userLastName: '',
      userTitle: '',
      userUsername: '',
      userEmail: ''
    }
  this.handleFirstName = this.handleFirstName.bind(this);
  this.handleLastName = this.handleLastName.bind(this);
  this.handleTitle = this.handleTitle.bind(this);
  this.handleUsername = this.handleUsername.bind(this);
  this.handleEmail = this.handleEmail.bind(this);

  this.handleFormSubmit = this.handleFormSubmit.bind(this)
  this.handleClear = this.handleClear.bind(this);
  }

  handleFirstName(event) {
    let newFirstName = event.target.value
      this.setState({ userFirstName: newFirstName })
      console.log("handleFirstName works");
  }

  handleLastName(event) {
    let newLastName = event.target.value
      this.setState({ userLastName: newFirstName })
      console.log("handleLastName works");
  }

  handleTitle(event) {
    let newTitle = event.target.value
      this.setState({ userTitle: newTitle })
      console.log("handleDescrition works");
  }

  handleUsername(event) {
    let newUsername = event.target.value
      this.setState({ userUsername: newUsername })
      console.log("handleUsername works");
  }

  handleEmail(event) {
    let newEmail = event.target.value
      this.setState({ userEmail: newEmail })
      console.log("handleEmail works");
  }

  handleClear(event) {
    event.preventDefault()
    this.setState({
      userFirstName: '',
      userLastName: '',
      userTitle: '',
      userUsername: '',
      userEmail: '',
    })
    console.log("handleClear works");
  }

  handleFormSubmit(event) {
    event.preventDefault()
    let formPayload = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      title: this.state.title,
      username: this.state.username,
      email: this.state.email,
    }
    this.props.editUser(formPayload)
    this.handleClear()
  }

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
            label="User"
            handleWebsite={this.handleWebsite}
            website={this.state.website}
          />
        </div>
        <div>
          <UserEmail
            label="Address"
            handleAddress={this.handleAddress}
            address={this.state.address}
          />
        </div>
        <input className="button" type="submit" value="Submit" />
        <button className="button" type="button" onClick={this.handleClear}>Clear</button>
      </form>
    )
  }
}

export default UserFormContainer;
