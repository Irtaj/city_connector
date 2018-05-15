import React, { Component } from "react";
// import UserFormContainer from './UserFormContainer';

class UserProfile extends Component{
  constructor(props){
    super(props);
    this.state={
      user: {},
      userId:'',
      userId:this.props.params.id
    }
  // this.editUser = this.editUser.bind(this)
  }

  componentDidMount(){
    let userId = this.state.userId
    fetch(`/api/v1/users/${userId}`)
      .then(response => {
        if (response.ok) {
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
          user: body.user,
          userId: body.user_id
        });
      })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  // editUser(){
  //
  // }

  render(){

    return (
      <div className="row">
        <div className="small-4 medium-4 large-4 columns user-profile-info">
          <h3>{this.state.user.first_name} {this.state.user.last_name}</h3>
            <p className="edit-info">(Edit User Info)</p>
            <p id="address"><b>Location:</b> {this.state.user.address}</p>
            <p><b>Phone:</b> {this.state.user.mn_phone}</p>
            <p><b>Email:</b> {this.state.user.mn_email}</p>
          <h4>Company</h4>
            <p>{this.state.user.company_id}</p>
          <div>
            <p className="button primary">Find a Company</p>
            <p className="button primary">Submit a Resource Request</p>
            <p className="button primary">Offer a Resource </p>
            <p className="button primary">Edit Company Information</p>
          </div>

        </div>
        <div className="small-7 medium-7 large-7 columns">
          <div className="user-alerts">
            Alerts & chat box goes here
          </div>
          <div className="user-edit-form">
            <h4 className="company-edit-form-heading">To edit your account information, please fill the form below.</h4>

          </div>
        </div>
      </div>
    )
  }
}

export default UserProfile;
