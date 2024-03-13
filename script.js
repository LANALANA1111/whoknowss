// გვაქვს ერთი მასივი ამ მასივში დაუმატეთ ყველას id ები
//  მერე წაშალეთ მეორე id ის მქონე მონაცემი
//  დანარჩენებს დაუმატეთ 1 კრიტერიუმი
//   adult:true ან adult:false მათი ასაკიდან გამომდინარე
// const Data = [
//   {
//     name: "nika",
//     age: 20,
//     city: "Rustavi",
//   },
//   {
//     name: "lana",
//     age: null,
//     city: "tbilisi",
//   },
//   {
//     name: "saba",
//     age: 11,
//     city: "gori",
//   },
// ];

// const newdata = Data.map((item, index) => ({ id: index + 1, ...item }))
//   .filter((item) => item.id !== 2)
//   .map((item) => {
//     if (item.age > 18) {
//       return { ...item, adult: true };
//     } else {
//       return { ...item, adult: false };
//     }
//   })
//   console.log(newdata);

// არის მასივი შექმენით ერთი p ტეგი სადაც ჩამოწერთ ინფორმაციას
// რომელი პროდუქტი არაა მარაგში
// რა ღირს ყველა თითოეული პროდუქტი მაგალითად iphone ები 1000 * 10
// თუ ფასი მეტია 100 ზე დალოგეთ სახელი და "ძვირი"
// თუ ნაკლებია 100 ზე დალოგეთ სახელი და "იაფი"
// რომელია ყველაზე ძვირი
// რომელია ყველაზე იაფი
// რომელია ყველაზე მეტი მარაგში
// რამდენია შავი პროდუქტი

// const products = [
//   {
//     name: "iphone",
//     price: 1000,
//     count: 10,
//     color: "silver",
//   },
//   {
//     name: "samsung",
//     price: 500,
//     count: 5,
//     color: "black",
//   },
//   {
//     name: "lenovo",
//     price: 70,
//     count: 5,
//     color: "black",
//   },
//   {
//     name: "nokia",
//     price: 20,
//     count: 0,
//     color: "red",
//   },
// ];

// const productsNotInStock = products.filter((product) => product.count === 0);
// const expensiveProducts = products.filter((product) => product.price > 100);
// const cheapProducts = products.filter((product) => product.price < 100);
// const blackProductsCount = products.filter(
//   (product) => product.color === "black"
// ).length;

// const ptag = document.createElement("p");

// ptag.textContent = "not in stock:  ";
// document.body.appendChild(ptag);
// console.log(
//   "ძვირი: ",
//   expensiveProducts.map((product) => product.name)
// );
// console.log(
//   "იაფი: ",
//   cheapProducts.map((product) => product.name)
// );
// console.log("შავი პროდუქტების რაოდენობა: ", blackProductsCount);

///////////////////////////////////////////////////////////////////////
// უნდა დავლოგოთ რამდენია კონკრეტული კატეგორიის პროდუქტი
// რა სირთულის პროდუქტია 0-30% მარტივი 30-50% საშუალო 50-100% რთული
// ბოლოს დააბრუნეთ array სადაც იქნება მხოლოდ 200 ზე ნაკლები ფასის მქონე ელემენტები
//
// const data = [
//   { name: "harry potter", price: 20, category: "book", difficulty: "10%" },
//   { name: "phone", price: 1200, category: "electronics", difficulty: "77%" },
//   { name: "toaster", price: 100, category: "electronics", difficulty: "28%" },
//   { name: "chair", price: 120, category: "furniture", difficulty: "38%" },
//   { name: "bible", price: null, category: "book", difficulty: "0%" },
//   { name: "კივილი", price: 1000000, category: "paint", difficulty: "99%" },
//   { name: "sofa", price: 250, category: "furniture", difficulty: "57%" },
//   { name: "pc", price: 1500, category: "electronics", difficulty: "88%" },
// ];

// let book = 0;
// let electronics = 0;
// let furniture = 0;
// let paint = 0;
// data.forEach((item) => {
//   switch (item.category) {
//     case "book":
//       book++;
//       break;
//     case "electronics":
//       electronics++;
//       break;
//     case "furniture":
//       furniture++;
//       break;
//     case "paint":
//       paint++;
//       break;

//     default:
//       break;
//   }
// });
// console.log("book:", book);
// console.log("electronics:", electronics);
// console.log("furniture:", furniture);
// console.log("paint:", paint);

// console.log(
//   "მარტივია:",
//   data.filter((item) => item.difficulty < "30%")
// );
// console.log(
//   "საშუალო:",
//   data.filter((item) => item.difficulty > "30%" && item.difficulty < "50%")
// );
// console.log(
//   "რთული:",
//   data.filter((item) => item.difficulty > "50%")
// );
// const under200 = data
//   .map((item) => {
//     return {
//       under200: item.price < 200,
//       price: item.price,
//       name: item.name,
//     };
//   })
//   .filter((item) => item.under200);

// console.log("prices under 200:",under200);
