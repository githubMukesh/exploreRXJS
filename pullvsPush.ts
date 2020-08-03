// function foo() {
//   console.log('Hello');
//   return 42;
// }

// const x = foo.call(this); // same as foo()
// console.log(x);
// const y = foo.call(this); // same as foo()
// console.log(y);


/* -------------------vs -------------------------- */



import { Observable } from 'rxjs';
 
const foo = new Observable(subscriber => {
  console.log('Hello');
  subscriber.next(42);
});
 
foo.subscribe(x => {
  console.log(x);
});
foo.subscribe(y => {
  console.log(y);
});

/*
1)Subscribing to an Observable is analogous to calling a Function.
2)Observables are able to deliver values either synchronously or asynchronously.
*/