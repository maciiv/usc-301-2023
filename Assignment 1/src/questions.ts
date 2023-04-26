export interface IQuestions {
    question: string
    options: IQuestionOptions[]
}

export interface IQuestionOptions {
    option: string
    isCorrect: boolean
}