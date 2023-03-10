// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Twitter{
    struct Tweet{
        uint tweetId;
        address owner;
        uint[] replies;
        uint likes;
        string text;
        uint createdAt;
        bool reply;
        uint repliedTo;
    }

    uint private lastTweetId;
    Tweet[] private tweets;

    constructor(){
        lastTweetId = 0;
    }

    event CreateTweet(uint tweetId, address sender, string text);
    event LikeTweet(uint tweetId, address sender);
    event DeleteTweet(uint tweetId, address sender);

    modifier exists(uint tweetId){
        require(tweetId < lastTweetId, "The specified tweet doesn't exist");
        _;
    }

    modifier onlyOwner(uint tweetId){
        require(tweets[tweetId].owner == msg.sender, "Not allowed");
        _;
    }

    function createTweet(string memory text, bool reply, uint repliedTo) public returns(uint){
        Tweet storage tweet = tweets.push();

        tweet.tweetId = lastTweetId;
        tweet.owner = msg.sender;
        tweet.text = text;
        tweet.createdAt = block.timestamp;
        tweet.reply = reply;
        tweet.repliedTo = repliedTo;

        if(reply == true && repliedTo >= 0){
            tweets[repliedTo].replies.push(lastTweetId);
        }

        emit CreateTweet({ tweetId: lastTweetId, sender: msg.sender, text: text});
        lastTweetId += 1;
        return lastTweetId - 1;
    }

    function getTweet(uint tweetId) public view exists(tweetId)
        returns(uint, address, uint[] memory, uint, string memory, uint, bool, uint) {
        Tweet storage tweet = tweets[tweetId];
        return (
            tweet.tweetId,
            tweet.owner,
            tweet.replies,
            tweet.likes,
            tweet.text,
            tweet.createdAt,
            tweet.reply,
            tweet.repliedTo
        );
    }

    function getReplies(uint tweetId) public view exists(tweetId) returns(uint[] memory) {
        return tweets[tweetId].replies;
    }

    function deleteTweet(uint tweetId) public exists(tweetId) onlyOwner(tweetId) returns(bool) {
        delete tweets[tweetId];
        emit DeleteTweet({ tweetId: tweetId, sender: msg.sender });
        return true;
    }

    function getTweets () public view returns(Tweet[] memory) {
        return tweets;
    }

    function getTotalTweet () public view returns(uint) {
        return tweets.length;
    }
}