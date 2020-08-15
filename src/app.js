import { room } from './room.js';

export const app = () => {
  let app = 'App';
  let roomTitle = room();
  return `${roomTitle} ${app}`;
};
