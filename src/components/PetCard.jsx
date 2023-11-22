import React from "react";
import { TagOutlined } from "@ant-design/icons";
import { Button, Card, Tooltip, Tag } from "antd";

const { Meta } = Card;
const PetCard = ({ adopted, location, name, photo, race, type }) => {
  return (
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
          <Button size="small" color="warning">
            Adopt
          </Button>
        </Tooltip>
      </div>
    </Card>
  );
};
export default PetCard;
