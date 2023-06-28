import Button from "@/components/Button"
import Estatistics from "@/components/Estatistics"
import { useRouter } from "next/router"

export default function Resultado() {
    const router = useRouter()

    const total = router.query.total ? +router.query.total : 0
    const correct = router.query.corretos ? +router.query.corretos : 0
    const correctPercent = Math.round((correct / total) * 100)

    return (
        <div className="flex flex-col justify-center items-center h-[100vh] text-[2rem]">
            <h1 className="font-[700] mb-3">Resultado final</h1>
            <div className="flex">
                <Estatistics value={total} text={"Perguntas"} backgroundColor="#080b6c" />
                <Estatistics value={correct} text={"Certas"} backgroundColor="#0229bf" />
                <Estatistics value={`${correctPercent}%`} text={"Percentual"} />
            </div>
            <Button href="/" text="Tentar novamente" />
        </div>
    )
}