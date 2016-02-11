define([
], function globalVar(
) {
    'use strict';


    // globally used elements
    var $el = {
        //$body: $j('body'); // example
    }



    // global settings
    var settings = {
    };



    // values taken from: http://sprawledoctopus.com/easing/
    var animation = {
        swiftOut:   [.4, 0, 1, 1],
        swiftIn:    [.55, 0, .55, .2],
        swiftInOut: [.35, 0, .25, 1],

        speed: {
            slow: 650,
            medium: 500,
            normal: 250,
            fast: 150
        }
    };



    return {
        $el: $el,
        settings: settings,
        animation: animation
    };

});
