import styled from "@emotion/styled";
import PopUpProfile from "./PopUpProfile";
import { useContext, useEffect, useRef, useState } from "react";
import SearchImg from "../svgs/search_icon.svg"; 
import AvatarImg from "../svgs/avatar_icon.svg";
import GridImg from "../svgs/grid_view.svg";
import TableImg from "../svgs/table_view.svg";

import { ThemeContext } from "../theme/palette";


const Container = styled.header`
  grid-area: header;
  position: fixed;
  top: 0;
  z-index: 2;

  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  background-color: ${({backgroundColor}) => backgroundColor};
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
  border: 1px solid ${({borderColor}) => borderColor};
  
`;

const SearchInput = styled.input`
  width: 500px;
  height: 50px;
  outline: none;
  border: none;
  padding: 10px;
  background-color: ${({backgroundColor}) => backgroundColor};
  color: ${(color) => color};

  &::placeholder {
    color: #adb5bd;
  }
`;

const SearchBtn = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  padding: auto;
  background-color: ${({backgroundColor}) => backgroundColor};
`;

const SearchIcon = styled(SearchImg)`
  width: 60%;
  height: 60%;
  fill: ${({fill}) => fill };
`;

const LayoutBtn = styled.button`
  width: 50px;
  height: 50px;
  margin-right: 20px;
  padding: 0;
  border: none;
  background: none;
`;

const GridIcon = styled(GridImg)`
  width: 100%;
  height: 100%;
  fill: ${({fill}) => fill };
`;

const TableIcon = styled(TableImg)`
  width: 100%;
  height: 100%;
  fill: ${({fill}) => fill };
`;

const AvatarBtn = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background: #fca311;
  padding: 0;

`;

const AvatarIcon = styled(AvatarImg)`
  width: 100%;
  height: 100%;
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
        <Logo href="#">LOGO</Logo>

        <SearchBar borderColor={theme.searchBarBorderColor}>
          <label htmlFor="search"></label>
          <SearchInput type="search" id="search" placeholder="Search" name="search" backgroundColor={theme.searchInputBackgroundColor} color={theme.searchInputColor}></SearchInput>
          <SearchBtn type="button" backgroundColor={theme.searchBtnbackgroundColor}>
            <SearchIcon fill={theme.searchIconfill}/>
          </SearchBtn>
        </SearchBar>

        <Masthead ref={node}>
          <LayoutBtn> 
            <GridIcon fill={theme.gridIconfill}/>
          </LayoutBtn>

          <LayoutBtn>
            <TableIcon fill={theme.tableIconfill}/>
          </LayoutBtn>

          <AvatarBtn type="button" onClick={() => {setOpen((prev) => !prev)}} >
            <AvatarIcon/>
          </AvatarBtn>
          {open && (
              <PopUpProfile userEmail={userEmail} profile={profile}/>
              )}

        </Masthead>
    </Container>
  );
}

export default Header;
