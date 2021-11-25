import styled from "@emotion/styled";

const GridLayout = styled.ul`
  list-style: none;
  padding: 20px;
  margin: 0;
  
  display: grid;
  grid-template-columns: repeat(4, 18vw);
  justify-content: space-between;

  overflow-y: scroll;
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

  background: #000000;
  border-radius: 50%;
  width: 40px;
  height: 40px;

`;

const VideoMessage = styled.section`
grid-area: message;

  display: flex;
  flex-direction: column;

& > h3 {
  color: #000000;
  font-size: 1.8rem;
  font-weight: 400;
  margin: 0;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden;
 
}

& > h4 {
  color: #495057;
  font-size: 1.5rem;
  font-weight: 300;
  margin: 10px 0 0 0;
}
`;

function GridView ({videos}){
  return (
      <GridLayout>
        {videos.map((video, index) => {
          return (
            <Video key={index}>
              <Thumbnail src={video.thumbnailUrl} alt="thumbnail" />
              <ChannelIcon src={video.channelIcon}/>
              <VideoMessage>
                <h3>{video.title}</h3>
                <h4>{video.channelTitle}</h4>
                <h4>{video.viewCount} views</h4>
                {/* <span>{video.category}</span> */}
              </VideoMessage>
            </Video>
          )
        })}
      </GridLayout>  
  );
}

export default GridView; 


