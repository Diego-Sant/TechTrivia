import questions from "../questions"

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: any, res: any) => {
    const selectedId = +req.query.id

    const selectedQuestions = questions.filter(question => question.id === selectedId)

    // Configurações para pegar a pergunta na URL, exemplo: localhost:3000/api/questoes/1
    if (selectedQuestions.length === 1) {
        const questionSelected = selectedQuestions[0].randomizeAnswers()
        res.status(200).json(questionSelected.toObject())
    } else {
        res.status(204).send()
    }
    
}