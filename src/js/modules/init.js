define([
    'jquery'
],
/**
 * initialize module
 *
 * For default page init (desktop, mobile) and ajax:complete init calls 
 * This module centralizes all init's from other modules to keep them maintanable
 */
function initModule(
    $
) {

   
    // module settings
    var settings = {        
    };



    /**
     * init function
     * contains page init functions from all modules
     */
    function init() {


    };
    init(); // start page init



    return {
        init:init
    };
});
