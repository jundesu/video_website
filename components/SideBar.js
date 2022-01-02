import styled from "@emotion/styled";
import { useContext } from "react";
import { ThemeContext } from "../theme/palette";

import ExpandedSidebar from "./ExpandedSidebar";
import CollapsedSidebar from "./CollapsedSidebar";

const Aside = styled.aside`

  @media(max-width: 500px) {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: ${({collapse}) => collapse ? 'auto' : '100%'};
    z-index: 1;
  }
`;

function Sidebar({channels, collapse, toggleCollapse}) {
console.log('hi:', collapse)
  return (
    <Aside collapse={collapse}>
      {collapse ? <CollapsedSidebar toggleCollapse={toggleCollapse} /> : <ExpandedSidebar channels={channels} toggleCollapse={toggleCollapse}/>}
    </Aside>
  );
}

export default Sidebar;
