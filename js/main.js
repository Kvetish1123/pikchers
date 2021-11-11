// Берём ширину видимой части слайда
let container = document.getElementById('container').offsetWidth;
// Берём кнопку переключения на следующий слайд 
let btnNext = document.getElementById('next');
// Берём внутрненности слайда 
let slides = document.querySelectorAll('.slide');
// Создаём массив с новыми слайдами 
let sliders = [];
// Цикл по слайдам 
for (let i = 0; i < slides.length; ++i) {
  // Добавляем изображение из слайда 
  sliders[i] = slides[i].querySelector('img');
  // Удаляем слайд
  sliders[i].remove()
}
// Номер слайда
let step = 0;
// Позиция слайда 
let offset = 0;

// Функция для отрисовки слайда 
function drow() {
    // Создаём элемент слайда
    let slide = document.createElement('div');
    // Добавляем касс slide новому элементу 
    slide.classList.add('slide');
    // Добовляем дочерний элемент контент слайда 
    slide.appendChild(sliders[step])
    // Даём позицию для слайда
    slide.style.left = offset * container + 'px'
    // Добавляем слайд в контейнеры слайдеров 
    document.querySelector('.slider').appendChild(slide)
    // Если следующий слайд равен числу слайдеров, то
    if (step + 1 == slides.length)
        // Выключаем первый слайд
        step = 0;
    } else { // Иначе
        // Увеличиваем номер слайда на один 
        step++
    }
    // Назначаем позицию слайда
    offset = 1
}
drow(); drow();
// Создаем функцию для переключения 
function left() {
    // Запрещаем событие кнопки вперёд на клик 
    btnNext.removeEventListener('click', left)
    // Берём слайды 
    let slides2 = document.querySelectorAll('slide')
    // Позиция 
    let offset = 0;
    // Цикл для перемещения слайда 
    for (let i= 0; i < slides2.length; i++) {
        // Меняем позицию слайда 
        slides2[i].style.left = offset2 * container - container + 'px'
        // Увеличиваем позицию 
        offset2++;
}
// Ставим таймер 
setTimeout(function () {
     // Удаляем прошлый слайд
     slides2[0].remove()
     // Рисуем следующий слайд
     drow ()
     // Назначаем событие на кнопку вперёд 
     btnNext.addEventListener('click', left)
 },   500)
}
btnNext.addEventListener('click', left);











                  