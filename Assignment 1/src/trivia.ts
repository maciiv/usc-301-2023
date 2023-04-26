import { IQuestions } from "./questions.js";

interface ITrivia {
    participant: string
    questions: IQuestions[]
    root: HTMLDivElement
    startDate: number
    index: number
    score: number
}

export class Trivia implements ITrivia {
    participant: string
    questions: IQuestions[]
    root: HTMLDivElement
    startDate = Date.now()
    index = 0
    score = 0

    constructor (participant: string, questions: IQuestions[]) {
        this.participant = participant
        this.questions = questions
        const root = document.querySelector<HTMLDivElement>("#root")
        if (root !== null) {
            this.root = root
        } else {
            this.root = document.createElement("div")
            this.root.id = "root"
            this.root.classList.add("row")
            document.querySelector(".container")?.appendChild(this.root)
        }
        this.root.innerHTML = ""
        if (this.questions.length === 0) {
            this.renderFinish()
        } else {
            this.renderQuestion()
        }
    }

    renderQuestion() {
        this.root.innerHTML = `<div class="col-lg-12 col-md-12 col-sm-12 mt-5 text-center">
                                    <h4>${this.questions[this.index].question}</h4>
                                    <div class="row">
                                        ${this.questions[this.index].options.map(o => {
                                            return `<div class="col-lg-6 col-md-6 col-sm-12 mt-5 d-flex">
                                                        <button class="btn btn-primary mx-auto w-75 ${o.isCorrect}">${o.option}</button>
                                                    </div>`
                                        })}
                                    </div>
                                </div>`
        this.root.querySelectorAll(".d-flex").forEach(t => t.nextSibling?.remove())
        this.root.querySelectorAll("button")
            .forEach(o => {
                o.addEventListener("click", () => {
                    this.nextQuestion(o.classList.contains("true"))
                })
            })
    }

    renderFinish() {
        this.root.innerHTML = ""
        this.root.innerHTML = `<div class="col-lg-12 col-md-12 col-sm-12 mt-5 text-center">
                                    <h4>${this.participant} your score was <span class="text-success">${this.score}</span></h4>
                                    <p>It took you ${this.convertTime()} seconds to complete the trivia</p>
                                </div>`
    }

    nextQuestion(isCorrect: boolean) {
        this.score = isCorrect ? this.score + 1 : this.score
        if (this.questions.length - 1 > this.index) {
            this.index = this.index + 1
            this.renderQuestion()
        } else {
            this.renderFinish()
        }
    }

    convertTime() {
        const finishDate = Date.now()
        return Math.round(finishDate / 1000) - Math.round(this.startDate / 1000)
    }
}