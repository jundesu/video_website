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

  & > li {
    font-size: 1.5rem;
    color: #000000;
    background-color: #e9ecef;
    border-radius: 20px;
    padding: 10px 20px;
    margin-right: 20px;
    text-transform: capitalize;
  }


`;


function VideoCategory ({uniqueCategories, changeCategory}) {

  return (
    <FilterBar>
      <li className ="all" onClick={() => {changeCategory('all')}}>all</li>
      {uniqueCategories.map((tagName) => {
        return (
          <li className="tag-name" onClick={() => {changeCategory(tagName)}}>{tagName}</li>
        )
      })}
    </FilterBar>
  );
}

export default VideoCategory;