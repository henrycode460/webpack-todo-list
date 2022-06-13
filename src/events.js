class MyObjects {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
    }
  
  get toObject() {
  return { description: this.description, completed: this.completed, index: this.index };
  }
  }
  
  let array = [];
const addToLocalStorage = () => {
localStorage.setItem('list', JSON.stringify(array));
  };
  
  const form = document.querySelector('.form');
  const todoList = ({ completed, description, index }) => {
  const list = document.createElement('div');
  list.className = 'input-div';
  list.id = index;
  form.appendChild(list);
  const checkboxes = document.createElement('input');
  checkboxes.className = 'input';
  checkboxes.type = 'checkbox';

  const listText = document.createElement('p');
  listText.textContent = description;
  listText.className = 'listContent';
  const editBtn = document.createElement('i');
  editBtn.className = 'fas fa-ellipsis-v';
  const deleteBtn = document.createElement('i');
  deleteBtn.className = 'fas fa-trash-alt icon2';
  list.append(checkboxes, listText, editBtn, deleteBtn);

    checkboxes.addEventListener('click', () => {
    editBtn.classList.toggle('remove-icon-active');
    deleteBtn.classList.toggle('icon2');
    listText.classList.toggle('listContent-disable');
    list.classList.toggle('changeBg');
    const i = parseInt(list.id, 10);
    if (list.classList.contains('changeBg')) {
    array[i - 1].completed = true;
    } else {
    array[i - 1].completed = false;
    }
    addToLocalStorage();
});

deleteBtn.addEventListener('click', () => {
    const i = parseInt(list.id, 10) - 1;
    form.removeChild(list);
    array.splice(i, 1);
    for (let i; i < array.length; i += 1) {
    array[i].index = i + 1;
    form.children[i + 1].id = i + 1;
    }
  
    addToLocalStorage();
});

editBtn.addEventListener('click', () => {
    const editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.className = 'listContent';
    editInput.style.backgroundColor = '#fffed3';
    list.style.backgroundColor = '#fffed3';
    editInput.value = listText.textContent;
    list.replaceChild(editInput, listText);
    editInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && editInput.value) {
        const i = parseInt(list.id, 10) - 1;
        array[i].description = editInput.value;
        addToLocalStorage();

        list.replaceChild(listText, editInput);
        listText.textContent = editInput.value;
        list.style.backgroundColor = '#fff';
        }
      });
    });
  
    if (completed === true) {
      checkboxes.click();
    }
  };
  
export const clearAllCompletedTask = () => {
const completedTasks = document.querySelectorAll('.changeBg');
completedTasks.forEach((taskelement) => {
    taskelement.remove();
});
array = array.filter((task) => task.completed === false);
array.forEach((task, index) => {
    task.index = index + 1;
    form.children[index + 1].id = index + 1;
});

addToLocalStorage();
};

export const addData = (e) => {
if (e.key === 'Enter' && e.target.value) {
    const object = new MyObjects(e.target.value, false, array.length + 1);

    array.push(object);
    e.preventDefault();
    todoList(object.toObject);

    e.target.value = null;
    addToLocalStorage();
}
};

  // Window Load event
export const populateUI = () => {
  array = JSON.parse(localStorage.getItem('list')) || [];
  array.forEach((task) => todoList(task));
};
  