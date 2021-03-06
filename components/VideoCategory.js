import styled from '@emotion/styled';
import { useContext, useRef } from 'react';
import { ThemeContext } from '../theme/palette';
import LeftArrow from '../svgs/leftArrow_icon.svg';
import RightArrow from '../svgs/rightArrow_icon.svg';

const ScrollContainer = styled.div`
  width: 100%;
  display: flex;
  border: 1px solid;
  border-color: ${({ borderColor }) => borderColor};
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;
`;

const ArrowBtn = styled.button`
  width: 50px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: none;
  padding: 0;
  margin: 0;
`;

const PreviousIcon = styled(LeftArrow)`
  width: 15px;
  height: 15px;
  fill: ${({ fill }) => fill};
`;

const NextIcon = styled(RightArrow)`
  width: 15px;
  height: 15px;
  fill: ${({ fill }) => fill};
`;

const FilterBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 10px 0;
  background-color: ${({ background }) => background};
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Category = styled.button`
  font-size: 1.5rem;
  color: ${({ color }) => color};
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: 1px solid ${({ borderColor }) => borderColor};
  border-radius: 20px;
  padding: 10px 20px;
  margin-right: 20px;
  text-transform: capitalize;
`;

function VideoCategory({
  uniqueCategories,
  onChangeCategory,
  selectedCategory,
}) {
  const { theme } = useContext(ThemeContext);

  const selectedAll = selectedCategory === 'all';

  const filterBarRef = useRef();

  const handleScrollNext = () => {
    const element = filterBarRef.current;
    element.scrollLeft += 200;
  };

  const handleScrollPrev = () => {
    const element = filterBarRef.current;
    element.scrollLeft -= 200;
  };

  return (
    <ScrollContainer borderColor={theme.scrollContainerBorderColor}>
      <ArrowBtn
        backgroundColor={theme.arrowBtnBackgroundColor}
        onClick={handleScrollPrev}
      >
        <PreviousIcon fill={theme.previousIconFill} />
      </ArrowBtn>

      <FilterBar
        background={theme.filterBarBackgroundColorl}
        ref={filterBarRef}
      >
        <Category
          onClick={() => {
            onChangeCategory('all');
          }}
          color={
            selectedAll ? theme.selectedCategoryColor : theme.categoryColor
          }
          backgroundColor={
            selectedAll
              ? theme.selectedCategoryBackgroundColor
              : theme.categoryBackgroundColor
          }
          borderColor={
            selectedAll
              ? theme.selectedCategoryBorderColor
              : theme.categoryBorderColor
          }
        >
          all
        </Category>

        {uniqueCategories.map((tagName, index) => {
          const selected = selectedCategory === tagName;

          return (
            <Category
              key={index}
              onClick={() => {
                onChangeCategory(tagName);
              }}
              color={
                selected ? theme.selectedCategoryColor : theme.categoryColor
              }
              backgroundColor={
                selected
                  ? theme.selectedCategoryBackgroundColor
                  : theme.categoryBackgroundColor
              }
              borderColor={
                selected
                  ? theme.selectedCategoryBorderColor
                  : theme.categoryBorderColor
              }
            >
              {tagName}
            </Category>
          );
        })}
      </FilterBar>

      <ArrowBtn
        backgroundColor={theme.arrowBtnBackgroundColor}
        onClick={handleScrollNext}
      >
        <NextIcon fill={theme.nextIconFill} />
      </ArrowBtn>
    </ScrollContainer>
  );
}

export default VideoCategory;
