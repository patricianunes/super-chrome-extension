import React from 'react';
import {Link} from 'react-router-dom';

const DeliciousForm = props => (
  <form onSubmit={props.getRecipe} style={{marginBottom:"2rem"}}>
    <input className="form__input" type="text" name="recipeName" />
    <button className="form__button">Search</button>
    <button className="form__button">
      {/* <Link style= {{textDecoration: "none", color: "black"}} to="/">Go home</Link> */}
    </button>
  </form>
);

export default DeliciousForm;