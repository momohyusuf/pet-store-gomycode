import React from "react";
import { Select } from "antd";

const Filters = ({ setFilterState }) => {
  const handleRaceFilter = (value) => {
    setFilterState({
      filterType: "race",
      value: value,
    });
  };

  const handleTypeFilter = (value) => {
    setFilterState({
      filterType: "type",
      value: value,
    });
  };

  const handleLocationFilter = (value) => {
    setFilterState({
      filterType: "location",
      value: value,
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-2 my-4">
      <h4 className="mb-2 ">Filters</h4>
      <div className="flex gap-4">
        <Select
          defaultValue="Race"
          style={{
            width: 120,
          }}
          onChange={handleRaceFilter}
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
        <Select
          defaultValue="Type"
          style={{
            width: 120,
          }}
          onChange={handleTypeFilter}
          allowClear
          options={[
            {
              value: "gray and white",
              label: "gray and white",
            },
            {
              value: "yellow",
              label: "yellow",
            },
            {
              value: "fawn",
              label: "fawn",
            },
            {
              value: "white",
              label: "white",
            },
            {
              value: "brown",
              label: "brown",
            },
          ]}
        />

        <Select
          defaultValue="Location"
          style={{
            width: 120,
          }}
          onChange={handleLocationFilter}
          allowClear
          options={[
            {
              value: "Europe",
              label: "Europe",
            },
            {
              value: "Asia",
              label: "Asia",
            },
            {
              value: "North America",
              label: "North America",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Filters;
