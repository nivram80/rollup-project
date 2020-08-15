import { room } from './room';

export const app = (): string => {
  let app: string = 'App';
  let roomTitle: string = room();
  return `${roomTitle} ${app}`;
};
