import React from "react";

function Input({ search, handleSetSearch }) {
  return (
    <input
      type="titre"
      id="search"
      value={search}
      onChange={(event) => handleSetSearch(event.target.value)}
    />
  );
}

export default Input;
