/*-----------------------------------------------------------------------------------
PART II

Part II will focus on Javascript's ability to manipulate the DOM.
Use the provided index.html
-----------------------------------------------------------------------------------

1. USA
Define function getUSA()
Find the html element that contains "USA".
Print that element's contents.
  
2. Sales
Define function getPeopleInSales()
Print the names of all the people in the sales department.
  
3. Click Here
Define function getAnchorChildren()
Find all anchor elements with a <span> child.
Print the contents of <span>
  
4. Hobbies
Define function getHobbies()
Find all checked options in the 'skills' select element.
Print the value and the contents.
  
5. Custom Attribute
Define function getCustomAttribute()
Find all elements with "data-customAttr" attribute
Print the value of the attribute.
Print the element that has the attribute.

6. Sum Event
NOTE: Write unobtrusive Javascript
Regarding these elements:
	<input id="num1" class="nums" type="text"/>
	<input id="num2" class="nums" type="text"/>
	<h3>Sum: <span id="sum"></span></h3>

Define onchange event handler.
Add <input> element values.
Put the sum in the <span> element.
If values cannot be added, put "Cannot add" in the <span> element

7. Skills Event
NOTE: Write unobtrusive Javascript
When user selects a skill, create an alert with a message similar to:
	"Are you sure CSS is one of your skills?"
NOTE: no alert should appear when user deselects a skill.

8. Favorite Color Event
NOTE: Write unobtrusive Javascript
NOTE: This is regarding the favoriteColor radio buttons.
When a user selects a color, create an alert with a message similar to:
	"So you like green more than blue now?"
In this example, green is the new value and blue is the old value.
Make the background color (of all favoriteColor radio buttons) the newly selected favoriteColor

9. Show/Hide Event
NOTE: Write unobtrusive Javascript
When user hovers over an employees name:
	Hide the name if shown.
	Show the name if hidden.

10. Current Time
Regarding this element:
	<h5 id="currentTime"></h5>
Show the current time in this element in this format: 9:05:23 AM
The time should be accurate to the second without having to reload the page.

11. Delay
Regarding this element:
	<p id="helloWorld">Hello, World!</p>
Three seconds after a user clicks on this element, change the text to a random color.

12. Walk the DOM
Define function walkTheDOM(node, func)
This function should traverse every node in the DOM. Use recursion.
On each node, call func(node).


*/

/*1. USA
Define function getUSA()
Find the html element that contains "USA".
Print that element's contents.*/
function getUSA() {
	let spans = document.getElementsByTagName('span');
	for (let index = 0; index < spans.length; index++) {
		if (spans[index].innerHTML === 'USA') {
			console.log(spans[index].innerHTML)
		}
	}
}

// 2. Sales
// Define function getPeopleInSales()
// Print the names of all the people in the sales department.
function getPeopleInSales() {

	var table = document.getElementById("employee table");

	// LOOP THROUGH EACH ROW OF THE TABLE AFTER HEADER.
	for (row = 1; row < table.rows.length; row++) {

		// GET THE CELLS COLLECTION OF THE CURRENT ROW.
		var objCells = table.rows.item(row).cells;

		// LOOP THROUGH EACH CELL OF THE CURENT ROW TO READ CELL VALUES.
		for (var col = 0; col < objCells.length; col++) {

			if (objCells.item(col).innerHTML === "Sales") {

				console.log(objCells.item(col - 1).innerHTML);//I dont like doing this cuase I feel like there is a mich better way but here is whats happening
				//if the current column is Sales then log the index before it becuase that would be the name
			}
		}
	}


}

// 3. Click Here
// Define function getAnchorChildren()
// Find all anchor elements with a <span> child.
// Print the contents of <span>
function getAnchorChildren() {
	let spans = document.querySelectorAll('a > span');//a > span = finds all anchors then continue down the same elemnt until it finds span
	for (let index = 0; index < spans.length; index++) {
		console.log(spans[index].innerHTML);
	}
}

// 4. Hobbies
// Define function getHobbies() - function says get hobbies but there is also a skills section
// Find all checked options in the 'skills' select element. 
// Print the value and the contents.
function getHobbies() {
	let hobbies = document.querySelector('[name="hobbies"]');//goes though elemnts until it finds a name with "skills" the [] means we are looking for a attribute
	let opts = hobbies.getElementsByTagName('option');//grabs the options in the select

	for (let index = 0; index < opts.length; index++) {
		let val = opts[index].getAttribute('value');
		console.log(`content: ${opts[index].innerHTML}, value: ${val}`);
	}
};

// 5. Custom Attribute
// Define function getCustomAttribute()
// Find all elements with "data-customAttr" attribute
// Print the value of the attribute.
// Print the element that has the attribute.
function getCustomAttributes() {
	let customAttr = document.querySelectorAll('[data-customAttr]');
	for (let index = 0; index < customAttr.length; index++) {
		let value = customAttr[index].getAttribute('data-customAttr');
		console.log(`value = ${value}, ${customAttr[index]}`);
	}
}

// 6. Sum Event
// NOTE: Write unobtrusive Javascript
// Regarding these elements:
// 	<input id="num1" class="nums" type="text"/>
// 	<input id="num2" class="nums" type="text"/>
// 	<h3>Sum: <span id="sum"></span></h3>

// Define onchange event handler.
// Add <input> element values.
// Put the sum in the <span> element.
// If values cannot be added, put "Cannot add" in the <span> element

(function () {//create this type of function becuase we always want it to run
	const num1 = document.getElementById('num1');
	const num2 = document.getElementById('num2');
	const sum = document.getElementById('sum');
	const select = document.getElementById('mySelect');
	let opts = select.getElementsByTagName('option');//grabs the options in the select

	num1.value = '0';
	num2.value = '0';
	sum.innerHTML = '0';

	function add() {
		for (let index = 0; index < opts.length; index++) {
			if (opts[index].getAttribute('value') === '+' && opts[index].selected) {
				sum.innerHTML = (+num1.value) + (+num2.value);
				break;
			} else if (opts[index].getAttribute('value') === '-' && opts[index].selected) {
				sum.innerHTML = (+num1.value) - (+num2.value);
				break;
			} else if (opts[index].getAttribute('value') === '/' && opts[index].selected) {
				sum.innerHTML = (+num1.value) / (+num2.value);
				break;
			} else if (opts[index].getAttribute('value') === '*' && opts[index].selected) {
				sum.innerHTML = (+num1.value) * (+num2.value);
				break;
			}
		}
	}

	num1.addEventListener('input', add);
	num2.addEventListener('input', add);
	select.addEventListener('input', add);

})();

// 7. Skills Event
// NOTE: Write unobtrusive Javascript
// When user selects a skill, create an alert with a message similar to:
// 	"Are you sure CSS is one of your skills?"
// NOTE: no alert should appear when user deselects a skill.
(function () {

	const select = document.querySelector('[name="skills"]');
	let opts = select.getElementsByTagName('option');//grabs the options in the select
	function doubt() {
		for (let index = 0; index < opts.length; index++) {
			//console.log(opts[index].getAttribute('value') + " is selected: "+ opts[index].selected);

			if (opts[index].selected) {
				prompt(`Are you sure ${opts[index].value} is one of your skills?`);
			}
		}
	}

	select.addEventListener('input', doubt);//apprently there is a differnece witch doubt()-only happens once and doubt always happanes

})();

// 8. Favorite Color Event
// NOTE: Write unobtrusive Javascript
// NOTE: This is regarding the favoriteColor radio buttons.
// When a user selects a color, create an alert with a message similar to:
// 	"So you like green more than blue now?"
// In this example, green is the new value and blue is the old value.
// Make the background color (of all favoriteColor radio buttons) the newly selected favoriteColor
(function () {
	const favColors = document.querySelectorAll('[name="favoriteColor"]');
	let last = null, current = null;

	function favoritecolor() {
		for (let index = 0; index < favColors.length; index++) {
			if (favColors[index].checked) {
				current = favColors[index];

				if (!last) {
					last = current;
				} else {
					alert(`So you like ${current.getAttribute('value')} more than ${last.getAttribute('value')} now.`);
					last = current;
					document.body.style.backgroundColor = current.getAttribute('value');
				}
			}
		}
	}

	for (let index = 0; index < favColors.length; index++) {

		favColors[index].addEventListener('change', favoritecolor);
	}
})();
// 9. Show/Hide Event
// NOTE: Write unobtrusive Javascript
// When user hovers over an employees name:
// 	Hide the name if shown.
// 	Show the name if hidden.
(function () {
	const tablerow = document.querySelectorAll('[class="empName"]');

	for (let index = 0; index < tablerow.length; index++) {
		tablerow[index].addEventListener('mouseover', () => {

			if (tablerow[index].style.opacity == '0') {
				tablerow[index].style.opacity = '1';
			} else {
				tablerow[index].style.opacity = '0';
			}

		});
	}

})();
// 10. Current Time
// Regarding this element:
// 	<h5 id="currentTime"></h5>
// Show the current time in this element in this format: 9:05:23 AM
// The time should be accurate to the second without having to reload the page.
(function () {


	function time() {
		let text_value = document.getElementById('currentTime');

		text_value.innerHTML = new Date().toLocaleTimeString();
		setTimeout(time, 1000);

	}

	window.addEventListener('load', time);

})();
// 11. Delay
// Regarding this element:
// 	<p id="helloWorld">Hello, World!</p>
// Three seconds after a user clicks on this element, change the text to a random color.
(function () {
	
	let text_value = document.getElementById('helloWorld');

	function RandRange(min, max) {
		let r = Math.round((min + (max - min) * Math.random())).toString();
		let g = Math.round((min + (max - min) * Math.random())).toString();
		let b = Math.round((min + (max - min) * Math.random())).toString();
		color = `rgb(${r}, ${g}, ${b})`;
		console.log(color);
		text_value.style.color = color;

	}


	function execute() {

		setTimeout(RandRange(0,255), 3000);

	}

	text_value.addEventListener('click',execute);


})();


// 12. Walk the DOM
// Define function walkTheDOM(node, func)
// This function should traverse every node in the DOM. Use recursion.
// On each node, call func(node).
function walkTheDOM(node, func) {
    func(node);

    for (let child of node.children) {
		walkTheDOM(child, func);
    }
    
}
function executeWalkTheDOM(){
    walkTheDOM(document, (node) =>  {
		console.log('Walking the DOM:', node);
	})
}
