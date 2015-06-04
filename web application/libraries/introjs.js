

function introjs (){
  var introguide = introJs();
  // var startbtn   = $('#startdemotour');


introguide.setOptions({
    steps: [
		{
          element: '.navbar-brand',
          intro: 'Welcome to <b>C</b>ancer<b>E</b>xplorer!<br><br>The application allows you to explore cancer relevant epidemiological, environmental data and their cause-effect relationships',
          position: 'right'
        },
		{
          element: 'div.leaflet-top:nth-child(15)',
          intro: 'Here you find the main functions.',
          position: 'right'
        },
		{
          element: 'div.leaflet-top:nth-child(15) > div:nth-child(1)',
          intro: 'Zoom control',
          position: 'right'
        },
        {
          element: 'div.leaflet-top:nth-child(15) > div:nth-child(2)',
          intro: 'Measure tool for distances',
          position: 'right'
        },
        {
          element: 'div.leaflet-bar:nth-child(3)',
          intro: 'Tool to go back to the overview of Westphalen-Lippe municipalities',
          position: 'right'
        },
		{
          element: 'div.leaflet-bar:nth-child(4)',
          intro: 'Explorer view:<br> Opens a second window that allows you to visualize data in a parallel way<br><br><a href="description_explorer.html"       target="_blank" title="Shows you an animation of the function">Demo</a>',
          position: 'right'
        },
		{
          element: 'div.leaflet-bar:nth-child(5)',
          intro: 'Background information:<br> Allows you to explore cancer cause-effect information within selected municipalities<br><br><a href="description_background.html""       target="_blank" title="Shows you an animation of the function">Demo</a>',
          position: 'right'
        },
		{
          element: 'div.leaflet-bar:nth-child(6)',
          intro: 'Data:<br> Allows you to explore epidemiological, environmental datasets and linked information<br><br><a href="description_data.html""       target="_blank" title="Shows you an animation of the function">Demo</a>',
          position: 'right'
        },
		{
          element: 'div.leaflet-bottom:nth-child(17)',
          intro: 'Layer control to change background layer (e.g. satellite images) or overlays (e.g. air quality data))',
          position: 'right'
        },
        
        
        {
          element: 'div.leaflet-control-legend:nth-child(2)',
          intro: 'Legend of the visualized data',
          position: 'bottom'
        }
    ]
});
introguide.start();
}





