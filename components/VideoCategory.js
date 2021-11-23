import styled from "@emotion/styled";

const FilterBar = styled.ul`
  list-style: none;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 10px 0;

  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }

`;
const Category = styled.li`
  font-size: 1.5rem;
  color: ${({selected}) => selected ? '#ffffff' : '#000000' };
  background-color: ${({selected}) => selected ? '#000000' : '#e9ecef' };
  border-radius: 20px;
  padding: 10px 20px;
  margin-right: 20px;
  text-transform: capitalize;
`;


function VideoCategory ({uniqueCategories, changeCategory, selectedCategory}) {
   
  return (
    <FilterBar>
      <Category onClick={() => {changeCategory('all')}} selected={selectedCategory === 'all'}>all</Category>
      {uniqueCategories.map((tagName) => {
        return (
          <Category 
            onClick={() => {changeCategory(tagName)}} 
            selected={selectedCategory === tagName}
          >
            {tagName}
          </Category>
        )
      })}
    </FilterBar>
  );
}

export default VideoCategory;