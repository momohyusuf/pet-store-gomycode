import React from "react";
import { Select } from "antd";

const Filters = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className="max-w-4xl mx-auto px-2 my-4">
      <h4>Filters</h4>
      <Select
        defaultValue="Race"
        style={{
          width: 120,
        }}
        onChange={handleChange}
        allowClear
        options={[
          {
            value: "Labrador Retriever",
            label: "Labrador Retriever",
          },
          {
            value: "German Shepherd",
            label: "German Shepherd",
          },
          {
            value: "Boxer",
            label: "Boxer",
          },
          {
            value: "Shih Tzu",
            label: "Shih Tzu",
          },
          {
            value: "Chihuahua",
            label: "Chihuahua",
          },
        ]}
      />
    </div>
  );
};

export default Filters;
