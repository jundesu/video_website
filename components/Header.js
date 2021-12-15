import styled from "@emotion/styled";
import PopUpProfile from "./PopUpProfile";
import { useContext, useEffect, useRef, useState } from "react";
import SearchImg from "../svgs/search_icon.svg"; 
import AvatarImg from "../svgs/avatar_icon.svg";
import { ThemeContext } from "../theme/palette";


const Container = styled.header`
  position: fixed;
  top: 0;
  z-index: 1;

  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px 0 30px;
  background-color: ${({backgroundColor}) => backgroundColor};

  @media(max-width: 800px) {
    padding: 0 15px 0 15px;
  }
`;

const Logo = styled.a`
  font-size: 3rem;
  font-weight: 900;
  color: #fca311;
  text-decoration: none;

  @media(max-width: 500px) {
    font-size: 2rem;
  }

`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${({borderColor}) => borderColor};
  
`;

const SearchInput = styled.input`
  width: 400px;
  height: 50px;
  outline: none;
  border: none;
  padding: 10px;
  background-color: ${({backgroundColor}) => backgroundColor};
  color: ${(color) => color};

  &::placeholder {
    color: #adb5bd;
    font-size: 2rem;
  }

  @media(max-width: 800px) {
    width: 300px;
    height: 40px;
    padding: 5px;

  }
  @media(max-width: 600px) {
    width: 200px;

    &::placeholder {
      font-size: 1.2rem;
  }

  @media(max-width: 400px) {
    width: 150px;
    height: 30px;
  }
`;

const SearchBtn = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  padding: auto;
  background-color: ${({backgroundColor}) => backgroundColor};

  @media(max-width: 800px) {
    width: 40px;
    height: 40px;
  }

  @media(max-width: 400px) {
    width: 30px;
    height: 30px;
  }
`;

const SearchIcon = styled(SearchImg)`
  width: 80%;
  height: 80%;
  fill: ${({fill}) => fill };
`;

const AvatarBtn = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background: #fca311;
  padding: 0;

  @media(max-width: 500px) {
    width: 30px;
    height: 30px;
  }
`;

const AvatarIcon = styled(AvatarImg)`
  width: 100%;
  height: 100%;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

async function fetchProfile() {
  const response = await fetch('http://localhost:3000/api/profile');
  const jsonResponse = await response.json();
  return jsonResponse
}

function Header({userEmail}) {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const [profile, setProfile] = useState({});
  
  const {theme} = useContext(ThemeContext);

  const handleClickoutside = (e) => {
    if(node.current.contains(e.target)){
      return
    }
    setOpen(false);
  };

  useEffect(() => {
    if(open){
      document.addEventListener("click", handleClickoutside);
    }
    return () => {document.removeEventListener("click", handleClickoutside)}
  }, [open]);

  useEffect(() => {
    fetchProfile().then((profile) => {
      setProfile(profile);
    })
  }, []);

  return (
    <Container backgroundColor={theme.headerBackgroundColor}>
        <Logo href="/Home">LOGO</Logo>

        <SearchBar borderColor={theme.searchBarBorderColor}>
          <label htmlFor="search"></label>
          <SearchInput type="search" id="search" placeholder="Search" name="search" backgroundColor={theme.searchInputBackgroundColor} color={theme.searchInputColor}></SearchInput>
          <SearchBtn type="button" backgroundColor={theme.searchBtnbackgroundColor}>
            <SearchIcon fill={theme.searchIconFill}/>
          </SearchBtn>
        </SearchBar>

        <User ref={node}>
          <AvatarBtn type="button" onClick={() => setOpen(prev => !prev)} >
            <AvatarIcon/>
          </AvatarBtn>
          {open && (
              <PopUpProfile userEmail={userEmail} profile={profile}/>
          )}
        </User>
    </Container>
  );
}

export default Header;
