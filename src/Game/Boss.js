import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import styles from "./styles.css";

const acceleration = 6;
const drag = 2;
export default class Boss {
    constructor(args){
       this.position = args.position;
       this.xspeed = args.xspeed;
       this.yspeed = args.yspeed;
       this.radius = args.radius;
       this.delete = false;
       this.onDie = args.onDie;
       this.screen = args.screen;
   }

   update(keys) {
     this.updatePlayerPosition();
   }

   updatePlayerPosition(){
     this.position.x += this.xspeed;
     this.position.y += this.yspeed;
     if(this.position.y > this.screen.height){
       this.position.y = this.screen.height;
     } else if(this.position.y < 0){
       this.position.y = 1;
     }
     if(this.position.x > this.screen.width){
       this.position.x = 0;
     } else if(this.position.x < 0){
       this.position.x = this.screen.width;
     }
   }

   render(state) {
    const context = state.context;
    context.translate(this.position.x, this.position.y);
    context.strokeStyle = "#FAE078";
    context.fillStyle = "#FAE078";
    context.lineWidth = 2;
    context.beginPath();
    context.moveTo(0, -25);
    context.strokeStyle = '#ffffff';
    context.fillStyle = '#ffffff';
    context.lineTo(15, 15);
    context.lineTo(5, 7);
    context.lineTo(-5, 7);
    context.lineTo(-15, 15);
    context.closePath();
    context.fill();
    context.stroke();
    context.restore();
  }
}
