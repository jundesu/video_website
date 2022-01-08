import React from "react";

const light ={
  // header
  headerBackgroundColor:'#ffffff',
  // search bar
  searchBarBorderColor:'#e9ecef',
  searchInputBackgroundColor: '#ffffff',
  searchInputColor:'#000000',
  clearBtnBackgroundColor: '#ffffff',
  searchBtnHoverColor: '#e9ecef',
  searchIconFill: '#000000',
  mobileSearchBoxBackgroundColor: '#ffffff',
  backIconFill: '#495057',
  // profile
  popupContainerBackgroundColor: '#ffffff',
  popupContainerBorderColor: '#dee2e6',
  nameColor: '#000000',
  darkModeIconColor: '#000000',
  signOutIconColor: '#000000',
  textColor:'#000000',
  // sidebar
  sidebarMenuBackgroundColor: '#ffffff',
  subsBtnBackgroundColor: '#ffffff',
  subsBtnHoverBackgroundColor: '#e9ecef',
  subsIconFill: '#000000',
  subsTitleColor: '#000000',
  channelTitleColor: '#000000',
  //contents
  contentsBackgroundColor: '#f8f9fa',
  //category
  scrollContainerBorderColor: '#e9ecef transparent #e9ecef transparent',
  filterBarBackgroundColorl: '#ffffff',
  categoryColor: '#000000',
  selectedCategoryColor: '#ffffff',
  categoryBackgroundColor:'#f8f9fa',
  selectedCategoryBackgroundColor:'#000000',
  categoryBorderColor: '#ced4da',
  selectedCategoryBorderColor: '#000000',
  arrowBtnBackgroundColor: '#ffffff',
  previousIconFill: '#495057',
  nextIconFill: '#495057',
  //video
  videoTitleColor: '#000000',
  videoMessageColor: '#495057',
  videoCategoryColor: '#adb5bd',
  videoCategoryBorderColor: '#adb5bd',
};

const dark = {
    // header
  headerBackgroundColor:'#1a1a1a',
  // search bar
  searchBarBorderColor: '#2c2c2c',
  searchInputBackgroundColor: '#000000',
  searchInputColor:'#dee2e6',
  clearBtnBackgroundColor: '#000000',
  searchBtnHoverColor: '#343a40',
  searchIconFill: '#ffffff',
  mobileSearchBoxBackgroundColor: '#000000',
  backIconFill: '#f8f9fa',
  // profile
  popupContainerBackgroundColor: '#1a1a1a',
  popupContainerBorderColor: '#2c2c2c',
  nameColor: '#f8f9fa',
  darkModeIconColor: '#f8f9fa',
  signOutIconColor: '#f8f9fa',
  textColor:'#f8f9fa',
  // sidebar
  sidebarMenuBackgroundColor: '#2c2c2c',
  subsBtnBackgroundColor: '#2c2c2c',
  subsBtnHoverBackgroundColor: '#343a40',
  subsIconFill: '#f8f9fa',
  subsTitleColor: '#f8f9fa',
  channelTitleColor: '#f8f9fa',
  //contents
  contentsBackgroundColor: '#1a1a1a',
  //category
  scrollContainerBorderColor: '#2c2c2c transparent #2c2c2c transparent',
  filterBarBackgroundColorl: '#1a1a1a',
  categoryColor: '#f8f9fa',
  selectedCategoryColor: '#000000',
  categoryBackgroundColor:'#2c2c2c',
  selectedCategoryBackgroundColor:'#e9ecef',
  categoryBorderColor: '#495057',
  selectedCategoryBorderColor: '#e9ecef',
  arrowBtnBackgroundColor: '#1a1a1a',
  previousIconFill: '#f8f9fa',
  nextIconFill: '#f8f9fa',
  //video
  videoTitleColor: '#f8f9fa',
  videoMessageColor: '#adb5bd',
  videoCategoryColor: '#495057',
  videoCategoryBorderColor: '#495057',
};

const palette = {light, dark};

export const ThemeContext = React.createContext({
  isDark: false,
  theme: light,
  toggleTheme: () => {},
});

export default palette;


