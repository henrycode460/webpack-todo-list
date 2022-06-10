import './style.css';
import {todoList, addToLocalStorage} from './myfunctions.js';

class MyObjects {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

const array = [];

const dataEntry = document.querySelector('.dataEntry');
dataEntry.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && dataEntry.value) {
    const object = new MyObjects(dataEntry.value, false, array.length);
    array.push(object);
    e.preventDefault();
    todoList();
    const listText = document.querySelectorAll('.listContent');
    for (let i = 0; i < array.length; i += 1) {
      listText[i].textContent = array[i].description;
    }
    dataEntry.value = null;
    addToLocalStorage();
  }
});

// Window Load event
window.addEventListener('load', () => {
  const getFromLocalStorage = JSON.parse(localStorage.getItem('list'));
  for (let i = 0; i < getFromLocalStorage.length; i += 1) {
    todoList();
    const listText = document.querySelectorAll('.listContent');
    listText[i].textContent = getFromLocalStorage[i].description;
    if (getFromLocalStorage[i].completed === true) {
      getFromLocalStorage[i].completed = false;
    }
    localStorage.setItem('list', JSON.stringify(getFromLocalStorage));

    array = getFromLocalStorage;
  }
});

export { array};