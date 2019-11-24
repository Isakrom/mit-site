import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// PAGES
import PokemonCard from '../PokemonCard/PokemonCard';
import ImageUpload from '../ImageProcessing/ImageProcessing';
import Game from '../Game/Game';
import App from '../App';
import TextCols from '../TextColExperiments/TextCols';
import PokeGrid from '../TextColExperiments/PokeGrid';


import AppBar from '@material-ui/core/AppBar';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';

import 'typeface-roboto';

function PokeCardView() {
  return <div><PokemonCard></PokemonCard></div>;
}

function Index() {
  return <div></div>
}

function TextColsView() {
  return <div><TextCols></TextCols></div>
}

function HomeView() {
  return <div><App></App></div>;
}


function PokeGridView() {
  return <div><PokeGrid></PokeGrid></div>;
}

function ImageUploadView() {
  return <div><ImageUpload></ImageUpload></div>;
}

function GameView() {
  return <div><Game></Game></div>;
}

function AppRouter() {
  return (
    <Router>
      <div>
        <AppBar position="relative">
          <Toolbar variant="dense">
            <Typography component="h4" variant="h4" color="inherit" style={{paddingTop: 15, position:"relative"}} gutterBottom>
            Isak Romero
            </Typography>
            <Typography variant="h6" color="white" style={{paddingLeft: 15, paddingTop: 15, position:"relative"}} gutterBottom>
            <Link to="/" style={{color: "white"}}>Index</Link>
            </Typography>
            <Typography variant="h6" color="white" style={{paddingLeft: 15, paddingTop: 15, position:"relative"}} gutterBottom>
            <Link to="/home" style={{color: "white"}}>Home</Link>
            </Typography>
            <Typography variant="h6" color="inherit" style={{paddingLeft: 15, paddingTop: 15, position:"relative"}} gutterBottom>
            <Link to="/resume/" style={{color: "white"}}>Resume</Link>
            </Typography>
            <Typography variant="h6" color="inherit" style={{paddingLeft: 15, paddingTop: 15, position:"relative"}} gutterBottom>
            <Link to="/image/" style={{color: "white"}}>Images Editing</Link>
            </Typography>
            <Typography variant="h6" color="inherit" style={{paddingLeft: 15, paddingTop: 15, position:"relative"}} gutterBottom>
            <Link to="/poke_grid/" style={{color: "white"}}> Poke Grid</Link>
            </Typography>
            <Typography variant="h6" style={{paddingLeft: 15, paddingTop: 15, position:"relative"}} gutterBottom>
            <Link to="/game/" style={{color: "white"}}>Game</Link>
            </Typography>
            <Typography variant="h6" style={{paddingLeft: 15, paddingTop: 15, position:"relative"}} gutterBottom>
            <Link to="/pokemon_card/" style={{color: "white"}}>Pokemon Card</Link>
            </Typography>
          </Toolbar>
        </AppBar>

        <Route path="/" component={Index} />
        <Route path="/home" component={HomeView} />
        <Route path="/resume" component={TextColsView} />
        <Route path="/poke_grid/" component={PokeGridView} />
        <Route path="/game/" component={GameView} />
        <Route path="/pokemon_card/" component={PokeCardView} />
        <Route path="/image/" component={ImageUploadView} />
      </div>
    </Router>
  );
}

export default AppRouter;
