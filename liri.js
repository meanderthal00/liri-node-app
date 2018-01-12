// code to set the enviroment variables
require("dotenv").config();
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');

// code that imports the keys file followed by the variables for spotify and twitter
var keys = require("./keys.js");

// creating variable to capture the command input
var command = process.argv[2];
var input = process.argv[3];

// setting up switch cases for each command
switch (command) {
    case "my-tweets":
        command = twitter();
        break;
    case "spotify-this-song":
        command = spotify();
        break;
    case "movie-this":
        command = movie();
        break;
    case "do-what-it-says":
        command = yesBoss();
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
                console.log("Tweets " + tweets[i].text);                
                console.log("Timestamp:" + tweets[i].created_at);
                console.log("-------------------");
            }
        }
    });


    // var client = new Twitter(keys.twitter);
    // console.log("Current user is: ", identify);

    // var set = {
    //     screen_name: "node.js"
    // };

    // identify.get("statuses/user_timeline/count 20", set, function (error, tweets, response) {
    //     if (!error) {
    //         console.log("Here are your recent tweets: ", tweets);
    //     }
    // });



    // *node liri.js spotify-this-song "<song name here>"* this command logs the following info to bash: 
    // Artist(s)
    // The song's name
    //  A preview link of the song from Spotify
    // The name of the album that the song is from
    // If no song is provided, then it defaults to "The Sign" by Ace of Base
    // function spotify(){
    //     var spotify = require("node-spotify-api");


    // }

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

    // *node liri do-what-it-says*
    // using 'fs' Node package, liri will take the text inside of random.txt and use it to call a command
    // it should run the spotify command for "I Want it That Way" as follow the text in random.txt



    // *****add a readme.md to the repo describing the project
}