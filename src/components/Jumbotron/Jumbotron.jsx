import React from 'react';
import { Jumbotron } from 'reactstrap';
import './Jumbotron.css'
import Gradient from 'rgt'

const FirstJumbotron = (props) => {
  return (
    <div>
      <Jumbotron>
      <h1 className="display-3"> <Gradient dir="left-to-right" from="#00DFD8" to="#7300E6"> Movie Finder</Gradient></h1> 

        <p className="lead">To find movies by name... </p>
        <p></p>
        <p className="lead">
        </p>
      </Jumbotron>
    </div>
  );
};

export default FirstJumbotron;