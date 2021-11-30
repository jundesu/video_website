import styled from "@emotion/styled";
import { useContext } from "react";
import { ThemeContext } from "../theme/palette";
import LeftArrow from "../svgs/leftArrow_icon.svg";
import RightArrow from "../svgs/rightArrow_icon.svg";


const ScrollContainer = styled.div`
  width: 100%;
  display: flex;
  border: 1px solid;
  border-color: ${({borderColor}) => borderColor} ;
`;

const ArrowBtn = styled.button`
  width: 50px;
  background-color: ${({backgroundColor}) => backgroundColor };
  border: none;
`;

const PreviousIcon = styled(LeftArrow)`
  width: 15px;
  height: 15px;
  fill: ${({fill}) => fill};
`;

const NextIcon = styled(RightArrow)`
  width: 15px;
  height: 15px;
  fill: ${({fill}) => fill};
`;

const FilterBar = styled.ul`
  list-style: none;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 10px 0;
  background-color: ${({background}) => background};

  
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
    <ScrollContainer borderColor={theme.scrollContainerBorderColor}>
      <ArrowBtn backgroundColor={theme.arrowBtnBackgroundColor}>
        <PreviousIcon fill={theme.previousIconFill}/>
      </ArrowBtn>
      <FilterBar background={theme.filterBarBackgroundColorl} >
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
      <ArrowBtn backgroundColor={theme.arrowBtnBackgroundColor}>
        <NextIcon fill={theme.nextIconFill}/>
      </ArrowBtn>
    </ScrollContainer>
  );
}

export default VideoCategory;