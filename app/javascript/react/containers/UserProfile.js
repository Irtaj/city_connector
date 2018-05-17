import React, { Component } from "react";
import { Link } from 'react-router';
import ResourceFormContainer from './ResourceFormContainer';
// import UserFormContainer from './UserFormContainer';
import CompanyFormContainer from './CompanyFormContainer';
import ChatContainer from './ChatContainer';

class UserProfile extends Component{
  constructor(props){
    super(props);
    this.state={
      user: {},
      userId:'',
      userId:this.props.params.id,
      // profileFormShow: false,
      resourceFormShow: false,
      companyFormShow: false,

    }
  this.showResourceForm = this.showResourceForm.bind(this)
  this.showCompanyForm = this.showCompanyForm.bind(this)

  this.handleClickResourceForm = this.handleClickResourceForm.bind(this)
  this.handleClickCompanyForm = this.handleClickCompanyForm.bind(this)
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

  // showProfileForm(){
  //   if (this.state.profileFormShow == false) {
  //     return null;
  //   }else{
  //     return(
  //       <div>
  //         <h4>Edit Your Profile</h4>
  //         <UserFormContainer />
  //       </div>
  //     )
  //   }
  // }

  showResourceForm(){
    if (this.state.resourceFormShow == false) {
      return null;
    }else{
      return(
        <div>
          <h4>Submit a Resource Request</h4>
          <ResourceFormContainer />
        </div>
      )
    }
  }

  showCompanyForm(){
    if (this.state.companyFormShow == false) {
      return null;
    }else{
      return(
        <div>
          <h4>Add Your Company To Our Database</h4>
          <CompanyFormContainer />
        </div>
      )
    }
  }

  // handleClickProfileForm(){
  //   if (this.state.profileFormShow){
  //     this.setState({profileFormShow: false})
  //   } else {
  //     this.setState({
  //       profileFormShow: true,
  //       resourceFormShow: false,
  //       companyFormShow: false
  //     })
  //   }
  // }

  handleClickResourceForm(){
    if (this.state.resourceFormShow){
      this.setState({resourceFormShow: false})
    } else {
      this.setState({
        // profileFormShow: false,
        resourceFormShow: true,
        companyFormShow: false
      })
    }
  }

  handleClickCompanyForm(){
    if (this.state.companyFormShow){
      this.setState({companyFormShow: false})
    } else {
      this.setState({
        // profileFormShow: false,
        resourceFormShow: false,
        companyFormShow: true
      })
    }
  }

  render(){
    let userCompanyField;
    if (this.state.user.company_id != '0'){
      userCompanyField= this.state.user.company_id
    }else{
      userCompanyField= "No company on file."
    }

    let userEmailField;
    if (this.state.user.mn_email != null){
      userEmailField= this.state.user.mn_email
    }else{
      userEmailField= "No email on file."
    }

    let userTitleField;
    if (this.state.user.mn_phone != null){
      userTitleField= this.state.user.mn_phone
    }else{
      userTitleField= "No phone number on file."
    }


    return (
      <div className="row">
        <div className="small-4 medium-4 large-4 columns user-profile-info">
          <h3>{this.state.user.first_name} {this.state.user.last_name}</h3>
            <p><b>Phone:</b> {userTitleField}</p>
            <p><b>Email:</b> {userEmailField}</p>
            <p><b>Company:</b> {userCompanyField}</p>
          <div className="row">
            <div className="button round btn-forms" onClick={this.handleClickResourceForm}>Submit Resource Request</div>
            <div className="button round btn-forms" onClick={this.handleClickCompanyForm}>Add Company To Database</div>
          </div>

        </div>
        <div className="small-7 medium-7 large-7 columns">
          <div className="user-alerts">
            Alerts & chat box goes here
            <ChatContainer />
          </div>
          <div>

            {this.showResourceForm()}
            {this.showCompanyForm()}
          </div>
        </div>
      </div>
    )
  }
}

export default UserProfile;
