const digit = document.querySelectorAll('.digit');
const secondTens = document.querySelector('#secondTens');
const secondOnes = document.querySelector('#secondOnes');
const msHundreds = document.querySelector('#msHundreds');
const msTens = document.querySelector('#msTens');

window.onload = timer();

function timer() {
  init();

  function init() {
    let ms = 0;
    digit.forEach(num => {
      if (num.id !== 'colon') {
        num.textContent = '0';
      }
    });

    const startTimer = window.setInterval(() => {
      ms += 10;
      if (ms === 10000) {
        stopTimer(startTimer);
      }
      changeNumbers(ms);
    }, 10);
  }

  function increaseNumbers(str) {
    let increasedNumber = Number(str) + 1;
    return increasedNumber.toString();
  }

  function stopTimer(currentTimer) {
    clearInterval(currentTimer);
    digit.forEach(digit => {
      digit.classList.add('redDigit');
    });
  }

  function changeNumbers(ms) {
    if (ms === 10000) {
      digit.forEach(num => {
        if (num.id === 'secondTens') {
          num.textContent = '1';
        } else if (num.id !== 'colon') {
          num.textContent = '0';
        }
      });
    } else if (ms % 1000 === 0) {
      secondOnes.textContent = increaseNumbers(secondOnes.textContent);
      msHundreds.textContent = '0';
      msTens.textContent = '0';
    } else if (ms % 100 === 0) {
      msHundreds.textContent = increaseNumbers(msHundreds.textContent);
      msTens.textContent = '0';
    } else {
      msTens.textContent = increaseNumbers(msTens.textContent);
    }
  }
}
