import styled from "@emotion/styled";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const HomePage = styled.div`
  background: #1b263b;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;

function Home () {

  return (
    <HomePage>
      <Header />
      <Sidebar />
    </HomePage>
  );
}

export default Home;