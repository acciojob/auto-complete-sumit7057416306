
import React, { useState, useEffect } from "react";
import "./../styles/App.css";

const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];

const Autocomplete = () => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const filteredSuggestions = fruits.filter(
      (fruit) =>
        fruit.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1
    );
    setSuggestions(filteredSuggestions);
  }, [inputValue]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
     <div className="container">
      
      
      <div className="autocomplete">
      <div className="title">
        <h1>Search item</h1>
        

      </div>
      <br />
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Search for a fruit"
      />
      <br />
      <ul>
        {suggestions.map((suggestion) => (
          <li key={suggestion}>{suggestion}</li>
        ))}
      </ul>
    </div>

     </div>
    
  );
};

export default Autocomplete;
