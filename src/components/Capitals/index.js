import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  // Set default value in state to 'NEW_DELHI'
  state = {selectedValue: 'NEW_DELHI'}

  clickedValue = event => {
    this.setState({selectedValue: event.target.value})
  }

  render() {
    const selectedCountry = countryAndCapitalsList.find(
      each => each.id === this.state.selectedValue,
    )?.country

    return (
      <div className="main-div">
        <div className="seconddiv">
          <h1>Countries And Capitals</h1>
          <div className="inner-div">
            <select
              value={this.state.selectedValue}
              onChange={this.clickedValue}
            >
              {countryAndCapitalsList.map(each => (
                <option key={each.id} value={each.id}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <p>is capital of which country?</p>
          </div>
          <p>{selectedCountry}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
