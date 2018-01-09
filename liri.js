// code to set the enviroment variables
require("dotenv").config();

// code that imports the keys file followed by the variables for spotify and twitter



// Commands needed:

// *node liri.js my-tweets* this command shows your last 20 tweets and when they were created in the terminal window


// *node liri.js spotify-this-song "<song name here>"* this command logs the following info to bash: 
    // Artist(s)
    // The song's name
    //  A preview link of the song from Spotify
    // The name of the album that the song is from
    // If no song is provided, then it defaults to "The Sign" by Ace of Base


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