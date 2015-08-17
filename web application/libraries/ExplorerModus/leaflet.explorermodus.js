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
                          if (document.getElementById("control").hidden == false){
						  
						  document.getElementById("control").hidden = true;
						  document.getElementById("map2").hidden = true;
	
div2.innerHTML ="";

document.getElementById("map").style.height = "80% ";
document.getElementById("map").style.width = "97%";
//show check buttons for map2 in the menues

$("#population_map2").hidden = true;

$("#SIR_check_map2_div2").hidden = true;
$("#CIupper_check_map2_div").hidden = true;
$("#CIlower_check_map2_div").hidden = true;
$("#AQD_check_map2_div2").hidden = true;

map.setView([51.95442, 7.62709],7);
map.invalidateSize();
                          }else{
							document.getElementById("map2").hidden = false;
							explorer_modus();
							 }
                        }, context);
                return link;
        }
});


L.Control.explorerModus = function (options) {
    return new L.Control.ExplorerModus(options);
};

