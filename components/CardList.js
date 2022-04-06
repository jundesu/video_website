import styled from "@emotion/styled";
import { useContext } from "react";
import { ThemeContext } from "../theme/palette";

const Container = styled.ul`
  list-style: none;
  padding: 20px;
  margin: 0 0 50px 0;
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
  
  @media(max-width: 500px) {
    margin-bottom: 150px;
  }
`;

const Card = styled.li`
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

const CardDetail = styled.div`
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

const CardDetailMessage = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 15px;
  width: calc(100% - 40px);

  & > h4 {
    color: ${({color}) => color};
    font-size: 1.5rem;
    font-weight: 300;
    margin: 10px 0 0 0;
  }

  & > span {
    font-size: 1.2rem;
    color: ${({videoCategoryColor}) => videoCategoryColor};
    margin: 10px 0 0 0;
    border: 1px solid;
    border-color: ${({videoCategoryBorderColor}) => videoCategoryBorderColor};
    padding: 2px 5px;
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

function CardList({filteredVideos}) {
  const {theme} = useContext(ThemeContext);

  return (
      <Container>
        {filteredVideos.map((video, index) => {
          return (
            <Card key={index}>
              <Thumbnail src={video.thumbnailUrl} alt="thumbnail" />
              
              <CardDetail>
                <ChannelIcon src={video.channelIcon}/>
                <CardDetailMessage 
                  color={theme.cardDetailMessage} 
                  videoCategoryColor={theme.videoCategoryColor} 
                  videoCategoryBorderColor={theme.videoCategoryBorderColor}
                >
                  <VideoTitle color={theme.videoTitleColor}>{video.title}</VideoTitle>
                  <h4>{video.channelTitle}</h4>
                  <h4>{video.viewCount} views</h4>
                  <span>{video.category}</span>
                </CardDetailMessage>
              </CardDetail>
                
            </Card>
          )
        })}
      </Container>  
  );
}
export default CardList; 


