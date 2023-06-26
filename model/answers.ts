export default class AnswersModel {
    #value: string
    #corrects: boolean
    #revealed: boolean

    constructor(value: string, corrects: boolean, revealed = false) {
        this.#value = value
        this.#corrects = corrects
        this.#revealed = revealed
    }

    static correct(value: string) {
        return new AnswersModel(value, true)
    }

    static wrong(value: string) {
        return new AnswersModel(value, false)
    }

    get value() {
        return this.#value
    }

    get correct() {
        return this.#corrects
    }

    get revealed() {
        return this.#revealed
    }

    toObject() {
        return {
            value: this.#value,
            corrects: this.#corrects,
            revealed: this.#revealed
        }
    }
}