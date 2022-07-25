import FetchsApi from "./hooks/Api";
import Home from "./views/home/Home";
import "./App.css";

function App() {
  const { responseCharacter } = FetchsApi();

  return (
    <div container-flex>
      <div className="row">
        <header>
          <span className="name p-3">Rick and Morty app</span>
        </header>
      </div>
      <div className="row">
        <main>
          <Home responseCharacter={responseCharacter} />
        </main>
      </div>
      <div className="row">
        <footer>
          <span>Created by: </span>
          <span className="author">Alejandra Meneses Carmona</span>
        </footer>
      </div>
    </div>
  );
}

export default App;
