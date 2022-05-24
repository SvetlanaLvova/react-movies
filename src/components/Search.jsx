import React, { useState } from "react";
function Search(props) {
  const { searchMovies = Function.prototype } = props;
  const [searchValue, setSearchValue] = useState("");
  const [type, setType] = useState("all");

  const handleKey = (e) => {
    if (e.key === "Enter") {
      searchMovies(searchValue, type);
    }
  };
  const handleFilter = (e) => {
    setType(e.target.dataset.type);
    searchMovies(searchValue, e.target.dataset.type);
  };

  return (
    <div className="row">
      <div className="input-field">
        <input
          className="validate"
          placeholder="search"
          type="search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={handleKey}
        />
        <button
          className="btn search-btn"
          onClick={(e) => searchMovies(searchValue, type)}
        >
          Search
        </button>
      </div>
      <div>
        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="all"
            onChange={handleFilter}
            checked={type === "all"}
          />
          <span>All</span>
        </label>
        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="movie"
            onChange={handleFilter}
            checked={type === "movie"}
          />
          <span>Movies</span>
        </label>
        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="series"
            onChange={handleFilter}
            checked={type === "series"}
          />
          <span>Series</span>
        </label>
      </div>
    </div>
  );
}

export default Search;
