import { room } from './room';

export const app = (): string => {
  let app: string = 'App';
  let roomTitle: string = room();
  return `<h1>${roomTitle} ${app}</h1>`;
};
