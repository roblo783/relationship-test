// Importera frågor från externa filer
import { words_questions } from './words_questions_fixed.js';
import { time_questions } from './time_questions_fixed.js';
import { gifts_questions } from './gifts_questions_fixed.js';
import { service_questions } from './service_questions_fixed.js';
import { touch_questions } from './touch_questions_fixed.js';
import { all_languages_questions } from './all_languages_questions_fixed.js';

// Hur många frågor per kärleksspråk? Justera denna siffra efter behov
const numPerCategory = 10; // Exakt lika många frågor från varje fil
const numAllLanguages = 5; // Valfritt antal från all_languages_questions.js

// Funktion för att slumpa ordningen av frågor
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

// Funktion för att välja ett visst antal frågor från en lista
function selectRandomQuestions(questionList, num) {
    return shuffleArray(questionList).slice(0, num);
}

// Skapa en balanserad frågelista
const selectedQuestions = [
    ...selectRandomQuestions(wordsQuestions, numPerCategory),
    ...selectRandomQuestions(timeQuestions, numPerCategory),
    ...selectRandomQuestions(giftsQuestions, numPerCategory),
    ...selectRandomQuestions(serviceQuestions, numPerCategory),
    ...selectRandomQuestions(touchQuestions, numPerCategory),
    ...selectRandomQuestions(allLanguagesQuestions, numAllLanguages) // Obegränsat antal
];

// Slumpa ordningen på alla valda frågor
const questionsData = shuffleArray(selectedQuestions);

export default questionsData;
