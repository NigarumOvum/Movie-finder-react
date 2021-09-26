import React from 'react';
import { Jumbotron } from 'reactstrap';
import Modals from '../Modals/Modals';
import './Jumbotron.css'
import Gradient from 'rgt'

const FirstJumbotron = (props) => {
  return (
    <div>
      <Jumbotron>
      <h1 className="display-3"> <Gradient dir="left-to-right" from="#00DFD8" to="#7300E6"> Movie Finder</Gradient></h1> 

        <p className="lead">This is a simple React App </p>
        <hr className="my-2" />
        <p>To find movies by name...</p>
        <p className="lead">
        <Modals />
        </p>
      </Jumbotron>
    </div>
  );
};

export default FirstJumbotron;