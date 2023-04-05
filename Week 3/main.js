class StudentMark {
    constructor(unit, mark) {
        this.unit = unit
        this.mark = mark
    }
}

class Student {
    constructor(firstName, lastName, marks) {
        this.firstName = firstName
        this.lastName = lastName
        this.marks = marks
    }
    fullName() {
        return `Full Name: ${this.firstName} ${this.lastName}`
    }
    marksAvg() {
        let marksSum = 0
        this.marks.forEach(c => {
            marksSum = marksSum + c.mark
        })
        return marksSum / this.marks.length
    }
}

const student = new Student("John", "Doe", [new StudentMark("science", 4), new StudentMark("math", 5)])

class ResearchStudent extends Student {
    constructor(firstName, lastName, marks, thesis) {
        super(firstName, lastName, marks)
        this.thesis = thesis
    }
    thesisName() {
        return `${this.thesis} by ${this.firstName} ${this.lastName}`
    }
}

const researchStudent = new ResearchStudent("Mark", "Smith", [new StudentMark("science", 7), new StudentMark("math", 7)], "This is a thesis")

console.log(researchStudent.fullName())
console.log(researchStudent.marksAvg())
console.log(researchStudent.thesisName())