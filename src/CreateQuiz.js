import ListofQuestions from './components/ListofQuestions'
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
        var id = 0;
        for (var c in questions) {
            if (questions.hasOwnProperty(c)) id++;
        }
        id++;
        const text = '';
        const answers = ['', ''];
        const newQuestion = { id, text, answers }
        setQuestions([...questions, newQuestion])
    }

    const addAnswer = (id) => {
        let modifiedQuestions = questions;
        for (var i in modifiedQuestions) {
            if (modifiedQuestions[i] === id) {
                modifiedQuestions.answers.push('');
                break;
            }
        }
        setQuestions(modifiedQuestions);
    }

    return (
        <div className="createQuiz"
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
            <header>
                <h1>Create Quiz</h1>
                <p>Please submit Quiz when finished                                 .</p>
                <ListofQuestions
                    questions={questions}
                    anotherAnswer={addAnswer}
                />
                <button className='btn' onClick={addQuestion}> Another Question</button>
                <br />
                <br />
                <button className='btn'>Submit Quiz</button>
            </header>
        </div>
    );
}

export default CreateQuiz;