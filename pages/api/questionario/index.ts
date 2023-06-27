import { randomize } from "@/functions/arrays"
import questions from "../questions"

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: any, res: any) => {
    const ids = questions.map(question => question.id);
    res.status(200).json(randomize(ids));
}