import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import styles from "./styles.css";

const KEY = {
   LEFT:  37,
   DOWN:  38,
   RIGHT: 39,
   UP: 40,
   A: 65,
   D: 68,
   SPACE: 32,
   ENTER: 13
};

export default class InputManager{
  constructor() {
   this.pressedKeys = { left: 0, right: 0, space: 0, enter: 0, down: 0, up: 0};
  }

  bindKeys() {
   window.addEventListener('keyup',   this.handleKeys.bind(this, false));
   window.addEventListener('keydown', this.handleKeys.bind(this, true));
  }

  unbindKeys() {
     window.removeEventListener('keyup', this.handleKeys);
     window.removeEventListener('keydown', this.handleKeys);
  }

  handleKeys(value, e){
     let keys = this.pressedKeys;
     switch (e.keyCode) {
        case KEY.LEFT:
          keys.left  = value;
          break;
        case KEY.A:
        case KEY.RIGHT:
          keys.right  = value;
          break;
        case KEY.DOWN:
          keys.down  = value;
          break;
        case KEY.UP:
          keys.up  = value;
          break;
        case KEY.D:
        case KEY.SPACE:
           keys.space  = value;
           break;
        case KEY.ENTER:
           keys.enter = value;
           break;
      }
      this.pressedKeys = keys;
  }
}
