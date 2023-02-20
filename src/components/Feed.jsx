import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos, Sidebar } from "./";
import { tags } from "../utils/constants";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("Home");
  const [selectedTag, setSelectedTag] = useState("");
  const [videos, setVideos] = useState(null);
  console.log(videos)

  useEffect(() => {
    setVideos(null);

    if(selectedCategory){
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
    }

    if(selectedTag){
    fetchFromAPI(`search?part=snippet&q=${selectedTag}`)
      .then((data) => setVideos(data.items))
    }
    }, [selectedCategory,selectedTag]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} setSelectedTag={setSelectedTag} />
        
        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
          Copyright © 2023 Neeraj Verma
        </Typography>
      </Box>
      
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Box sx={{ overflow: "auto"}}>
          {tags.map((tag)=>(
            <button
              key={tag.name} 
              className="tag-btn" 
              style={{
                background: tag.name=== selectedTag && "#fff",
                color: tag.name=== selectedTag && "black"
              }}
              title={tag.name} 
              onClick={()=> {
              setSelectedTag(tag.name)
              setSelectedCategory("")
            }}>{tag.name}</button>
          ))}
        </Box>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;