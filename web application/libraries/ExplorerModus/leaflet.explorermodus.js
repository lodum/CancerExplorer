L.Control.ExplorerModus = L.Control.extend({
        options: {
                position: 'topleft',
                title: 'Activates explorer modus'
                //forceSeparateButton: false,
               
				
				
        },

        onAdd: function (map) {
                var className = 'leaflet-explorermodus', container;
                
               
                        container = L.DomUtil.create('div', 'leaflet-bar');
                
                
                this._createButton(this.options, className, container, map);

                return container;
				
        },
        
        _createButton: function (opts, className, container, fn, context) {
                var link = L.DomUtil.create('a', className, container);
                link.href = '#';
                link.title = opts.title;

                
                
                L.DomEvent
                        
                        .addListener(link, 'click', function(){
                            
							explorer_modus();
                        }, context);
                return link;
        }
});


L.Control.explorerModus = function (options) {
    return new L.Control.ExplorerModus(options);
};

