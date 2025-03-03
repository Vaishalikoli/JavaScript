// Objective: Practice with Arrays
// 1. Create an array called teaFlavours with four different flavours as strings.
let teaFlavours = ["ginger", "cardamom", "masala", "lemon", "green"];
const firsTea = teaFlavours[0];
console.log(firsTea);

// 2. Create an array called cities with five different city names.

let cities = ["Mumbai", "Delhi", "Bangalore", "Pune", "Chennai"];
const favoritecity = cities[2];
console.log(favoritecity);

//3. Create an array called cars with five different car names. Replace the second car name with another name.

let cars = ["BMW", "Audi", "Mercedes", "Toyota", "Ford"];
cars[1] = "Lamborghini";
console.log(cars);

//4. Create an array called citiesVisited with five different city names. Add another city at the end of the array.

let citiesVisited = ["Mumbai", "Delhi", "Bangalore", "Pune", "Chennai"];
citiesVisited.push("Hyderabad");
console.log(citiesVisited);

//5. Create an array called teaOrders with five different tea flavours. Remove the last tea flavour from the array.

let teaOrders = ["ginger", "cardamom", "masala", "lemon", "green"];
const lastOrder = teaOrders.pop();
console.log(teaOrders);
console.log(lastOrder);

//6. Create an array called popularCities with five different city names. Create a copy of popularCities and save it as softCopy. Remove the last city from popularCities and print both arrays.

let popularCities = ["Mumbai", "Delhi", "Bangalore", "Pune", "Chennai"];
let softCopy = popularCities;
popularCities.pop();
console.log(popularCities);
console.log(softCopy);

//7. Create an array called topCities with five different city names. Create a copy of topCities and save it as hardCopy. Remove the last city from topCities and print both arrays.

let topCities = ["Mumbai", "Delhi", "Bangalore", "Pune", "Chennai"];
let hardCopy = [...topCities];
topCities.pop();
console.log(topCities);
console.log(hardCopy);

//8. Create an array called eurpeanCities with five different city names. Create an array called asianCities with five different city names. Concatenate both arrays and save them as worldCities.

let eurpeanCities = ["Paris", "London", "Berlin", "Madrid", "Rome"];
let asianCities = ["Tokyo", "Beijing", "Delhi", "Seoul", "Mumbai"];
let worldCities = eurpeanCities.concat(asianCities);
console.log(worldCities);

//9. Create an array called teaMenu with five different tea flavours. Find the length of the array.

let teaMenu = ["ginger", "cardamom", "masala", "lemon", "green"];
let teaMenuLength = teaMenu.length;
console.log(teaMenuLength);

//10. Create an array called cityBucketList with five different city names. Check if Kyoto is in the array.

let cityBucketList = ["Kyoto", "Sydney", "Lisbon", "New York", "Paris"];
let isKyotoThere = cityBucketList.includes("Kyoto");
console.log(isKyotoThere);
