import styled from "@emotion/styled";

const GridLayout = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  display: grid;
  grid-template-columns: repeat(4, 18vw);
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
  margin: 10px 0 0 0;
}
`;

function GridView ({cards}){
  return (
      <GridLayout>
        {cards.map((card, index) => {
          return (
            <Video key={index}>
              <Thumbnail src={card.thumbnailUrl} alt="thumbnail" />
              <ChannelIcon/>
              <VideoMessage>
                <h3>{card.title}</h3>
                <h4>{card.channelTitle}</h4>
                <h4>{card.viewCount} views</h4>
              </VideoMessage>
            </Video>
          )
        })}
      </GridLayout>  
  );
}

export default GridView; 
