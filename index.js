"use strict";

let targetBody = document.querySelector('body')
let contentMain = document.createElement('div');
contentMain.className = 'wrapper';
targetBody.appendChild(contentMain);

let containerApp = document.createElement('div');
containerApp.className = '_container';
contentMain.appendChild(containerApp);

let fieldTextarea = document.createElement('textarea');
fieldTextarea.className = 'entry-field';
fieldTextarea.autofocus = true
containerApp.appendChild(fieldTextarea);

let keyField = document.createElement('div');
keyField.className = 'key-field';
containerApp.appendChild(keyField);

let developmentEnvironment = document.createElement('p');
developmentEnvironment.textContent = 'Клавиатура создана в операционной системе Windows';
containerApp.appendChild(developmentEnvironment);

let languageSwitching = document.createElement('p');
languageSwitching.textContent = 'Для переключения языка комбинация: левыe ctrl + alt';
containerApp.appendChild(languageSwitching);

let firstLine = document.createElement('div');
firstLine.className = 'first-line';
keyField.appendChild(firstLine);

let secondLine = document.createElement('div');
secondLine.className = 'second-line';
keyField.appendChild(secondLine);

let thirdLine = document.createElement('div');
thirdLine.className = 'third-line';
keyField.appendChild(thirdLine);

let fourthLine = document.createElement('div');
fourthLine.className = 'fourth-line';
keyField.appendChild(fourthLine);

let fifthLine = document.createElement('div');
fifthLine.className = 'fifth-line';
keyField.appendChild(fifthLine);
let arrayOfLettersFin = {
    en: {
        withShiftOff: [
            { Backquote: '`' }, { Digit1: '1' }, { Digit2: '2' }, { Digit3: '3' }, { Digit4: '4' }, { Digit5: '5' }, { Digit6: '6' }, { Digit7: '7' }, { Digit8: '8' }, { Digit9: '9' }, { Digit0: '0' }, { Minus: '-' }, { Equal: '=' },
            { KeyQ: 'q' }, { KeyW: 'w' }, { KeyE: 'e' }, { KeyR: 'r' }, { KeyT: 't' }, { KeyY: 'y' }, { KeyU: 'u' }, { KeyI: 'i' }, { KeyO: 'o' }, { KeyP: 'p' }, { BracketLeft: '[' }, { BracketRight: ']' }, { Backslash: '\\' },
            { KeyA: 'a' }, { KeyS: 's' }, { KeyD: 'd' }, { KeyF: 'f' }, { KeyG: 'g' }, { KeyH: 'h' }, { KeyJ: 'j' }, { KeyK: 'k' }, { KeyL: 'l' }, { Semicolon: ';' }, { Quote: '\'' },
            { KeyZ: 'z' }, { KeyX: 'x' }, { KeyC: 'c' }, { KeyV: 'v' }, { KeyB: 'b' }, { KeyN: 'n' }, { KeyM: 'm' }, { Comma: ',' }, { Period: '.' }, { Slash: '/' }
        ],
        withShiftOn: [
            { Backquote: '~' }, { Digit1: '!' }, { Digit2: '@' }, { Digit3: '#' }, { Digit4: '$' }, { Digit5: '%' }, { Digit6: '^' }, { Digit7: '&' }, { Digit8: '*' }, { Digit9: '(' }, { Digit0: ')' }, { Minus: '_' }, { Equal: '+' },
            { KeyQ: 'Q' }, { KeyW: 'W' }, { KeyE: 'E' }, { KeyR: 'R' }, { KeyT: 'T' }, { KeyY: 'Y' }, { KeyU: 'U' }, { KeyI: 'I' }, { KeyO: 'O' }, { KeyP: 'P' }, { BracketLeft: '{' }, { BracketRight: '}' }, { Backslash: '\|' },
            { KeyA: 'A' }, { KeyS: 'S' }, { KeyD: 'D' }, { KeyF: 'F' }, { KeyG: 'G' }, { KeyH: 'H' }, { KeyJ: 'J' }, { KeyK: 'K' }, { KeyL: 'L' }, { Semicolon: ':' }, { Quote: '\"' },
            { KeyZ: 'Z' }, { KeyX: 'X' }, { KeyC: 'C' }, { KeyV: 'V' }, { KeyB: 'B' }, { KeyN: 'N' }, { KeyM: 'M' }, { Comma: '<' }, { Period: '>' }, { Slash: '?' }
        ]
    },
    ru: {
        withShiftOff: [
            { Backquote: 'ё' }, { Digit1: '1' }, { Digit2: '2' }, { Digit3: '3' }, { Digit4: '4' }, { Digit5: '5' }, { Digit6: '6' }, { Digit7: '7' }, { Digit8: '8' }, { Digit9: '9' }, { Digit0: '0' }, { Minus: '-' }, { Equal: '=' },
            { KeyQ: 'й' }, { KeyW: 'ц' }, { KeyE: 'у' }, { KeyR: 'к' }, { KeyT: 'е' }, { KeyY: 'н' }, { KeyU: 'г' }, { KeyI: 'ш' }, { KeyO: 'щ' }, { KeyP: 'з' }, { BracketLeft: 'х' }, { BracketRight: 'ъ' }, { Backslash: '\\' },
            { KeyA: 'ф' }, { KeyS: 'ы' }, { KeyD: 'в' }, { KeyF: 'а' }, { KeyG: 'п' }, { KeyH: 'р' }, { KeyJ: 'о' }, { KeyK: 'л' }, { KeyL: 'д' }, { Semicolon: 'ж' }, { Quote: 'э' },
            { KeyZ: 'я' }, { KeyX: 'ч' }, { KeyC: 'с' }, { KeyV: 'м' }, { KeyB: 'и' }, { KeyN: 'т' }, { KeyM: 'ь' }, { Comma: 'б' }, { Period: 'ю' }, { Slash: '.' }
        ],
        withShiftOn: [
            { Backquote: 'Ё' }, { Digit1: '!' }, { Digit2: '\"' }, { Digit3: '№' }, { Digit4: ';' }, { Digit5: '%' }, { Digit6: ':' }, { Digit7: '?' }, { Digit8: '*' }, { Digit9: '(' }, { Digit0: ')' }, { Minus: '_' }, { Equal: '+' },
            { KeyQ: 'Й' }, { KeyW: 'Ц' }, { KeyE: 'У' }, { KeyR: 'К' }, { KeyT: 'Е' }, { KeyY: 'Н' }, { KeyU: 'Г' }, { KeyI: 'Ш' }, { KeyO: 'Щ' }, { KeyP: 'З' }, { BracketLeft: 'Х' }, { BracketRight: 'Ъ' }, { Backslash: '/' },
            { KeyA: 'Ф' }, { KeyS: 'Ы' }, { KeyD: 'В' }, { KeyF: 'А' }, { KeyG: 'П' }, { KeyH: 'Р' }, { KeyJ: 'О' }, { KeyK: 'Л' }, { KeyL: 'Д' }, { Semicolon: 'Ж' }, { Quote: 'Э' },
            { KeyZ: 'Я' }, { KeyX: 'Ч' }, { KeyC: 'С' }, { KeyV: 'М' }, { KeyB: 'И' }, { KeyN: 'Т' }, { KeyM: 'Ь' }, { Comma: 'Б' }, { Period: 'Ю' }, { Slash: ',' }
        ]
    }
}

let withShift = 'withShiftOff'

let languageSelection
if (localStorage.length == 0) {
    localStorage.setItem('en', 'en');
    let objJson1 = JSON.stringify(localStorage);
    let objJson4 = JSON.parse(objJson1);
    for (let key in objJson4) {
        languageSelection = key;
    }
}
else if (localStorage.length > 0) {
    let objJson1 = JSON.stringify(localStorage);
    let objJson4 = JSON.parse(objJson1);
    for (let key in objJson4) {
        languageSelection = key;
    }
}

let startCurs = fieldTextarea.selectionStart;

function createKeyFirst(n) {

    for (let i = 0; i <= 12; i++) {
        let keyButton = document.createElement('button');
        keyButton.className = 'key-button';
        for (let key in arrayOfLettersFin[String(languageSelection)][n][i]) {
            keyButton.id = key;
            keyButton.textContent = arrayOfLettersFin[String(languageSelection)][n][i][key];
        }
        keyButton.addEventListener('mousedown', function () {
            this.classList.add('active');
        })

        keyButton.addEventListener('mouseup', function () {
            let a = this
            setTimeout(function () { a.classList.remove('active') }, 150)
        })

        keyButton.addEventListener('click', function () {
            positionСursor(i, n)
        })

        firstLine.appendChild(keyButton);
    }

    let keyButtonBackspace = document.createElement('button');
    keyButtonBackspace.className = 'key-backspace';
    keyButtonBackspace.textContent = 'Backspace';
    keyButtonBackspace.id = 'Backspace';

    keyButtonBackspace.addEventListener('mousedown', function () {

        this.classList.add('active');
        let textarea = fieldTextarea.value.split('')
        let b = fieldTextarea.selectionStart
        if (b > 0) {
            textarea.splice(b - 1, 1);
            fieldTextarea.value = ''
            for (let i = 0; i < textarea.length; i++) {
                fieldTextarea.value = fieldTextarea.value + textarea[i]
            }

            fieldTextarea.selectionStart = b - 1
            startCurs = fieldTextarea.selectionStart
            setTimeout(() => {
                fieldTextarea.selectionStart = fieldTextarea.selectionEnd = startCurs;
            });
            setTimeout(() => fieldTextarea.focus(), 50);
        }
    })

    keyButtonBackspace.addEventListener('mouseup', function () {
        let a = this
        setTimeout(function () { a.classList.remove('active') }, 150)
    })

    keyButtonBackspace.addEventListener('click', function () {
    })
    firstLine.appendChild(keyButtonBackspace);
    return
}
createKeyFirst(withShift)

function createKeySecond(n) {
    let keyButtonTab = document.createElement('button');
    keyButtonTab.className = 'key-tab';
    keyButtonTab.textContent = 'Tab';
    keyButtonTab.id = 'Tab';
    keyButtonTab.addEventListener('mousedown', function () {
        this.classList.add('active');
    })

    keyButtonTab.addEventListener('mouseup', function () {
        let a = this
        setTimeout(function () { a.classList.remove('active') }, 150)
    })

    keyButtonTab.addEventListener('click', function () {
        let textarea = fieldTextarea.value.split('')
        let b = fieldTextarea.selectionStart

        textarea.splice(b, 0, '\t');
        fieldTextarea.value = ''
        for (let i = 0; i < textarea.length; i++) {
            fieldTextarea.value = fieldTextarea.value + textarea[i]
        }

        fieldTextarea.selectionStart = b + 1
        startCurs = fieldTextarea.selectionStart
        setTimeout(() => {
            fieldTextarea.selectionStart = fieldTextarea.selectionEnd = startCurs;
        });
        setTimeout(() => fieldTextarea.focus(), 50);
        return fieldTextarea.value
    })
    secondLine.appendChild(keyButtonTab);
    for (let i = 13; i <= 25; i++) {
        let keyButton = document.createElement('button');
        keyButton.className = 'key-button';
        for (let key in arrayOfLettersFin[String(languageSelection)][n][i]) {
            keyButton.id = key;
            keyButton.textContent = arrayOfLettersFin[String(languageSelection)][n][i][key];
        }

        keyButton.addEventListener('mousedown', function () {
            this.classList.add('active');
        })

        keyButton.addEventListener('mouseup', function () {
            let a = this
            setTimeout(function () { a.classList.remove('active') }, 150)
        })

        keyButton.addEventListener('click', function () {
            positionСursor(i, n)
        })
        secondLine.appendChild(keyButton);
    }
    let keyButtonDel = document.createElement('button');
    keyButtonDel.className = 'key-button';
    keyButtonDel.textContent = 'Del';
    keyButtonDel.id = 'Delete';
    keyButtonDel.addEventListener('mousedown', function () {
        this.classList.add('active');
    })

    keyButtonDel.addEventListener('mouseup', function () {
        let a = this
        setTimeout(function () { a.classList.remove('active') }, 150)
    })

    keyButtonDel.addEventListener('click', function () {
        this.classList.add('active');
        let textarea = fieldTextarea.value.split('')
        let b = fieldTextarea.selectionStart
        textarea.splice(b, 1);
        fieldTextarea.value = ''
        for (let i = 0; i < textarea.length; i++) {
            fieldTextarea.value = fieldTextarea.value + textarea[i]
        }

        fieldTextarea.selectionStart = b
        startCurs = fieldTextarea.selectionStart
        setTimeout(() => {
            fieldTextarea.selectionStart = fieldTextarea.selectionEnd = startCurs;
        });
        setTimeout(() => fieldTextarea.focus(), 50);
        return fieldTextarea.selectionStart
    })
    secondLine.appendChild(keyButtonDel);
    return
}
createKeySecond(withShift)

function createKeyThird(n) {
    if (thirdLine.children.length == 0) {
        let keyButtonCaps = document.createElement('button');
        keyButtonCaps.className = 'key-capslock';
        keyButtonCaps.textContent = 'Caps Lock';
        keyButtonCaps.id = 'CapsLock';
        keyButtonCaps.addEventListener('mousedown', function () {
            for (let kei in this.classList) {
                if (this.classList[kei] == 'active') {
                    this.classList.remove('active')
                    return
                }

            }
            this.classList.add('active');
        })

        keyButtonCaps.addEventListener('click', function () {

        })
        thirdLine.appendChild(keyButtonCaps);
    }
    for (let i = 26; i <= 36; i++) {
        let keyButton = document.createElement('button');
        keyButton.className = 'key-button';
        for (let key in arrayOfLettersFin[String(languageSelection)][n][i]) {
            keyButton.id = key;
            keyButton.textContent = arrayOfLettersFin[String(languageSelection)][n][i][key];
        }

        keyButton.addEventListener('mousedown', function () {
            this.classList.add('active');
        })

        keyButton.addEventListener('mouseup', function () {
            let a = this
            setTimeout(function () { a.classList.remove('active') }, 150)
        })

        keyButton.addEventListener('click', function () {
            positionСursor(i, n)
        })
        thirdLine.appendChild(keyButton);
    }
    let keyButtonEnter = document.createElement('button');
    keyButtonEnter.className = 'key-capslock';
    keyButtonEnter.textContent = 'Enter';
    keyButtonEnter.id = 'Enter';
    keyButtonEnter.addEventListener('mousedown', function () {
        this.classList.add('active');
    })

    keyButtonEnter.addEventListener('mouseup', function () {
        let a = this
        setTimeout(function () { a.classList.remove('active') }, 150)
    })

    keyButtonEnter.addEventListener('click', function () {
        let textarea = fieldTextarea.value.split('')
        let b = fieldTextarea.selectionStart

        textarea.splice(b, 0, '\n');
        fieldTextarea.value = ''
        for (let i = 0; i < textarea.length; i++) {
            fieldTextarea.value = fieldTextarea.value + textarea[i]
        }

        fieldTextarea.selectionStart = b + 1
        startCurs = fieldTextarea.selectionStart
        setTimeout(() => {
            fieldTextarea.selectionStart = fieldTextarea.selectionEnd = startCurs;
        });
        setTimeout(() => fieldTextarea.focus(), 50);
        return fieldTextarea.value
    })
    thirdLine.appendChild(keyButtonEnter);
    return
}
createKeyThird(withShift)

function createKeyFourth(n) {
    let keyButtonShiftLeft = document.createElement('button');
    keyButtonShiftLeft.className = 'key-shift';
    keyButtonShiftLeft.textContent = 'Shift';
    keyButtonShiftLeft.id = 'ShiftLeft';
    if (fourthLine.children.length == 0) {

        keyButtonShiftLeft.addEventListener('mousedown', function () {
            this.classList.add('active');
            withShift = 'withShiftOn';
            let objJson1 = JSON.stringify(localStorage);
            let objJson4 = JSON.parse(objJson1);
            for (let key in objJson4) {
                languageSelection = key;
            }
            for (let i = 0; i < firstLine.children.length;) {
                firstLine.removeChild(firstLine.children[i]);
            }
            for (let i = 0; i < secondLine.children.length;) {
                secondLine.removeChild(secondLine.children[i]);
            }
            for (let i = 1; i < thirdLine.children.length;) {
                thirdLine.removeChild(thirdLine.children[i]);
            }
            for (let i = 1; i < fourthLine.children.length;) {
                fourthLine.removeChild(fourthLine.children[i]);
            }
            createKeyFirst(withShift)
            createKeySecond(withShift)
            createKeyThird(withShift)
            createKeyFourth(withShift)
            setTimeout(() => {
                fieldTextarea.selectionStart = fieldTextarea.selectionEnd;
            });
            setTimeout(() => fieldTextarea.focus(), 50);
        })

        keyButtonShiftLeft.addEventListener('mouseup', function () {
            let a = this
            withShift = 'withShiftOff';
            let objJson1 = JSON.stringify(localStorage);
            let objJson4 = JSON.parse(objJson1);
            for (let key in objJson4) {
                languageSelection = key;
            }
            for (let i = 0; i < firstLine.children.length;) {
                firstLine.removeChild(firstLine.children[i]);
            }
            for (let i = 0; i < secondLine.children.length;) {
                secondLine.removeChild(secondLine.children[i]);
            }
            for (let i = 1; i < thirdLine.children.length;) {
                thirdLine.removeChild(thirdLine.children[i]);
            }
            for (let i = 0; i < fourthLine.children.length;) {
                fourthLine.removeChild(fourthLine.children[i]);
            }
            createKeyFirst(withShift)
            createKeySecond(withShift)
            createKeyThird(withShift)
            createKeyFourth(withShift)
            setTimeout(function () { a.classList.remove('active') }, 150)
        })

        keyButtonShiftLeft.addEventListener('click', function () {

        })
        fourthLine.appendChild(keyButtonShiftLeft);
    }
    for (let i = 37; i <= 46; i++) {
        let keyButton = document.createElement('button');
        keyButton.className = 'key-button';
        for (let key in arrayOfLettersFin[String(languageSelection)][n][i]) {
            keyButton.id = key;
            keyButton.textContent = arrayOfLettersFin[String(languageSelection)][n][i][key];
        }

        keyButton.addEventListener('mousedown', function () {
            this.classList.add('active');
        })

        keyButton.addEventListener('mouseup', function () {
            let a = this
            setTimeout(function () { a.classList.remove('active') }, 150)
        })

        keyButton.addEventListener('click', function () {
            positionСursor(i, n)
        })
        fourthLine.appendChild(keyButton);
    }

    let keyButtonArrowUp = document.createElement('button');
    keyButtonArrowUp.className = 'key-button';
    keyButtonArrowUp.innerHTML = '&uparrow;';
    keyButtonArrowUp.id = 'ArrowUp';

    keyButtonArrowUp.addEventListener('mousedown', function () {
        this.classList.add('active');
    })

    keyButtonArrowUp.addEventListener('mouseup', function () {
        let a = this
        setTimeout(function () { a.classList.remove('active') }, 150)
    })

    keyButtonArrowUp.addEventListener('click', function () {
        let f = 0;
        let e = 0;
        let d = 0;
        let textarea = fieldTextarea.value.split('')
        let g = String(fieldTextarea.selectionStart)
        g = Number(g)
        if (textarea.length == g) {
            for (g; g > 0; g--) {
                if (textarea[g] == '\n') {
                    e = g - 1;
                    break
                }
                f++
            }
        }
        else {
            for (g; g < textarea.length; g--) {
                if (textarea[g] == '\n' || textarea[g] == undefined) {
                    e = g - 1;
                    break
                }
                f++
            }
        }
        for (e; e < textarea.length; e--) {
            if (f > e + 1 || textarea[e] == undefined) {
                if (textarea[e] == undefined) {
                    fieldTextarea.selectionStart = fieldTextarea.selectionStart;
                    break
                }
                else if (d == f) {
                    fieldTextarea.selectionStart = d;
                    break
                }
                else {
                    fieldTextarea.selectionStart = e + 1;
                    break
                }
            }
            else {
                if (textarea[e] == '\n' || textarea[e] == undefined) {

                    fieldTextarea.selectionStart = e + f;
                    break
                }
            }
            d++

        }
        startCurs = fieldTextarea.selectionStart
        setTimeout(() => {
            fieldTextarea.selectionStart = fieldTextarea.selectionEnd = startCurs;
        });
        setTimeout(() => fieldTextarea.focus(), 50);

    })
    fourthLine.appendChild(keyButtonArrowUp);

    let keyButtonShift = document.createElement('button');
    keyButtonShift.className = 'key-shift';
    keyButtonShift.textContent = 'Shift';
    keyButtonShift.id = 'ShiftRight';

    keyButtonShift.addEventListener('mousedown', function () {
        this.classList.add('active');
        withShift = 'withShiftOn';
        let objJson1 = JSON.stringify(localStorage);
        let objJson4 = JSON.parse(objJson1);
        for (let key in objJson4) {
            languageSelection = key;
        }
        for (let i = 0; i < firstLine.children.length;) {
            firstLine.removeChild(firstLine.children[i]);
        }
        for (let i = 0; i < secondLine.children.length;) {
            secondLine.removeChild(secondLine.children[i]);
        }
        for (let i = 1; i < thirdLine.children.length;) {
            thirdLine.removeChild(thirdLine.children[i]);
        }
        for (let i = 0; i < fourthLine.children.length;) {
            fourthLine.removeChild(fourthLine.children[i]);
        }
        createKeyFirst(withShift)
        createKeySecond(withShift)
        createKeyThird(withShift)
        createKeyFourth(withShift)
        setTimeout(() => {
            fieldTextarea.selectionStart = fieldTextarea.selectionEnd;
        });
        setTimeout(() => fieldTextarea.focus(), 50);
    })

    keyButtonShift.addEventListener('mouseup', function () {
        let a = this
        withShift = 'withShiftOff';
        let objJson1 = JSON.stringify(localStorage);
        let objJson4 = JSON.parse(objJson1);
        for (let key in objJson4) {
            languageSelection = key;
        }
        for (let i = 0; i < firstLine.children.length;) {
            firstLine.removeChild(firstLine.children[i]);
        }
        for (let i = 0; i < secondLine.children.length;) {
            secondLine.removeChild(secondLine.children[i]);
        }
        for (let i = 1; i < thirdLine.children.length;) {
            thirdLine.removeChild(thirdLine.children[i]);
        }
        for (let i = 0; i < fourthLine.children.length;) {
            fourthLine.removeChild(fourthLine.children[i]);
        }
        createKeyFirst(withShift)
        createKeySecond(withShift)
        createKeyThird(withShift)
        createKeyFourth(withShift)
        setTimeout(() => {
            fieldTextarea.selectionStart = fieldTextarea.selectionEnd;
        });
        setTimeout(() => fieldTextarea.focus(), 50);
        setTimeout(function () { a.classList.remove('active') }, 150)
    })

    keyButtonShift.addEventListener('click', function () {

    })
    fourthLine.appendChild(keyButtonShift);
    return
}
createKeyFourth(withShift)

function createKeyFifth() {
    let keyButtonControlLeft = document.createElement('button');
    keyButtonControlLeft.className = 'key-button';
    keyButtonControlLeft.innerHTML = 'Ctrl';
    keyButtonControlLeft.id = 'ControlLeft';

    keyButtonControlLeft.addEventListener('mousedown', function () {
        this.classList.add('active');
    })

    keyButtonControlLeft.addEventListener('mouseup', function () {
        let a = this
        setTimeout(function () { a.classList.remove('active') }, 150)
    })

    keyButtonControlLeft.addEventListener('click', function () {

    })
    fifthLine.appendChild(keyButtonControlLeft);

    let keyButtonMetaLeft = document.createElement('button');
    keyButtonMetaLeft.className = 'key-button';
    keyButtonMetaLeft.innerHTML = 'Win';
    keyButtonMetaLeft.id = 'MetaLeft';

    keyButtonMetaLeft.addEventListener('mousedown', function () {
        this.classList.add('active');
    })

    keyButtonMetaLeft.addEventListener('mouseup', function () {
        let a = this
        setTimeout(function () { a.classList.remove('active') }, 150)
    })

    keyButtonMetaLeft.addEventListener('click', function () {

    })
    fifthLine.appendChild(keyButtonMetaLeft);

    let keyButtonAltLeft = document.createElement('button');
    keyButtonAltLeft.className = 'key-button';
    keyButtonAltLeft.innerHTML = 'Alt';
    keyButtonAltLeft.id = 'AltLeft';

    keyButtonAltLeft.addEventListener('mousedown', function () {
        this.classList.add('active');
    })

    keyButtonAltLeft.addEventListener('mouseup', function () {
        let a = this
        setTimeout(function () { a.classList.remove('active') }, 150)
    })

    keyButtonAltLeft.addEventListener('click', function () {

    })
    fifthLine.appendChild(keyButtonAltLeft);


    let keyButtonSpace = document.createElement('button');
    keyButtonSpace.className = 'key-space';
    keyButtonSpace.textContent = 'Space';
    keyButtonSpace.id = ' ';

    keyButtonSpace.addEventListener('mousedown', function () {
        this.classList.add('active');
    })

    keyButtonSpace.addEventListener('mouseup', function () {
        let a = this
        setTimeout(function () { a.classList.remove('active') }, 150)
    })

    keyButtonSpace.addEventListener('click', function () {
        let textarea = fieldTextarea.value.split('')
        let b = fieldTextarea.selectionStart

        textarea.splice(b, 0, ' ');
        fieldTextarea.value = ''
        for (let i = 0; i < textarea.length; i++) {
            fieldTextarea.value = fieldTextarea.value + textarea[i]
        }

        fieldTextarea.selectionStart = b + 1
        startCurs = fieldTextarea.selectionStart
        setTimeout(() => {
            fieldTextarea.selectionStart = fieldTextarea.selectionEnd = startCurs;
        });
        setTimeout(() => fieldTextarea.focus(), 50);
        return fieldTextarea.value
    })
    fifthLine.appendChild(keyButtonSpace);

    let keyButtonAltRight = document.createElement('button');
    keyButtonAltRight.className = 'key-button';
    keyButtonAltRight.innerHTML = 'Alt';
    keyButtonAltRight.id = 'AltRight';

    keyButtonAltRight.addEventListener('mousedown', function () {
        this.classList.add('active');
    })

    keyButtonAltRight.addEventListener('mouseup', function () {
        let a = this
        setTimeout(function () { a.classList.remove('active') }, 150)
    })

    keyButtonAltRight.addEventListener('click', function () {

    })
    fifthLine.appendChild(keyButtonAltRight);

    let keyButtonArrowLeft = document.createElement('button');
    keyButtonArrowLeft.className = 'key-button';
    keyButtonArrowLeft.innerHTML = '&leftarrow;';
    keyButtonArrowLeft.id = 'ArrowLeft';

    keyButtonArrowLeft.addEventListener('mousedown', function () {
        this.classList.add('active');
    })

    keyButtonArrowLeft.addEventListener('mouseup', function () {
        let a = this
        setTimeout(function () { a.classList.remove('active') }, 150)
    })

    keyButtonArrowLeft.addEventListener('click', function () {
        let b = fieldTextarea.selectionStart
        if (b > 0) {
            fieldTextarea.selectionStart = b - 1
            startCurs = fieldTextarea.selectionStart
            setTimeout(() => {
                fieldTextarea.selectionStart = fieldTextarea.selectionEnd = startCurs;
            });
            setTimeout(() => fieldTextarea.focus(), 50);
        }
    })
    fifthLine.appendChild(keyButtonArrowLeft);

    let keyButtonArrowDown = document.createElement('button');
    keyButtonArrowDown.className = 'key-button';
    keyButtonArrowDown.innerHTML = '&downarrow;';
    keyButtonArrowDown.id = 'ArrowDown';

    keyButtonArrowDown.addEventListener('mousedown', function () {
        this.classList.add('active');
    })

    keyButtonArrowDown.addEventListener('mouseup', function () {
        let a = this
        setTimeout(function () { a.classList.remove('active') }, 150)
    })

    keyButtonArrowDown.addEventListener('click', function () {

        let f = 0;
        let textarea = fieldTextarea.value.split('')
        let b = fieldTextarea.selectionStart
        let g = String(b)
        g = Number(g)
        let a = 0;
        let c = fieldTextarea.selectionStart;
        if (textarea[b] == undefined || textarea[b] == '\n') {
            for (fieldTextarea.selectionStart; fieldTextarea.selectionStart <= textarea.length; fieldTextarea.selectionStart++) {
                if (textarea[fieldTextarea.selectionStart] == '\n' || textarea[fieldTextarea.selectionStart] == undefined) {
                    fieldTextarea.selectionStart = fieldTextarea.selectionStart + 1
                    break
                }
            }
            for (fieldTextarea.selectionStart; fieldTextarea.selectionStart <= textarea.length; fieldTextarea.selectionStart++) {
                if (textarea[fieldTextarea.selectionStart] == '\n' || textarea[fieldTextarea.selectionStart] == undefined) {
                    break
                }
                f++
            }
            fieldTextarea.selectionStart = fieldTextarea.selectionStart - f
            startCurs = fieldTextarea.selectionStart
        }
        else {
            if (g == textarea.length - 1) {
                startCurs = fieldTextarea.selectionStart
            }
            else {
                for (b; b <= textarea.length; b++) {
                    if (textarea[b] == '\n' || textarea[b] == undefined) {
                        if (textarea[b] == undefined) {
                            a = b;
                            break
                        }
                        b = b + 1;
                        a = b;
                        break
                    }
                }
                if (textarea[c - 1] !== '\n' || textarea[b] == undefined) {
                    for (c; c > 0;) {
                        if (textarea[c - 1] == '\n' || textarea[c] == undefined) {
                            if (textarea[b] == undefined) {
                                f = 0;
                                break
                            }
                            break
                        }
                        f++
                        c--
                    }
                }
                fieldTextarea.selectionStart = a + f
                startCurs = fieldTextarea.selectionStart
            }
        }


        setTimeout(() => {
            fieldTextarea.selectionStart = fieldTextarea.selectionEnd = startCurs;
        });
        setTimeout(() => fieldTextarea.focus(), 50);
    })
    fifthLine.appendChild(keyButtonArrowDown);

    let keyButtonArrowRight = document.createElement('button');
    keyButtonArrowRight.className = 'key-button';
    keyButtonArrowRight.innerHTML = '&rightarrow;';
    keyButtonArrowRight.id = 'ArrowRight';

    keyButtonArrowRight.addEventListener('mousedown', function () {
        this.classList.add('active');
    })

    keyButtonArrowRight.addEventListener('mouseup', function () {
        let a = this
        setTimeout(function () { a.classList.remove('active') }, 150)
    })

    keyButtonArrowRight.addEventListener('click', function () {
        let b = fieldTextarea.selectionStart
        fieldTextarea.selectionStart = b + 1
        startCurs = fieldTextarea.selectionStart
        setTimeout(() => {
            fieldTextarea.selectionStart = fieldTextarea.selectionEnd = startCurs;
        });
        setTimeout(() => fieldTextarea.focus(), 50);
    })
    fifthLine.appendChild(keyButtonArrowRight);

    let keyButtonControlRight = document.createElement('button');
    keyButtonControlRight.className = 'key-button';
    keyButtonControlRight.innerHTML = 'Ctrl';
    keyButtonControlRight.id = 'ControlRight';

    keyButtonControlRight.addEventListener('mousedown', function () {
        this.classList.add('active');
    })

    keyButtonControlRight.addEventListener('mouseup', function () {
        let a = this
        setTimeout(function () { a.classList.remove('active') }, 150)
    })

    keyButtonControlRight.addEventListener('click', function () {

    })
    fifthLine.appendChild(keyButtonControlRight);
    return
}
createKeyFifth()

document.body.addEventListener('keydown', function (index) {

    if (index.altKey && index.ctrlKey) {
        for (let i = 0; i < keyField.children.length; i++) {
            for (let j = 0; j < keyField.children[i].children.length; j++) {
                if (keyField.children[i].children[j].id.toUpperCase() == index.code.toUpperCase() || keyField.children[i].children[j].id.toUpperCase() == index.key.toUpperCase()) {
                    keyField.children[i].children[j].classList.add('active');
                };
            }
        }
        if (languageSelection == 'en') {
            localStorage.clear();
            localStorage.setItem('ru', 'ru');
            let objJson1 = JSON.stringify(localStorage);
            let objJson4 = JSON.parse(objJson1);
            for (let key in objJson4) {
                languageSelection = key;
            }
            for (let i = 0; i < firstLine.children.length;) {
                firstLine.removeChild(firstLine.children[i]);
            }
            for (let i = 0; i < secondLine.children.length;) {
                secondLine.removeChild(secondLine.children[i]);
            }
            for (let i = 1; i < thirdLine.children.length;) {
                thirdLine.removeChild(thirdLine.children[i]);
            }
            for (let i = 1; i < fourthLine.children.length;) {
                fourthLine.removeChild(fourthLine.children[i]);
            }
            createKeyFirst(withShift)
            createKeySecond(withShift)
            createKeyThird(withShift)
            createKeyFourth(withShift)
        }
        else if (languageSelection !== 'en') {
            localStorage.clear();
            localStorage.setItem('en', 'en');
            let objJson1 = JSON.stringify(localStorage);
            let objJson4 = JSON.parse(objJson1);
            for (let key in objJson4) {
                languageSelection = key;
            }
            for (let i = 0; i < firstLine.children.length;) {
                firstLine.removeChild(firstLine.children[i]);
            }
            for (let i = 0; i < secondLine.children.length;) {
                secondLine.removeChild(secondLine.children[i]);
            }
            for (let i = 1; i < thirdLine.children.length;) {
                thirdLine.removeChild(thirdLine.children[i]);
            }
            for (let i = 1; i < fourthLine.children.length;) {
                fourthLine.removeChild(fourthLine.children[i]);
            }
            createKeyFirst(withShift)
            createKeySecond(withShift)
            createKeyThird(withShift)
            createKeyFourth(withShift)
        }
        return
    }
    else if (index.code == 'Tab') {
        index.preventDefault()
        let textarea = fieldTextarea.value.split('')
        let b = fieldTextarea.selectionStart
        textarea.splice(b, 0, '\t');
        fieldTextarea.value = ''
        for (let i = 0; i < textarea.length; i++) {
            fieldTextarea.value = fieldTextarea.value + textarea[i]
        }

        fieldTextarea.selectionStart = b + 1
        startCurs = fieldTextarea.selectionStart
        setTimeout(() => {
            fieldTextarea.selectionStart = fieldTextarea.selectionEnd = startCurs;
        });
        setTimeout(() => fieldTextarea.focus(), 50);
        for (let i = 0; i < keyField.children.length; i++) {
            for (let j = 0; j < keyField.children[i].children.length; j++) {
                if (keyField.children[i].children[j].id == index.code) {
                    keyField.children[i].children[j].classList.add('active');
                    return
                };
            }
        }
    }
    else {
        if (index.shiftKey) {
            withShift = 'withShiftOn';
            let objJson1 = JSON.stringify(localStorage);
            let objJson4 = JSON.parse(objJson1);
            for (let key in objJson4) {
                languageSelection = key;
            }
            for (let i = 0; i < firstLine.children.length;) {
                firstLine.removeChild(firstLine.children[i]);
            }
            for (let i = 0; i < secondLine.children.length;) {
                secondLine.removeChild(secondLine.children[i]);
            }
            for (let i = 1; i < thirdLine.children.length;) {
                thirdLine.removeChild(thirdLine.children[i]);
            }
            for (let i = 1; i < fourthLine.children.length;) {
                fourthLine.removeChild(fourthLine.children[i]);
            }
            createKeyFirst(withShift)
            createKeySecond(withShift)
            createKeyThird(withShift)
            createKeyFourth(withShift)
        }
        let textarea = fieldTextarea.value.split('')
        let b = fieldTextarea.selectionStart
        fieldTextarea.selectionStart = fieldTextarea.selectionEnd = fieldTextarea.selectionStart;
        fieldTextarea.focus()
        if (index.code == 'CapsLock') {
            index.preventDefault()
            for (let i = 0; i < keyField.children.length; i++) {
                for (let j = 0; j < keyField.children[i].children.length; j++) {
                    if (keyField.children[i].children[j].id == index.code) {
                        for (let kei in keyField.children[i].children[j].classList) {
                            if (keyField.children[i].children[j].classList[kei] == 'active') {
                                keyField.children[i].children[j].classList.remove('active')
                                return
                            }
                        }
                        keyField.children[i].children[j].classList.add('active');
                        return
                    };
                }
            }
            return
        }
        else {
            for (let k = 0; k < keyField.children.length; k++) {
                for (let j = 0; j < keyField.children[k].children.length; j++) {
                    if (keyField.children[k].children[j].id.toUpperCase() == index.code.toUpperCase() || keyField.children[k].children[j].id.toUpperCase() == index.key.toUpperCase()) {
                        keyField.children[k].children[j].classList.add('active');
                        if (index.code == 'CapsLock', index.key == 'Meta' || index.key == 'Shift' || index.key == 'Tab' || index.key == 'Control' || index.key == 'Alt' ||
                            index.key == 'Backspace' || index.key == 'Enter' || index.key == 'ArrowUp' || index.key == 'ArrowRight' ||
                            index.key == 'ArrowLeft' || index.key == 'ArrowDown' || index.key == ' ' || index.key == 'Delete') {
                            continue
                        }
                        else {
                            index.preventDefault()
                            for (let i = 0; i < keyField.children.length; i++) {
                                for (let t = 0; t < keyField.children[i].children.length; t++) {
                                    if (keyField.children[i].children[t].id === 'CapsLock') {
                                        for (let kei in keyField.children[i].children[t].classList) {
                                            if (keyField.children[i].children[t].classList[kei] == 'active') {
                                                for (let y = 0; y < keyField.children.length; y++) {
                                                    for (let u = 0; u < keyField.children[y].children.length; u++) {
                                                        if (keyField.children[y].children[u].id == 'ShiftLeft' || keyField.children[y].children[u].textContent == 'Shift') {
                                                            for (let keis in keyField.children[y].children[u].classList) {
                                                                if (keyField.children[y].children[u].classList[keis] == 'active') {
                                                                    if (index.key == 'Meta' || index.key == 'Tab' || index.key == 'Shift' || index.key == 'Control' || index.key == 'Alt' ||
                                                                        index.key == 'Backspace' || index.key == 'Enter' || index.key == 'ArrowUp' || index.key == 'ArrowRight' ||
                                                                        index.key == 'ArrowLeft' || index.key == 'ArrowDown' || index.key == ' ' || index.key == 'Delete') {

                                                                        continue
                                                                    }
                                                                    else {
                                                                        for (let keys in arrayOfLettersFin[String(languageSelection)][withShift]) {
                                                                            for (let keys1 in arrayOfLettersFin[String(languageSelection)][withShift][keys]) {
                                                                                if (index.code == keys1) {
                                                                                    textarea.splice(b, 0, arrayOfLettersFin[String(languageSelection)][withShift][keys][keys1].toLowerCase());
                                                                                    fieldTextarea.value = ''
                                                                                    for (let i = 0; i < textarea.length; i++) {
                                                                                        fieldTextarea.value = fieldTextarea.value + textarea[i]
                                                                                    }

                                                                                    fieldTextarea.selectionStart = b + 1
                                                                                    startCurs = fieldTextarea.selectionStart
                                                                                    setTimeout(() => {
                                                                                        fieldTextarea.selectionStart = fieldTextarea.selectionEnd = startCurs;
                                                                                    });

                                                                                    return fieldTextarea.value
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }

                                                if (index.key == 'Meta' || index.key == 'Shift' || index.key == 'Tab' || index.key == 'Control' || index.key == 'Alt' ||
                                                    index.key == 'Backspace' || index.key == 'Enter' || index.key == 'ArrowUp' || index.key == 'ArrowRight' ||
                                                    index.key == 'ArrowLeft' || index.key == 'ArrowDown' || index.key == ' ' || index.key == 'Delete') {
                                                    continue
                                                }
                                                else {
                                                    for (let keys in arrayOfLettersFin[String(languageSelection)][withShift]) {
                                                        for (let keys1 in arrayOfLettersFin[String(languageSelection)][withShift][keys]) {
                                                            if (index.code == keys1) {
                                                                textarea.splice(b, 0, arrayOfLettersFin[String(languageSelection)][withShift][keys][keys1].toUpperCase());
                                                                fieldTextarea.value = ''
                                                                for (let i = 0; i < textarea.length; i++) {
                                                                    fieldTextarea.value = fieldTextarea.value + textarea[i]
                                                                }

                                                                fieldTextarea.selectionStart = b + 1
                                                                startCurs = fieldTextarea.selectionStart
                                                                setTimeout(() => {
                                                                    fieldTextarea.selectionStart = fieldTextarea.selectionEnd = startCurs;
                                                                });

                                                                return fieldTextarea.value
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    else if (keyField.children[i].children[t].id === 'ShiftLeft' || keyField.children[i].children[t].textContent === 'Shift') {
                                        for (let kei in keyField.children[i].children[t].classList) {
                                            if (keyField.children[i].children[t].classList[kei] == 'active') {
                                                for (let y = 0; y < keyField.children.length; y++) {
                                                    for (let u = 0; u < keyField.children[y].children.length; u++) {
                                                        if (keyField.children[y].children[u].id == 'CapsLock') {
                                                            for (let keis in keyField.children[y].children[u].classList) {
                                                                if (keyField.children[y].children[u].classList[keis] == 'active') {
                                                                    if (index.key == 'Meta' || index.key == 'Tab' || index.key == 'Shift' || index.key == 'Control' || index.key == 'Alt' ||
                                                                        index.key == 'Backspace' || index.key == 'Enter' || index.key == 'ArrowUp' || index.key == 'ArrowRight' ||
                                                                        index.key == 'ArrowLeft' || index.key == 'ArrowDown' || index.key == ' ' || index.key == 'Delete') {

                                                                        continue
                                                                    }
                                                                    else {
                                                                        for (let keys in arrayOfLettersFin[String(languageSelection)][withShift]) {
                                                                            for (let keys1 in arrayOfLettersFin[String(languageSelection)][withShift][keys]) {
                                                                                if (index.code == keys1) {
                                                                                    textarea.splice(b, 0, arrayOfLettersFin[String(languageSelection)][withShift][keys][keys1].toLowerCase());
                                                                                    fieldTextarea.value = ''
                                                                                    for (let i = 0; i < textarea.length; i++) {
                                                                                        fieldTextarea.value = fieldTextarea.value + textarea[i]
                                                                                    }

                                                                                    fieldTextarea.selectionStart = b + 1
                                                                                    startCurs = fieldTextarea.selectionStart
                                                                                    setTimeout(() => {
                                                                                        fieldTextarea.selectionStart = fieldTextarea.selectionEnd = startCurs;
                                                                                    });

                                                                                    return fieldTextarea.value
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                                if (index.key == 'Meta' || index.key == 'Shift' || index.key == 'Tab' || index.key == 'Control' || index.key == 'Alt' ||
                                                    index.key == 'Backspace' || index.key == 'Enter' || index.key == 'ArrowUp' || index.key == 'ArrowRight' ||
                                                    index.key == 'ArrowLeft' || index.key == 'ArrowDown' || index.key == ' ' || index.key == 'Delete') {
                                                    continue
                                                }
                                                else {
                                                    for (let keys in arrayOfLettersFin[String(languageSelection)][withShift]) {
                                                        for (let keys1 in arrayOfLettersFin[String(languageSelection)][withShift][keys]) {
                                                            if (index.code == keys1) {
                                                                textarea.splice(b, 0, arrayOfLettersFin[String(languageSelection)][withShift][keys][keys1].toUpperCase());
                                                                fieldTextarea.value = ''
                                                                for (let i = 0; i < textarea.length; i++) {
                                                                    fieldTextarea.value = fieldTextarea.value + textarea[i]
                                                                }

                                                                fieldTextarea.selectionStart = b + 1
                                                                startCurs = fieldTextarea.selectionStart
                                                                setTimeout(() => {
                                                                    fieldTextarea.selectionStart = fieldTextarea.selectionEnd = startCurs;
                                                                });

                                                                return fieldTextarea.value
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }

                            if (index.key == 'Meta' || index.key == 'Tab' || index.key == 'Shift' || index.key == 'Control' || index.key == 'Alt' ||
                                index.key == 'Backspace' || index.key == 'Enter' || index.key == 'ArrowUp' || index.key == 'ArrowRight' ||
                                index.key == 'ArrowLeft' || index.key == 'ArrowDown' || index.key == ' ' || index.key == 'Delete') {

                                continue
                            }
                            else {
                                for (let keys in arrayOfLettersFin[String(languageSelection)][withShift]) {
                                    for (let keys1 in arrayOfLettersFin[String(languageSelection)][withShift][keys]) {
                                        if (index.code == keys1) {
                                            textarea.splice(b, 0, arrayOfLettersFin[String(languageSelection)][withShift][keys][keys1].toLowerCase());
                                            fieldTextarea.value = ''
                                            for (let i = 0; i < textarea.length; i++) {
                                                fieldTextarea.value = fieldTextarea.value + textarea[i]
                                            }

                                            fieldTextarea.selectionStart = b + 1
                                            startCurs = fieldTextarea.selectionStart
                                            setTimeout(() => {
                                                fieldTextarea.selectionStart = fieldTextarea.selectionEnd = startCurs;
                                            });

                                            return fieldTextarea.value
                                        }
                                    }
                                }
                            }
                        }
                        return
                    }
                }
            }
        }
    }
})
document.body.addEventListener('keyup', function (index) {
    console.log(index.code)
    if (index.key == 'Shift') {

        if (index.shiftKey === false) {
            withShift = 'withShiftOff';
            let objJson1 = JSON.stringify(localStorage);
            let objJson4 = JSON.parse(objJson1);
            for (let key in objJson4) {
                languageSelection = key;
            }
            for (let i = 0; i < firstLine.children.length;) {
                firstLine.removeChild(firstLine.children[i]);
            }
            for (let i = 0; i < secondLine.children.length;) {
                secondLine.removeChild(secondLine.children[i]);
            }
            for (let i = 1; i < thirdLine.children.length;) {
                thirdLine.removeChild(thirdLine.children[i]);
            }
            for (let i = 1; i < fourthLine.children.length;) {
                fourthLine.removeChild(fourthLine.children[i]);
            }
            createKeyFirst(withShift)
            createKeySecond(withShift)
            createKeyThird(withShift)
            createKeyFourth(withShift)
            for (let k = 0; k < keyField.children.length; k++) {
                for (let j = 0; j < keyField.children[k].children.length; j++) {
                    if (keyField.children[k].children[j].id.toUpperCase() == index.code.toUpperCase() || keyField.children[k].children[j].id.toUpperCase() == index.key.toUpperCase()) {
                        if (index.code == 'CapsLock') {
                            return
                        }
                        setTimeout(function () { keyField.children[k].children[j].classList.remove('active') }, 150)

                        return
                    };
                }
            }
        }
    }
    else if (index.code == 'CapsLock') {
        return
    }
    else {
        for (let k = 0; k < keyField.children.length; k++) {
            for (let j = 0; j < keyField.children[k].children.length; j++) {
                if (keyField.children[k].children[j].id.toUpperCase() == index.code.toUpperCase() || keyField.children[k].children[j].id.toUpperCase() == index.key.toUpperCase()) {
                    setTimeout(function () { keyField.children[k].children[j].classList.remove('active') }, 150)
                    return
                };
            }
        }
    }
})

function positionСursor(index, n) {
    let textarea = fieldTextarea.value.split('')
    let b = fieldTextarea.selectionStart
    for (let i = 0; i < keyField.children.length; i++) {
        for (let j = 0; j < keyField.children[i].children.length; j++) {
            if (keyField.children[i].children[j].id == 'CapsLock') {
                for (let kei in keyField.children[i].children[j].classList) {
                    if (keyField.children[i].children[j].classList[kei] == 'active') {
                        for (let y = 0; y < keyField.children.length; y++) {
                            for (let u = 0; u < keyField.children[y].children.length; u++) {
                                if (keyField.children[y].children[u].id == 'ShiftLeft' || keyField.children[i].children[j].textContent === 'Shift') {
                                    for (let keis in keyField.children[y].children[u].classList) {
                                        if (keyField.children[y].children[u].classList[keis] == 'active') {
                                            for (let key in arrayOfLettersFin[String(languageSelection)][n][index]) {
                                                textarea.splice(b, 0, arrayOfLettersFin[String(languageSelection)][n][index][key].toLowerCase());
                                                fieldTextarea.value = ''
                                                for (let i = 0; i < textarea.length; i++) {
                                                    fieldTextarea.value = fieldTextarea.value + textarea[i]
                                                }

                                                fieldTextarea.selectionStart = b + 1
                                                startCurs = fieldTextarea.selectionStart
                                                setTimeout(() => {
                                                    fieldTextarea.selectionStart = fieldTextarea.selectionEnd = startCurs;
                                                });

                                                return fieldTextarea.value
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        for (let key in arrayOfLettersFin[String(languageSelection)][n][index]) {
                            textarea.splice(b, 0, arrayOfLettersFin[String(languageSelection)][n][index][key].toUpperCase());
                            fieldTextarea.value = ''
                            for (let i = 0; i < textarea.length; i++) {
                                fieldTextarea.value = fieldTextarea.value + textarea[i]
                            }

                            fieldTextarea.selectionStart = b + 1
                            startCurs = fieldTextarea.selectionStart
                            setTimeout(() => {
                                fieldTextarea.selectionStart = fieldTextarea.selectionEnd = startCurs;
                            });

                            return fieldTextarea.value
                        }
                    }
                }
            }
            else if (keyField.children[i].children[j].id == 'ShiftLeft' || keyField.children[i].children[j].textContent === 'Shift') {
                for (let kei in keyField.children[i].children[j].classList) {
                    if (keyField.children[i].children[j].classList[kei] == 'active') {
                        for (let y = 0; y < keyField.children.length; y++) {
                            for (let u = 0; u < keyField.children[y].children.length; u++) {
                                if (keyField.children[y].children[u].id == 'CapsLock') {
                                    for (let keis in keyField.children[y].children[u].classList) {
                                        if (keyField.children[y].children[u].classList[keis] == 'active') {
                                            for (let key in arrayOfLettersFin[String(languageSelection)][n][index]) {
                                                textarea.splice(b, 0, arrayOfLettersFin[String(languageSelection)][n][index][key].toLowerCase());
                                                fieldTextarea.value = ''
                                                for (let i = 0; i < textarea.length; i++) {
                                                    fieldTextarea.value = fieldTextarea.value + textarea[i]
                                                }

                                                fieldTextarea.selectionStart = b + 1
                                                startCurs = fieldTextarea.selectionStart
                                                setTimeout(() => {
                                                    fieldTextarea.selectionStart = fieldTextarea.selectionEnd = startCurs;
                                                });

                                                return fieldTextarea.value
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        for (let key in arrayOfLettersFin[String(languageSelection)][n][index]) {
                            textarea.splice(b, 0, arrayOfLettersFin[String(languageSelection)][n][index][key]);
                            fieldTextarea.value = ''
                            for (let i = 0; i < textarea.length; i++) {
                                fieldTextarea.value = fieldTextarea.value + textarea[i]
                            }

                            fieldTextarea.selectionStart = b + 1
                            startCurs = fieldTextarea.selectionStart
                            setTimeout(() => {
                                fieldTextarea.selectionStart = fieldTextarea.selectionEnd = startCurs;
                            });

                            return fieldTextarea.value
                        }
                    }
                }
            }
        }
    }
    for (let key in arrayOfLettersFin[String(languageSelection)][n][index]) {
        textarea.splice(b, 0, arrayOfLettersFin[String(languageSelection)][n][index][key]);
        fieldTextarea.value = ''
        for (let i = 0; i < textarea.length; i++) {
            fieldTextarea.value = fieldTextarea.value + textarea[i]
        }

        fieldTextarea.selectionStart = b + 1
        startCurs = fieldTextarea.selectionStart
        setTimeout(() => {
            fieldTextarea.selectionStart = fieldTextarea.selectionEnd = startCurs;
        });

        return fieldTextarea.value
    }
}
