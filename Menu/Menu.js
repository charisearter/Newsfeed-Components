/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>
  The function takes an array as its only argument.
*/
function makeMenu (menuAttr) {

//elements created
const menuDiv = document.createElement('div')
const menuUl = document.createElement('ul')

//structure of elements
menuDiv.appendChild(menuUl)
//iterate over array and create menu list and append the list to UL
 menuAttr.forEach(item => {
const menuLi = document.createElement('li')
menuLi.textContent = item
menuUl.appendChild(menuLi)
 })//end menuAttr forEach 

 //classes added where needed
 menuDiv.classList.add('menu')
 //Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

 //make menu button element
const menuBtn = document.querySelector('.menu-button')

 //Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

 //add eventListen to menu button to open and close menu toggle between open and close
menuBtn.addEventListener('click', (event) => {
menuDiv.classList.toggle('menu--open')
})
//Step 5: return the menu component.
 return menuDiv
} //end make menu function

  //Step 6: add the menu component to the DOM.
  
  //add menu to header
const header = document.querySelector('.header')
//header appends menu -- function name (array name) makeMenu(menuItems)
header.appendChild(makeMenu(menuItems))
