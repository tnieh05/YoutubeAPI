$(function(){

	//find all thumbnails from search results 
	function getResults(query){
	
		var url = "https://www.googleapis.com/youtube/v3/search"
		var params = {
			"part": "snippet",
			"key": "AIzaSyAKEItx_BI0ktzE2o1-kV7Ho1wSZnRp_Pw",
			"q": query
		}


		$.getJSON(url, params, function(data){
			
			for(var i = 0; i < data.items.length; i++){
				var videoSnippet =  data.items[i].snippet.thumbnails.default.url;
				var embedVideo = data.items[i].id.videoId;
				var videoTitle 	 = 	data.items[i].snippet.title;
				showResults(embedVideo, videoTitle);
				
			}

			console.log(data);

		})


	};


function showResults(code, title){
	$("ul").append(
		"<iframe src='http://www.youtube.com/embed/" + code + "'" +  "width='560' height='315'frameborder='0' allowfullscreen>" + "</iframe>" +
		"<li>" + "<p>" + title + "</p>" + "</li>"
		
	)

}

$("#search-term").on("click", "#submitButton", function(){
	$("ul").empty();
	getResults($("#query").val());
})



});