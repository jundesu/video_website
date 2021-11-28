import styled from "@emotion/styled";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import VideoContents from "../components/VideoContents";
import { useRouter } from 'next/router';
import { useState } from "react";
import palette, {ThemeContext} from "../theme/palette";


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

  const [isDark, setIsDark] = useState(false);
  const theme = isDark ? palette.dark : palette.light;
  const toggleTheme = () => {setIsDark((prev)=> !prev )};
  const defaultTheme = {isDark, theme, toggleTheme};

  return (
    <ThemeContext.Provider value={defaultTheme}>
      <HomePage>
        <Header userEmail={router.query?.email}/>
        <Sidebar />
        <VideoContents/>
      </HomePage>
    </ThemeContext.Provider>
      
  );
}

export default Home;