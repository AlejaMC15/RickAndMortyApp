import { useEffect, useState } from "react";

const Search = ({ props }) => {
  const { responseCharacter, setSearchCharacter } = props;
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (responseCharacter?.results) {
      setSearchCharacter(
        responseCharacter?.results?.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search, responseCharacter]);

  return (
    <div className="input-group p-5">
      <input
        type="text"
        className="form-control"
        placeholder="Search comic"
        aria-label="Search comic"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
