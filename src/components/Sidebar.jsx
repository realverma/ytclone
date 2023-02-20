import React from "react";
import { Stack } from "@mui/material";

import { categories } from "../utils/constants";

const Categories = ({ selectedCategory, setSelectedCategory, setSelectedTag }) => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => {
          setSelectedCategory(category.name)
          setSelectedTag("")
        }}
        style={{
          background: category.name === selectedCategory && "#272727",
          color: "white",
        }}
        key={category.name}
      >
        <span style={{ color: "white", marginRight: "24px" }}>
          {category.icon}
        </span>
        <span>
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Categories;