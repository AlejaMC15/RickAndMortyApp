import Search from "../../components/search/Search";
import Cards from "../../components/cards/Cards";
import "./Home.css";

const Home = (props) => {

  return (
    <div container-fluid className="containerHome">
      <div className="row m-0">
        <div className="col d-flex justify-content-center align-items-center mt-5 text-light">
          <h1>Welcome to Rick and Morty App</h1>
        </div>
      </div>
      <div className="row m-0">
        <div className="col">
          <Search props={props} />
        </div>
      </div>
      <div className="row m-0">
        <div className="col">
          <Cards props={props} />
        </div>
      </div>
    </div>
  );
};

export default Home;
