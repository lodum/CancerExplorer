L.Control.DataModus = L.Control.extend({
        options: {
                position: 'topleft',
                title: 'Activates data choice modus'
                //forceSeparateButton: false,
               
				
				
        },

        onAdd: function (map) {
                var className = 'leaflet-datamodus', container;
                
               
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
                            
							Datachoice_Panel.toggle();
							var element = document.getElementById('datachoice_sidebar_list');
							var element2 = document.getElementById('datachoice_sidebar_list_env');
    element.value = "Start";
	element2.value = "Start";
                        }, context);
                return link;
        }
});


L.Control.dataModus = function (options) {
    return new L.Control.DataModus(options);
};

