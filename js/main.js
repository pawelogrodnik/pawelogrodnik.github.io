'use strict'

$(document).ready(() => {
    const flipButtons = $('.flip-btn');
    const exitButtons = $('.exit-btn');

    flipButtons.on('click', (e) => {
        console.log(e);
        flipButtons.closest('.content').removeClass('flipped');
        $(e.target).closest('.content').addClass('flipped');
    })
    exitButtons.on('click', (e) => {
        console.log(e);
        
        $(e.target).closest('.content').removeClass('flipped');
    })

})
