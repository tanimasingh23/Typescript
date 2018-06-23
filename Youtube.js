var youtube = /** @class */ (function () {
    function youtube(title, production, date, category, likes, dislikes, share, subscribers, comments, views, subscribe) {
        var _this = this;
        this.title = title;
        this.production = production;
        this.date = date;
        this.category = category;
        this.likes = likes;
        this.dislikes = dislikes;
        this.share = share;
        this.subscribers = subscribers;
        this.comments = comments;
        this.views = views;
        this.subscribe = subscribe;
        this.getTitle = function () {
            return "Thank you for watching " + _this.title + " - " + _this.production;
        };
        this.getProduction = function () {
            return _this.production;
        };
        this.getDate = function () {
            return "Published on : " + _this.date;
        };
        this.getCategory = function () {
            return "Category : " + _this.category;
        };
        this.getLikes = function () {
            return "This video has " + _this.likes + " likes.";
        };
        this.getDislikes = function () {
            return "This video has " + _this.dislikes + " dislikes.";
        };
        this.checkQuality = function () {
            if (_this.likes > _this.dislikes) {
                return ("This video is liked by most of the people.");
            }
            else {
                return ("This video is not liked by most of the people.");
            }
        };
        this.shareVideo = function () {
            if (_this.share == true) {
                return "Thank you for sharing this video!";
            }
            else {
                return "Please share this video.";
            }
        };
        this.getSubscribers = function () {
            return _this.production + " has " + _this.subscribers + " subscribers.";
        };
        this.getComments = function () {
            return _this.comments;
        };
        this.getViews = function () {
            return "This video has " + _this.views + " views.";
        };
        this.checkSubscribe = function () {
            if (_this.subscribe == true) {
                return "Thank you for subscribing to our channel!";
            }
            else {
                return "Please subscribe to our channel - " + _this.subscribe;
            }
        };
        this.getRelatedVideos = function () {
            return "Please watch other videos of our channel.";
        };
        this.title = title;
        this.production = production;
        this.date = date;
        this.category = category;
        this.likes = likes;
        this.dislikes = dislikes;
        this.share = share;
        this.subscribers = subscribers;
        this.comments = comments;
        this.views = views;
        this.subscribe = subscribe;
    }
    return youtube;
}());
var userOne = new youtube("Going slow to Do More", "TEDx Talks", "20 June 2018", "Non-profits & Activism", 6789, 328, true, 78990870, ["awesome", "very inspiring"], 34567, true);
console.log(userOne.getTitle());
console.log(userOne.getDate());
console.log(userOne.getCategory());
console.log(userOne.getViews());
console.log(userOne.getLikes());
console.log(userOne.getDislikes());
console.log("Comments: " + userOne.getComments());
console.log(userOne.getSubscribers());
console.log(userOne.checkQuality());
console.log(userOne.shareVideo());
console.log(userOne.checkSubscribe());
console.log(userOne.getRelatedVideos());
