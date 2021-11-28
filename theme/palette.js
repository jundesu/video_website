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
  popupContainerBorderColor: '#dee2e6',
  nameColor: '#000000',
  darkModeIconColor: '#000000',
  signOutIconColor: '#000000',
  textColor:'#000000',
  // subscriptions
  subscriptionsBackgroundColor: '#ffffff',
  channelTitleColor: '#000000',
  //contents
  contentsBackgroundColor: '#f8f9fa',
  //category
  filterBarBackgroundColorl: '#ffffff',
  filterBarBorderColor: '#e9ecef transparent #e9ecef transparent',
  categoryColor: '#000000',
  selectedCategoryColor: '#ffffff',
  categoryBackgroundColor:'#f8f9fa',
  selectedCategoryBackgroundColor:'#000000',
  categoryBorderColor: '#ced4da',
  selectedCategoryBorderColor: '#000000',

  //video
  videoTitleColor: '#000000',
  videoMessageColor: '#495057',
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
  popupContainerBorderColor: '#2c2c2c',
  nameColor: '#f8f9fa',
  darkModeIconColor: '#f8f9fa',
  signOutIconColor: '#f8f9fa',
  textColor:'#f8f9fa',
  // subscriptions
  subscriptionsBackgroundColor: '#2c2c2c',
  channelTitleColor: '#f8f9fa',
  //contents
  contentsBackgroundColor: '#1a1a1a',
  //category
  filterBarBackgroundColorl: '#1a1a1a',
  filterBarBorderColor: '#2c2c2c transparent #2c2c2c transparent',
  categoryColor: '#f8f9fa',
  selectedCategoryColor: '#000000',
  categoryBackgroundColor:'#2c2c2c',
  selectedCategoryBackgroundColor:'#e9ecef',
  categoryBorderColor: '#495057',
  selectedCategoryBorderColor: '#e9ecef',

  //video
  videoTitleColor: '#f8f9fa',
  videoMessageColor: '#adb5bd',
};

const palette = {light, dark};

export const ThemeContext = React.createContext({
  isDark: false,
  theme: light,
  toggleTheme: () => {},
});

export default palette;


