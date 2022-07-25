const Search = ({ props }) => {
  const { responseCharacter } = props;
  console.log(responseCharacter.results);

  return (
    <div className="input-group p-5">
      <input
        type="text"
        className="form-control"
        placeholder="Search comic"
        aria-label="Search comic"
      />
      <button
        className="btn btn-outline-secondary "
        type="button"
        id="button-add"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
