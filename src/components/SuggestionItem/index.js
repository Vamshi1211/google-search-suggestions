// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionItems, arrowClicked} = props
  const {suggestion} = suggestionItems

  const arrowIconClicked = () => {
    arrowClicked(suggestion)
  }

  return (
    <li className="suggestion-container">
      <p className="suggestion">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow-icon"
        onClick={arrowIconClicked}
      />
    </li>
  )
}

export default SuggestionItem
