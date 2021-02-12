import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { getPokemonTypes } from "./Utils/callsPokemonApi";
import { PokemonOverview } from "./components/pokemonOverview/PokemonOverview";
import "./App.css";
function App() {
  const [loading, setLoading] = useState(true);
  const [pokemonTypes, setPokemonTypes] = useState([]);

  useEffect(() => {
    getPokemonTypes({ setPokemonTypes, setLoading });
    setLoading(false);
  }, []);

  return (
    <div className="App">
      <div className="App-header">
        <h1>Pokemon App</h1>
        {loading && <Spinner animation="grow" />}
        {!loading && (
          <PokemonOverview
            pokemonTypes={pokemonTypes}
            setLoading={setLoading}
          />
        )}
      </div>
    </div>
  );
}

export default App;
