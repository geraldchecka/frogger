1. new Array(<Number>) creates a sparse array.
2. One cannot iterate through a sparse array. So initialise it with 'undefined'
3. Matrix DS will based on Array, with columns occupying each index.
4. Array(<Number>) creates a sparse array. Whereas Array.apply(null, Array(<Number>)) creates a dense array.
   This is because, 'apply' method converts "empty" into "undefined". This is language behavior, not a quirk.
   In ES6, "empty" will be treated as "undefined".
5. Generate 'undefined' in an Array ininitialisation:
   ES5 & ES6:
     1. Array(<Number>).fill(<WhateverItIss>); ('fill' is a mutator method)
     2. [...Array(6)]
     3. find() and findIndex() iterates over a sparse array, but treats it as 'undefined'
     4. entries(), keys() and values() treat it as 'undefined'
   https://2ality.com/2015/09/holes-arrays-es6.html
6. Scope-safe constructors: https://css-tricks.com/understanding-javascript-constructors/
   Use this for both 'constructor mode' and normal 'Function invocations'.
7. Object-Decorator pattern to add functionality to Matrix DS from Array. Do we need this decorator pattern or Class?
8. What is prototype?
9. Use enumerable:false to avoid showing 'consturctor' property while iterating in for...in loop
10. Multil-level inheritance & multiple inheritance
11. A function with any 'arity' is something that takes any arguments. Whereas a function is 'unary' if it take only single argument.
12. React in Ramda: https://github.com/ramda/ramda/issues/1642#issuecomment-276312167
13. Examples:
    1. https://github.com/YNataly/Frogger-Game/blob/master/js/app.js
    2. https://stackoverflow.com/questions/3057162/moving-an-image-across-a-html-canvas