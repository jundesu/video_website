import styled from "@emotion/styled";
import PopUpProfile from "./PopUpProfile";

const VideoHeader = styled.header`
  grid-area: header;
  
  position: fixed;
  top: 0;
  left: 0;

  background-color: #001d3d; 
  width:100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
`;

const Logo = styled.a`
  height: 50px;
  font-size: 4rem;
  font-weight: 900;
  color: #fca311;
  text-decoration: none;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 500px;
  height: 50px;
  outline: none;
  border: none;
`;

const SearchBtn = styled.button`
  width: 50px;
  height: 50px;
  border: none;
`;

const LayoutBtn = styled.button`
  width: 40px;
  height: 40px;
  margin-right: 20px;
  border: none;
`;

const AvatarIcon = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: pink;
`; 

const Masthead = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;



function Header() {
  return (
    <VideoHeader>
        <Logo href="#">LOGO</Logo>

        <SearchBar>
          <label for="search"></label>
          <SearchInput type="search" id="search" placeholder="Type to search" name="search"></SearchInput>
          <SearchBtn type="button">S</SearchBtn>
        </SearchBar>
       
        <Masthead>
          <LayoutBtn>G</LayoutBtn>
          <LayoutBtn>T</LayoutBtn>
          <AvatarIcon/>
          <PopUpProfile />
        </Masthead>

    </VideoHeader>
  );
}

export default Header;
export {AvatarIcon};

