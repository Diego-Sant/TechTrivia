import questions from "../questions"

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: any, res: any) => {
    const selectedId = +req.query.id

    const selectedQuestions = questions.filter(question => question.id === selectedId)

    if (selectedQuestions.length === 1) {
        const questionSelected = selectedQuestions[0]
        res.status(200).json(questionSelected.toObject())
    } else {
        res.status(204).send()
    }
    
}