/* Q: QWrong what is DOM? */

/* --ans-- */

/* 
https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction 

it is a data representation of the content and structure of a document on the web 

it provides a programming interface for developers to programmatically change 
the document structure, style, content, etc

stored in window.document
*/

/* Q: QWrong window vs document */


/* --ans-- */

/* 
window contains all global variables, global functions, localStorage, setTimeout, location, history
document is defined within the window object. 
document represents the DOM. 

document.setTimeout (x)
document.getElementById (o)

window.setTimeout (o)
window.getElementById (x)
*/

/* Q: QWrong window.onload vs document.onload */

/* --ans-- */

/* 
window.onload 
> when everthing (images, external scripts, etc) is loaded

document.onload 
> when the DOM tree is built and the DOM is loaded
> could be prior to images or external content load
*/

/* Q: QWrong attribute vs property */

/* --ans-- */

/* 
attributes are defined in the HTML elements. 
when the browser parses the HTML, it builds a DOM tree based on the HTML. 

<input id="input-id" type="text" value="foo" />

in the DOM tree, there will be a corresponding node to the HTML element. 
the node is an object, so it has properties

there are three types of properties, depending on their relationships to their attributes:

1. reflected property (id)
> property is a complete reflection of the attribute
> getting property reads attribute value
> setting property writes attribute value

2. partially reflected property
> 
> If you had <input type="foo">, then theInput.getAttribute("type") gives you "foo" but theInput.type gives you "text".

3. non-reflected property 
> 
the value property doesn't reflect the value attribute. Instead, it's the current value of the input. When the user manually changes the value of the input box, the value property will reflect this change. So if the user inputs "John" into the input box, then:

theInput.value // returns "John"
whereas:

theInput.getAttribute('value') // returns "Name:"

*/

/* Q: QWrong fastest way to query DOM */

/* --ans-- */

/* 
1. getElementById
2. getElementByClassName
...
*/

/* Q: QWrong why can't we use array methods on NodeList? */


/* --ans-- */

/* 
myArrayInstance -> Array -> Object -> null
myNodeList -> NodeList -> Object -> null

myNodeList -> NodeList -> Array -> Object -> null
*/


/* Q: QWrong print all the text content of divs in the HTML file */



/* --ans-- */

// const arr = [...document.querySelectorAll('div')];
// arr.forEach(div => console.log(div.textContent));

/* Q: QWrong write function to get elements by attribute  */

/* --ans-- */

// const getElementByAttribute = (attribute, value) => {
//   return [...document.querySelectorAll(`[${attribute}=${value}]`)]
// }

/* Q: QWrong add class to an html element */

// addClass('div', 'test-class')

/* --ans-- */

// function addClass(selector, className) {
//   const elts = document.querySelectorAll(selector)
//   if (elts) {
//     [...elts].forEach((node) => node.classList.add(className))
//   }
// }

/* Q: QRetry create a div which contains 3 numbered buttons. alert the button number onclick */


/* --ans-- */

// const div = document.createElement('div')
// document.body.appendChild(div)

// const nums = [1, 2, 3]

// for (let i = 1; i <= nums.length; i++) {
//   const button = document.createElement('button')
//   button.textContent = `button ${i}`
//   button.onclick = () => {
//     alert(`button ${i} clicked`)
//   }
//   div.appendChild(button)
// }

/* Q: QWrong innerHTML vs appendChild */

/* --ans-- */

/* 
innerHTML
> setting the innerHTML does a complete rebuild of the target DOM node
> better if you're replacing the child nodes 

appendChild
> does not do a complete rebuild of the target DOM
> much more efficient if you're trying to append an element 
*/

/* Q: QWrong create a p element, 
when clicked would become an editable input, 
then when blurred would go back to normal text with the updated input value */

/* --ans-- */

// function editData(event) {
//   const el = event.target;
//   const input = document.createElement("input");
//   input.setAttribute("value", el.textContent);
//   el.replaceWith(input);

//   input.onblur = function() {
//     const p = document.createElement('p');
//     p.onclick = editData;
//     p.textContent = input.value;
//     input.replaceWith(p);
//   };

//   input.focus();
// }

// for (let i = 1; i <= 3; i++) {
//   const p = document.createElement('p')
//   p.textContent = `editable ${i}`

//   if (i < 3) {
//     p.classList.add('data-editable')
//   }
//   document.body.appendChild(p)
// }

// for (const child of document.getElementsByClassName('data-editable')) {
//   child.onclick = editData;
// }

/* --ans-- V2 */

// const p = document.createElement('p')
// p.textContent = 'initial'

// p.onclick = function() {
//   const input = document.createElement('input')
//   input.setAttribute('value', p.textContent)
//   input.onblur = function() {
//     p.textContent = input.value
//     input.replaceWith(p)
//   }
//   p.replaceWith(input)
//   input.focus()
// }

// document.body.appendChild(p)


/* Q: QWrong given an element, traverse it and all of its children, recursively  */

// function traverse(elt) {

// }

// const div1 = document.createElement('div')
// const div2 = document.createElement('div')
// const p1 = document.createElement('p')
// p1.textContent = 'p1'
// const p2 = document.createElement('p')
// p2.textContent = 'p2'

// document.body.appendChild(div1)
// div1.appendChild(div2)
// div1.appendChild(p1)
// div2.appendChild(p2)

// traverse(div1)

/* --ans-- */

// function traverse(elt) {
//   if (elt) {
//     console.log(elt.tagName, elt.textContent);

//     [...elt.children].forEach((child) => {
//       traverse(child)
//     })
//   }
// }




