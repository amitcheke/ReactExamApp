// Questions.tsx

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../types'; // Adjust the path as needed


    export default function Questions()
    {
  const list = useSelector((state: RootState) => state.questions.list);

  return (
    <div>
      {list.map((question, index) => (
        <div key={question.id}>{question.question}</div>
      ))}
    </div>
  );
};

;
