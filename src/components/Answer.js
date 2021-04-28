import React from 'react'
import {useState} from 'react'

const Answer = ({ answers }) => {
    const [answer, setAnswer] = useState('')

    return (
        <div className='answers'>
            <div style={{ border: 'outset', borderRadius: '20px', backgroundColor: 'white' }} >
                <label>
                    <br />
                    <input type='text' 
                    value={answers}
                    onChange={(e) => setAnswer(e.target.value)}
                    />
                    <br />
                </label>
            </div>
        </div>
    )
}

export default Answer