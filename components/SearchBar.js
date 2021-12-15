import styled from "@emotion/styled";
import SearchImg from "../svgs/search_icon.svg"; 
import { useContext, useState } from "react";
import { ThemeContext } from "../theme/palette";


const Search = styled.div`
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

function SearchBar () {
  const {theme} = useContext(ThemeContext);
  const [query, setQuery] = useState('');

  const handleSearchValue = (event) => {
    setQuery(event.target.value);
    console.log(query);
  };

  return (
    <Search borderColor={theme.searchBarBorderColor}>
      <label htmlFor="search"></label>
      <SearchInput 
        type="search" 
        id="search" 
        placeholder="Search..." 
        backgroundColor={theme.searchInputBackgroundColor} 
        color={theme.searchInputColor}
        onChange={handleSearchValue}
        />
      <SearchBtn type="button" backgroundColor={theme.searchBtnbackgroundColor}>
        <SearchIcon fill={theme.searchIconFill}/>
      </SearchBtn>
    </Search>
  );
}

export default SearchBar;