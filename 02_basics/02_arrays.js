const marvel_heroes = ["thor", "Ironman", "spiderman"];
const dc_heroes = ["superman", "flash", "batman"];

marvel_heroes.push(dc_heroes);

console.log(marvel_heroes);;
console.log(marvel_heroes[3][1]);
    
const all_heroes = marvel_heroes.concat(dc_heroes);

console.log(all_heroes);

const all_heroes2 = [...marvel_heroes, ...dc_heroes];

console.log(all_heroes2);

const another_array = [1,2,3, [4,5,6],7,[6,7,[4,5]]]];

const realAnother_array = another_array.flat(Infinity);

console.log(realAnother_array);

console.log(Array.isArray("Mohsin")); // false
console.log(Array.from("Mohsin")); // ['M', 'o', 'h', 's', 'i', 'n']
console.log(Array.from({name: "Mohsin", age: 30})); // []

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // [100, 200, 300]
