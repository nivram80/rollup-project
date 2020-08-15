(function () {
    'use strict';

    var room = function () {
        var title = 'Room';
        return title + " and Board";
    };

    var app = function () {
        var app = 'App';
        var roomTitle = room();
        return roomTitle + " " + app;
    };

    var run = function () {
        console.log(app());
    };
    run();

}());
