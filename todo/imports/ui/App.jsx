import React from 'react';
import { Food } from './Food.jsx';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';
import {Names} from './Names';

export const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    <Hello/>
    <Info/>
    <Names/>
    <Food/>
  </div>
);
