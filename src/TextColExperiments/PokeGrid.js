import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import PokemonBlurb from '../PokemonCard/PokemonBlurb';
import TextPaper from '../TextPaper/TextPaper';
import HomeHeader from '../HomeHeader/HomeHeader';
import bgImg from '../img/webBG.png';
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

var genStyle = {
    // backgroundImage: `url(${bgImg})`,
    /* Full height */
    height: "100%",
    /* Center and scale the image nicely */
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
};

class PokeGrid extends Component {
  render() {
    const { classes } = this.props;
    let rows = [];
    for(let i = 1; i < 269; i+= 3){
      rows.push(
        <Grid
                container
                spacing={16}
                alignItems="center"
                direction="row"
                justify="center"
              >
              <Grid item xs={4}>
                <PokemonBlurb num={i}/>
              </Grid>
              <Grid item xs={4}>
                <PokemonBlurb num={i+1}/>
              </Grid>
              <Grid item xs={4}>
                <PokemonBlurb num={i+2}/>
              </Grid>
        </ Grid>
      )
    }
    return (
      <div className="App" style={ genStyle }>
        {/* Columnn */}
        <Grid
                container
                spacing={16}
                alignItems="center"
                direction="column"
                justify="center"
              >
              {rows}
          </Grid>
      </div>
    );
  }
}

export default PokeGrid;
