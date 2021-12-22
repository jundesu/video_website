import styled from "@emotion/styled";
import { useContext } from "react";
import { ThemeContext } from "../theme/palette";

const GridLayout = styled.ul`
  list-style: none;
  padding: 20px;
  margin: 0;
  width: 100%;

  overflow-y: scroll;

  display: grid;
  grid-template-columns: repeat(4, 24%);
  justify-content: space-between;
  gap: 10px;
  
  @media(max-width: 1000px) {
    grid-template-columns: repeat(3, 32%);
  }
  @media(max-width: 800px) {
    grid-template-columns: repeat(2, 49%);
  }

  @media(max-width: 600px) {
    display: flex;
    flex-direction: column;
    padding: 5px;
  }

`;

const Video = styled.li`
  width: 100%;
  height: 100%;

  @media(max-width: 600px) {
    margin-bottom: 20px;
  }
`;

const Thumbnail = styled.img`
  background-color: #000000;
  object-fit: contain;
  width: 100%;
  height: 45%;

`;

const VideoDetails = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 10px;

`;

const ChannelIcon = styled.img`
  background: #000000;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  object-fit: cover;

`;

const VideoMessage = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 15px;

& > h4 {
  color: ${({color}) => color};
  font-size: 1.5rem;
  font-weight: 300;
  margin: 10px 0 0 0;
}
`;

const VideoTitle = styled.h3`
  color: ${({color}) => color};
  font-size: 1.8rem;
  font-weight: 400;
  margin: 0;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden; 
`;

function GridView({filteredVideos}) {
  const {theme} = useContext(ThemeContext);

  return (
      <GridLayout>
        {filteredVideos.map((video, index) => {
          return (
            <Video key={index}>
              <Thumbnail src={video.thumbnailUrl} alt="thumbnail" />
              
              <VideoDetails>
                <ChannelIcon src={video.channelIcon}/>
                <VideoMessage color={theme.videoMessageColor}>
                  <VideoTitle color={theme.videoTitleColor}>{video.title}</VideoTitle>
                  <h4>{video.channelTitle}</h4>
                  <h4>{video.viewCount} views</h4>
                  <sapn>{video.category}</sapn>
                </VideoMessage>
              </VideoDetails>
                
            </Video>
          )
        })}
      </GridLayout>  
  );
}

export default GridView; 


