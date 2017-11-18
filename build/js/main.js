'use strict';

$(document).ready(function () {
    var flipButtons = $('.flip-btn');
    var exitButtons = $('.exit-btn');

    flipButtons.on('click', function (e) {
        console.log(e);
        $(e.target).closest('.content').addClass('flipped');
    });
    exitButtons.on('click', function (e) {
        console.log(e);

        $(e.target).closest('.content').removeClass('flipped');
    });
});