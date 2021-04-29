import { createSlice } from '@reduxjs/toolkit';

export const quizTemplateSlice = createSlice({
  name: 'quizTemplate',
  initialState: {
    questions: [
      {
        id: 1,
        text: 'What is my favourite colour?',
        answers: ['red', 'blue']
      },
      {
        id: 2,
        text: 'What is my name?',
        answers: ['Steve', 'Zap']
      }]
  },
  reducers: {
    addQuestion: (state) => {
      let id = state.questions.length+1;
      const text = '';
      const answers = ['', ''];
      const newQuestion = { id, text, answers };
      state.questions.push(newQuestion);
    },
    addAnswer: (state, action) => {
      for (let question of state.questions) {
        if (question.id === action.payload) {
          question.answers.push('');
          break;
        }
      }
    }
  }
});

export const { addQuestion, addAnswer } = quizTemplateSlice.actions;

export default quizTemplateSlice.reducer;