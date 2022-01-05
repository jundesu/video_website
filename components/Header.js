import styled from "@emotion/styled";
import PopUpProfile from "./PopUpProfile";
import { useContext, useEffect, useRef, useState } from "react";
import AvatarImg from "../svgs/avatar_icon.svg";
import { ThemeContext } from "../theme/palette";
import SearchBar from "./SearchBar";
import MobileSearchBar from "./MobileSearchBar";
import SearchButton from "./SearchButtton";


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

  @media(max-width: 500px) {
    z-index: ${({collapse}) => collapse ? '1' : '0'};
  }
`;

const Logo = styled.a`
  font-size: 3rem;
  font-weight: 900;
  color: #fca311;
  text-decoration: none;

  @media(max-width: 500px) {
    font-size: 2.5rem;
  }
`;

const AvatarBtn = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background: #fca311;
  padding: 0;

  @media(max-width: 500px) {
    width: 40px;
    height: 40px;
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

const SearchBtnIcon = styled(SearchButton)`
  margin: 0 20px 0 auto; 
  border-radius: 50%;

  @media(min-width: 500px){
    display: none;
  }
`;

async function fetchProfile() {
  const response = await fetch('/api/profile');
  const jsonResponse = await response.json();
  return jsonResponse
}

function Header({userEmail, onQuery, collapse}) {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const [profile, setProfile] = useState({});
  
  const {theme} = useContext(ThemeContext);

  const [expand, setExpand] = useState(false); 

  const previousPage = () => {
    setExpand(false);
  };

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
    <Container backgroundColor={theme.headerBackgroundColor} collapse={collapse}>
        <Logo href="/home">LOGO</Logo>
        <SearchBar onQuery={onQuery} />
        <SearchBtnIcon onClick={() => setExpand(true)}/>
        {expand && (<MobileSearchBar onQuery={onQuery} previousPage={previousPage} />)}
        

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
