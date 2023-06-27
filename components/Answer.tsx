import AnswersModel from "@/model/answers"

interface AnswerProps {
    value: AnswersModel
    index: number
    options: string
    backgroundColor: string
    onResponse: (index: number) => void
}

export default function Answer(props: AnswerProps) {
    const answer = props.value

    return (
        <div onClick={() => props.onResponse(props.index)} className="flex h-[100px] m-[10px] min-w-[500px] w-[80%] cursor-pointer">
            <div className="flex flex-1 relative">
                {!answer.revealed ? (
                <div className="flex absolute items-center h-[100%] w-[100%] rounded-[12px] p-[15px] bg-white">
                    <div className="flex justify-center items-center h-[40px] w-[40px] rounded-[20px] text-[1.3rem] font-bold mr-[20px]" style={{backgroundColor: props.backgroundColor}}>
                        {props.options}
                    </div>
                    <div className="text-[1.3rem] font-[500] text-[#141414]">
                        {answer.value}
                    </div>
                </div>
                ): (
                <div className="flex absolute h-[100%] w-[100%]"> 
                    {answer.correct ? (
                        <div className="flex flex-col flex-1 justify-center items-center rounded-[12px] bg-[#2BAA6D]">
                            <div className="text-[1rem]">
                                Resposta certa:
                            </div>
                            <div className="text-[1.3rem] font-bold">
                                {answer.value}
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col flex-1 justify-center items-center rounded-[12px] bg-[#E44A4C]">
                            <div className="text-[1rem]">
                                Errado:
                            </div>
                            <div className="text-[1.3rem] font-bold">
                                {answer.value}
                            </div>
                        </div>
                    )}
                </div>
                )}
            </div>
        </div>
    )
}