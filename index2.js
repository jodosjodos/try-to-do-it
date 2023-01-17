 function clearAll(){
let imgg=document.querySelector('.receiver0');
let oker=document.querySelector('.receiver')
let quut=document.querySelector('.receiver2')
let d=document.querySelector('.receiver3')
let a=document.querySelector('.receiver4')

imgg.innerHTML=''
oker.innerHTML=''
quut.innerHTML=''
d.innerHTML=''
a.innerHTML=''


}
// let look at images
let test=[
    'meme1.jpg',
    'meme2.jpg',
    'meme3.png',
    'meme4.jpg',
    'meme5.jpg',
    'meme6.jpg',
    'meme7.jpg',
    'meme8.jpg',
    'unique.png',
    
    
]


let imgBtn=document.querySelector('.memeBt');
imgBtn.addEventListener('click',function(){
    let randomI=test[Math.random()*test.length|0]
 
    let imgP=document.querySelector('.receiver0');
let imgC=document.createElement('img');
imgC.style.width='200px';
imgC.setAttribute('src',randomI)
clearAll()
imgP.append(imgC);

})
let img=document.querySelectorAll('.notAllowed')
let arrJoke = ['Did you hear about the mathematician whs afraid of negative numbers ? ',
    'I said to the Gym instructor Can you teach me to do the splits?” He said, “How flexible are you?” I said, “I cant make Tuesdays.”',
    'I’m on a whiskey diet. I’ve lost three days already.',
    'My therapist says I have a preoccupation with vengeance. We’ll see about that.',
    'I was in Tesco’s and I saw this man and woman wrapped in a barcode. I said, “Are you two an item?”',
    'A priest, a rabbi and a vicar walk into a bar. The barman says, “Is this some kind of joke?”'
]
let jokeerBt = document.querySelector('.joker');
jokeerBt.addEventListener('click', jokeShower);
let jokeReceiver = document.querySelector('.receiver')

function jokeShower() {
    clearAll()
    let randomJoke = arrJoke[Math.random() * arrJoke.length | 0];
    jokeReceiver.innerText = randomJoke;
}
let quotes = [{
        quote: " 'The best way to find yourself is to lose yourself in the service of others'",
        person: 'Mahatma Gandhi'
    },
    {
        quote: "'If you want to live a happy life,tie it to a goal, not to people or things.'",
        person: 'Albert Eisten'
    }, {
        quote: "'At his best, man is the noblest of all animals; separated from law and justice he is the worst.'",
        person: 'Aristotle'
    },
    {
        quote: "'Your time is limited, so don\'t waste it living someone else\'s life.'",
        person: 'Steve Jobs'
    },
    {
        quote: " 'Tell me and I forget . Teach me and I remember. Involve me and I learn.'",
        person: 'Benjamin Franklin'
    }, {
        quote: "'If you look at what you have in life, you\'ll always have more. If you look at what you don\'t have in life, you\'l never have enough.",
        person: 'Oprah Winfrey '
    }, {
        quote: "'time does not matter how slowly you go as long as you do not stop.'",
        person: 'Confucius '
    }, {
        quote: "'Our lives begin to end the day we become silent about thingsthat matter.'",
        person: 'Martin Luther King,Jr.'
    }, { quote: "'Remember that not getting what you want is sometimes a wonderful stroke of luck.'", person: 'Dalai Lama' }, {
        quote: "'The journey of thousand miles begins with one step .'",
        person: 'Lao Tzu'
    },
];
let quoteBt = document.querySelector('.quotebtn');

function quoteShower() {
    
    let randomQt = quotes[Math.random() * quotes.length | 0];
    let qt = randomQt.quote;
    let writer = randomQt.person;
    let pquote = document.querySelector('.receiver2');
    let pqwriter = document.querySelector('.receiver3');
    clearAll()
    pquote.innerText = qt;
    pqwriter.innerText = '-' + writer;

}
quoteBt.addEventListener('click', quoteShower);



let riddleArr = [{
        riddle: ' What has to be broken before you can use it?',
        answer: ' An egg 2',
    }, {
        riddle: ' I’m tall when I’m young, and I’m short when I’m old. What am I?',
        answer: 'A candle',
    }, {
        riddle: ' What month of the year has 28 days?',
        answer: 'All of them 4',
    }, {
        riddle: '  What is full of holes but still holds water ?',
        answer: ' A sponge',
    }, {
        riddle: ' What question can you never answer yes to ?',
        answer: 'Are you asleep yet ?',
    }, {
        riddle: 'What is always in front of you but can’ t be seen ?',
        answer: 'The future ',
    }, {
        riddle: 'What can youbreak,evenif you never pick it up or touch it ? ',
        answer: ' A promise'
    }, {
        riddle: 'What goes up but never comes down ?',
        answer: 'Your age'
    },
    {
        riddle: '  A man who was outside in the rain without an umbrella or hat didn’ t get a single hair on his head wet.Why ?',
        answer: ' He was bald.'
    }
];
let riddleBt=document.querySelector('.riddle');
function riddleShower(){
    let randomRiddle=riddleArr[Math.random()*riddleArr.length|0];
// let ridle=randomRiddle.riddle;
// let answr=randomRiddle.answer;
const{riddle,answer}=randomRiddle;
clearAll()
    let  riddlecontainer=document.querySelector('.receiver4');
    let  riddleText=document.createElement('p');
    let riddleAnswer=document.createElement('p');
    riddleAnswer.classList.add('checkAvailability')
    riddleText.textContent=riddle
 riddleAnswer.textContent='- the answer is:'+answer;
 
 riddlecontainer.appendChild(riddleText)
 riddlecontainer.appendChild(riddleAnswer)
 riddleAnswer.hidden=true;
 riddleAnswer.setAttribute('id','checkOut');

};
riddleBt.addEventListener('click',riddleShower)
//meet conditions of riddle 
let anserRevealer=document.querySelector('#revealer');
anserRevealer.addEventListener('click',function(){
  //check if riddle already available;
  let riddlecontainer=document.querySelector('.receiver4')
  let riddleChecker=riddlecontainer.querySelector('.checkAvailability');
  
 
  let riddleAnswer=document.querySelector('#checkOut');

 if(riddleAnswer&& riddleChecker){
    
riddleAnswer.hidden=false;
 }else if(riddleChecker){
     alert('please answer has been exposed!')
 }else{
     alert('there no riddle to show answer')
 }
})

