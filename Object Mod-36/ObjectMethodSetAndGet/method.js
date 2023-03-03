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
