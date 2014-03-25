/*
* We wrap the ol map in a backbone view
*/

define(['backbone'], function(Backbone) {
  return Backbone.View.extend({        
        render: function() {
          this.map = this.loadMap()
        },
        loadMap: function() {
          var layer = new ol.layer.Tile({
                          source: new ol.source.OSM()
                      })
          return new ol.Map({
            layers:   [layer],
            renderer: 'canvas',
            target:   'map',
            view:     new ol.View2D({
              center: ol.proj.transform(
                  [-73.979378, 40.702222], 'EPSG:4326', 'EPSG:3857'),
              zoom: 9
            })
          })
        }
    })
})
