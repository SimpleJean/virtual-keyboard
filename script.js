const keyboardLanguage = {
  en: [
    '~',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    '-',
    '=',

    'q',
    'w',
    'e',
    'r',
    't',
    'y',
    'u',
    'i',
    'o',
    'p',
    'a',
    's',
    'd',
    'f',
    'g',
    'h',
    'j',
    'k',
    'l',
    'z',
    'x',
    'c',
    'v',
    'b',
    'n',
    'm',
  ],
  ru: [
    'ё',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    '-',
    '=',
    'й',
    'ц',
    'у',
    'к',
    'е',
    'н',
    'г',
    'ш',
    'щ',
    'з',
    'х',
    'ъ',
    'ф',
    'ы',
    'в',
    'а',
    'п',
    'р',
    'о',
    'л',
    'д',
    'ж',
    'э',
    'я',
    'ч',
    'с',
    'м',
    'и',
    'т',
    'ь',
    'б',
    'ю',
  ],
};

const leftPadButton = ['Tab', 'CapsLock', 'Shift'];
const rightPadButton = ['Backspace', 'Enter', 'Shift'];
const bottomPadButton = [
  'Ctrl',
  'Win',
  'Alt',
  'Space',
  'Alt',
  'Ctrl',
  'ArrowLeft',
  'ArrowRight',
  'ArrowUp',
  'ArrowDown',
];

// Create text area for display text
const createTextArea = () => {
  const textArea = document.createElement('textarea');
  textArea.classList.add('text-area');
  textArea.setAttribute('readonly', 'true');
  textArea.setAttribute('rows', '9');
  document.body.appendChild(textArea);
};
createTextArea();

//create wrapper for keyboard and left pad button
const createWrapper = () => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  document.body.appendChild(wrapper);
};
createWrapper();

//Create a left pad button and append it to keyboard div
const createLeftPadButton = () => {
  const leftPadButtonDiv = document.createElement('div');
  leftPadButtonDiv.classList.add('left-pad-button');
  const wrapper = document.querySelector('.wrapper');

  leftPadButton.map((button) => {
    const buttonElement = document.createElement('button');
    buttonElement.classList.add('left-pad');
    buttonElement.textContent = button;
    leftPadButtonDiv.appendChild(buttonElement);
    wrapper.appendChild(leftPadButtonDiv);
    buttonElement.addEventListener('click', logClick);
  });
};
createLeftPadButton();

// Create a div for keyboard and append it to body
const createDivForKeyboard = () => {
  const keyboardDiv = document.createElement('div');
  const wrapper = document.querySelector('.wrapper');
  keyboardDiv.classList.add('keyboard');
  wrapper.appendChild(keyboardDiv);
};
createDivForKeyboard();

// Create a keyboard button and append it to keyboard div
const createKeyboard = (language) => {
  const keyboard = keyboardLanguage[language];
  const keyboardDiv = document.querySelector('.keyboard');
  keyboard.map((key, index) => {
    const keyElement = document.createElement('button');
    keyElement.classList.add('key');

    keyElement.setAttribute('data', `${index}`);
    keyElement.textContent = key;
    keyboardDiv.appendChild(keyElement);
    document.addEventListener('keydown', logClick);
    keyElement.addEventListener('click', logClick);
  });
};
createKeyboard('en');

//Create a right pad button and append it to keyboard div
const createRightPadButton = () => {
  const rightPadButtonDiv = document.createElement('div');
  rightPadButtonDiv.classList.add('right-pad-button');
  const wrapper = document.querySelector('.wrapper');

  rightPadButton.map((button) => {
    const buttonElement = document.createElement('button');
    buttonElement.classList.add('right-pad');
    buttonElement.textContent = button;
    rightPadButtonDiv.appendChild(buttonElement);
    wrapper.appendChild(rightPadButtonDiv);
    buttonElement.addEventListener('click', logClick);
  });
};
createRightPadButton();

//Create a bottom pad button and append it to body
const createBottomPadButton = () => {
  const bottomPadButtonDiv = document.createElement('div');
  bottomPadButtonDiv.classList.add('bottom-pad-button');

  bottomPadButton.map((button) => {
    const buttonElement = document.createElement('button');
    buttonElement.classList.add('bottom-pad');
    buttonElement.setAttribute('data', `${button}`);
    buttonElement.textContent = button;
    bottomPadButtonDiv.appendChild(buttonElement);
    document.body.appendChild(bottomPadButtonDiv);
    buttonElement.addEventListener('click', logClick);
  });
};
createBottomPadButton();

// Log click or keydown event
function logClick(event) {
  if (event.type === 'keydown' && event.key === 'Tab') {
    const textArea = document.querySelector('.text-area');
    textArea.value;
  }
  if (event.type === 'click') {
    const key = event.target.textContent;
    const textArea = document.querySelector('.text-area');
    textArea.value += key;
  }
  if (event.type === 'keydown') {
    const key = event.key;
    const textArea = document.querySelector('.text-area');
    textArea.value += key;
  }
  if (event.type === 'keydown' && event.key === 'Backspace') {
    const textArea = document.querySelector('.text-area');
    textArea.value = textArea.value.slice(0, -1);
    console.log(textArea.value);
  }
}
