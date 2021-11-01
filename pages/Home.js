import styled from "@emotion/styled";
import Header from "../components/Header";

const HomePage = styled.div`
  background: #1b263b;
  width: 100%;
  height: 100%;

`;

function Home () {

  return (
    <HomePage>
      <Header />
    </HomePage>
  );
}

export default Home;