let btn=document.querySelector('#new-quote');
let quote=document.querySelector('.quote');
let person=document.querySelector('.person');

const quotes = [{
    quote: '"The best way to find yourself i dto lose yourself in the servise of others."',
    person: 'Mahatma Gandhi'
} ,{
    quote: '"IF YOU WANT TO LIVE A HAPPY LIFE, TIE IT TO A GOAL, NOT TO PEOPLE OR THINGS"',
    person: 'ALBERT ENSTIEN'
}];

btn.addEventListener('click', function(){
    let random= Math.floor(Math.random()*quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText= quotes[random].person; 


})