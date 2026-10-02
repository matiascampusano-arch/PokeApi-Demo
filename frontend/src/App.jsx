import "./App.css";
import { Routes, Route } from "react-router-dom";

import PokemonList from "./pages/PokemonList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PokemonList />} />
      </Routes>
    </>
  );
}

export default App;
