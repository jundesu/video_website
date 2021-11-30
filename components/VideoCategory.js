import styled from "@emotion/styled";
import { useContext } from "react";
import { ThemeContext } from "../theme/palette";

const FilterBar = styled.ul`
  list-style: none;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 10px 0;
  background-color: ${({background}) => background};
  border: 1px solid;
  border-color: ${({borderColor}) => borderColor} ;
  overflow-x: scroll;

  position: sticky;
  top: 0px;

  &::-webkit-scrollbar {
    display: none;
  }
`;



const Category = styled.li`
  font-size: 1.5rem;
  color: ${({color}) => color };
  background-color: ${({backgroundColor}) => backgroundColor };
  border: 1px solid ${({borderColor}) => borderColor };
  border-radius: 20px;
  padding: 10px 20px;
  margin-right: 20px;
  text-transform: capitalize;
`;


function VideoCategory ({uniqueCategories, changeCategory, selectedCategory}) {
  const {theme} = useContext(ThemeContext);
  
  const selectedAll = selectedCategory === 'all';

  return (
    <FilterBar background={theme.filterBarBackgroundColorl} borderColor={theme.filterBarBorderColor}>
      <Category onClick={() => {changeCategory('all')}} 
        color={selectedAll ? theme.selectedCategoryColor : theme.categoryColor}
        backgroundColor={selectedAll ? theme.selectedCategoryBackgroundColor : theme.categoryBackgroundColor}
        borderColor={selectedAll ? theme.selectedCategoryBorderColor : theme.categoryBorderColor}
      >
        all
      </Category>
      
      {uniqueCategories.map((tagName, index) => {
        const selected = selectedCategory === tagName;

        return (
          <Category 
            key={index}
            onClick={() => {changeCategory(tagName)}} 
            color={selected ? theme.selectedCategoryColor : theme.categoryColor}
            backgroundColor={selected ? theme.selectedCategoryBackgroundColor : theme.categoryBackgroundColor}
            borderColor={selected ? theme.selectedCategoryBorderColor : theme.categoryBorderColor}
          >
            {tagName}
          </Category>
        )
      })}
    </FilterBar>
  );
}

export default VideoCategory;