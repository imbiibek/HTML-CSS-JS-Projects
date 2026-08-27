
let tweet = prompt('Write your tweet')
const tweetLength = tweet.length;
const charLeft = 140 - (tweetLength)
console.log("You have written " + tweetLength + " characters, you have " + charLeft + " characters left ");
