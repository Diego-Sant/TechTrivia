import Questionnaire from "@/components/Questionnaire";
import QuestionModel from "@/model/question";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const BASE_URL = "http://localhost:3000/api"

export default function Home() {
  const router = useRouter()

  const [questionsIds, setQuestionIds] = useState<number[]>([])
  const [question, setQuestion] = useState<QuestionModel>()
  const [correctQuestions, setCorrectQuestions] = useState<number>(0)

  async function loadIds() {
    const res = await fetch(`${BASE_URL}/questionario`)
    const questionIds = await res.json()
    console.log(questionIds)
    setQuestionIds(questionIds)
  }

  async function loadQuestion(questionId: number) {
    const res = await fetch(`${BASE_URL}/questoes/${questionId}`)
    const json = await res.json()
    const newQuestion = QuestionModel.createUsingObject(json)
    setQuestion(newQuestion)
  }

  useEffect(() => {
    loadIds()
  }, [])

  useEffect(() => {
    questionsIds.length > 0 && loadQuestion(questionsIds[0])
  }, [questionsIds])

  function answeredQuestion(answeredQuestion: QuestionModel) {
    setQuestion(answeredQuestion)
    const correct = answeredQuestion.correct
    setCorrectQuestions(correctQuestions + (correct ? 1 : 0))
  }

  function nextQuestionId() {
    if(question) {
      const nextIndex = questionsIds.indexOf(question.id) + 1
      return questionsIds[nextIndex]
    }
  }

  function runOutTime() {
    const nextId = nextQuestionId()
    nextId ? goNextQuestion(nextId) : ending()
  }

  function goNextQuestion(nextId: number) {
    loadQuestion(nextId)
  }

  function ending() {
    router.push({
      pathname: "/resultado",
      query: {
        total: questionsIds.length,
        corretos: correctQuestions
      }
    })
  }

  return (
        <>
          {question && (
            <Questionnaire question={question} lastQuestion={nextQuestionId() === undefined} answeredQuestion={answeredQuestion} runOutTime={runOutTime}/>
          )}
        </>
  )
}
