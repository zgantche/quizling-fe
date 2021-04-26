import React from 'react'
import Answer from './Answer'
import {useState} from 'react'

const Question = ({ question }) => {

    const [text, setText] = useState('')

    return (
        <div className='question'>
            <div style={{ border: 'double', borderRadius: '20px' }} >
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
                    <button>Add Another Answer</button>
                    <br />
                    <p></p>

                </label>
            </div>
        </div>
    )
}

export default Question