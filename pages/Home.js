import styled from "@emotion/styled";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import VideoContents from "../components/VideoContents";
import { useRouter } from 'next/router';

const HomePage = styled.div`
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-rows: 80px 100%;
  grid-template-areas: "header header"  
                       "sidebar main";
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