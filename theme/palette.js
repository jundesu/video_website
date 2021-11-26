import React from "react";

const light ={
  // header
  headerBackgroundColor:'#ffffff',
  // search bar
  searchInputBackgroundColor: '#ffffff',
  searchBtnbackgroundColor: '#e9ecef',
  searchIconfill: '#000000',
  // layout
  gridIconfill: '#000000',
  tableIconfill: '#000000',

};

const dark = {
  headerBackgroundColor:'#1a1a1a',
  searchInputBackgroundColor: '#000000',
  searchBtnbackgroundColor: '',
  searchIconfill: '#ffffff',
  gridIconfill: '#ffffff',
  tableIconfill: '#ffffff',

};

const palette = {light, dark};

export const ThemeContext = React.createContext({
  palette: light,
});

export default palette;


