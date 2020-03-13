import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from "@material-ui/core";
import {useDarkMode} from '../hooks/useDarkMode';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#fff',
    color: '#000',
  },
  title: {
    flexGrow: 1,
    textAlign: 'left'
  }
}));

export default function TopBar() {
  const classes = useStyles();
  const [toggled, setToggled] = useDarkMode(false);

    const handleToggle = () => {
        setToggled(!toggled)
    }
  
  return (
    <AppBar position="fixed" className={classes.root}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Players
        </Typography>
        <Switch onChange={handleToggle} checked={toggled}  value="dark-mode" color='primary' inputProps={{ 'aria-label': 'dark-mode checkbox'}} />
      </Toolbar>
    </AppBar>
  );
}
