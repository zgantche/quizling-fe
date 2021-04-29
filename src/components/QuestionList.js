import Question from './Question';

const QuestionList = ({ questions }) => {

  return (
    <>
      {questions.map((q) => (
        <Question
          key={q.id}
          question={q}
        />
      ))}
    </>
  );
}

export default QuestionList;