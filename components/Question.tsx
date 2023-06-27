interface QuestionProps {
    text: string
}

export default function Question(props: QuestionProps) {
    return (
        <div className="flex">
            <span className="text-[2.5rem] font-[700]">
                {props.text}
            </span>
        </div>
    )
}