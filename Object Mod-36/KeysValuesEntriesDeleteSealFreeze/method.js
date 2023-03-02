// create object
// object method access and set property value
const student = {
    name: 'Rakibul Islam',
    money: 5000,
    study: 'Math',
    subjects: ['Calculus', 'Algebra', 'Geometry'],
    
    // object method
    exam : function() {
        //console.log(this.name, 'is participating is the exam.');
        return this.name + 'is participating is the exam.'
    },

    // Calling another method within an object method.
    improveExam : function(subject) {
        this.exam();
        return `${this.name} is taking improvement exam on ${subject}`
    },

    treat : function (amount) {
        this.money = this.money - amount;
        return this.money;
    }

}

// student.exam();
const output = student.exam();
// console.log(output);


const reExam = student.improveExam('Algebra');
// console.log(reExam);

const remaining = student.treat(900);
// console.log((remaining));


// keys, values, entries, delete, seal freeze

const bottle = {
    color: 'Yellow',
    price: 50,
    isCleaned: true,
    capacity: 1,
}

// get a object property, that's mean object a ki ki property ache shudhu seta =>
const keys = Object.keys(bottle);
//console.log(keys);

// get a object property value, that's mean object a property value dekhabe =>
const values = Object.values(bottle);
//console.log(values);

// getting property and property value both by using "entries" 
const pair = Object.entries(bottle);
//console.log(pair);

// if delete any property then use delete keyword, for example
delete bottle.isCleaned;
//console.log(bottle);

// using "seal". eta use korle tar por theke kono property delete ba add kora jabena..
Object.seal(bottle);
// console.log(bottle);

// adding new property
bottle.height = 12;
// console.log(bottle);

// kono property er value change korte hole =>
bottle.price = 1000;
// console.log((bottle));

// using "freeze". eta korle kono property ba value change, delete ba add kichui kora jabena
Object.freeze(bottle);
// console.log((bottle));