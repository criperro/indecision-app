class Person {
  constructor(name = 'Anon', age=0){
      this.name = name;
      this.age = age;
  }
  getGretting(){
      //return 'Hi, I am ' + this.name;
      return `Hi, I am ${this.name}`;
  }
  getDescription(){
      return `${this.name} is ${this.age} years old.`;
  }

}

class Student extends Person{
  constructor(name,age,major){
    super(name,age);
    this.major = major;
  }
  hasMajor(){
    return !!this.major;
  }
  getDescription(){
    let description = super.getDescription();
    if(this.hasMajor()){
      description += ` Their major is ${this.major}.`;
    }
    return description;
  }
}

class Traveler extends Person{
  constructor(name,age,homeLocation){
    super(name,age);
    this.homeLocation = homeLocation;
  }
  hasHomeLocation(){
    return !!this.homeLocation;
  }
  getDescription(){
    let description = super.getDescription();
    if(this.hasHomeLocation()){
      description += ` I'm visiting from ${this.homeLocation}`;
    }
    return description;
  }
}

const me = new Student('Cristian',29,'Software');
console.log(me.getDescription());

const other = new Person();
console.log(other.getDescription());

const viajero = new Traveler('Cris',29,'Moravia');
console.log(viajero.getDescription());

