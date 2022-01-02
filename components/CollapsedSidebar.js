import styled from "@emotion/styled";
import { useContext } from "react";
import { ThemeContext } from "../theme/palette";
import SubsImg from "../svgs/subs_icon.svg";

const Subscriptions = styled.div`
  width: 120px;
  background-color: ${({background}) => background};
`;

const SubsBtn = styled.button`
  border: none;
  width: 100%;
  height: 60px;
  background-color: ${({backgroundColor}) => backgroundColor};
  align-items: center;

  display: column;
  padding: 0px 5px 0px 5px;

  position: sticky;
  top: 0;

  &:hover {
    background-color: ${({hoverColor}) => hoverColor};
  }
`;

const SubsTitle = styled.h1`
  text-transform: uppercase;
  color: ${({subsTitleColor}) => subsTitleColor};
  font-size: 1.5rem;
  margin: 0 0 0 15px;
  font-weight: 500;

  font-size: 1rem;
  margin: 0;
`;

const SubsIcon = styled(SubsImg)`
  width: 30px; 
  height: 30px;
  path {
    fill: ${({fill}) => fill};
  }
`;

function CollapsedSidebar({toggleCollapse}) {
  const {theme} = useContext(ThemeContext);
  
  return (
    <Subscriptions background={theme.sidebarMenuBackgroundColor}>
        <SubsBtn 
          type="button" 
          backgroundColor={theme.subsBtnBackgroundColor} 
          hoverColor={theme. subsBtnHoverBackgroundColor}
          onClick={toggleCollapse}
        >
          <SubsIcon fill={theme.subsIconFill}/>
          <SubsTitle subsTitleColor={theme.subsTitleColor}>
            subscriptions
          </SubsTitle>
        </SubsBtn>
      </Subscriptions>  
  );
}

export default CollapsedSidebar;
