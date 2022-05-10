//Crate arrays for keys
const createKeys = () => {
  const firstRowKeys = [
    '`',
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
    'Backspace',
  ];
  const secondRowKeys = [
    'Tab',
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
    '[',
    ']',
  ];
  const thirdRowKeys = [
    'Caps Lock',
    'a',
    's',
    'd',
    'f',
    'g',
    'h',
    'j',
    'k',
    'l',
    ';',
    '"',
    '\\',
    'Enter',
  ];
  const fourthRowKeys = [
    'Shift',
    'z',
    'x',
    'c',
    'v',
    'b',
    'n',
    'm',
    ',',
    '.',
    '/',
    'Shift',
  ];
  const fifthRowKeys = [
    'Ctrl',
    'Win',
    'Alt',
    'Space',
    'Alt',
    'Ctrl',
    'ArrowLeft',
    'ArrowDown',
    'ArrowUp',
    'ArrowRight',
  ];
  return [
    firstRowKeys,
    secondRowKeys,
    thirdRowKeys,
    fourthRowKeys,
    fifthRowKeys,
  ];
};

//Create a text area for display text
const createTextArea = () => {
  const textArea = document.createElement('textarea');
  textArea.classList.add('text-area');
  textArea.setAttribute('autofocus', 'true');
  textArea.setAttribute('rows', '10');
  document.body.appendChild(textArea);
};
createTextArea();

//Create a wrapper for keyboard
const createKeyboardWrapper = () => {
  const keyboardWrapper = document.createElement('div');
  keyboardWrapper.classList.add('keyboard-wrapper');
  document.body.appendChild(keyboardWrapper);
};
createKeyboardWrapper();

//initialize the keyboard
const initializeKeyboard = () => {
  const keys = createKeys();
  console.log(keys[2]);
  const keyboardWrapper = document.querySelector('.keyboard-wrapper');
  keys.forEach((keyRow) => {
    const keyRowElement = document.createElement('div');
    keyRowElement.classList.add('key-row');
    keyboardWrapper.appendChild(keyRowElement);
    keyRow.forEach((key) => {
      const keyElement = document.createElement('div');
      keyElement.classList.add('key');
      keyElement.innerText = key;
      keyRowElement.appendChild(keyElement);
      if (
        key == 'CapsLock' ||
        key == 'Backspace' ||
        key == 'Enter' ||
        key == 'Tab' ||
        key == 'Shift' ||
        key == 'Ctrl' ||
        key == 'Alt' ||
        key == 'Win' ||
        key == 'Space' ||
        key == 'ArrowLeft' ||
        key == 'ArrowDown' ||
        key == 'ArrowUp' ||
        key == 'ArrowRight'
      ) {
        keyElement.setAttribute('data', `${key}`);
      } else {
        keyElement.addEventListener('click', clickListener);
        document.addEventListener('keydown', keydownListener);
      }
    });
  });
};
initializeKeyboard();

//Add listeners to the keyboard
function clickListener(event) {
  const key = event.target.textContent;
  const textArea = document.querySelector('.text-area');
  textArea.value += key;
}

function keydownListener(event) {
  const key = event.key;
  if (
    key == 'CapsLock' ||
    key == 'Backspace' ||
    key == 'Enter' ||
    key == 'Tab' ||
    key == 'Shift' ||
    key == 'Control' ||
    key == 'Alt' ||
    key == 'Win' ||
    key == 'Space' ||
    key == 'ArrowLeft' ||
    key == 'ArrowDown' ||
    key == 'ArrowUp' ||
    key == 'ArrowRight'
  ) {
    return;
  } else {
    const toggleBtnClass = document.querySelectorAll('.key');
    toggleBtnClass.forEach((btn) => {
      if (btn.textContent == key) {
        btn.classList.toggle('active');
      }
      setTimeout(() => {
        btn.classList.remove('active');
      }, 100);
    });
    const textArea = document.querySelector('.text-area');
    return (textArea.value += key);
  }
}
//Create a function to enter button for new line
const createEnterButton = (event) => {
  const enterButton = document.querySelector('[data="Enter"]');

  function enterButtonListener() {
    const textArea = document.querySelector('.text-area');
    textArea.value += '\n';
  }

  document.addEventListener('keydown', (event) => {
    if (event.key == 'Enter') {
      const textArea = document.querySelector('.text-area');
      textArea.value += '\n';
    }
  }); // need to understand this
  enterButton.addEventListener('click', enterButtonListener);
};
createEnterButton();

//Create a function to backspace button
const createBackspaceButton = (event) => {
  const backspaceButton = document.querySelector('[data="Backspace"]');

  function backspaceButtonListener() {
    const textArea = document.querySelector('.text-area');
    textArea.value = textArea.value.slice(0, -1);
  }

  document.addEventListener('keydown', (event) => {
    if (event.key == 'Backspace') {
      const textArea = document.querySelector('.text-area');
      textArea.value = textArea.value.slice(0, -1);
    }
  });
  backspaceButton.addEventListener('click', backspaceButtonListener);
};
createBackspaceButton();

//Create a function to shift buttons
const createShiftButtons = () => {
  const shiftButtons = document.querySelectorAll('[data="Shift"]');

  function shiftButtonListener() {
    const textArea = document.querySelector('.text-area');
    textArea.value = textArea.value.toUpperCase();
  }

  shiftButtons.forEach((btn) => {
    btn.addEventListener('click', shiftButtonListener); //not sure about this
  });

  shiftButtons.forEach((btn) => {
    document.addEventListener('keydown', (event) => {
      if (event.key == 'Shift') {
        const textArea = document.querySelector('.text-area');
        textArea.value = textArea.value.toUpperCase();
      }
    });
  });
};