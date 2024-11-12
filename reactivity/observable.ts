import { Observable, interval, of, from, map, pluck, fromEvent } from "rxjs";
// import { map, pluck } from "rxjs/operators";

// rxjs stands for reactive extensions

const users1 = {
  data: [
    {
      status: "active",
      age: 14,
    },
    {
      status: "active",
      age: 8,
    },
    {
      status: "inactive",
      age: 33,
    },
    {
      status: "inactive",
      age: 22,
    },
    {
      status: "active",
      age: 44,
    },
  ],
};

const users2 = {
  data: [
    {
      status: "active",
      age: 14,
    },
    {
      status: "active",
      age: 88,
    },
    {
      status: "inactive",
      age: 33,
    },
    {
      status: "inactive",
      age: 22,
    },
    {
      status: "active",
      age: 44,
    },
  ],
};

const observable = new Observable((subscriber) => {
  subscriber.next(users1);
  subscriber.next(users1);
  subscriber.next(users1);
  subscriber.complete();
  // subscriber.next(users2);
  subscriber.next(users1);
  subscriber.next(users1);
}).pipe(
  pluck("data"),
  map((value: any) => {
    return value.filter((user: any) => user.status === "active");
  }),
  map((value: any) => {
    let sum = value.reduce((sum: any, user: any) => {
      return sum + user.age;
    }, 0);
    return sum / value.length;
  }),
  map((value: any) => {
    if (value > 44) throw new Error("average too old");
    else return value;
  }),
);

const observer = {
  next: (value: any) => {
    console.log("Observer got a value of " + value);
  },
  error: (err: any) => {
    console.log("Observer got an err of " + err);
  },
  complete: () => {
    console.log("Observer got a complete notification");
  },
};

observable.subscribe(observer);

let ob = of(1, 2, 3, 4, 5);

ob.subscribe(observer);

let ob2 = from([5, 6, 7, 8, 9]);

ob2.subscribe(observer);

const messagePromis = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise resolve");
  }, 1000);
});

const message$ = from(messagePromis);

// const bodyClick$ = fromEvent(document, "click");
// bodyClick$.subscribe((value) => {
//   console.log(value);
// });

message$.subscribe((message) => {
  console.log(message);
});
