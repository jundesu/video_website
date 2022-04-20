import styled from '@emotion/styled';
import ExpandedSidebar from './ExpandedSidebar';
import CollapsedSidebar from './CollapsedSidebar';

const Aside = styled.aside`
  @media (max-width: 500px) {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: ${({ collapse }) => (collapse ? 'auto' : '100%')};
    z-index: 2;
  }
`;

function Sidebar({ channels, collapse, toggleCollapse }) {
  return (
    <Aside collapse={collapse}>
      {collapse ? (
        <CollapsedSidebar toggleCollapse={toggleCollapse} />
      ) : (
        <ExpandedSidebar channels={channels} toggleCollapse={toggleCollapse} />
      )}
    </Aside>
  );
}

export default Sidebar;
