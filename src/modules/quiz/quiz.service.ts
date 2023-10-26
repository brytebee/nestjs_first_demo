import { Injectable } from '@nestjs/common';
import { log } from 'console';

@Injectable()
export class QuizService {
  quiz = [
    {
      id: 1,
      name: 'What is your name?',
    },
    {
      id: 2,
      name: 'How old are you?',
    },
    {
      id: 3,
      name: 'Where do you plan to be in 10 years?',
    },
  ];
  getAllQuiz() {
    return this.quiz;
  }

  getQuizById(id: number) {
    const data = this.quiz.filter((q) => q.id === +id);
    if (data.length > 0) {
      return data;
    }
    return { message: 'Not Found!' };
  }
}
