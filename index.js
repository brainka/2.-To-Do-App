const list = [];
idNum = 1;

function getToDoListItem() {
	// grab value of input
	const x = document.getElementById('taskText').value;

	// clear out the input field
	document.getElementById('taskText').value = '';

	//document.getElementById('demo').innerHTML = x;
	// add item to do list to the list array
	list.push(x);

	console.log(list.length);



	const todo = document.createElement('div');
	todo.innerHTML = x;
	document.getElementById('todos').appendChild(todo);
	todo.id = `to-do-${idNum++}`;
	todo.setAttribute("class","disabled")	


	const deleteButton = document.createElement('button')
	deleteButton.innerHTML = 'DELETE BUTTON'
	deleteButton.className = 'btn'
	document.getElementById('todos').appendChild(deleteButton)
	
}
