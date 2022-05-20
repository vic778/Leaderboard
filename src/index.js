import './style.css';
import { sendData, sendScores, getData } from './api.js';

const userInput = document.querySelector('#name');
const scoreInput = document.querySelector('#score');
const refreshButton = document.querySelector('#refresh-btn');
const submitButton = document.querySelector('#submit');
const scoreTable = document.querySelector('#score-details');

const renderBoard = async () => {
  const scores = await getData();
  scoreTable.innerHTML = '';
  scores.forEach((item) => {
    const newLi = `<p class="p-name score-elements">${item.user}: ${item.score}</p>`;
    scoreTable.innerHTML += newLi;
  });
};

const createNewGame = async () => {
  await sendData();
  renderBoard();
};

createNewGame();

refreshButton.addEventListener('click', () => {
  scoreTable.innerHTML = '';
  renderBoard();
});

submitButton.addEventListener('click', async (e) => {
  e.preventDefault();
  await sendScores();
  userInput.value = '';
  scoreInput.value = '';
});
renderBoard();