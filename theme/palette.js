import React from "react";

const light ={
  // header
  headerBackgroundColor:'#ffffff',
  // search bar
  searchBarBorderColor:'#e9ecef',
  searchInputBackgroundColor: '#ffffff',
  searchInputColor:'#000000',
  searchBtnbackgroundColor: '#f8f9fa',
  searchIconfill: '#000000',
  // layout
  gridIconfill: '#000000',
  tableIconfill: '#000000',
  // profile
  popupContainerBackgroundColor: '#ffffff',
  nameColor: '#000000',
  darkModeIconColor: '#000000',

};

const dark = {
    // header
  headerBackgroundColor:'#1a1a1a',
  // search bar
  searchBarBorderColor: '#2c2c2c',
  searchInputBackgroundColor: '#000000',
  searchInputColor:'#dee2e6',
  searchBtnbackgroundColor: '#2c2c2c',
  searchIconfill: '#ffffff',
  // layout
  gridIconfill: '#ffffff',
  tableIconfill: '#ffffff',
  // profile
  popupContainerBackgroundColor: '#1a1a1a',
  nameColor: '#f8f9fa',
  darkModeIconColor: '#f8f9fa',




};

const palette = {light, dark};

export const ThemeContext = React.createContext({
  isDark: false,
  theme: light,
  toggleTheme: () => {},
});

export default palette;


