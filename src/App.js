import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';

import logo from './assets/socratic-transparent.png';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: orange[100]
    }
  }
});

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <img src={logo} alt="logo" />
          </Toolbar>
        </AppBar>
      </div>
    </ThemeProvider>
  );
}

export default App;
