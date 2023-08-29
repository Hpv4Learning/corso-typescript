"use strict";
class User {
    name;
    email;
    courseCount = 1;
    city;
    constructor(name, email, city) {
        this.name = name;
        this.email = email;
        this.city = city;
    }
    deleteToken() { }
    get getCourseCount() {
        return this.courseCount;
    }
    set setCourseCount(courseNumber) {
        if (courseNumber < 0) {
            throw new Error("Invalid course count");
        }
        this.courseCount = courseNumber;
    }
}
class SubUser extends User {
    changeCourseCount() {
        this.courseCount = 10;
    }
}
const user = new User("John", "m@m.it");
console.log(user.getCourseCount);
user.setCourseCount = 10;
