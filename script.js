let resultFortune = '';

const randomFortune = () => {
  let random = Math.floor(Math.random() * 5);
  const randomEnum = {
    '大吉': 0,
    '吉': 1,
    '中吉': 2,
    '凶': 3,
    '小吉': 4,
  };

  switch (random) {
    case randomEnum['大吉']:
      resultFortune = '大吉';
      break;
    case randomEnum['吉']:
      resultFortune = '吉';
      break;
    case randomEnum['中吉']:
      resultFortune = '中吉';
      break;
    case randomEnum['凶']:
      resultFortune = '凶';
      break;
    case randomEnum['小吉']:
      resultFortune = '小吉';
      break;
  }
};

const createResult = () => {
  const result = document.getElementById('result');
  if (result.firstChild) {
    result.removeChild(result.firstChild);
  }
  let text = document.createElement('h1');
  text.textContent = 'あなたの運勢は' + resultFortune + 'です';
  result.appendChild(text);
};

const button = document.getElementById('button');
button.addEventListener('click', () => {
  randomFortune();
  createResult();
});
