import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';

import 'typeface-roboto';

const styles = {
  root: {
    width: '100%',
  },
  menuButton: {
    marginLeft: 20,
    align: "right",
  },
};

class HomeHeader extends React.Component {
  constructor (props) {
    super(props)
  }
  render(){
    const { classes } = this.props;
    return(
      <div className={classes.root}>
        <AppBar position="relative">
          <Toolbar variant="dense">
            <Typography component="h2" variant="h4" color="inherit" style={{paddingTop: 15, position:"relative"}} gutterBottom>
            Isak Romero
            </Typography>
          </Toolbar>
        </AppBar>

      </div>
    )
  }
}

HomeHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeHeader);
