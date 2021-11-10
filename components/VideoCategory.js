import styled from "@emotion/styled";

const FilterBar = styled.ul`
  list-style: none;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border: 1px solid red;
  margin: 0;
  padding: 20px 0;

  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  & > li {
    font-size: 1.5rem;
    color: #ffffff;
    background-color: black;
    border-radius: 20px;
    padding: 10px 20px;
    margin-right: 20px;
  }
`;


function VideoCategory ({cards}) {
  const categories = cards.map((card) => {
    return card.category
  });
  const uniqueCategories = [...new Set(categories)];

  return (
    <FilterBar>
      <li className ="all">all</li>
      {uniqueCategories.map((x) => {
        return (
          <li className="tag-name">{x}</li>
        )
      })}
    </FilterBar>

  );
}

export default VideoCategory;