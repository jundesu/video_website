import styled from "@emotion/styled";
import { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../theme/palette";
import SubsImg from "../svgs/subs_icon.svg";

const SidebarMenu = styled.aside`
  width: ${({collapse}) => collapse ? '120px' : '300px'};
  height: 100%;
  overflow-y: scroll;
  background-color: ${({background}) => background} ;
  padding: ${({collapse}) => collapse ? '10px' : '10px 20px 10px 20px'} ;
`;
const SubsBtn = styled.button`
  border: none;
  width: 100%;
  background: none;
  display: ${({collapse}) => collapse ? 'column' : 'flex'};
  align-items: center;
  padding: 0;
  margin: 10px 0 10px 0;
  position: relative;

  &:hover {
    background-color: #adb5bd33;
  }
  
  & > h1 {
    text-transform: uppercase;
    color: #6c757d;
    font-size: ${({collapse}) => collapse ? '1rem' : '1.5rem'};
    margin: ${({collapse}) => collapse ? '0 0 0 0' : '0 0 0 15px'};
  }
`;

const SubsIcon = styled(SubsImg)`
  width: 30px; 
  height: 30px;
  path {
    fill: #6c757d;
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
  line-height: 4rem;

  &:hover {
    background-color: #adb5bd33;
  }

  & > img {
    background: #000000;
    border-radius: 50%;
    width: 30px;
    height: 30px;
  }

`;
const ChannelTitle = styled.h2`
  color: ${({color}) => color};
  font-size: 1.2rem;
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

function Sidebar () {
  const [channels, setChannel] = useState([]);
  const [collapse, setCollapse] = useState(false);

  const {theme} = useContext(ThemeContext);

  useEffect(() =>{
    fetchChannelList().then((channels) => {
      setChannel(channels);
    })
  }, [])

  return (
    <SidebarMenu background={theme.subscriptionsBackgroundColor} collapse={collapse}>
      <SubsBtn type="button" onClick={() => setCollapse(prev => !prev)} collapse={collapse}>
        <SubsIcon/>
        <h1>subscriptions</h1>
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