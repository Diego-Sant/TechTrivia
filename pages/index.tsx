import Button from "@/components/Button";
import Questionnaire from "@/components/Questionnaire";
import Questions from "@/components/Questions";
import AnswersModel from "@/model/answers";
import QuestionModel from "@/model/question";
import { useEffect, useRef, useState } from "react";


const questionnaire = new QuestionModel(1, "Questãooooooooo", [
  AnswersModel.wrong('Azul'),
  AnswersModel.correct('Preto'),
  AnswersModel.wrong('Verde'),
  AnswersModel.wrong('Amarelo')
])

const BASE_URL = "http://localhost:3000/api"

export default function Home() {
  const [questionsIds, setQuestionIds] = useState<number[]>([])
  const [question, setQuestion] = useState<QuestionModel>(questionnaire)

  async function loadIds() {
    const res = await fetch(`${BASE_URL}/questionario`)
    const questionIds = await res.json()
    console.log(questionIds)
    setQuestionIds(questionIds)
  }

  async function loadQuestion(questionId: number) {
    const res = await fetch(`${BASE_URL}/questoes/${questionId}`)
    const jsontest = await res.json()
    console.log(jsontest.answers)
  }

  useEffect(() => {
    loadIds()
  }, [])

  useEffect(() => {
    questionsIds.length > 0 && loadQuestion(questionsIds[0])
  }, [questionsIds])

  function answeredQuestion(question: QuestionModel) {

  }

  function runOutTime() {

  }

  return (
        <Questionnaire question={question} lastQuestion={false} answeredQuestion={answeredQuestion} runOutTime={runOutTime}/>
  )
}
