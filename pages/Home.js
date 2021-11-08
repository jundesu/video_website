import styled from "@emotion/styled";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import VideoContents from "../components/VideoContents";

const HomePage = styled.div`
  background: black;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 100px 4fr;
  grid-template-rows: 80px 100%;
  grid-template-areas: "header header header header header"  
                       "sidebar main main main main";
  overflow-y: scroll;
`;

function Home () {

  return (
    <HomePage>
      <Header />
      <Sidebar />
      <VideoContents/>
    </HomePage>
  );
}

export default Home;