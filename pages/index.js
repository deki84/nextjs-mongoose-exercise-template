import getAllQuestions from "../services/QuestionServices";
import QuestionCard from "../src/QuestionCard";

/**
 * Don't forget to add the function
 * `getServerSideProps`!
 */
export async function getServerSideProps() {
  const questions = await getAllQuestions();
  console.log(questions);
  return {
    props: { questions: questions },
  };
}

export default function IndexPage({ questions }) {
  console.log(questions);
  return (
    <main>
      <h1>All questions</h1>
      <ul>
        {questions.map(({ question, answer, options, id }) => {
          return (
            <QuestionCard
              key={id}
              question={question}
              answer={answer}
              options={options}
            />
          );
        })}
      </ul>
    </main>
  );
}
