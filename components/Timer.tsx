import { CountdownCircleTimer } from "react-countdown-circle-timer"

interface TimerProps {
    duration: number
    timeOver: () => void
}

export default function Timer(props: TimerProps) {
    return (
        <div className="flex text-[2.5rem] my-[20px]">
            <CountdownCircleTimer size={120} isPlaying duration={props.duration} onComplete={props.timeOver} colors={['#BCE596', '#F7B801', '#ED827A', '#ED827A']} colorsTime={[4, 7, 2, 0]}>
                {({remainingTime}) => remainingTime}
            </CountdownCircleTimer>
        </div>
    )
}