import styled from "@emotion/styled";
import SearchImg from "../svgs/search_icon.svg"; 
import ClearImg from "../svgs/clear_icon.svg"
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../theme/palette";

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${({borderColor}) => borderColor};
  
  @media(max-width: 500px) {
    display: none;
  }
  
`;

const SearchInput = styled.input`
  width: 400px;
  height: 50px;
  outline: none;
  border: none;
  padding: 10px;
  background-color: ${({backgroundColor}) => backgroundColor};
  color: ${(color) => color};
  appearance: none;

  &::placeholder {
    color: #adb5bd;
    font-size: 2rem;
  }

  &::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }

  @media(max-width: 800px) {
    width: 300px;
  
  }
  @media(max-width: 600px) {
    width: 200px;

    &::placeholder {
      font-size: 1.5rem;
  }
`;

const ClearBtn = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  padding: 0;
  background-color: ${({backgroundColor}) => backgroundColor};
  visibility: ${({clearBtnDisplay}) => clearBtnDisplay ? 'visible' : 'hidden'};

`;

const ClearIcon = styled(ClearImg)`
  width: 40%;
  height: 40%;
  fill: #6c757d;
`;

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

function SearchBar ({onQuery}) {
  const {theme} = useContext(ThemeContext);
  const [inputValue, setInputValue] = useState('');
  const [clearBtnDisplay, setClearBtnDisplay] = useState(false);



  const handleInputeValue = (event) => {
    setInputValue(event.target.value); 
    setClearBtnDisplay(event.target.value.length > 0);
  };

  const ClearInputValue = () => {
    setInputValue('');
    console.log(inputValue)
  };
  
  return (
    <SearchBox borderColor={theme.searchBarBorderColor}>
      <label htmlFor="search"></label>
      <SearchInput 
        type="search" 
        id="search" 
        placeholder="Search..." 
        backgroundColor={theme.searchInputBackgroundColor} 
        color={theme.searchInputColor}
        onChange={handleInputeValue}
        value={inputValue}
        />
      <ClearBtn 
        type="button" 
        onClick={ClearInputValue} 
        clearBtnDisplay={clearBtnDisplay}
        backgroundColor={theme.clearBtnBackgroundColor}
      >
        <ClearIcon/>
      </ClearBtn>
      <SearchBtn 
        type="button" 
        hoverColor={theme.searchBtnHoverColor}
        onClick={() => onQuery(inputValue)}
      >
        <SearchIcon fill={theme.searchIconFill}/>
      </SearchBtn>
    </SearchBox>
  );
}

export default SearchBar;