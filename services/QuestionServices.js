import dbConnect from "../dbConnect";
import Question from "../models/Question";

export default async function getAllQuestions() {
  await dbConnect();

  const questions = await Question.find();

  const questionArray = questions.map(({ id, question, answer, options }) => {
    return { id, question, answer, options };
  });
  return questionArray;
}
