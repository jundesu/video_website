import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import GridView from "./gridView";
import VideoCategory from "./VideoCategory";

const Contents = styled.main`
  grid-area: main;
  
  overflow-y: scroll;

  background: #003566;  
  width: 100%;
  height: 100%;
  padding: 20px;

`;


async function fetchVideos (){
  const response = await fetch('http://localhost:3000/api/videos');
  const jsonResponse = await response.json();
  return jsonResponse
}

function VideoContents() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetchVideos().then((cards) => {
      setCards(cards);
    })
  }, []);
  
  return (
    <Contents>
      <VideoCategory cards={cards} />
      <GridView cards={cards} />
    </Contents>
  );
}

export default VideoContents;