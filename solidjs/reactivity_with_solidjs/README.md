# reactivity
let UI respond to changes to data

what is reactive programming?

declaritive programming paradim 
propagation of change  

to declaratively express the relationship between values that change over time? 

a = b + c 
- if b or c changes then a changes 

think excel

Fine-Grained Signals
- simple event emitters that hold a value and represent that value over time.

Reactive Streams (Rx)
- a series/collection of data events that are emittted over time
- better for async

Signals 
Derivations
Effects

Mobx???
knockoutjs

Signals 
- Getter, Setter that holds a value

Effects 
- Signals by themselves are not interesting they need side effects
- also know by reactions 
- effect runs when ever the observable changes

Derivations 
- also known as computeds, memos
- only re-calculates when value of dependencies change.
- cache work of complicated computations 
- sideeffects can also track derivations

you can build your own reactive system with less that 50 lines of code





