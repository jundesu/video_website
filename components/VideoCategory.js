import styled from "@emotion/styled";

const FilterBar = styled.ul`
  list-style: none;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 10px 0;
  background-color: #ffffff;
  overflow-x: scroll;

  position: sticky;
  top: 0px;

  &::-webkit-scrollbar {
    display: none;
  }

`;
const Category = styled.li`
  font-size: 1.5rem;
  color: ${({selected}) => selected ? '#ffffff' : '#000000' };
  background-color: ${({selected}) => selected ? '#000000' : '#f8f9fa' };
  border: ${({selected}) => selected ? '1px solid #000000' : '1px solid #ced4da' };
  border-radius: 20px;
  padding: 10px 20px;
  margin-right: 20px;
  text-transform: capitalize;
`;


function VideoCategory ({uniqueCategories, changeCategory, selectedCategory}) {
   
  return (
    <FilterBar>
      <Category onClick={() => {changeCategory('all')}} selected={selectedCategory === 'all'}>all</Category>
      {uniqueCategories.map((tagName, index) => {
        return (
          <Category 
            onClick={() => {changeCategory(tagName)}} 
            selected={selectedCategory === tagName}
            key={index}
          >
            {tagName}
          </Category>
        )
      })}
    </FilterBar>
  );
}

export default VideoCategory;