# Example Markup

This page will demonstrate some markup examples and features of Content.
<!--more-->

This content is below the fold. Here are some examples:

## Content within custom card component

::card
  Hello world from the content in the card!
::

## Code highlighting

```js
let a = 1;
let b = 2;

function add(num1, num2) {
  return num1 + num2;
}

// add the numbers and print to console.
console.log(add(a, b));
```

## Custom component in typescript

::CountButtonDemo{:initialCount=3}
::
*Click to increment*

---