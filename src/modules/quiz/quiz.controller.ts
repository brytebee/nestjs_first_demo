import { Controller, Get } from '@nestjs/common';

@Controller('quiz')
export class QuizController {
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

  @Get('/')
  getAllQuiz(): object[] {
    return this.quiz;
  }

  @Get('/:id')
  getQuizById(): object {
    return this.quiz.filter((id) => id);
  }
}
