import styled from "@emotion/styled";
import { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../theme/palette";

const Subscriptions = styled.aside`
  width: 300px;
  height: 100%;
  overflow-y: scroll;
  background-color: ${({background}) => background} ;
  padding: 20px;

  & > h1 {
    text-transform: uppercase;
    color: #6c757d;
    font-size: 1.8rem;
    margin: 0 0 10px 0;
  }
`;
// margin: 20px 0 20px 20px;

const ChannelList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  line-height: 3rem;
`;

const ChannelLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;


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

  const {theme} = useContext(ThemeContext);

  useEffect(() =>{
    fetchChannelList().then((channels) => {
      setChannel(channels);
    })
  }, [])


  return (
    <Subscriptions background={theme.subscriptionsBackgroundColor}>
      <h1>subscriptions</h1>
      <ChannelList>
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
    </Subscriptions>
  );
}


export default Sidebar;