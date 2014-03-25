
requirejs.config({
    paths: {
        'backbone':     'https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min',
        'underscore':   'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.6.0/underscore-min',
        'jquery':       'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min',
        'openlayers':   '../lib/ol'
    },
    shim: {
        'backbone': {
            deps:   ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'openlayers': {
            exports: 'openlayers'
        }
    }
})

define( [ 'backbone', 'olmap' , 'openlayers' ], function(Backbone, olmap) {
    //all loaded, display the map
    var map = new olmap()
    map.render()
})

