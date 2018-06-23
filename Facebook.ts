class facebook{
    public firstname:string;
    public lastname:string;
    public birthday:string;
    gender:string;
    email:string;
    contactNumber:number;
    work:string[];
    education:string[];
    currentCity:string;
    homeTown:string;
    public friendlist:string[];

    constructor(firstname:string, lastname:string, birthday:string, gender:string, email:string, contactNumber:number, work:string[], education:string[], currentCity:string, homeTown:string, friendlist?:string[]){
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

    getName = () => {
        let fullName:string = this.firstname.concat(" ",this.lastname);
        return fullName;
    }
    getBirthday = () => {
        return this.birthday;
    }
    getAge = (birDate: any) => {
        let currentDate = new Date();
        let birthDate:Date = new Date(birDate);
        let age = currentDate.getFullYear() - birthDate.getFullYear();
        return age;
    }
    getGender = () => {
        return this.gender;
    }
    getEmail = () => {
        return this.email;
    }
    getContactNumber = () => {
        return this.contactNumber;
    }
    getWork = () => {
        return this.work;
    }
    getEducation = () => {
        return this.education;
    }
    getCurrentCity = () => {
        return this.currentCity;
     }
    getHomeTown = () => {
        return this.homeTown;
    }
    getFriends = () => {
        return this.friendlist;
    }
    
}

let firstUser = new facebook("Tanima","Singh","1992-05-23","Female","xyz@gmail.com",9876543210,["HCL Tech Ltd","Aircel"],["lingayas","MVN"],"Faridabad","Kanpur",["Anu","Priya"]);
console.log("BASIC INFO:")
console.log("Full Name- "+ firstUser.getName())
console.log("Birthday- " + firstUser.getBirthday())
console.log("Age- " + firstUser.getAge(firstUser.getBirthday()) + " years")
console.log("Gender- " + firstUser.getGender())
console.log("CONTACT INFO: ")
console.log("Email address- " + firstUser.getEmail())
console.log("Mobile Number- " + firstUser.getContactNumber())
console.log("EDUCATION: " + firstUser.getEducation())
console.log("WORK: " + firstUser.getWork())
console.log("PLACES YOU'VE LIVED: ")
console.log("Current City- " + firstUser.getCurrentCity())
console.log("Home Town- " + firstUser.getHomeTown())
console.log("FRIENDS- " + firstUser.getFriends())
