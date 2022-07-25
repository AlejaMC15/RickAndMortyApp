import { useState, useEffect } from "react";
import { urlBase } from "../services/RickAndMorty.services";

const FetchsApi = () => {
  const [responseCharacter, setResponseCharacter] = useState();
  const [loading, setLoading] = useState(false);
  const [searchCharacter, setSearchCharacter] = useState();

  const ListCharacters = () => {
    fetch(urlBase + "/character")
      .then((response) => response.json())
      .then((data) => setResponseCharacter(data))
      .finally(() => setLoading(true));
  };

  useEffect(() => {
    ListCharacters();
  }, []);

  return {
    responseCharacter,
    loading,
    searchCharacter,
    setSearchCharacter,
  };
};

export default FetchsApi;
