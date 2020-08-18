import { app } from './components/app';
import { oldFunction } from './components/old';

const run = () => {
  document.body.append(app());
};

run();
