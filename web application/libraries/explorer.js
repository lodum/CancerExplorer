function explorer_modus (){

document.getElementById("map").style.width = "42%";
document.getElementById("map").style.float = "left";
//document.getElementById("container_main").style.width = "40% ";
//document.getElementById("map2").style.width = "40% ";
document.getElementById("map2").style.width = "42% ";
document.getElementById("map2").style.height = "80% ";


//alert(map.getCenter());

// However- invalidateSize()- it forces to load the tiles- why? has to be found out!

map2.setView([51.95442, 7.62709],7);
map.invalidateSize();
map.setView([51.95442, 7.62709],7);
map2.invalidateSize();





document.getElementById("control").hidden = false;

	map.sync(map2);
		map2.sync(map);	

}