import React from "react";
import { petData } from "../data";

export function useFilterPets({ value, filterType, petId }) {
  const [pets, setPets] = React.useState(petData);
  const [adoptPet, setAdoptPet] = React.useState("adopt pet");

  console.log(value, filterType, petId);

  //   logic
  React.useEffect(() => {
    // return all the values if value is eqaul to empty string
    if (value === "all" || value === undefined) {
      // assign the filtered array to our pet array
      petData.forEach((item) => {
        if (item.id === petId) {
          item.adopted = true;
        }
      });
      setPets(petData);
      return;
    }

    // run the filter method
    const filteredPets = petData.filter((item) => item[filterType] === value);

    // assign the filtered array to our pet array
    filteredPets.forEach((item) => {
      if (item.id === petId) {
        item.adopted = true;
      }
    });

    console.log(filteredPets);
    setPets(filteredPets);
  }, [value, petId]);
  // ************************

  return { pets };
}
