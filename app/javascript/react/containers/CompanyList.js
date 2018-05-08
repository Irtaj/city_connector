import React from 'react';
import CompanyTile from '../components/CompanyTile';

class  CompanyList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      companies:[],
      companySelected: null,
    }

    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount(){
    fetch('/api/v1/companies')
      .then(response => {
        if (response.ok){
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(body => {
        this.setState({companies: body});
      })
      .catch(error => console.error(`Error in ${error.message}`));
  }

  handleClick(id){
    if(this.state.companySelected ===null){
      this.setState({companySelected: id})
    } else {
      this.setState({placeSelected: null})
    }
  }

  render(){
    let companies = this.state.companies.map(company => {

    let handle = () => {this.handleClick(company.id)}

      return(
        <CompanyTile
          key={company.id}
          id={company.id}
          name = {company.name}
          onClick = {handle}
        />
      )
    })

    return(
      <div className="row">
        <div className="small-6 medium-7 large-7 columns clearfix">
          <p className="map-field">This is the map section.</p>
        </div>
        <div className="small-6 medium-5 large-5 columns">
          <div className="search-bar">
            This is the search bar area.
          </div>
          <div className="company-list">
            <p>This is where the list of companies will be.</p>
            <ul>
              {companies}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CompanyList;
