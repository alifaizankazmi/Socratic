import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

import logo from './assets/socratic-transparent-white.png';

import Propositions from './Propositions';

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
      main: '#b71c1c'
    },
    secondary: {
      main: '#f44336'
    }
  }
});

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar position="static" color="primary">
          <Toolbar variant="dense">
            <img src={logo} alt="logo" />
          </Toolbar>
        </AppBar>
        <Propositions />
      </div>
    </ThemeProvider>
  );
}

export default App;
