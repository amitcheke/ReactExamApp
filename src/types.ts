export interface Question {
    id: string;
    question: string;
  }
  
  export interface RootState {
    questions: {
      list: Question[];
    };
  }