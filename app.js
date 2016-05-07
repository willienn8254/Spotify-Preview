    
    var source   = $("#templatewe").html();
    var template = Handlebars.compile(source);


	$('#input').keypress(function(e) {

		var artist=$('#input').val();
        


  
    if(e.which == 13) {
        $('.result').empty();

    	$.getJSON('https://api.spotify.com/v1/search?type=track&query='+artist,function(json){




            $('.result').append(template({datos:json.tracks.items}));

    		

    	});
        $('#input').val("");


    	
}


});









