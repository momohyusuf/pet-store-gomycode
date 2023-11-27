import React from "react";
import { useParams } from "react-router-dom";
import { petData } from "../../data";

export const PetDetails = () => {
  const { petId } = useParams();

  const [pet, setPet] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  const findPetById = () => {
    let pet = petData.find((item) => item.id === petId);
    setPet(pet);
    return pet;
  };

  React.useEffect(() => {
    findPetById();
    const timeOut = setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <h1>Getting pet info...</h1>;
  }

  return (
    <div>
      <h2>hello</h2>
      <h1>{pet.name}</h1>
    </div>
  );
};
