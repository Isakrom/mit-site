import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PokemonCard from './PokemonCard/PokemonCard';
import AppRouter from './Router/router';
import Game from './Game/Game'
// import * as serviceWorker from './serviceWorker';
// import { Router} from 'react-router';
// import routes from './Router/routes';
import HomeHeader from './HomeHeader/HomeHeader';


ReactDOM.render(<AppRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
