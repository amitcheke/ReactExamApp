import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addQuestion } from '../questionSlice';

export default function AddQuestionForm() {
  const dispatch = useDispatch();
  const [newQuestion, setNewQuestion] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addQuestion(newQuestion));
    setNewQuestion('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newQuestion}
        onChange={(e) => setNewQuestion(e.target.value)}
        placeholder="Enter your question"
      />
      <button type="submit">Add Question</button>
    </form>
  );
}
