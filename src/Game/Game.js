import React from 'react';
import PropTypes from 'prop-types';
import Player from './Player';
import Boss from './Boss';
import DangerRock from './DangerRock'
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import styles from "./styles.css";
import TitleScreen from './TitleScreen';
import LoseScreen from './LoseScreen';
import InputManager from './InputManager';
import spacebg from './game_resources/space_background.png';

const screenStyle = {
  display: "block",
  backgroundColor: "#000000",
  marginLeft: "auto",
  marginRight: "auto",
}

const GameState = {
   StartScreen : 0,
   Playing : 1,
   GameOver : 2
};

const maxSize = 100;
const width = 2400;
const height = window.innerHeight;
const ratio = window.devicePixelRatio || 1;

export default class Game extends React.Component {
  constructor() {
    super();
    this.state = {
       input: new InputManager(),
       screen: {
         width: width,
         height: height,
         ratio: ratio
      },
      gameState: GameState.StartScreen,
      context: null,
      mousePos : { x: 0, y: 0 }
    };
    this.dangerRocks = [];
    this.player = null;
    this.time = 0;
    this.booster = 0;
}

  _onMouseMove(e) {
    this.setState({mousePos : { x: e.screenX, y: e.screenY }});
  }

  update() {
    const keys = this.state.input.pressedKeys;
    if (this.state.gameState === GameState.StartScreen && (keys.enter || keys.left || keys.right)) {
      this.startGame();
    }
    if (this.state.gameState === GameState.GameOver && (keys.enter || keys.left || keys.right)) {
      this.time = 0;
      this.startGame();
    }
    if (this.state.gameState === GameState.Playing) {
      this.clearBackground();
      if (this.player !== undefined && this.player !== null) {
        this.player.update(keys);
        this.player.render(this.state);
        this.time += 1;
        this.renderRocks(this.state);
      }

      if(this.time % 120 == 0 && this.booster > 20){
        this.booster += 1;
      }

      if (this.time % (40 - this.booster) == 0){
        this.addRandomDangerRock();
        var other = Math.random();
        while(other > .4){
          this.addRandomDangerRock();
          other = Math.random();
        }
      }
    }
    requestAnimationFrame(() => {this.update()});
  }

  renderRocks(state){
    let index = 0;
    var playerCorner = {x: this.player.position.x-15, y: this.player.position.y+15};
    var playerTip = {x: this.player.position.x, y: this.player.position.y};
    var playerOtherCorner = {x: this.player.position.x+15, y: this.player.position.y+15};

    for (let dangerRock of this.dangerRocks) {
        if (dangerRock.delete) {
          this.dangerRocks.splice(index, 1);
        }
        this.dangerRocks[index].updatePosition();
        this.dangerRocks[index].render(state);;
        if(this.dangerRocks[index].isPointInSquare(playerCorner) || this.dangerRocks[index].isPointInSquare(playerTip) || this.dangerRocks[index].isPointInSquare(playerOtherCorner)){
          this.setState({
            gameState: GameState.GameOver
          });
        }
        index++;
      }
  }

  addRandomDangerRock(){

    var min = 5;
    var randx =  min + (Math.random() * (width-min));
    var randySpeed = (min + (Math.random()*(20-min)));
    var randxSpeed = ((Math.random()-.5)*Math.random()*4);
    var colorIndex = Math.random();
    var colors = ["#A27DFA", "#FAE078"];
    var color = "#ffffff";
    var size = Math.round(min + (Math.random()*(maxSize-min)));



    if(colorIndex > .33 && colorIndex <= .66){
        color = colors[0];
    }else if(colorIndex > .66){
        color = colors[1];
    }

    if(randx > this.state.screen.width/2){
      randxSpeed = -randxSpeed;
    }
    const rocky = new DangerRock({
      position: {x: randx, y:0},
      // xspeed: randxSpeed,
      xspeed: randxSpeed,
      // yspeed: randySpeed,
      yspeed: randySpeed,
      color: color,
      radius: 25,
      size: size,
      screen: this.state.screen
    });

    this.dangerRocks.push(rocky);
  }

  gameOver(){
    this.setState({
      gameState: GameState.GameOver
    });
  }

  startGame() {
    let player = new Player({
     radius: 15,
     xspeed: 0,
     yspeed: 0,
     position: {
       x: this.state.screen.width/2,
       y: this.state.screen.height - 150
     },
     screen: {
       width: width,
       height: height,
       ratio: ratio
    }});
    this.setState({
      gameState: GameState.Playing
    });
    this.player = player;
  }

  clearBackground() {
    const context = this.state.context;
    context.save();
    context.scale(this.state.screen.ratio, this.state.screen.ratio);
    context.fillRect(0, 0, this.state.screen.width, this.state.screen.height);
    context.globalAlpha = 1;
  }


  componentDidMount() {
    this.state.input.bindKeys();
    const context = this.refs.canvas.getContext('2d');
    this.setState({ context: context });
    requestAnimationFrame(() => {this.update()});
  }

  componentWillUnmount() {
    this.state.input.unbindKeys();
  }

// { this.state.gameState === GameState.GameOver && <p>Your Score is {this.time}</p> }

  render(){
    return(
      <div>
      { this.state.gameState === GameState.StartScreen && <TitleScreen /> }
      { this.state.gameState === GameState.GameOver && <LoseScreen score={this.time}/> }
      <canvas ref="canvas"
              style={screenStyle}
             width={ this.state.screen.width * this.state.screen.ratio }
             height={ this.state.screen.height * this.state.screen.ratio } />
      </div>
    )
  }
}
