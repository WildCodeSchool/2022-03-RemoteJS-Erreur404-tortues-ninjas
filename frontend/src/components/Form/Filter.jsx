import React from "react";

function Filter({ search, handleSetSearch }) {
  return (
    <label htmlFor="search">
      <input
        type="titre"
        id="search"
        value={search}
        onChange={(event) => handleSetSearch(event.target.value)}
      />
    </label>
  );
}

export default Filter;
