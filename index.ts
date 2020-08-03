import { of, Observable } from 'rxjs'; 
import { map } from 'rxjs/operators';
import {  } from 'rxjs/Observable'
import './style.css';
import './hotvsCold';
import './pullvsPush';
import './customObservable';
// How to create plane obserable




// Creating an Observable
const observable = Observable.create((observer:any) => {
    let val = 0;
    setInterval(() => {
        observer.next(++val)
        if(val === 10) {
            observer.complete()
        }
    },1000)
})  

//Creating an observer
const observer = {
    next: (val:number) => console.log(val),
    error: (err:TypeError) => console.log(err),
    complete: () => console.log('No more data in stream') 
}

// Subscribing the observable to get the data from the data stream
const subscription = observable.subscribe(observer);

// Unsubscribing the observable after getting 5 values
setTimeout(() => {subscription.unsubscribe()}, 11000);
