import styled from "@emotion/styled";
import { useState, useEffect } from "react";

const Contents = styled.main`
  grid-area: main;
   
  background: #003566;  
  width: 100%;
  height: 100%;
  padding: 20px;

  overflow-y: scroll;
`;

const VideoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  display: grid;
  grid-template-columns: repeat(4, 19vw);
  justify-content: space-between;

`;

const Video = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: "thumbnail thumbnail thumbnail thumbnail"  
                       "icon message message message";
  row-gap: 10px;
`;

const Thumbnail = styled.img`
grid-area: thumbnail;

  background-color: #a7a7a780; 
  width: 100%;
  height: 10vw;

`;

const ChannelIcon = styled.img`
grid-area: icon;

  background: #c9ada7;
  border-radius: 50%;
  width: 40px;
  height: 40px;
`;

const VideoMessage = styled.section`
grid-area: message;

  display: flex;
  flex-direction: column;

& > h3 {
  color: #ffffff;
  font-size: 1.8rem;
  font-weight: 400;
  margin: 0;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden;
 
}

& > h4 {
  color: #a7a7a7;
  font-size: 1.5rem;
  font-weight: 300;
  margin: 0;
}
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
      <VideoList>
        {cards.map((card) => {
          return (
            <Video>
              <Thumbnail />
              <ChannelIcon/>
              <VideoMessage>
                <h3>{card.title}</h3>
                <h4>{card.channelTitle}</h4>
                <h4>{card.viewCount} views</h4>
              </VideoMessage>

            </Video>
          )
        })}
      </VideoList>
    </Contents>
  );
}

export default VideoContents;