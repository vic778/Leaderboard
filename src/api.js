const userInput = document.querySelector('#name');
const scoreInput = document.querySelector('#score');

const sendData = () => {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: 'Game of Thrones' }),
  });
};
sendData();

const sendScores = () => {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/JISCZSyYfIzlC6N08Rja/scores/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user: userInput.value, score: scoreInput.value }),
  });
};

sendScores();

const getData = async () => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/JISCZSyYfIzlC6N08Rja/scores/';
  const data = await fetch(url);
  const content = await data.json();
  return content.result;
};

getData();

export { sendData, sendScores, getData };