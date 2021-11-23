import styled from "@emotion/styled";
import PopUpProfile from "./PopUpProfile";
import { useEffect, useRef, useState } from "react";

const VideoHeader = styled.header`
  grid-area: header;

  position: fixed;
  top: 0;
  left: 0;

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
  border: 1px solid #dee2e6;

`;

const SearchInput = styled.input`
  width: 500px;
  height: 50px;
  outline: none;
  border: none;
  padding: 10px;

  &::placeholder {
    color: #adb5bd;
    
  }
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

const AvatarBtn = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background: pink;
  padding: 0;

  & > img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

const Masthead = styled.div`
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
    <VideoHeader>
        <Logo href="#">LOGO</Logo>

        <SearchBar>
          <label htmlFor="search"></label>
          <SearchInput type="search" id="search" placeholder="Search" name="search"></SearchInput>
          <SearchBtn type="button">S</SearchBtn>
        </SearchBar>

        <Masthead ref={node}>
          <LayoutBtn>G</LayoutBtn>
          <LayoutBtn>T</LayoutBtn>
          <AvatarBtn type="button" onClick={() => {setOpen(!open)}} >
            <img src={profile.avatar}/>
          </AvatarBtn>
          {open && (
              <PopUpProfile userEmail={userEmail} profile={profile}/>
              )}

        </Masthead>
    </VideoHeader>
  );
}

export default Header;
