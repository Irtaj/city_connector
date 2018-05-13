import React, { Component } from "react";
import CompanyTile from '../components/CompanyTile';
import MapContainer from './MapContainer';
import SearchBar from './SearchBar';

class CompanyList extends Component{
  constructor(props){
    super(props);
    this.state = {
      companies:[],
      companySelected: null,
    }
    this.handleClick = this.handleClick.bind(this)
    // this.searchCompanies = this.searchCompanies.bind(this)
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
        this.setState({
          companies: body,

        });
      })
      .catch(error => console.error(`Error in ${error.message}`));

    const companiesSearched = JSON.parse(localStorage.getItem('companiesSearched')) || []
      this.setState({companiesSearched: companiesSearched, allCompaniesSearched: companiesSearched})
  }

  handleClick(id){
    if(this.state.companySelected ===null){
      this.setState({companySelected: id})
    } else {
      this.setState({placeSelected: null})
    }
  }

  searchCompanies(){
    console.log("Our App knows the query: " + query);
    let companiesSearched = this.state.allCompaniesSearched.filter((companiesSearched) =>{
      return companiesSearched.name.includes(query)
    });
    this.setState({allCompaniesSearched:allCompaniesSearched})
    console.log(companiesSearched);
  }

  render(){
    let companies = this.state.companies.map(company => {
      let handle = () => {this.handleClick(company.id)}
      // let queried = () => {this.searchCompanies(event.target.value)}

      return(
        <CompanyTile
          key={company.id}
          id={company.id}
          name={company.name}
          category={company.category_comp}
          onClick = {handle}
        />
        // <SearchBar
        //   queriedInfo = {queried}
        // />
      )
    })

    return(
      <div className="row">
        <div className="small-6 medium-7 large-7 columns clearfix">
            <MapContainer />
        </div>
        <div className="small-6 medium-5 large-5 columns">
          <div>
            <SearchBar/>
          </div>
          <h4> Member Companies:</h4>
          <div className="company-list">

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
