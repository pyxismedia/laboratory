import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from './component';

const elem = document.createElement('div');
elem.id = 'root';
document.body.appendChild(elem);

ReactDOM.render(<Component />, document.getElementById('root'));
