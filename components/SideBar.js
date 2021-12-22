import styled from "@emotion/styled";
import { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../theme/palette";
import SubsImg from "../svgs/subs_icon.svg";

const SidebarMenu = styled.aside`
  min-width: ${({collapse}) => collapse ? '120px' : '250px'};
  height: 100%;
  overflow-y: scroll;
  background-color: ${({background}) => background} ;
  padding: 0px;

  @media(max-width: 1200px) {
    position: ${({collapse}) => collapse ? 'relative' : 'fixed'};
    left: 0;
    z-index: 3;
  }

  @media(max-width: 500px) {
    min-width: ${({collapse}) => collapse ? '100%' : '100%'};
    height: ${({collapse}) => collapse ? 'auto' : '100%'};
    
    position: fixed;
    bottom: 0;
    z-index: 3;
  }
`;

const SubsBtn = styled.button`
  border: none;
  width: 100%;
  height: 60px;
  background-color: ${({backgroundColor}) => backgroundColor};
  display: ${({collapse}) => collapse ? 'column' : 'flex'};
  align-items: center;
  padding:  ${({collapse}) => collapse ? '0px 5px 0px 5px' : '0px 15px 0px 15px'};

  position: sticky;
  top: 0;
  left: 0;

  &:hover {
    background-color: ${({hoverColor}) => hoverColor};
  }

  @media(max-width: 500px) {
    padding: 0 45px;
  }
`;
const SubsTitle = styled.h1`
  text-transform: uppercase;
  color: ${({subsTitleColor}) => subsTitleColor};
  font-size: ${({collapse}) => collapse ? '1rem' : '1.5rem'};
  margin: ${({collapse}) => collapse ? '0 0 0 0' : '0 0 0 15px'};
  font-weight: 500;
`;

const SubsIcon = styled(SubsImg)`
  width: 30px; 
  height: 30px;
  path {
    fill: ${({fill}) => fill};
  }
`;

const ChannelList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: ${({collapse}) => collapse ? 'none' : 'block'}

`;

const ChannelLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  line-height: 5rem;
  padding: 0 15px;

  &:hover {
    background-color: #adb5bd33;
  }

  & > img {
    background: #000000;
    border-radius: 50%;
    width: 30px;
    height: 30px;
  }

  @media(max-width: 500px) {
    padding: 0 45px;;
  }
`;
const ChannelTitle = styled.h2`
  color: ${({color}) => color};
  font-size: 1.8rem;
  font-weight: 300;
  width: 150px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
`;

const UnreadDot = styled.span`
  width: 6px;
  height: 6px;
  background-color: #fca311; 
  border-radius: 50%;
  visibility: ${({unread}) =>  unread ? 'visible' : 'hidden'};
`;

async function fetchChannelList () {
  const response = await fetch('http://localhost:3000/api/subscriptions');
  const jsonResponse = await response.json();
  return jsonResponse
}

function Sidebar({ renderMask }) {
  const [channels, setChannel] = useState([]);
  const [collapse, setCollapse] = useState(true);
  const {theme} = useContext(ThemeContext);

  const handleCollapsedSidebar = () => {
    const viewportWidth = window.innerWidth;
    if(viewportWidth < 1200) {
      setCollapse(true);
      return
    }
    setCollapse(false);
  }
  useEffect(() => {
    window.addEventListener('resize', handleCollapsedSidebar)
    return () => {window.removeEventListener('resize', handleCollapsedSidebar)}
  },[])

  useEffect(() =>{
    fetchChannelList().then((channels) => {
      setChannel(channels);
    })
  }, [])

  useEffect(() => {
    renderMask(collapse)
  }, [collapse])

  return (
      <SidebarMenu background={theme.sidebarMenuBackgroundColor} collapse={collapse}>
        <SubsBtn type="button" onClick={() => setCollapse(prev => !prev)} collapse={collapse} backgroundColor={theme.subsBtnBackgroundColor} hoverColor={theme. subsBtnHoverBackgroundColor}>
          <SubsIcon fill={theme.subsIconFill}/>
          <SubsTitle collapse={collapse} subsTitleColor={theme.subsTitleColor}>subscriptions</SubsTitle>
        </SubsBtn>
        <ChannelList collapse={collapse}>
          {channels.map((channel, index) => {
            return (
              <li key={index}>
                <ChannelLink href="#">
                  <img src={channel.channelIcon} alt="channel image"/>
                  <ChannelTitle color={theme.channelTitleColor}>{channel.channelTitle}</ChannelTitle>
                  <UnreadDot unread={channel.unreadCount > 0 } />
                </ChannelLink>
              </li>
            )
          })}
        </ChannelList>
      </SidebarMenu>  
  );
}

export default Sidebar;