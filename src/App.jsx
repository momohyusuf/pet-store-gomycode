import React from "react";
import Navbar from "./components/Navbar";
import PetList from "./components/PetList";
import Filters from "./components/Filters";
import { useFilterPets } from "./hooks/useFilterPets";

function App() {
  const [filterState, setFilterState] = React.useState({
    value: "",
    filterType: "",
  });
  const { pets } = useFilterPets(filterState.value, filterState.filterType);

  return (
    <>
      <Navbar />
      <Filters setFilterState={setFilterState} />
      <PetList pets={pets} />
    </>
  );
}

export default App;
