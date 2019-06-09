import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
//import Router from './components/Router';
import * as serviceWorker from './serviceWorker';

// import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Router, { Link } from 'route-lite';

import App from './App';
import Delicious from './components/Delicious';
import Recipe from './components/Recipe';


// const Router = () => (
//   <BrowserRouter>
//     <Switch>
//       <Route exact path='' component={App} />
//       <Route path='/delicious' component={Delicious} />
//       <Route path='/recipe/:id' component={Recipe} />
//     </Switch>
//   </BrowserRouter>
// );

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
