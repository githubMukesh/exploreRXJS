import { of } from 'rxjs'; 
import { map } from 'rxjs/operators';
import {Subject, run}  from './observerPattern';
import './style.css';
// How to create plane obserable


/* NewsPaper Analogy */

let newsPaper = new Subject();
const hindustanTime = (news) => { console.log(`%c HindustanTimes \n\n\n ${news}`,"color: red;font-style:cursive;padding:1px")};
const theHindu = (news) => { console.log(`%cThe Hindu \n\n\n${news}`,"color: black;font-weight: bold;padding:1px")};
newsPaper.subscribe(hindustanTime);
newsPaper.subscribe(theHindu);
newsPaper.next("india Win the all world cup in all sports of the word");
//run();


// Add burger
const burgerPipeLine = new Subject();
function addBurger(){
  const burger =  document.querySelector('.burger-body');
  //console.log(burger);
  burgerPipeLine.subscribe((slice: string) => {
    burger.appendChild(addSlice(slice));
  });
}

function addSlice(item){
  let tomato = document.createElement('div');
  tomato.className = item;
  return tomato;
}
addBurger();
burgerPipeLine.next('tomato');
burgerPipeLine.next('lettice');
burgerPipeLine.next('cheese');
burgerPipeLine.next('bun-2');

