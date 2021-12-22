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
  width: 50%;
  height: 50%;
  fill: ${({fill}) => fill};
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
    width: 250px;

    &::placeholder {
      font-size: 1.8rem;
  }
`;

const ClearBtn = styled.button`
  width: 30px;
  height: 50px;
  border: none;
  padding: 0;
  background-color: ${({backgroundColor}) => backgroundColor};
  border-radius: 50%;
  
`;

const ClearIcon = styled(ClearImg)`
  visibility: ${({clearIconDisplay}) => clearIconDisplay ? 'visible' : 'hidden'};
  width: 60%;
  height: 60%;
  fill: #adb5bd;
`;

const ExpandSearchBtn = styled(SearchButton)`
  border-radius: 50%;
`;



function MobileSearchBar ({onQuery, previousPage}) {
  const {theme} = useContext(ThemeContext);
  const [inputValue, setInputValue] = useState('');
  const [clearIconDisplay, setClearIconDisplay] = useState(false);

  const handleInputeValue = (event) => {
    setInputValue(event.target.value); 
    setClearIconDisplay(event.target.value.length > 0);
  };

  const clearInputValue = () => {
    setInputValue('');
    console.log(inputValue)
  };
  
  return (
    <SearchBox borderColor={theme.searchBarBorderColor} backgroundColor={theme.mobileSearchBoxBackgroundColor}>
      <BackBtn onClick={previousPage}>
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
      >
        <ClearIcon clearIconDisplay={clearIconDisplay}/>
      </ClearBtn>
      <ExpandSearchBtn onClick={() => onQuery(inputValue)}/>
      {/* <SearchBtn 
        type="button" 
        hoverColor={theme.searchBtnHoverColor}
        onClick={() => onQuery(inputValue)}
      >
        <SearchIcon fill={theme.searchIconFill}/>
      </SearchBtn> */}
    </SearchBox>
  );
}

export default MobileSearchBar;