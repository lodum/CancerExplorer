

function doDL(s){
    function dataUrl(data) {return "data:x-application/text," + escape(data);}
    window.open(dataUrl(s));
}

  function download_csv () {
	//alert('xi');
        var csv = $("#jsonmerge_sir_table").table2CSV({
            delivery: 'download'
        });
        window.open('data:text/csv;charset=UTF-8,' + encodeURIComponent(csv));
    }



jQuery.fn.table2CSV = function(options) {
    var options = jQuery.extend({
        separator: ',',
        header: [],
        delivery: 'popup' // popup, value
    },
    options);

    var csvData = [];
    var headerArr = [];
    var el = this;

    //header
    var numCols = options.header.length;
    var tmpRow = []; // construct header avalible array

    if (numCols > 0) {
        for (var i = 0; i < numCols; i++) {
            tmpRow[tmpRow.length] = formatData(options.header[i]);
        }
    } else {
        $(el).filter(':visible').find('th').each(function() {
            if ($(this).css('display') != 'none') tmpRow[tmpRow.length] = formatData($(this).html());
        });
    }

    row2CSV(tmpRow);

    // actual data
    $(el).find('tr').each(function() {
        var tmpRow = [];
        $(this).filter(':visible').find('td').each(function() {
            if ($(this).css('display') != 'none') tmpRow[tmpRow.length] = formatData($(this).html());
        });
        row2CSV(tmpRow);
    });
    if (options.delivery == 'popup') {
        var mydata = csvData.join('\n');
        return popup(mydata);
    } else {
        var mydata = csvData.join('\n');
        return mydata;
    }

    function row2CSV(tmpRow) {
        var tmp = tmpRow.join('') // to remove any blank rows
        // alert(tmp);
        if (tmpRow.length > 0 && tmp != '') {
            var mystr = tmpRow.join(options.separator);
            csvData[csvData.length] = mystr;
        }
    }
    function formatData(input) {
        // replace " with “
        var regexp = new RegExp(/["]/g);
        var output = input.replace(regexp, "“");
        //HTML
        var regexp = new RegExp(/\<[^\<]+\>/g);
        var output = output.replace(regexp, "");
        if (output == "") return '';
        return '"' + output + '"';
    }
    function popup(data) {
        var generator = window.open('', 'csv', 'height=400,width=600');
		 function download_csv () {
	//alert('xi');
        var csv = $("#jsonmerge_sir_table").table2CSV({
            delivery: 'download'
        });
        window.open('data:text/csv;charset=UTF-8,' + encodeURIComponent(csv));
    }
        generator.document.write('<html><head><title>CSV</title>');
        generator.document.write('</head><body >');
        generator.document.write('<textArea cols=70 rows=15 wrap="off" id="example1" >');
        generator.document.write(data);
        generator.document.write('</textArea>');
		var text=generator.document.getElementById("example1").value;
		//generator.document.write('<div id="csvdiv"></div>');
		//generator.document.write('<input value="Export as CSV 3" type="button" id="exportcsv" onclick="download_csv();" >');
        generator.document.write('</body></html>');
		//alert(generator.document.getElementById("example1").value);
		
		var data_csv=generator.document.getElementById("example1").value;
		
			

		
        generator.document.close();
        return true;


  
		
		
    }
	
	
};
/*		
			 Downloadify.create('downloadify',{
    filename: function(){
      return generator.document.getElementById('filename').value;
    },
    data: function(){ 
      return generator.document.getElementById('output_content').value;
    },
    onComplete: function(){ 
      alert('Your File Has Been Saved!'); 
    },
    onCancel: function(){ 
      alert('You have cancelled the saving of this file.');
    },
    onError: function(){ 
      alert('You must put something in the File Contents or there will be nothing to save!'); 
    },
    transparent: false,
    swf: 'libraries/Canvas2image/media/downloadify.swf',
    downloadImage: 'libraries/Canvas2image/images/download.png',
    width: 100,
    height: 30,
    transparent: true,
    append: false
  });
		
*/		




