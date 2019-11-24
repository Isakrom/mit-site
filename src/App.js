import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PokemonCard from './PokemonCard/PokemonCard';
import TextPaper from './TextPaper/TextPaper';
import HomeHeader from './HomeHeader/HomeHeader';
import bgImg from './img/webBG.png';
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
    backgroundImage: `url(${bgImg})`,
    /* Full height */
    height: "100%",
    /* Center and scale the image nicely */
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
};

class App extends Component {
  render() {
    const { classes } = this.props;
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
          {/* Row 1 */}
          <Grid
                  container
                  spacing={16}
                  alignItems="center"
                  direction="row"
                  justify="center"
                >
                <Grid item>
                      <TextPaper />
                </Grid>
                <Grid item>
                      <PokemonCard />
                </Grid>
                <Grid>
                </Grid>
          </Grid>
          {/* Row 2 */}
          <Grid
                  container
                  spacing={16}
                  alignItems="flex-start"
                  direction="row"
                  justify="center"
                >
                <h1>Hello</h1>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
