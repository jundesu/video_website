import styled from "@emotion/styled";
import { useState, useEffect } from "react";

const Contents = styled.main`
  background: #355070;
  width: calc(100% - 250px);
  padding: 20px;
`;

const VideoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(4, 20vw );
  column-gap: 10px;
  row-gap: 30px;
  gap: 10px;
  justify-content:space-between;
`;

const Video = styled.li`
  display: flex; 
  flex-wrap: wrap;
`;

const ChannelIcon = styled.img`
  background: #c9ada7;
  border-radius: 50%;
  width: 30px;
  height: 30px;
`;

const Thumbnail = styled.img`
  background-color: #a7a7a780; 
  width: 100%;
  height: 10vw;
`;

const VideoMessage = styled.section`


& > h3 {
  color: #ffffff;
  font-size: 1.8rem;
}

& > h4 {
  color: #a7a7a7;
  font-size: 1.5rem;
  font-weight: 300;
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