// clases ----> plantillas de objetos 


class User {
    constructor(name, age, job) {
        this.userName = name;
        this.age = age;
        this.ocupation = job;
    }

    getProps(){
        console.log(this.userName);
        console.log(this.age);
        console.log(this.ocupation);
    }
}




const joshua = new User('joshua', 17, 'developer');

joshua.age = 25;
joshua.ocupation = 'soccer player'
joshua.getProps();


