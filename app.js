// 1
const numberOfSeries = prompt ("Nechta serial ko'rdingiz?", "");
console.log(numberOfSeries);

// 2
const seriesDB = {
    count: numberOfSeries,
    series: {},
    actors: {},
    genres: [],
    privat: false
};

// 3
let a = prompt ("Oxirgi ko'rgan serialingiz?", ""),
    b = prompt ("Nechi baho berasiz", ""),
    c = prompt ("Oxirgi ko'rgan serialingiz?", ""),
    d = prompt ("Nechi baho berasiz", "");

seriesDB.series [a] = b;
seriesDB.series [c] = d;

console.log(seriesDB);

// const singer = prompt ("Qaysi qo'shiqchini eshitasiz", "");
// console.log(singer);

// const seriesDB = {
//         count: singer,
//         series: {},
//         actors: {},
//         genres: [],
//         privat: false
//     };

// let a = prompt ("Qaysi treki yoqadi", ""),  
//     b = prompt ("Nechi baho berasiz", ""),  
//     c = prompt ("Qaysi treki yoqadi", ""),
//     d = prompt ("Nechi baho berasiz", "");

// seriesDB.series [a] = b;
// seriesDB.series [c] = d; 
// console.log(seriesDB);