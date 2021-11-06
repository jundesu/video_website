import styled from "@emotion/styled";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import VideoContents from "../components/VideoContents";

const HomePage = styled.div`
  background: #1b263b;
  width: 100%;
  height: 100%;
  display: flex; 
  flex-wrap:wrap;
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