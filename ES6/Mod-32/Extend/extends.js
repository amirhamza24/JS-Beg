class TeamMember {
    name;
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }

    provideFeedback() {
        console.log(`${this.name} thank you for your feedback`);
    }
}


class Instructor extends TeamMember {
    designation = 'Web Course Instructor';
    team = 'Web Team';

    constructor(name, location) {
        super(name, location);
    }

    startSupportSession(time) {
        console.log(`Start the support session at ${time}`);
    }

    createQuiz(module) {
        console.log(`Please create quiz for module ${module}`);
    }
    provideFeedback() {
        console.log(`${this.name} thank you for your feedback`);
    }
}

class Developer extends TeamMember {
    designation = 'Web Course Instructor';
    team = 'Web Team';
    tech;

    constructor(name, location, tech) {
        super(name, location);
        this.tech = tech;
    }

    developFeature(feature) {
        console.log(`Please Develop the ${feature}`);
    }

    realese(version) {
        console.log(`Please realse the version ${version}`);
    }
}

class jobPlacement extends TeamMember {
    designation = 'Job placement Commando';
    team = 'Job placenment Team';
    region;

    constructor(name, location, region) {
        super(name, location);
        this.region = tech;
    }

    provideResume(feature) {
        console.log(`Please Develop the ${feature}`);
    }

    prepareStudent(version) {
        console.log(`Please realse the version ${version}`);
    }
}


const naamNai = new Developer('Rakib', 'Dhaka', 'UiUx');
console.log(naamNai);
naamNai.provideFeedback();

const anotherNaam = new Developer('Shojib', 'Rajshahi', 'UiUx');
console.log(anotherNaam);