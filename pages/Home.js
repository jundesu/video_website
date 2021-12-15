import styled from "@emotion/styled";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import VideoContents from "../components/VideoContents";
import { useRouter } from 'next/router';
import { useState, useEffect } from "react";
import palette, {ThemeContext} from "../theme/palette";


const HomePage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({backgroundColor}) => backgroundColor ? '#1a1a1a' : '#ffffff'};

  & > main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 80px;
  }
`;

const Mask = styled.div`
  width: 100%;
  height: 100%;
  background-color: #49505779;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  display: none;

  @media(max-width: 1200px) {
    display: ${({maskStatus}) => maskStatus ? 'block' : 'none' };
  }
`;

async function fetchVideos (){
  const response = await fetch('http://localhost:3000/api/videos');
  const jsonResponse = await response.json();
  return jsonResponse
}

function Home () {
  const router = useRouter();
  const [isDark, setIsDark] = useState(false);
  const theme = isDark ? palette.dark : palette.light;
  const toggleTheme = () => {setIsDark((prev)=> !prev )};
  const defaultTheme = {isDark, theme, toggleTheme};
  const [maskStatus, setMaskStatus] = useState(false);

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos().then((videoList) => {
      setVideos(videoList);
    })
  }, []);
  
  return (
    <ThemeContext.Provider value={defaultTheme}>
      <HomePage backgroundColor={isDark}>
        <Mask maskStatus={maskStatus}/>
        <Header userEmail={router.query?.email} videos={videos}/>
          <main>
            <Sidebar renderMask={(collapse) => {
              setMaskStatus(!collapse);
            }}/>
            <VideoContents videos={videos} />
          </main>
      </HomePage>
    </ThemeContext.Provider>
      
  );
}

export default Home;