import { useState } from "react";

const SearchBar = ({ onClick }) => {
  const [query, setQuery] = useState("");

  const onChangeSearchBar = (event) => {
    setQuery(event.target.value);
  };

  const onClickSearchBar = () => {
    onClick(query);
  };

  return (
    <div>
      <input className="input-group mb-3" onChange={onChangeSearchBar} />
      <button onClick={onClickSearchBar}>Search</button>
    </div>
  );
};

export default SearchBar;
