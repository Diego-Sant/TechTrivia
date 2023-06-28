interface QuestionProps {
    text: string
}

export default function Question(props: QuestionProps) {
    return (
        <div className="flex justify-center items-center">
            <span className="text-[1.5rem] mx-10 font-[700]">
                {props.text}
            </span>
        </div>
    )
}