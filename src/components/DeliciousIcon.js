import React from 'react';
import Image from '../recipe.png';

// import {Link} from 'react-router-dom';
import { Link } from 'route-lite';

import Delicious from './Delicious';

const DeliciousIcon = () => (
  <Link className="App-link" component={Delicious}>
    <img alt="Delicious Recipes" src={Image}/> Recipes
  </Link> 
);

export default DeliciousIcon;