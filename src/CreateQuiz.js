import QuestionList from './components/QuestionList';
import { useSelector, useDispatch } from 'react-redux';
import { increment, incrementByAmount } from './slices/counterSlice';
import { addQuestion } from './slices/quizTemplateSlice';

function CreateQuiz() {
  const count = useSelector((state) => state.counter.value);
  const questions = useSelector((state) => state.quizTemplate.questions);
  const dispatch = useDispatch();

  return (
    <div className="createQuiz"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: '100vh'
      }}>
      <header>
        <h1>Create Quiz</h1>
        <p>Please submit Quiz when finished                 .</p>
        <QuestionList
          questions={questions}
        />
        <button className='btn' onClick={() => dispatch(addQuestion())}> Another Question</button>
        <br />
        <br />
        <button className='btn' >Save and Preview Quiz</button>
        <br /><br />
        Current counter: {count}
        <br />
        <button className='btn' onClick={() => dispatch(increment())}>Increment Counter</button>
        <button className='btn' onClick={() => dispatch(incrementByAmount(10))}>Increment Counter by 5</button>
      </header>
    </div>
  );
}

export default CreateQuiz;