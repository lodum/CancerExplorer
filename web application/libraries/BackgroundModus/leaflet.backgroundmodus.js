L.Control.BackgroundModus = L.Control.extend({
        options: {
                position: 'topleft',
                title: 'Activates background info modus'
                //forceSeparateButton: false,
               
				
				
        },

        onAdd: function (map) {
                var className = 'leaflet-backgroundmodus', container;
                
               
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
                            
							background_modus();
							alert('Example works at the moment for Cancer:"Lung Cancer"--> Substances: "Arsenic, Nickel,Air pollution" in combination with the region selection Muenster');
							causeeffectbutton=1;
                        }, context);
                return link;
        }
});


L.Control.backgroundModus = function (options) {
    return new L.Control.BackgroundModus(options);
};


function close_background_modus (){
	background_modus();
	Cause_Effect_Panel.hide();
							alert('Example works at the moment for Cancer:"Lung Cancer"--> Substances: "Arsenic, Nickel,Air pollution" in combination with the region selection Muenster');
							causeeffectbutton=1;
}