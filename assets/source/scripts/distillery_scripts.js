// Add all plugins at the top
$ = window.jQuery;
_ = require('lodash');
attachFastClick = require('fastclick');  // requires utils.js
// classie = require('desandro-classie');

// Create 'Distillery' in the global namespace,
// and wrap all modules in the carbon namespace
D = {
    Utils: require('./utils/utils.js'),
    SmoothScroll : require('./toolbox/smoothscroll.js'),
    // ContentOutput : require('./modules/content-output.js')
};

function initializeDistillery() {

    // Initialize Modules
    D.Utils.init();
    D.SmoothScroll.init();
    // D.ContentOutput.init();
}

// Uncomment for  < IE10 Support
$(document).ready(function() {
initializeDistillery();
});

window.D = D;
