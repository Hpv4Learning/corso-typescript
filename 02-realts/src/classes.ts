class User {
  protected courseCount: number = 1;
  private city?: string;
  constructor(public name: string, private email: string, city?: string) {
    this.city = city;
  }
  private deleteToken() {}
  get getCourseCount(): number {
    return this.courseCount;
  }
  set setCourseCount(courseNumber: number) {
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
