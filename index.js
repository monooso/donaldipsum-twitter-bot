'use strict';

var Donald = require('donaldipsum-api-client');
var Twitter = require('twitter');
var donaldClient;
var twitterClient;

/**
 * Returns a config object for use with the Twitter client.
 * @returns {object}
 */
function getTwitterConfig() {
    return {
        access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
        access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
        consumer_key: process.env.TWITTER_CONSUMER_KEY,
        consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    };
}

/**
 * Initialises the DonaldIpsum and Twitter clients.
 */
function initializeClients() {
    donaldClient = new Donald();
    twitterClient = new Twitter(getTwitterConfig());
}

/**
 * Validates that the given message can be posted to Twitter.
 * @param   {string} message
 * @returns {boolean}
 */
function validateMessage(message) {
    return message.length <= 140;
}

/**
 * Handles a successful call to the DonaldIpsum API.
 * @param {object} result
 */
function handleSuccess(result) {
    var message;

    message = result.content[0];

    if (validateMessage(message)) {
        tweetMessage(message);
    }
}

/**
 * Logs the given error to the console.
 * @param {object} err
 */
function logError(err) {
    console.error(err);
}

/**
 * Logs the given message to the console.
 * @param {string} message
 */
function logMessage(message) {
    console.info(message);
}

/**
 * Handles an unsuccessful call to the DonaldIpsum API.
 * @param {object} err
 */
function handleError(err) {
    logError(err);
}

/**
 * Posts the given message to Twitter.
 * @param {string} message
 */
function tweetMessage(message) {
    twitterClient.post('statuses/update', { status: message },  function (err, tweet, response) {
        if (err) {
            logError(err);
        } else {
            logMessage('Tweeted: ' + tweet.text);
        }
    });
}

/**
 * Retrieve all the best words from the DonaldIpsum API, and post them to Twitter.
 */
function tweetAllTheBestWords() {
    donaldClient.getParagraphs(1).then(handleSuccess).catch(handleError);
}

// Run all the things.
initializeClients();
tweetAllTheBestWords();
