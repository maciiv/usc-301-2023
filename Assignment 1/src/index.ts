import { Trivia } from "./trivia.js"
import { getQuestions } from "./utils.js"

document.querySelector<HTMLButtonElement>("#start")
    ?.addEventListener("click", async function () {
        const participantInput = document.querySelector<HTMLInputElement>("#participant")
        const participant = participantInput?.value
        if (participant !== undefined) {
            this.innerHTML = "Loading..."
            const questions = await getQuestions()
            new Trivia(participant, questions)
        }        
    })