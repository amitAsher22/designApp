import React from 'react';
import './AutoCompleteText.css';

const AutoCompleteText = (props) => {
 
 const renderSuggestions = () => {
    const { suggestions } = props;
    if(suggestions.length === 0 ){
      return null;
    }
    return (
      <ul>
        {suggestions.map((item) => <li onClick={() => props.onTextClicked(item.LocalizedName)} key={item.Key}>{item.LocalizedName}, {item.Country.LocalizedName} ({item.Country.ID})</li>)}
      </ul>
    )
  }

  
  
    return (
      <div className='AutoCompleteText'>
        <input
          type='text'
          onChange = {props.onTextChanged}
        />
        {renderSuggestions()}
      </div>
    )
  
}

export default AutoCompleteText