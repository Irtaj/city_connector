import React from 'react';

class UserProfile extends React.Component{
  constructor(props){
    super(props);
    this.state={
      user: {},
      user_id: this.props.params.id
    }
  }

  componentDidMount(){
    let user_id = this.state.user_id
    fetch(`/api/v1/users/${userId}}`)
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
        });
      })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){

    return (
      <div className="row">
        <div className="small-4 medium-4 large-4 columns company-profile-info">
          <h3>{this.state.user.name}</h3>
            <p className="edit-info">(Edit Personal Info)</p>
            <p><b>Location:</b> {this.state.user.street}, {this.state.company.city}, {this.state.company.state} {this.state.company.zip}</p>
            <p><b>Phone:</b> {this.state.user.mn_phone}</p>
            <p><b>Email:</b> {this.state.user.mn_email}</p>
          <h4>Profile</h4>
            <p>{this.state.company.description}</p>
          <h4>Employees</h4>
        </div>
        <div className="small-7 medium-7 large-7 columns">
          <div className="company-alerts">
            Alerts & chat box goes here
          </div>
          <div className="company-edit-form">
            Company editing form goes here
          </div>
        </div>
      </div>
    )
  }
}

export default CompanyProfile;
