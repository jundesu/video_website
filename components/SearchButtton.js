import styled from "@emotion/styled";
import SearchImg from "../svgs/search_icon.svg"; 
import { useContext } from "react";
import { ThemeContext } from "../theme/palette";

const SearchBtn = styled.button`
width: 50px;
height: 50px;
border: none;
padding: 0;
background-color: transparent;

&:hover {
  background-color: ${({hoverColor}) => hoverColor};
}

`;

const SearchIcon = styled(SearchImg)`
width: 60%;
height: 60%;
fill: ${({fill}) => fill };
`;

function SearchButton ({onClick, className}) {
  const {theme} = useContext(ThemeContext);
  return (
    <SearchBtn 
        type="button" 
        hoverColor={theme.searchBtnHoverColor}
        onClick={onClick}
        className={className}
      >
        <SearchIcon fill={theme.searchIconFill}/>
      </SearchBtn>
  )
}

export default SearchButton;
