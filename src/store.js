import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import quizTemplateReducer from './slices/quizTemplateSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    quizTemplate: quizTemplateReducer,
  },
});