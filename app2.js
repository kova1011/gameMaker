const cardArray=[
 {
  name:'fries',
  img:'imagesForMemory/fries.png'
 },
 {
  name:'cheeseburger',
  img:'imagesForMemory/cheeseburger.png'
 },
 {
  name:'hotdog',
  img:'imagesForMemory/hotdog.png'
 },
 {
  name:'ice-cream',
  img:'imagesForMemory/ice-cream.png'
 },
 {
  name:'milkshake',
  img:'imagesForMemory/milkshake.png'
 },
 {
  name:'pizza',
  img:'imagesForMemory/pizza.png'
 },
 {
  name:'fries',
  img:'imagesForMemory/fries.png'
 },
 {
  name:'cheeseburger',
  img:'imagesForMemory/cheeseburger.png'
 },
 {
  name:'hotdog',
  img:'imagesForMemory/hotdog.png'
 },
 {
  name:'ice-cream',
  img:'imagesForMemory/ice-cream.png'
 },
 {
  name:'milkshake',
  img:'imagesForMemory/milkshake.png'
 },
 {
  name:'pizza',
  img:'imagesForMemory/pizza.png'
 }
]
cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen =[]
let cardsChosenID = []
const cardsWon =[]

function createBoard (){
 for(let i = 0; i<cardArray.length; i++) {
  const card = document.createElement('img')
  card.setAttribute('src', 'imagesForMemory/blank.png')
  card.setAttribute('card-id', i)
  card.addEventListener('click', flipCard)
  gridDisplay.append(card)
 }
}

createBoard()

function checkMatch(){
 const cards = document.querySelectorAll('img')
 const optionOneID = cardsChosenID[0]
 const optionTwoID = cardsChosenID[1]
 console.log('check for a match')
 if(optionOneID == optionTwoID){
  cards[optionOneID].setAttribute('src', 'imagesForMemory/blank.png')
  cards[optionTwoID].setAttribute('src', 'imagesForMemory/blank.png')
  alert('You clicked the same card')
 }
if(cardsChosen[0] == cardsChosen[1]){
  cards[optionOneID].setAttribute('src', 'imagesForMemory/white.png')
  cards[optionTwoID].setAttribute('src', 'imagesForMemory/white.png')
  cards[optionOneID].removeEventListener('click', flipCard)
  cards[optionTwoID].removeEventListener('click', flipCard)
  cardsWon.push(cardsChosen)
}
else{
 cards[optionOneID].setAttribute('src', 'imagesForMemory/blank.png')
 cards[optionTwoID].setAttribute('src', 'imagesForMemory/blank.png')
}
resultDisplay.innerHTML = cardsWon.length
cardsChosen = []
cardsChosenID = []
if(cardsWon.length == (cardArray.length/2))
 resultDisplay.innerHTML = 'You Solved them All!'
}


function flipCard(){
console.log(cardArray)
const cardID = this.getAttribute('card-id')
cardsChosen.push(cardArray[cardID].name)
cardsChosenID.push(cardID)
this.setAttribute('src', cardArray[cardID].img)
if(cardsChosen.length === 2)
 setTimeout(checkMatch, 500)
}