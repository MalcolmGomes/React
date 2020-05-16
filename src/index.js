import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import { Tutorial } from './tutorial.js'
import { Room } from './room.js'
import { Reddit } from './reddit.js'
import { Counter } from './counter.js'

ReactDOM.render(
  <BrowserRouter>
  <Tutorial />
  <Room />
  <Reddit />
  <Counter />
  </BrowserRouter>, 
  document.querySelector('#root')
);