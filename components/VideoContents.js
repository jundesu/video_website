import styled from "@emotion/styled";
import { useState, useEffect, useContext } from "react";
import GridView from "./gridView";
import VideoCategory from "./VideoCategory";
import { ThemeContext } from "../theme/palette";

const Contents = styled.main`
grid-area: main;

background-color: ${({background}) => background };
width: 100%;
height: 100%;
padding: 0px;

overflow-y: scroll;
`;


async function fetchVideos (){
  const response = await fetch('http://localhost:3000/api/videos');
  const jsonResponse = await response.json();
  return jsonResponse
}

function VideoContents() {
  const [videos, setVideos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const {theme} = useContext(ThemeContext);

  useEffect(() => {
    fetchVideos().then((videoList) => {
      setVideos(videoList);
    })
  }, []);

  const categories = videos.map((video) => {
    return video.category
  });
  const uniqueCategories = [...new Set(categories)];

  let newVideos = videos;
  
  if(selectedCategory !== 'all') {
    newVideos = newVideos.filter((video) => {
      return video.category === selectedCategory
    }) 
  } 


  return (
    <Contents background={theme.contentsBackgroundColor}>
      <VideoCategory uniqueCategories={uniqueCategories}
                     changeCategory={(selected) => setSelectedCategory(selected)}
                     selectedCategory={selectedCategory} />

        <GridView videos={newVideos} />
    </Contents>
  );
}

export default VideoContents;
