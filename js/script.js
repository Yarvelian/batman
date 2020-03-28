"use strict";

$(document).ready(function () {
    let tabItem = $('.tab-item');
    tabItem.on('click', function(event) {
        event.preventDefault();
        let activeContent = $(this).attr('href');

        $('.visible').toggleClass('visible');
        $(activeContent).toggleClass('visible');

        $('.tab-active').toggleClass('tab-active');
        $(this).toggleClass('tab-active');
    });
});