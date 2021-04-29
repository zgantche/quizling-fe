import QuestionList from './components/QuestionList'
import { useState } from 'react'

function CreateQuiz() {

    const [questions, setQuestions] = useState([
        {
            id: 1,
            text: 'What is my favourite colour?',
            answers: ['red', 'blue']
        },
        {
            id: 2,
            text: 'What is my name?',
            answers: ['Steve', 'Zap']
        }
    ])


    const addQuestion = () => {
        let id = questions.length+1;
        const text = '';
        const answers = ['', ''];
        const newQuestion = { id, text, answers }
        setQuestions([...questions, newQuestion])
    }

    const addAnswer = () => {
        let modifiedQuestions = questions;
        for (let i of modifiedQuestions) {
            if (modifiedQuestions.id === 2) {
                modifiedQuestions.answers.push('')
                break;
            }
        }
        setQuestions([...modifiedQuestions]);
    }

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
                <p>Please submit Quiz when finished                                 .</p>
                <QuestionList
                    questions={questions}
                />
                <button className='btn' onClick={addQuestion}> Another Question</button>
                <br />
                <br />
                <button className='btn' onClick={addAnswer}>Another Answer to Question 2</button>
            </header>
        </div>
    );
}

export default CreateQuiz;