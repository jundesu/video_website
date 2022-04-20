import styled from '@emotion/styled';
import { useContext } from 'react';
import { ThemeContext } from '../theme/palette';
import SubsImg from '../svgs/subs_icon.svg';
import CollapseImg from '../svgs/clear_icon.svg';

const Subscriptions = styled.div`
  width: 250px;
  height: 100%;
  overflow-y: scroll;
  background-color: ${({ background }) => background};

  @media (max-width: 500px) {
    width: 100%;
  }
`;

const SubsBtn = styled.button`
  border: none;
  width: 100%;
  height: 60px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  display: flex;
  align-items: center;
  padding: 0 15px 0 15px;
  position: sticky;
  top: 0;

  &:hover {
    background-color: ${({ hoverColor }) => hoverColor};
  }

  @media (max-width: 500px) {
    padding: 0 30px 0 40px;
  }
`;

const SubsTitle = styled.h1`
  text-transform: uppercase;
  color: ${({ subsTitleColor }) => subsTitleColor};
  font-size: 1.5rem;
  margin: 0 0 0 15px;
  font-weight: 500;
`;

const SubsIcon = styled(SubsImg)`
  width: 30px;
  height: 30px;
  path {
    fill: ${({ fill }) => fill};
  }
`;

const CollapseIcon = styled(CollapseImg)`
  width: 20px;
  height: 20px;
  margin-left: auto;
  fill: #6c757d;
`;

const ChannelList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  @media (min-width: 1200px) {
    margin: 0 0 80px 0;
  }
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

  @media (max-width: 500px) {
    padding: 0 40px;
  }
`;

const ChannelTitle = styled.h2`
  color: ${({ color }) => color};
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
  visibility: ${({ unread }) => (unread ? 'visible' : 'hidden')};
`;

function ExpandedSidebar({ channels, toggleCollapse }) {
  const { theme } = useContext(ThemeContext);

  return (
    <Subscriptions background={theme.sidebarMenuBackgroundColor}>
      <SubsBtn
        type="button"
        backgroundColor={theme.subsBtnBackgroundColor}
        hoverColor={theme.subsBtnHoverBackgroundColor}
        onClick={toggleCollapse}
      >
        <SubsIcon fill={theme.subsIconFill} />
        <SubsTitle subsTitleColor={theme.subsTitleColor}>
          subscriptions
        </SubsTitle>
        <CollapseIcon />
      </SubsBtn>
      <ChannelList>
        {channels.map((channel, index) => {
          return (
            <li key={index}>
              <ChannelLink href="#">
                <img src={channel.channelIcon} alt="channel image" />
                <ChannelTitle color={theme.channelTitleColor}>
                  {channel.channelTitle}
                </ChannelTitle>
                <UnreadDot unread={channel.unreadCount > 0} />
              </ChannelLink>
            </li>
          );
        })}
      </ChannelList>
    </Subscriptions>
  );
}

export default ExpandedSidebar;
