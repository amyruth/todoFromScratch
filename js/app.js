// function addTodo() {
	// 	const todoList = document.querySelector('.todoList');
	// 	const listArea = document.querySelector('.listArea');
	// 	const task = document.querySelector('.taskEntry');
	// 	let item = task.value;
	// 	let listItem = document.createElement('li');
	// 	listItem.textContent = item;
	// 	todoList.appendChild(listItem);
	// 	task.value = '';
	// 	if (todoList.childElementCount === 1) {
		// 		listArea.classList.remove('hide');
		// 		console.log('reveal');
		// 	}
		// }
const addButton = document.querySelector('.addToList');
const todo = document.querySelector('li');
const todoList = document.querySelector('#todoList');
const listArea = document.querySelector('.listArea');
		
const addTodo = () => {
	const task = document.querySelector('.taskEntry');
	let item = task.value;
	let listItem = document.createElement('li');
	listItem.classList.add('todoItem');
	listItem.textContent = item;
	todoList.appendChild(listItem);
	task.value = '';
	if (todoList.childElementCount === 1) {
		listArea.classList.remove('hide');
		console.log('1st reveal');
	}
};

addButton.addEventListener('click', function (e) {
	e.preventDefault();
	addTodo();
});

// check body for a click, if the click target is an li element, remove that element
// also if no li elements in list hide the list
document.querySelector('body').addEventListener('click', function(e){
	if(e.target.tagName.toLowerCase() === 'li'){
		e.target.remove();
	}
	if(todoList.getElementsByTagName('li').length === 0){
		listArea.classList.add('hide');
	}
});



// FUNCTIONS TO MAKE
// addTodo DONE
// removeTodo DONE
// strikeTodo

// FEATURES
// check mark strikethrough when complete
// multiple Lists
// local storage?
//todo expands to add notes
// add a date/reminder
// checkbox batch delete
// email a list/send to calendar






// TODO: remove ability to add blank todo item
// COMPLETE maybe hide listArea until something is added
// hide list area when last list item is deleted
// add strikethrough option
//make function to add list item event listener
//COMPLETE make ul to append list items to
//check list order and adjust if needed
//restyle so picture fills screen in smaller sizes (maybe get bigger picture) ALWAYS SET MARGIN AND PADDING TO 0
//word wrap tasks