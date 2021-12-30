import styled from "@emotion/styled";
import Sidebar from "./Sidebar";
import { useEffect, useState, useContext, useRef } from "react";
import { ThemeContext } from "../theme/palette";

const Overlay = styled.div`
   width: 100%;
   height: 100%;
   background-color: #49505779;
   position: absolute;
   top: 0;
   left: 0;
`;

// display: none;

// @media(max-width: 1200px) {
//    display: ${({maskStatus}) => maskStatus ? 'block' : 'none'};
//  }


function SidebarOverlay() {
  return (
    <Overlay>
      <Sidebar/>
    </Overlay>
  );
}

export default SidebarOverlay;