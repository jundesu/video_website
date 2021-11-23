import styled from "@emotion/styled";
import { useEffect, useState } from "react";

const Subscriptions = styled.aside`
  grid-area: sidebar;
  overflow-y: scroll;

  & > h1 {
    text-transform: uppercase;
    color: #6c757d;
    font-size: 2rem;
    margin: 20px 0 20px 30px;
  }
`;

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
  padding: 0 30px;

  & > img {
    background: #000000;
    border-radius: 50%;
    width: 30px;
    height: 30px;
  }

  & > h2 {
    color: #000000;
    font-size: 1.2rem;
    font-weight: 300;
    width: 150px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
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

  useEffect(() =>{
    fetchChannelList().then((channels) => {
      setChannel(channels);
    })
  }, [])


  return (
    <Subscriptions>
      <h1>subscriptions</h1>
      <ChannelList>
        {channels.map((channel) => {
          return (
            <li>
              <ChannelLink href="#">
                <img src={channel.channelIcon} alt="channel image"/>
                <h2>{channel.channelTitle}</h2>
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