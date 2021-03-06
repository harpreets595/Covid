import React, { useState, useEffect } from "react";
import DisplaySearchedCountries from "./DisplaySearchedCountries";

const Search = ({ countries }) => {
  const [userTyping, setUserTyping] = useState("");
  const [searchedCountries, setSearchedCountries] = useState("");

  useEffect(() => {
    if (userTyping !== "") {
      //filter through the data.
      let filteredCountries = countries.filter((country) => {
        // if (country.toLowerCase().includes(userTyping.toLowerCase())) {
        //   return country;
        // }
      });
      setSearchedCountries(filteredCountries);
    }
    //if userTyping === "" then reset.
    else if (userTyping === "") {
      setSearchedCountries("");
    }
    //condition - if the data includes what user is typing.
  }, [userTyping]);

  return (
    <div>
      <input
        onChange={(e) => setUserTyping(e.target.value)}
        type="text"
        placeholder="search for country..."
      ></input>
      {/*PASS SEARCHED STATE TO DisplaySearchedCountries */}
      {searchedCountries !== "" && (
        <DisplaySearchedCountries searchedCountries={searchedCountries} />
      )}
    </div>
  );
};

export default Search;
