const { Observable } = require('rxjs')

const wrapArrayIntoObservable = (arr: number[]) => {
  return new Observable((subscriber: { next: (arg0: number) => void; }) => {
    for (let item of arr) {
      subscriber.next(item);
    }
  });
}
const data = [1, 2, 3, 4, 5];

const observable = wrapArrayIntoObservable(data);

observable.subscribe((val: string) => console.log('Subscriber 1: ' + val));
observable.subscribe((val: string) => console.log('Subscriber 2: ' + val));
observable.subscribe((val: string) => console.log('Subscriber 3: ' + val));
