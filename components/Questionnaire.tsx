import QuestionModel from "@/model/question"
import Questions from "./Questions"
import Button from "./Button"

interface QuestionnaireProps {
    question: QuestionModel
    lastQuestion: boolean
    answeredQuestion: (question: QuestionModel) => void
    runOutTime: () => void
}

export default function Questionnaire(props: QuestionnaireProps) {
    function onResponse(index: number) {
        if(props.question.notAnswered) {
            props.answeredQuestion(props.question.answerWith(index))
        }
    }

    return (
        <div className="flex flex-col justify-center items-center h-[100vh]">
            {props.question ? (
                <Questions value={props.question} timeToAnswer={20} onResponse={onResponse} timeOver={props.runOutTime}/>
            ) : (
                false
            )}
            <Button onClick={props.runOutTime} text={props.lastQuestion ? "Finalizar" : "Próxima pergunta"}/>
        </div>
    )
}