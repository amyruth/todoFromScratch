const addButton = document.querySelector('.addToList');


function addTodo(){
	const todoList = document.querySelector('.todoList');
	const listArea = document.querySelector('.listArea');
	const task = document.querySelector('.taskEntry');
	let item = task.value;
	let listItem = document.createElement('li');
	listItem.textContent = item;
	todoList.appendChild(listItem);
	task.value = "";
	if(todoList.childElementCount === 1){
		listArea.classList.remove('hide');
		console.log('reveal');
	}
};


addButton.addEventListener('click', function(e){
	e.preventDefault();
	addTodo();
});

// FUNCTIONS TO MAKE
// addTodo
// removeTodo
// strikeTodo






// TODO: remove ability to add blank todo item
// COMPLETE maybe hide listArea until something is added
// hide list area when last list item is deleted
// add strikethrough option
//make function to add list item event listener
//COMPLETE make ul to append list items to
//check list order and adjust if needed
//restyle so picture fills screen in smaller sizes (maybe get bigger picture) ALWAYS SET MARGIN AND PADDING TO 0
//word wrap tasks