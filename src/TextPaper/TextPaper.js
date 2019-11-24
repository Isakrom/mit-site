import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class TextPaper extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
        <Grid item xs={24} sm={12}>
          <Paper className={classes.paper}>A line could be sublime.</Paper>
        </Grid>
          <Grid item xs={24} sm={8}>
            <Paper className={classes.paper}>Two lines to a line.</Paper>
          </Grid>
          <Grid item xs={24} sm={10}>
            <Paper className={classes.paper}>Three lines left to pine.</Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

TextPaper.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextPaper);
