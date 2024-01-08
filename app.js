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

let a = prompt ("Oxirgi ko'rgan serialingiz?", ""),
    b = prompt ("Nechi baho berasiz", ""),
    c = prompt ("Oxirgi ko'rgan serialingiz?", ""),
    d = prompt ("Nechi baho berasiz", "");

seriesDB.series [a] = b;
seriesDB.series [c] = d;

console.log(seriesDB);