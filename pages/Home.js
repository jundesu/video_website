import styled from "@emotion/styled";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import VideoContents from "../components/VideoContents";
import { useRouter } from 'next/router';
import { useState } from "react";
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

// @media(max-width: 500px) {
//   flex-direction: column-reverse;
// }

function Home () {
  const router = useRouter();

  const [isDark, setIsDark] = useState(false);
  const theme = isDark ? palette.dark : palette.light;
  const toggleTheme = () => {setIsDark((prev)=> !prev )};
  const defaultTheme = {isDark, theme, toggleTheme};

  return (
    <ThemeContext.Provider value={defaultTheme}>
      <HomePage backgroundColor={isDark}>
        <Header userEmail={router.query?.email}/>
        <main>
          <Sidebar />
          <VideoContents/>
        </main> 
      </HomePage>
    </ThemeContext.Provider>
      
  );
}

export default Home;