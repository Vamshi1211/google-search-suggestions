// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  getSuggestionItem = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state

    const searchResults = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="app-container">
        <div className="google-container">
          <div className="img-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-logo.png "
              alt="google logo"
              className="google-img"
            />
          </div>
          <ul className="list-container">
            <li className="icon-input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="search-icon"
              />
              <input
                className="search-input"
                type="search"
                placeholder="Search Google"
                onChange={this.onChangeSearch}
                value={searchInput}
              />
            </li>
            {searchResults.map(eachSuggestionItem => (
              <SuggestionItem
                suggestionItems={eachSuggestionItem}
                key={eachSuggestionItem.id}
                arrowClicked={this.getSuggestionItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
