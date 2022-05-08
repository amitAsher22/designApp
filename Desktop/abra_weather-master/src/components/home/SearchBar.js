import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateCity } from "../../store/actions";
import { getSuggestions } from "../../api/WeatherAPI";
// import Autocomplete from "react-autocomplete";
import AutoCompleteText from "../../helpers/AutoCompleteText";

function SearchBar() {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [hintData, setHintData] = useState([]);
  // const style = { width: "100%", marginTop: "2rem" }; 


  const setData = () => {
    return getSuggestions(searchText)
      .then((res) => setHintData(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (searchText.length > 0 && /^[A-Za-z -]*$/.test(searchText)){
      setData();
    } 
  });

  const textFromInput = (event) => {
    setSearchText(event.target.value);
  };

  const handleSelectCity = (cityName) => {
    console.log(
      'handleSelectCity', cityName
    );
    const city = hintData.find((c) => c.LocalizedName === cityName);
    dispatch(updateCity(city));
    setHintData([]);
    setSearchText("");
  };

 

  return (
    <>
      <h2>Enter city name</h2>
    <AutoCompleteText suggestions={hintData} onTextChanged={textFromInput} onTextClicked={handleSelectCity}/>
    </>
  );
}

export default SearchBar;
