import styled from '@emotion/styled';

import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import palette, { ThemeContext } from '../theme/palette';
import { useCurrentWidth } from '../utils/hooks';

import Header from '../components/Header';
import VideoContents from '../components/VideoContents';
import Sidebar from '../components/Sidebar';
import OverlaySidebar from '../components/OverlaySidebar';

const HomePage = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? '#1a1a1a' : '#ffffff'};

  & > main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 80px;
    position: fixed;
    top: 0px;
    left: 0px;
  }
`;

// fetch videos
async function fetchVideos() {
  const response = await fetch('/api/videos');
  const jsonResponse = await response.json();
  return jsonResponse;
}

// fetch subscriptions
async function fetchChannelList() {
  const response = await fetch('/api/subscriptions');
  const jsonResponse = await response.json();
  return jsonResponse;
}

function Home() {
  const router = useRouter();

  //theme
  const [isDark, setIsDark] = useState(false);
  const theme = isDark ? palette.dark : palette.light;
  const toggleTheme = () => setIsDark((prev) => !prev);
  const defaultTheme = { isDark, theme, toggleTheme };

  // video
  const [videos, setVideos] = useState([]);
  const [filteredVideos, setFilteredVideos] = useState(videos);
  const [selectedCategory, setSelectedCategory] = useState('all');

  //subscription
  const [channels, setChannels] = useState([]);
  const [collapse, setCollapse] = useState(true);
  const [displayOverlay, setDisplayOverlay] = useState(false);
  const width = useCurrentWidth();

  // search bar
  const handleQueryResult = (inputValue) => {
    setSelectedCategory('all');
    setFilteredVideos(
      videos.filter((video) => {
        if (inputValue === '') {
          return true;
        } else if (
          video.title.toLowerCase().includes(inputValue.toLowerCase()) ||
          video.channelTitle.toLowerCase().includes(inputValue.toLowerCase())
        ) {
          return true;
        }
        return false;
      })
    );
  };

  // category
  const handleCategoryChange = (selected) => {
    setSelectedCategory(selected);

    if (selected !== 'all') {
      setFilteredVideos(
        videos.filter((video) => {
          return video.category === selected;
        })
      );
    } else {
      setFilteredVideos(videos);
    }
  };

  //sidebar
  const handleSubscriptionsBtn = () => {
    if (width < 1200 && width > 500) {
      setDisplayOverlay(true);
    } else {
      setCollapse((prev) => !prev);
    }
  };

  useEffect(() => {
    fetchVideos().then((videoList) => {
      setVideos(videoList);
      setFilteredVideos(videoList);
    });

    fetchChannelList().then((channels) => {
      setChannels(channels);
    });
  }, []);

  useEffect(() => {
    if (width < 1200) {
      setCollapse(true);
      return;
    }
    setCollapse(false);
  }, [width]);

  return (
    <ThemeContext.Provider value={defaultTheme}>
      <HomePage backgroundColor={isDark}>
        {displayOverlay && (
          <OverlaySidebar
            channels={channels}
            toggleCollapse={() => setDisplayOverlay(false)}
          />
        )}
        <Header
          userEmail={router.query?.email}
          videos={videos}
          onQuery={handleQueryResult}
          collapse={collapse}
        />
        <main>
          <Sidebar
            channels={channels}
            collapse={collapse}
            toggleCollapse={handleSubscriptionsBtn}
          />

          <VideoContents
            videos={videos}
            filteredVideos={filteredVideos}
            onChangeCategory={handleCategoryChange}
            selectedCategory={selectedCategory}
          />
        </main>
      </HomePage>
    </ThemeContext.Provider>
  );
}

export default Home;
