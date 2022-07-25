import FetchsApi from "./hooks/Api";
import Home from "./views/home/Home";
import "./App.css";

function App() {
  const { responseCharacter, searchCharacter, setSearchCharacter } =
    FetchsApi();

  return (
    <div clasName="container-fluid">
      <div className="row ">
        <div className="col p-0">
          <header>
            <span className="name p-3">Rick and Morty app</span>
          </header>
        </div>
      </div>
      <div className="row">
        <div className="col p-0">
          <main>
            <Home
              responseCharacter={responseCharacter}
              searchCharacter={searchCharacter}
              setSearchCharacter={setSearchCharacter}
            />
          </main>
        </div>
      </div>
      <div className="row">
        <div className="col p-0">
          <footer>
            <span>Created by: </span>
            <span className="author">Alejandra Meneses Carmona</span>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
