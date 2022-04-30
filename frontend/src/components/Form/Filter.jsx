import React from "react";
import Input from "./Input";

function Filter({ search, handleSetSearch }) {
  return (
    <label htmlFor="search">
      <Input search={search} handleSetSearch={handleSetSearch} />
      {/* <Input type={submit} value="envoyer" /> */}
    </label>
  );
}

export default Filter;
