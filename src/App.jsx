import React from "react";
import Navbar from "./components/Navbar";
import PetList from "./components/PetList";
import Filters from "./components/Filters";

function App() {
  return (
    <>
      <Navbar />
      <Filters />
      <div>
        <PetList />
      </div>
    </>
  );
}

export default App;
