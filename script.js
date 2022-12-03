// ! ДЗ 20. Пошук у масиві

// Дан масив[16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47]
// 1) Знайти суму та кількість позитивних елементів.
// 2) Знайти мінімальний елемент масиву та його порядковий номер.
// 3) Знайти максимальний елемент масиву та його порядковий номер.
// 4) Визначити кількість негативних елементів.
// 5) Знайти кількість непарних позитивних елементів.
// 6) Знайти кількість парних позитивних елементів.
// 7) Знайти суму парних позитивних елементів.
// 8) Знайти суму непарних позитивних елементів.
// 9)Знайти добуток позитивних елементів.
// 10)Знайти найбільший серед елементів масиву, ост альні обнулити.

const array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
console.log(array);

// ! 1)Знайти суму та кількість позитивних елементів.
const arrayPositiveElemets = array.filter(function (item) {
    return item > 0
});
console.log(`Только положительные элементы ${arrayPositiveElemets}`);
console.log("");

// ! 1) Знайти суму та кількість позитивних елементів.
function summElements(arr) {
    let summ = 0;
    arr.forEach(function (item, i, array) {
        summ = summ + array[i];
    })
    return summ;
}
console.log(`Сумма положительных элементов ${summElements(arrayPositiveElemets)}`);

// ! 1) Знайти суму та кількість позитивних елементів.
const emountElement = arrayPositiveElemets.length;
console.log(`Колличество положительный элементов ${emountElement}`);
console.log("");

// ! 2) Знайти мінімальний елемент масиву та його порядковий номер.
let minElement = arrayPositiveElemets[0];
let maxElement = arrayPositiveElemets[0];

arrayPositiveElemets.forEach(function (item, i, arr) {
    if (arr[i] < minElement) minElement = arr[i];
    if (arr[i] > maxElement) maxElement = arr[i];
})
console.log(`Минимальный элемент ${minElement}`);

// ! 2) Знайти мінімальний елемент масиву та його порядковий номер.
let minIndex = [];
let maxIndex = [];

arrayPositiveElemets.forEach(function (item, i, arr) {
    if (arr[i] === minElement) minIndex.push(i);
    if (arr[i] === maxElement) maxIndex.push(i);
})
console.log(`Индекс минимального элемента ${minIndex}`);
console.log("");

// ! 3) Знайти максимальний елемент масиву та його порядковий номер.
console.log(`Максимальный элемент ${maxElement}`);
console.log(`Индекс максимального элемента ${maxIndex}`);
console.log("");

// ! 4) Визначити кількість негативних елементів.
const arrayNegativeElements = array.filter(function (item) {
    return item < 0
});
console.log(`Только отрицательные элементы ${arrayNegativeElements}`);
const emountNegativeElement = arrayNegativeElements.length;
console.log(`Колличество отрицательных элементов ${emountNegativeElement}`);
console.log("");

// ! 5) Знайти кількість непарних позитивних елементів.
const unpairedPositiveElements = arrayPositiveElemets.filter(function (item) {
    return item < 10
});
console.log(`Только непарные положительные элементы ${unpairedPositiveElements}`);
const emountUnpairedPositiveElements = unpairedPositiveElements.length;
console.log(`Колличество непарных положительных элементов ${emountUnpairedPositiveElements}`);
console.log("");

// ! 6) Знайти кількість парних позитивних елементів.
const pairedPositiveElements = arrayPositiveElemets.filter(function (item) {
    return item > 9
})
console.log(`Только парные положительные элементы ${pairedPositiveElements}`);
const emountPairedPositiveElements = pairedPositiveElements.length;
console.log(`Колличество парных положительных элементов ${emountPairedPositiveElements}`);
console.log("");

// ! 7) Знайти суму парних позитивних елементів.
console.log(`Сумма парных положительных элементов ${summElements(pairedPositiveElements)}`);

// ! 8) Знайти суму непарних позитивних елементів.
console.log(`Сумма непарных положительных элементов ${summElements(unpairedPositiveElements)}`);
console.log("");

// ! 9)Знайти добуток позитивних елементів.
let multiplicationPositiveElements;
arrayPositiveElemets.forEach(function (item, i, arr) {
    if (arr[i] === arr[0]) {
        multiplicationPositiveElements = arr[i];
    } else {
        multiplicationPositiveElements = multiplicationPositiveElements * arr[i];
    }
})
console.log(`Произведение положительных элементов ${multiplicationPositiveElements}`);
console.log("");

// ! 10)Знайти найбільший серед елементів масиву, остальні обнулити.
// const array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
// ! Копируем массив
let newArray = array
    .map(function (item, i) {
        return item;
    });

console.log(`Старый массив ${array}`);
console.log(`Новый массив ${newArray}`);
console.log("");
console.log(`Новый массив до изменений ${newArray}`);

let max = newArray[0];
newArray.forEach(function (item, i, arr) {
    if (arr[i] > max) max = arr[i];
    return max;
})

console.log(`Максимальный элемент ${max}`);
console.log("");

newArray.forEach(function (item, i, arr) {
    if (arr[i] === max) arr[i] = arr[i];
    if (arr[i] !== max) arr[i] = 0;
});

console.log(`Старый массив после изменений ${array}`);
console.log(`Новый массив после изменений ${newArray}`);

// !!!!!!!!!!!!!!!!!!!!!!
    // ! ДЗ 21. Change and render array

//     Дано:

// let amount = 100;
// let monday = [
//     ['Write a tutorial', 180],
//     ['Some web development', 120]
// ];
// let tuesday = [
//     ['Keep writing that tutorial', 240],
//     ['Some more web development', 360],
//     ['A whole lot of nothing', 240]
// ];

// Для элементов массивов monday и tuesday необходимо выполнить следующие методы:

// Сконвертировать время потраченное на выполнение задач в часы, вместо минут.
// Оставить только те задачи, на выполнение которых нужно более 2 - х часов.
// Умножить результат на часовую ставку(amount) и добавить полученное значение в качестве третъего элемента в массив.
// Вывести в html таблицу, которая состоит из ячеек с задачами в виде:

// <tr>
//     <td>Task name: Write a tutorial</td>
//     <td>Taks duration: 3 hours</td>
//     <td>Task amount: $300</td>
// </tr>


