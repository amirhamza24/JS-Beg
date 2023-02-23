// syntactic sugar
class Instructor {
    name;
    designation = 'Web Course Instructor';
    team = 'Web Team';
    location;

    constructor(name, location) {
        this.name = name;
        this.location = location;
    }

    startSupportSession(time) {
        console.log(`Start the support session at ${time}`);
    }

    createQuiz(module) {
        console.log(`Please create quiz for module ${module}`);
    }
}

const amir = new Instructor('Amir', 'Dhaka');
console.log(amir);
amir.startSupportSession('9.00');
amir.createQuiz(60);

const solaiman = new Instructor('Solaiman', 'Rajshahi');
console.log(solaiman);