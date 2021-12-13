import './style.css';
import data from './data';

const scoreTable = document.querySelector('#score-details');

const renderBoard = async () => {
  const scores = data;
  scoreTable.innerHTML = '';
  scores.forEach((item) => {
    const newLi = `<p class="p-name score-elements">${item.user}: ${item.score}</p>`;
    scoreTable.innerHTML += newLi;
  });
};

renderBoard();