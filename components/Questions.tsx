import QuestionModel from "@/model/question";
import Question from "./Question";
import Answer from "./Answer";
import Timer from "./Timer";

const options = [
    {value: 'a', backgroundColor: "#13293D"},
    {value: 'b', backgroundColor: "#006494"},
    {value: 'c', backgroundColor: "#247BA0"},
    {value: 'd', backgroundColor: "#1B98E0"},
]

interface QuestionsProps {
    value: QuestionModel
    timeToAnswer?: number
    onResponse: (index: number) => void
    timeOver: () => void
}

export default function Questions(props: QuestionsProps) {
    const question = props.value

    function renderAnswers() {
        return question.answers.map((answer, i) => {
            return <Answer key={i} value={answer} index={i} options={options[i].value} backgroundColor={options[i].backgroundColor} onResponse={props.onResponse} />
        })
    }

    return (
        <div className="flex flex-col items-center">
            <Question text={question.question} />
            <Timer duration={props.timeToAnswer ?? 15} timeOver={props.timeOver} />
            {renderAnswers()}
        </div>
    )
}