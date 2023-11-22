import React from "react";
import { petData } from "../data";

export function useFilterPets(value, filterType) {
  const [pets, setPets] = React.useState(petData);

  console.log(value, filterType);

  //   logic
  React.useEffect(() => {
    // return all the values if value is eqaul to empty string
    if (value === undefined || value === "") {
      setPets(petData);
      return;
    }

    // run the filter method
    const filteredPets = petData.filter((item) => item[filterType] === value);

    // assign the filtered array to our pet array
    setPets(filteredPets);
  }, [value]);
  // ************************

  return { pets };
}
