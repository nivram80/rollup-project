(function () {
  'use strict';

  const room = () => {
    const title = 'Room';
    return `${title} and Board`;
  };

  const app = () => {
    let app = 'App';
    let roomTitle = room();
    return `${roomTitle} ${app}`;
  };

  const run = () => {
    console.log(app());
  };

  run();

}());
