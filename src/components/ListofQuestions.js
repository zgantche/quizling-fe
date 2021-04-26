import Question from './Question'

const ListofQuestions = ({ questions }) => {

    return (
        <>
            {questions.map((q) => (
                <Question
                    key={q.id}
                    question={q}
                />
            ))}
        </>
    )
}

export default ListofQuestions