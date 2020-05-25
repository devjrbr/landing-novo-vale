import toggleQuestionFAQ from './modules/toggleQuestionFAQ.js';
import filterByColorCategory  from './modules/filterByColorCategory.js';

const questions = document.querySelectorAll('.panel-header');
questions.forEach(question => question.addEventListener('click', toggleQuestionFAQ));

const coursesMenu = document.querySelectorAll('.courses-menu a');
coursesMenu.forEach(coursesItem => coursesItem.addEventListener('click', filterByColorCategory));