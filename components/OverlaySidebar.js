import styled from '@emotion/styled';
import ExpandedSidebar from './ExpandedSidebar';

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: #49505779;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
`;

function OverlaySidebar({ channels, toggleCollapse }) {
  return (
    <Overlay>
      <ExpandedSidebar channels={channels} toggleCollapse={toggleCollapse} />
    </Overlay>
  );
}

export default OverlaySidebar;
