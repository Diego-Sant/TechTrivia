import { randomize } from "@/functions/arrays"
import AnswersModel from "./answers"

export default class QuestionModel {
    #id: number
    #question: string
    #answers: AnswersModel[]
    #correct: boolean
    //#answered: boolean

    constructor(id: number, question: string, answers: AnswersModel[], correct = false) {
        this.#id = id
        this.#question = question
        this.#answers = answers
        this.#correct = correct
    }

    get id() {
        return this.#id
    }

    get question() {
        return this.#question
    }

    get answers() {
        return this.#answers
    }

    get correct() {
        return this.#correct
    }

    // Se uma das respostas ficar revealed, então retornará true
    get answered() {
        for (let answer of this.#answers) {
            if (answer.revealed) return true
        }

        return false
    }

    get notAnswered() {
        return !this.answered
    }

    answerWith(index: number): QuestionModel {
        // Lógica para identificar se o usuário escolheu a resposta certa, caso não, irá mostrar qual seria
        const corrected = this.#answers[index]?.correct
        const answered = this.#answers.map((answer, i) => {
            const selectedAnswer = index === i
            const shouldReveal = selectedAnswer || answer.correct // Caso retire o answer.correct e o corrected, não irá mostrar a resposta certa
            return shouldReveal ? answer.revealAnswer() : answer
        })

        return new QuestionModel(this.#id, this.#question, answered, corrected)
    }

    // Randomizar a ordem de resposta
    randomizeAnswers(): QuestionModel {
        let answersRandomized = randomize(this.#answers)
        return new QuestionModel(this.#id, this.#question, answersRandomized, this.#correct)
    }

    // Configurações que irão aparecer no json de cada questão
    toObject() {
        return {
            id: this.#id,
            answered: this.answered,
            correct: this.#correct,
            question: this.#question,
            answers: this.#answers.map(res => res.toObject())
        }
    }
}