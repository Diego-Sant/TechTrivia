import { useEffect, useState } from "react"

interface EstatisticsProps {
    value: any
    text: string
    backgroundColor?: string
    fontColor?: string
}

export default function Estatistics(props: EstatisticsProps) {
    const [backgroundColor, setBackgroundColor] = useState<string>("")

    useEffect(() => {
        const value = parseFloat(props.value)
        if (value >= 0 && value <= 59) {
        setBackgroundColor("red")
        } else if (value >= 60 && value <= 70) {
        setBackgroundColor("#F4C430")
        } else if (value >= 71 && value <= 89) {
        setBackgroundColor("green")
        } else {
        setBackgroundColor("blue")
        }
    }, [props.value])

    return (
        <div className="flex flex-col items-center m-[10px]">
            <div className="flex justify-center items-center h-[180px] w-[180px] rounded-[90px] text-[4rem]" style={{backgroundColor: props.backgroundColor ?? backgroundColor, color: props.fontColor ?? '#fff'}}>
                {props.value}
            </div>
            <div className="text-[1.7rem] font-[200]">
                {props.text}
            </div>
        </div>
    )
}