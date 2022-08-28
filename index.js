import readline from 'readline-sync';

class Person {
    constructor(name, ID, email) {
        this.name = name;
        this.ID = ID,
        this.email = email;
    }
}

// On load, enter manager then team manager.
// then prompt for engineer or associaate or finish


class Manager extends Person {
    constructor(name, ID, email, number) {
        super(name, ID, email);
        this.number = number;
    }
}

class Engineer extends Person {
    constructor(name, ID, email, gitHub) {
        super(name, ID, email);
        this.gitHub = gitHub;
    }
}

class Intern extends Person {
    constructor(name, ID, email, school) {
        super(name, ID, email);
        this.school = school;
    }
}