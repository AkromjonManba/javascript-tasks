// JavaScript Masalalari:

// Loop / Array / String / Function / Object

/* --------------------  1 MASHQ🚩 -------------------- */
// ushbu arraydagi stringni inxednini toping.
// const myArray = [[false, true], [1, 2], 99, 'yaxshi']

/* --------------------  2 MASHQ🚩 -------------------- */
// Array ichidagi
// [null, 0, "", false, undefined, NaN]
// qiymatlarini ajratib oladigan cod yozing.
// const checkData = [null, 'false', 0, 99, false, undefined, '', NaN, '0']
// const falsey = []


/* --------------------  3 MASHQ🚩 -------------------- */
// Berilgan qiymat: 'samarqand'
// Kutilyotgan qiymat : 'dnaqramas' => elementlarni teskari qilib beradigan cod yozing.


/* --------------------  4 MASHQ🚩 -------------------- */
// 7) Arraydagi Natural raqamlarni yig’indisini topadigan cod yozing.
// const numbers = [-1, 87, 4, 3.1, -5.5, Infinity, 0, 1, 2, 0.9]


/* --------------------  5 MASHQ🚩 -------------------- */
// 7) Prompt’dan kiritilgan stringlar ichidagi “a” harfi necha marta ishtirok etganini aniqlaydigan cod yozing.
// “Qalesiz yaxshimisiz ? Yaxshimi ishlar ?” - nechta “a” harifi qatnashganini toping.

// const words = 'Qalesiz yaxshimisiz ? Yaxshimi ishlar ?'


/* --------------------  6 MASHQ🚩 -------------------- */
// Berilgan: [21.1, "Roziya", "array", ["I am array"], null, true, 214]
// array berilgan Uni:
// Natija: ["number", "string", "string", "object", "object", "boolean", "number"]
// ko’rinishida qaytaring.

// const types = [21.1, 'Roziya', 'array', ['I am array'], null, true, 214]


/* --------------------  7 MASHQ🚩 -------------------- */
// Kiritilgan text'ni nechta elementdan iboratligini aniqlovchi cod yozing.lendth dan "FOIDALANMANG".

/* -------------------- 8 MASHQ🚩 -------------------- */
// Arrayning berilgan: [1, 2, 3, 4, 5] uning ichidagi elementlariga o’z index(position) raqamini qo’shib yangi array hosil qiling.
// Natija: [1, 3, 5, 7, 9] bo’lsin.

/* -------------------- 9 MASHQ🚩 -------------------- */
// Berilgan sonning “tarkibidagi” sonlar yig’indisini toping.
// Misol uchun:
/*
   1 + 2 + 3 = 6
   1 + 2 + 3 + ... + 10 = 55
   1 + 2 + 3 + ... + 7 = 28
*/

/* -------------------- 10 MASHQ🚩 -------------------- */
// functionga array kiritsak u array ichidagi raqamlarni teskari ishorasiga aylanitirib berisin.
// [1, 2, 3, 4, 5] => [-1, -2, -3, -4, -5]
// [1, -2, 3, -4, 5] => [-1, 2, -3, 4, -5]
// [] => []

// let numbers = [1, 2, 3, 4, 5]
// let result = []

// const reverseFunc = (arr) => {
//   arr.forEach((num) => {
//     result.push(num * -1)
//   })
// }
// reverseFunc(numbers)
// console.log(result);