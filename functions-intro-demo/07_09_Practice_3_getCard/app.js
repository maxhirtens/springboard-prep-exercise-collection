// Write a getCard() function which returns a random playing card object, like:
// 		{
// 			value: 'K'
// 			suit: 'clubs'
// 		}
//Pick a random value from:
//----1,2,3,4,5,6,7,8,9,10,J,Q,K,A
//Pick a random suit from:
//----clubs,spades, hearts, diamonds
//Return both in an object



// function getCard()  {
//   for(let getValue of value){
//     for(let getSuit of suit){
//     return `${getValue} of ${getSuit}`;
//     }
//   }
// }

// need help below

function pick(arr) {
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}

function getCard()  {
  const value = ['2','3','4','5','6','7','8','9','J','Q','K','A'];
  const suit = ['clubs', 'spades', 'hearts', 'diamonds'];
  return {value : pick(value), suit : pick(suit)};
}
