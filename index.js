//initialise variables on first page load
let completedList = [];
let completedListObj = {};
let idNum = 0;

function addListItem() {
	//grab value of input
	let toDoTask = document.getElementById('taskText').value;

	if (toDoTask !== '') {
		//clear input field
		document.getElementById('taskText').value = '';

		//create div container to store to do items
		const todoDiv = document.createElement('div');

		//attach newly created div as a child to the existing todos div
		document.getElementById('todos').appendChild(todoDiv);

		//create unique id
		todoDiv.id = `to-do-${idNum}`;

		//create input tag
		let inputField = document.createElement('input');
		inputField.type = 'checkbox';
		inputField.setAttribute('ticked', false);
		inputField.addEventListener('click', markItemAsCompleted);
		inputField.id = `input-id-${idNum}`;

		//attach newly created input tag as a child to the existing todos div
		document.getElementById(todoDiv.id).appendChild(inputField);

		//create label tag
		let labelField = document.createElement('label');
		labelField.id = `label-id-${idNum}`;
		//attach newly created input tag as a child to the existing todos div
		document.getElementById(todoDiv.id).appendChild(labelField);

		//display to do task on the page
		labelField.innerHTML = toDoTask;

		//increment ids
		idNum++;
	} else {
		alert('Please enter a task');
	}
}

function markItemAsCompleted(e) {
	//grab the id of the active element when it is clicked on
	let selectedTaskId = e.target.id;

	//grab the tag details of the selected element
	let selectedTaskElement = document.getElementById(selectedTaskId);

	//split string of the id
	let idNum = selectedTaskId.toString().split('-');

	//grab details of of the label tag
	let labelTaskElement = document.getElementById(`label-id-${idNum[2]}`);

	//grab the value of the ticked attribute
	let isTicked = selectedTaskElement.getAttribute('ticked');

	//if to do item is ticked, set the attribute to true and add strike through class and add to the completed list array

	//if items is unticked, set ticked attribute to false and remove the strike through class and remove the from the completed list array
	if (isTicked === 'false') {
		selectedTaskElement.setAttribute('ticked', true);
		labelTaskElement.className = 'strike-through';
		completedList.push(`to-do-${idNum[2]}`);
	} else {
		selectedTaskElement.setAttribute('ticked', false);
		labelTaskElement.className = '';

		//find the index of the selected task in the array (not entirely sure how this works but have followed the example on mdn web docs website
		//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference///Global_Objects/Array/findIndex)
		let found = (element) => element == `to-do-${idNum[2]}`;

		completedList.splice(completedList.findIndex(found), 1);
	}
}

function deleteTask() {
	//iterate through the completed list whic holds the ticked list items and remove from the page

	if (completedList.length > 0) {
		alert('Are you sure you want to delete?');
	} else {
		completedList.forEach((listItem) => {
			let element = document.getElementById(listItem);
			element.remove();
		});

		//clear out the array with the ticked items
		function clearListArray() {
			completedList.forEach((listItem) => {
				completedList.shift();
			});
		}
		//reset the the completed list array to empty after removing the to do items from the page
		return (completedList = []);
	}
}
