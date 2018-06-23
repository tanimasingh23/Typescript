class youtube {
    constructor (public title:string, public production:string, public date:string, public category:string, public likes:number, public dislikes:number, public share:boolean, public subscribers:number, public comments:string[], public views:number, public subscribe:boolean){
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
        this.subscribe =subscribe;
    }
    getTitle = () => {
        return `Thank you for watching ${this.title} - ${this.production}`;
    }
    getProduction = () => {
        return this.production;
    }
    getDate = () => {
        return `Published on : ${this.date}`
    }
    getCategory = () => {
        return `Category : ${this.category}`
    }
    getLikes = () => {
        return `This video has ${this.likes} likes.`;
    }
    
    getDislikes = () => {
        return `This video has ${this.dislikes} dislikes.`;
    }

    checkQuality = () => { 
        if (this.likes > this.dislikes) {
            return  ("This video is liked by most of the people.") 
        } else {
            return("This video is not liked by most of the people.") 
        }
    }
    shareVideo = () => {
        if (this.share == true) {
            return `Thank you for sharing this video!`;
        } else {
            return `Please share this video.`;
        }
    }
    getSubscribers = () => {
        return `${this.production} has ${this.subscribers} subscribers.`;
    }
    getComments = () => {
        return this.comments;
    }
    getViews = () => {
        return `This video has ${this.views} views.`;
    }
    checkSubscribe = () => {
        if (this.subscribe == true) {
            return `Thank you for subscribing to our channel!`;
        } else {
            return `Please subscribe to our channel - ${this.subscribe}`;
        }
    }
    getRelatedVideos = () => {
        return `Please watch other videos of our channel.`;
    }
}
let userOne = new youtube("Going slow to Do More","TEDx Talks","20 June 2018","Non-profits & Activism",6789,328,true,78990870,["awesome","very inspiring"],34567,true);
console.log(userOne.getTitle());
console.log(userOne.getDate());
console.log(userOne.getCategory());
console.log(userOne.getViews())
console.log(userOne.getLikes());
console.log(userOne.getDislikes());
console.log("Comments: " + userOne.getComments());
console.log(userOne.getSubscribers());
console.log(userOne.checkQuality());
console.log(userOne.shareVideo());
console.log(userOne.checkSubscribe());
console.log(userOne.getRelatedVideos());