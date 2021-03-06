/* eslint-disable prefer-destructuring */


// Необходимо реализовать перемещение объекта за курсором на JS без использования jQuery.

// Последовательность реализации:
// - На странице должны быть размещены 2 объекта: input для ввода текста и button для применения результата

// - Пользователь вводит в input любую строку

// - Нажимает на button и под формой отображается введенная строка

// - Пользователь кликает на любую букву в сроке и она перемещается за курсором в любое место

// - Пользователь нажимает еще раз и буква устанавливает последнюю позицию курсора

// - Пользователь может перемещать не только одну букву, а разбросать все слово по всему документу

// - Если отпустить перемещаемый символ на место другого символа, то второй символ становится на предыдущее место перемещаемого. Они не накладываются друг на друга.

// Нельзя использовать никакие готовые решения, а также библиотеки для перемещения объектов. Только чистый JS и css при необходимости

const form = document.forms.form;
const text = form.elements.text;
const list = document.querySelector('.list');

form.addEventListener("submit", (evt) => {
    evt.preventDefault();

    const newEl = document.createElement('li')
    newEl.textContent = text.value;

    list.append(newEl)

    form.reset()
})

// text.onchange = function () {
//     let string = text.value
//     for (let i = 0; i < string.length-1; i++) {
//         let element = string[i];

//         element.onclick = checkClick
//     }
// }

// function checkClick() {}



// const element = document.querySelector('.container')

list.addEventListener('mousedown', (event) => {

    document.addEventListener('mousemove', onMouseMove);

    function onMouseMove(event) {

        list.style.left = event.pageX - list.offsetWidth / 2 + 'px';
        list.style.top = event.pageY - list.offsetHeight / 2 + 'px';
        
    }

    list.addEventListener('mouseup', onMouseUp);

    function onMouseUp() {
        document.removeEventListener('mousemove', onMouseMove);
        list.removeEventListener('mouseup', onMouseUp)
    }
});

