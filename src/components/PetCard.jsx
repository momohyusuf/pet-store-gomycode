import React, { useState } from "react";
import { TagOutlined } from "@ant-design/icons";
import { Button, Card, Tooltip, Tag } from "antd";
import { useFilterPets } from "../hooks/useFilterPets";
import { Link } from "react-router-dom";

const { Meta } = Card;
const PetCard = ({
  id,
  adopted,
  location,
  name,
  photo,
  race,
  type,
  setAdoptPet,
}) => {
  const [petId, setPetId] = useState("0");
  const { pets } = useFilterPets({ petId: petId });

  const handleAdoptPet = (id) => {
    setPetId(id);
    alert("pet adopted");
  };

  return (
    <Link to={`${id}`}>
      <Card
        style={{
          position: "relative",
        }}
        cover={<img alt="example" src={photo} />}
      >
        <span className="absolute top-0 right-5 bg-orange-500 p-2 ">
          {" "}
          <TagOutlined
            style={{
              color: "white",
            }}
          />
        </span>
        <Meta title={name} />

        <div className="flex gap-4  my-3 justify-between items-center flex-wrap">
          <Tag color="error">{type}</Tag> <Tag color="default">{race}</Tag>
          <Tag color="success">{location}</Tag>
          <Tooltip color="orange" title="Adopt pet">
            <Button
              size="small"
              color="warning"
              onClick={() => handleAdoptPet(id)}
            >
              Buy now
            </Button>
          </Tooltip>
        </div>
      </Card>
    </Link>
  );
};
export default PetCard;
