import styled from "@emotion/styled";
import { useState, useEffect, useContext } from "react";
import Layout from "./Layout";
import VideoCategory from "./VideoCategory";
import { ThemeContext } from "../theme/palette";

const Contents = styled.section`
width: 100%;
height: 100%;
background-color: ${({background}) => background };

overflow-y: scroll;

`;

function VideoContents({videos, filteredVideos, onChangeCategory, selectedCategory}) {
  const {theme} = useContext(ThemeContext);

  // create categories
  const categories = videos.map((video) => {
    return video.category
  });
  const uniqueCategories = [...new Set(categories)];

  
  return (
    <Contents background={theme.contentsBackgroundColor}>
      <VideoCategory 
        uniqueCategories={uniqueCategories}
        onChangeCategory={onChangeCategory}
        selectedCategory={selectedCategory}
      />

        <Layout filteredVideos={filteredVideos} />
    </Contents>
  );
}

export default VideoContents;
