let Search = (props) => {
  let handleSearchInputChange = (event) => {
    props.setSearchTerm(event.target.value);
  };

  return (
    <div>
      <h1>Search for Entries</h1>
      <form>
        Search from a Name:{" "}
        <input value={props.searchTerm} onChange={handleSearchInputChange} />
      </form>
    </div>
  );
};

export default Search;
