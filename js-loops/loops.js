// for(let i = 1; i <= 10; i+=3){
//   console.log('Hello:', i);
// }

// for( let num = 1; num <= 20; num++){
//   console.log(`${num*num}`);
// }

// for(let i = 100; i !==142; i+=7)  {
//   console.log(i, "yep");
// }
// const examScores = [65,33,45,73,22,99];
// for(let i = 0; i < examScores.length; i++)  {
//   console.log(i, examScores[i]);
// }
// console.log(examScores[2]);

// const myStudents = [
//   {
//     firstName : 'Zeus',
//     grade : 86
//   },
//   {
//     firstName : 'Artemis',
//     grade : 97
//   },
//   {
//     firstName : 'Hera',
//     grade : 72
//   },
//   {
//     firstName : 'Apollo',
//     grade : 66
//   },
// ];
// let total = 0;
// for( let i = 0; i < myStudents.length; i++) {
// let student = myStudents[i];
// total += student.grade;
// }
// console.log(total/myStudents.length)

// for( let i = 1; i <= 10; i++) {
//   console.log('Outer Loop', i);
//   for(let j = 10; j >= 0; j-=2)  {
//     console.log('   Inner Loop', j);
//   }
// }
// const target = Math.floor(Math.random() * 10);
// let guess = Math.floor(Math.random() * 10);
// while(guess !== target) {
//   console.log(`Target:${target}, Guess:${guess}`)
//   guess = Math.floor(Math.random() * 10);
// }
// console.log(`Target:${target}, Guess:${guess}, YOU WIN!`);

// const target = Math.floor(Math.random() * 10);
// let guess = Math.floor(Math.random() * 10);
// while(true){
//   if(target === guess) break;
//   console.log(`Target:${target}, Guess:${guess}`);
//   guess = Math.floor(Math.random() * 10);
// }
// console.log(`Target:${target}, Guess:${guess}, YOU WIN!`);

// let subreddits = ['soccer', 'popheads', 'cringe', 'books'];
// for(let sub of subreddits){
//   console.log(sub);
// }

const magicSquare = [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8]
];

// for(let i = 0; i<magicSquare.length; i++){
//   let row = magicSquare[i];
//   let sum = 0;
//   for(let j = 0; j < row.length; j++);
//   console.log(row[j]);
//   sum += row[j];
// }

for(let row of magicSquare){
  let sum = 0;
  for(let num of row){
    sum += num;
  }
  console.log(`${row} summed to ${sum}`);
}
