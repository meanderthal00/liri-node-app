// code to set the enviroment variables
require("dotenv").config();
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require("request");
var fs = require("fs");
// code that imports the keys file followed by the variables for spotify and twitter
var keys = require("./keys.js");

// creating variable to capture the command input
var command = process.argv[2];
var input = process.argv[3];
var songTitle = "";
var movieTitle = "";

// setting up switch cases for each command
switch (command) {
    case "my-tweets":
        twitter();
        break;
    case "spotify-this-song":
        spotify();
        break;
    case "movie-this":
        movie();
        break;
    case "do-what-it-says":
        asYouWish();
        break;
    default:
        console.log("No command entered");
        break;
}




// Commands needed:

// *node liri.js my-tweets* this command shows your last 20 tweets and when they were created in the terminal window




function twitter() {
    var twitter = require("twitter");
    var client = new Twitter(keys.twitter);
    var params = {
        screen_name: "DummiDev",
        count: 20
    };
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) {
            for (var i = 0; i < tweets.length; i++) {
                //   why does the line below return text as undefined?
                console.log("Tweets: " + tweets[i].text);
                console.log("Timestamp:" + tweets[i].created_at);
                console.log("-------------------");
            }
        }
    });
}
// *node liri.js spotify-this-song "<song name here>"* this command logs the following info to bash: 
// Artist(s)
// The song's name
//  A preview link of the song from Spotify
// The name of the album that the song is from
// If no song is provided, then it defaults to "The Sign" by Ace of Base
// function spotify(){
//     var spotify = require("node-spotify-api");

function spotify() {
    var Spotify = require("node-spotify-api");
    var songInput = process.argv;
    var client = new Spotify(keys.spotify);

    for (var i = 0; i < songInput.length; i++) {
        if (i > 3 && i < songInput.length) {
            songTitle = songTitle + " " + songInput[i];
        } else {
            songTitle += songInput[i]
        }
        // console.log(songInput);
        // console.log("-------------------");

    }


    client.search({
            type: "track",
            query: songInput
        },
        function (error, data) {
            if (error) {
                return console.log("Oops, Error: " + error);
            } else if (error, data) {
                console.log(data);
                console.log("====================");
                console.log("Song Name is: ", songInput);
                console.log("Artist is: ", data.tracks.items [0].album.artist[0].name);
                console.log("Album Name is: ",data.tracks.items[0].album.name);
                console.log("Preview: ",data.tracks.items[0].preview_url);
                console.log("====================");

            }
        });

}





// *node liri.js movie-this "<movie name here>"* This command outputs the following data to bash:
// Title of the movie
// Year released
// IMDB rating of the movie
// Rotten Tomatoes Rating of the movie
// Country where movie was produced
// Language of the movie
// Plot synopsis
// Actors in the movie
// If no movie title is supplied, liri defaults to "Mr.Nobody"

function movie() {
    var request = require("request");
    var movieInput = process.argv;
    


    for (var i = 3; i < movieInput.length; i++){
        if (i >3 && i <movieInput.length) {
            movieTitle = movieTitle + "+" + movieInput[i];
        }
        else{
            movieTitle += movieTitle[i];
        }
    }
    
    
    var queryUrlMovie = "http://www.omdbapi.com/?t=" + movieTitle + "&y=&plot=short&apikey=trilogy";

    request(queryUrlMovie, function(error, response, body){
        if (!error && response.statusCode === 200) {
            // console.log(response);
            console.log("You typed: "+ movieInput);
           console.log("====================");
           console.log("Title: " + JSON.parse(body).Title);
           console.log("Year: " + JSON.parse(body).Year);
           console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
        //    console.log("Rotten Tomatoes Rating: "+ JSON.parse(body).Ratings[0].Value);
           console.log("Country: " + JSON.parse(body).Country);
           console.log("Language: " + JSON.parse(body).Language);
           console.log("Plot: " + JSON.parse(body).Plot);
           console.log("Actors: " + JSON.parse(body).Actors);
           console.log("====================");            
        }
        else {
            console.log("Uh-oh, There was a problem, try again.");
        }
    });
}

// *node liri do-what-it-says*
// using 'fs' Node package, liri will take the text inside of random.txt and use it to call a command
// it should run the spotify command for "I Want it That Way" as follow the text in random.txt



// *****add a readme.md to the repo describing the