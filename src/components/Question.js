import React from 'react';
import Answer from './Answer';
import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addAnswer } from '../slices/quizTemplateSlice';

const Question = ({ question }) => {
  const [text, setText] = useState('');

  const dispatch = useDispatch();

  return (
    <div className='question'>
      <div style={{ border: 'double', borderRadius: '20px', backgroundColor: 'lightgrey'}} >
        <label>
          <h4>Question {question.id}</h4>
          <textarea
            name="answer"
            value={question.text}
            onChange={(e) => setText(e.target.value)}
          />
          <br />
          {question.answers.map((q) => (
            <Answer
              answers={q}
            />
          ))}
          <br />
          <button onClick={() => dispatch(addAnswer(question.id))}>Add Another Answer</button>
          <br />
          <p></p>

        </label>
      </div>
    </div>
  );
}

export default Question;