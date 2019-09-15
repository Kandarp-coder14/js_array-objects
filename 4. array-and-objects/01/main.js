var myPenguin = {
name : "Misha",
origin : "Death and the Penguin, Penguin Lost",
author : "Andrey Kurkov"
};
myPenguin.favoriteFoods = ["peanuts", "donuts", "nuts"];
console.log(myPenguin.favoriteFoods[1]);

var firstFavFood = myPenguin.favoriteFoods[0];
console.log(firstFavFood);

myPenguin.favoriteFoods.push("apple");

console.log(myPenguin.favoriteFoods.length);

myPenguin.favoriteFoods.splice(3, "pineapples")
console.log(myPenguin.favoriteFoods[3]);

var lastFavFood = myPenguin.favoriteFoods[myPenguin.favoriteFoods.length -1]

console.log(lastFavFood)

for(let i = 0; i < myPenguin.favoriteFoods.length; i++){
console.log(myPenguin.favoriteFoods[i])
}