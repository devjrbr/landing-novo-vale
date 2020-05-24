import toggleQuestionFAQ from './modules/toggleQuestionFAQ.js';

const questions = document.querySelectorAll('.panel-header');
questions.forEach(question => question.addEventListener('click', toggleQuestionFAQ));
