/**
 * Require configuration
 */
define([], function requireConfig() {
    'use strict';

    /**
    * Require configurations
    * @type {Object}
    */
    require.config({
        deps: [],
        baseUrl: './src/js',
        paths: { // Reference aliases & Paths
            /**
             * 3rd party scripts
             */
            'jquery':           '../vendor/jquery/dist/jquery',
            'matchMedia':       '../vendor/matchMedia/matchMedia',

            /**
             * Modules
             */
            'init':             'modules/init',

            /**
             * Utilities
             */
            'global-var':       'utils/global-var',
            'object-array-util':'utils/object-array',
            'breakpoints-util': 'utils/breakpoints'

},
        shim: { // Shim configurations

        }
    });
});
