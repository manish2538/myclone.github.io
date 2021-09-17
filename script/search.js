// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms
// Called automatically when JavaScript client library is loaded.

var video = '';
var key = config.API;
function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}
// Called automatically when YouTube API interface is loaded (see line 9).
function onYouTubeApiLoad() {
    gapi.client.setApiKey(key);
}
 
// Called when the search button is clicked in the html code
function search() {
    var query = document.getElementById('query').value;
    // Use the JavaScript client library to create a search.list() API call.
    var request = gapi.client.youtube.search.list({
        part: 'snippet',
        q:query
    });
    // Send the request to the API server, call the onSearchResponse function when the data is returned
    request.execute(onSearchResponse);
}
// Triggered by this line: request.execute(onSearchResponse);
function onSearchResponse(response) {
    // var responseString = JSON.stringify(response, '', 2);
    var responseString = response;
    console.log("responsestring");
    // console.log(responseString.items[0].id.videoId);
    responseString.items.forEach(item => {
        // console.log(item.id.videoId);
        // <iframe width="420" height="315" src="http://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe>
        video = `
        

        <embed src="https://www.youtube.com/embed/${item.id.videoId}?autoplay=1"
        width="560" height="315" title="Everytime You Go Away - Paul Young">
        
        `
        // document.getElementById('videos').append(video);
        document.getElementById('videos').innerHTML = video;
    });






    
    // $("#response").append(video);
}

//item.id.videoId