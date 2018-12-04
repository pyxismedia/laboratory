import ReactDOM from 'react-dom';
import React from 'react';
import { App } from './component';

const element = document.createElement('div');
element.id = 'root';
document.body.appendChild(element);

ReactDOM.render(<App />, document.getElementById('root'));