import React, { Component } from 'react';
import CompanyBodyField from '../components/CompanyBodyField';
import CompanyCategoryField from '../components/CompanyCategoryField';
import CompanyTitleField from '../components/CompanyCategoryField';

class CompanyFormContainer extends Component {
  constructor(props){
    super(props)
    this.state={
      // companyTitle:'',
      // companyBody: '',
      // companyCategory: '1'
    }
    // this.handleTitle = this.handleTitle.bind(this);
  }

  // handleTitle(event){
  //   let newTitle = event.target.value
  //   this.setState({ companyTitle: newTitle })
  // }
  //
  // handleBody(event) {
  //   let newBody = event.target.value
  //   this.setState({ companyBody: newBody })
  // }
  //
  // handleCategory(event) {
  //   let newCategory = event.target.value
  //   this.setState({ companyCategory: newCategory })
  // }
  //
  // handleClear() {
  //   this.setState ({
  //     companyTitle: '',
  //     companyBody: '1',
  //     companyCategory: ''
  //   })
  // }
  //
  // handleFormSubmit(event) {
  //   event.preventDefault()
  //   let formPayload = {
  //     title: this.state.companyTitle,
  //     body: this.state.companyBody,
  //     rating: this.state.companyCategory,
  //     company_id: this.props.companyId,
  //     user_id: this.props.userId
  //   }
  //   this.props.addNewReview(formPayload)
  //   this.handleClear()
  // }

  render(){
    return(
      <form onSubmit={this.handleFormSubmit}>
        <label>
          Name:
            <input type="text" name="name"/>
        </label>
        <label>
          Description:
            <input type="text" name="discription"/>
        </label>
        <label>
          Website:
            <input type="text" name="website"/>
        </label>
        <label>
          Type:
            <input type="text" name="category_comp"/>
        </label>
        <label>
          Address:
            <input type="text" name="address"/>
        </label>
        <label>
          Phone:
            <input type="text" name="mn_phone"/>
        </label>
        <label>
          Email:
            <input type="text" name="mn_email"/>
        </label>
        <input className="button" type="submit" value="Submit" />
        <button className="button" type="button" onClick={this.handleClear}>Clear</button>
      </form>


      // <TitleField
      //   label="Review Title"
      //   title={this.state.companyTitle}
      //   handleTitle={this.handleTitle}
      // />
      // <BodyField
      //   label="Company Body"
      //   handleBody={this.handleBody}
      //   body={this.state.companyBody}
      // />
      // <RatingField
      //   label="Rating"
      //   handleRating={this.handleCategory}
      //   rating={this.state.companyCategory}
      // />
      // <input className="button" type="submit" value="Submit" />

    )
  }
}

export default CompanyFormContainer;
