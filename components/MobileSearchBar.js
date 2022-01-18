import styled from "@emotion/styled";
import ClearImg from "../svgs/clear_icon.svg"
import { useContext, useState } from "react";
import { ThemeContext } from "../theme/palette";
import LeftArrow from "../svgs/leftArrow_icon.svg";
import SearchButton from "./SearchButtton"; 

const SearchBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({backgroundColor}) => backgroundColor};
  padding: 10px;
  
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;

  @media(min-width: 500px){
    display: none;
  }
`;

const BackBtn = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  padding: 0;
  background-color: transparent;
`;

const BackIcon = styled(LeftArrow)`
  width: 70%;
  height: 70%;
  fill: ${({fill}) => fill};
`;

const SearchInput = styled.input`
  width: 50%;
  height: 100%;
  outline: none;
  border: none;
  padding: 10px;
  background-color: ${({backgroundColor}) => backgroundColor};
  color: ${(color) => color};
  appearance: none;
  font-size: 2rem;

  &::placeholder {
    color: #adb5bd;
    font-size: 2rem;
  }

  &::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }

`;

const ClearBtn = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  padding: 0;
  background-color: ${({backgroundColor}) => backgroundColor};
  border-radius: 50%;
  visibility: ${({clearIconDisplay}) => clearIconDisplay ? 'visible' : 'hidden'};
`;

const ClearIcon = styled(ClearImg)`
  width: 50%;
  height: 50%;
  fill: #adb5bd;
`;

const ExpandSearchBtn = styled(SearchButton)`
  border-radius: 50%;
`;

function MobileSearchBar ({onQuery, goBack}) {
  const {theme} = useContext(ThemeContext);
  const [inputValue, setInputValue] = useState('');
  const [clearIconDisplay, setClearIconDisplay] = useState(false);

  const handleInputeValue = (event) => {
    setInputValue(event.target.value); 
    setClearIconDisplay(event.target.value.length > 0);
  };

  const clearInputValue = () => {
    setInputValue('');
    setClearIconDisplay(false);
  };
  
  return (
    <SearchBox borderColor={theme.searchBarBorderColor} backgroundColor={theme.mobileSearchBoxBackgroundColor}>
      <BackBtn onClick={goBack}>
        <BackIcon fill={theme.backIconFill} />
      </BackBtn>
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
        onClick={clearInputValue} 
        backgroundColor={theme.clearBtnBackgroundColor}
        clearIconDisplay={clearIconDisplay}
      >
        <ClearIcon />
      </ClearBtn>
      <ExpandSearchBtn onClick={() => onQuery(inputValue)}/>
    </SearchBox>
  );
}

export default MobileSearchBar;