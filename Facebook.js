var facebook = /** @class */ (function () {
    function facebook(firstname, lastname, birthday, gender, email, contactNumber, work, education, currentCity, homeTown, friendlist) {
        var _this = this;
        this.getName = function () {
            var fullName = _this.firstname.concat(" ", _this.lastname);
            return fullName;
        };
        this.getBirthday = function () {
            return _this.birthday;
        };
        this.getAge = function (birDate) {
            var currentDate = new Date();
            var birthDate = new Date(birDate);
            var age = currentDate.getFullYear() - birthDate.getFullYear();
            return age;
        };
        this.getGender = function () {
            return _this.gender;
        };
        this.getEmail = function () {
            return _this.email;
        };
        this.getContactNumber = function () {
            return _this.contactNumber;
        };
        this.getWork = function () {
            return _this.work;
        };
        this.getEducation = function () {
            return _this.education;
        };
        this.getCurrentCity = function () {
            return _this.currentCity;
        };
        this.getHomeTown = function () {
            return _this.homeTown;
        };
        this.getFriends = function () {
            return _this.friendlist;
        };
        this.firstname = firstname;
        this.lastname = lastname;
        this.birthday = birthday;
        this.gender = gender;
        this.email = email;
        this.contactNumber = contactNumber;
        this.work = work;
        this.education = education;
        this.currentCity = currentCity;
        this.homeTown = homeTown;
        this.friendlist = friendlist;
    }
    return facebook;
}());
var firstUser = new facebook("Tanima", "Singh", "1992-05-23", "Female", "xyz@gmail.com", 9876543210, ["HCL Tech Ltd", "Aircel"], ["lingayas", "MVN"], "Faridabad", "Kanpur", ["Anu", "Priya"]);
console.log("BASIC INFO:");
console.log("Full Name- " + firstUser.getName());
console.log("Birthday- " + firstUser.getBirthday());
console.log("Age- " + firstUser.getAge(firstUser.getBirthday()) + " years");
console.log("Gender- " + firstUser.getGender());
console.log("CONTACT INFO: ");
console.log("Email address- " + firstUser.getEmail());
console.log("Mobile Number- " + firstUser.getContactNumber());
console.log("EDUCATION: " + firstUser.getEducation());
console.log("WORK: " + firstUser.getWork());
console.log("PLACES YOU'VE LIVED: ");
console.log("Current City- " + firstUser.getCurrentCity());
console.log("Home Town- " + firstUser.getHomeTown());
console.log("FRIENDS- " + firstUser.getFriends());
