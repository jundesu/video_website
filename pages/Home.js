import styled from "@emotion/styled";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import VideoContents from "../components/VideoContents";
import { useRouter } from 'next/router';

const HomePage = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr 3fr;
  grid-template-rows: 80px 100%;
  grid-template-areas: "header header header header header"  
                       "sidebar main main main main";
  overflow-y: scroll;
`;

function Home () {
  const router = useRouter();


  return (
    <HomePage>
      <Header userEmail={router.query?.email}/>
      <Sidebar />
      <VideoContents/>
    </HomePage>
  );
}

export default Home;