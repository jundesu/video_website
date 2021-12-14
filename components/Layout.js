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
  grid-template-columns: repeat(4, auto);
  column-gap: 10px;
  
  @media(max-width: 1000px) {
    grid-template-columns: repeat(3, auto);
  }
  @media(max-width: 800px) {
    grid-template-columns: repeat(2, auto);
  }

  @media(max-width: 600px) {
    grid-template-columns: repeat(1, auto);
  }

`;

const Video = styled.li`
`;

// display: grid;
// grid-template-columns: 1fr 3fr;
// grid-template-rows:  auto auto;
// grid-template-areas: "thumbnail thumbnail"  
//                      "icon message";
// row-gap: 10px;

const Thumbnail = styled.img`
  display: block;
  background-color: #000000;
  object-fit: contain;

  --size: 100%;
  --aspect-ratio: 2.3;
  width: var(--size);
  height: calc(var(--size) / var(--aspect-ratio));
  
`;
// @media(max-width: 1000px) {
//   height: 15vw;
// }

// @media(max-width: 800px) {
//   height: 20vw;
// }

// @media(max-width: 600px) {
//   height: 40vw;
// }
// grid-area: thumbnail;

const VideoDetails = styled.div`
    display: flex;
    flex-direction: row;

    margin-top: 20px;

`;

const ChannelIcon = styled.img`

  background: #000000;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  object-fit: contain;

`;

// grid-area: icon;

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

// grid-area: message;

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

function GridView({videos}) {
  const {theme} = useContext(ThemeContext);

  return (
      <GridLayout>
        {videos.map((video, index) => {
          return (
            <Video key={index}>
              <Thumbnail src={video.thumbnailUrl} alt="thumbnail" />
              
              <VideoDetails>
                <ChannelIcon src={video.channelIcon}/>
                <VideoMessage color={theme.videoMessageColor}>
                  <VideoTitle color={theme.videoTitleColor}>{video.title}</VideoTitle>
                  <h4>{video.channelTitle}</h4>
                  <h4>{video.viewCount} views</h4>
                  {/* <span>{video.category}</span> */}
                </VideoMessage>
              </VideoDetails>
                
            </Video>
          )
        })}
      </GridLayout>  
  );
}

export default GridView; 


