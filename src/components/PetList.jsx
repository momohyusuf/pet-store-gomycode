import React from "react";
import PetCard from "./PetCard";
import { petData } from "../data";

const PetList = () => {
  return (
    <div className="my-8 max-w-4xl px-2 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {petData.map((pet) => (
          <PetCard key={pet.id} {...pet} />
        ))}
      </div>
    </div>
  );
};

export default PetList;