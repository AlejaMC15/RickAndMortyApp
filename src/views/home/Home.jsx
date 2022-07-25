import Search from "../../components/search/Search";
import Cards from "../../components/cards/Cards";
import "./Home.css";

const Home = (props) => {

  /* useEffect(() => {
    setSearchPokemon(
      listOfPokemons?.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, listOfPokemons]); */

  return (
    <div container-flex className="containerHome">
      <div className="row">
        <div className="col d-flex justify-content-center align-items-center mt-5 text-light">
          <h1>Welcome to Rick and Morty App</h1>
        </div>
      </div>
      <div className="row">
        <Search props={props} />
      </div>
      <div className="row">
        <Cards listCharacters={props} />
      </div>
    </div>
  );
};

export default Home;
