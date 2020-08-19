import { app } from './components/app';
import { oldFunction } from './components/old';
import './app.css';

const run = () => {
  let appEl = document.createElement('div');
  appEl.innerHTML = app();
  document.body.appendChild(appEl);
};

run();
