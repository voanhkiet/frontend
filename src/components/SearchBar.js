import { useState } from "react";

const SearchBar = ({setQuery}) =>{
    return(
        <input 
        type = "text"
        placeholder="Search paintings..."
        onChange={(e) => setQuery(e.target.value)}
        />
    );
};

export default SearchBar;