import React from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            color: '#fff',
            background: '#482997',
          },
        },
      },
    },
  },
});

export default theme;

const ThemeProvider = (props) => <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>;

export { ThemeProvider };
