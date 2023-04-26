import { IQuestions } from "./questions.js"

export const getQuestions = async (): Promise<IQuestions[]> => {
    const response = await fetch("https://usc-trivia.azure-api.net/trivia?subscription-key=14f11421203e4f67a099919a3fd941c6")
    if (response.status === 200) {
        return await response.json()
    } else {
        console.log(response.status)
        return [] as IQuestions[]
    }
}