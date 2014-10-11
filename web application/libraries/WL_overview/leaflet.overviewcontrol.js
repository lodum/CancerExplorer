L.Control.OverviewControl = L.Control.extend({
        options: {
                position: 'topleft',
                title: 'Shows you an overview of municipalities of Westphalen-Lippe'
                //forceSeparateButton: false,
               
				
				
        },

        onAdd: function (map) {
                var className = 'leaflet-control-overview', container;
                
               
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
                            
							get_overview ()
                        }, context);
                return link;
        }
});


L.Control.overviewControl = function (options) {
    return new L.Control.OverviewControl(options);
};

