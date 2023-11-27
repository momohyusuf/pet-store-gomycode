import React from "react";
import PetList from "../../components/PetList";
import Navbar from "../../components/Navbar";
import Filters from "../../components/Filters";
import { useFilterPets } from "../../hooks/useFilterPets";

const MarketPlace = () => {
  const [filterState, setFilterState] = React.useState({
    value: "all",
    filterType: "",
  });
  const [adoptPet, setAdoptPet] = React.useState("");
  const { pets } = useFilterPets({
    value: filterState.value,
    filterType: filterState.filterType,
  });

  return (
    <>
      <Filters setFilterState={setFilterState} />
      <PetList pets={pets} setAdoptPet={setAdoptPet} />
    </>
  );
};

export default MarketPlace;
