import React from "react";
import Navbar from "./components/Navbar";
import PetList from "./components/PetList";
import Filters from "./components/Filters";
import { useFilterPets } from "./hooks/useFilterPets";
import Modal from "./components/Modal";

function App() {
  const [filterState, setFilterState] = React.useState({
    value: "all",
    filterType: "",
  });
  const [adoptPet, setAdoptPet] = React.useState("");
  const { pets } = useFilterPets({
    value: filterState.value,
    filterType: filterState.filterType,
  });

  console.log("app rerendered");

  return (
    <>
      <Navbar />

      <Filters setFilterState={setFilterState} />
      <Modal />
      <PetList pets={pets} setAdoptPet={setAdoptPet} />
    </>
  );
}

export default App;
