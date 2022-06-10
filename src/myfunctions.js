 import { array } from './index.js';

const todoList = () => {
  const form = document.querySelector('.form');
  const list = document.createElement('div');
  list.className = 'input-div';
  form.appendChild(list);
  const checkboxes = document.createElement('input');
  checkboxes.className = 'input';
  checkboxes.type = 'checkbox';
  const listText = document.createElement('p');
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
    const getting = JSON.parse(localStorage.getItem('list'));
    const empty = [];
    const selectInput = document.querySelectorAll('.input-div');
    for (let i = 0; i < getting.length; i += 1) {
      if (selectInput[i].classList.contains('changeBg')) {
        getting[i].completed = true;
      } else {
        getting[i].completed = false;
      }
      empty.push(getting[i]);
      localStorage.setItem('list', JSON.stringify(empty));
    }
  });
  const clearAll = document.querySelector('#clear');
  clearAll.addEventListener('click', () => {
    const getting = JSON.parse(localStorage.getItem('list'));
    const variable = document.querySelectorAll('.changeBg');
    for (let i = 0; i < variable.length; i += 1) {
      form.removeChild(variable[i]);
    }
    const empty = [];
    for (let i = 0; i < getting.length; i += 1) {
      if (getting[i].completed === true) {
        continue; // eslint-disable-line
      }
      empty.push(getting[i]);
    }
    localStorage.setItem('list', JSON.stringify(empty));
  });

  deleteBtn.addEventListener('click', () => {
    form.removeChild(list);
    const getFromLocalStorage = JSON.parse(localStorage.getItem('list'));
    const result = getFromLocalStorage.filter((word) => word.description === listText.textContent);
    const empty = [];
    for (let i = 0; i < getFromLocalStorage.length; i += 1) {
      if (result[0].description === getFromLocalStorage[i].description) {
        continue; // eslint-disable-line
      }
      empty.push(getFromLocalStorage[i]);
    }
    localStorage.setItem('list', JSON.stringify(empty));
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
        const getting = JSON.parse(localStorage.getItem('list'));
        const result = getting.filter((word) => word.description === listText.textContent);
        const empty = [];
        for (let i = 0; i < getting.length; i += 1) {
          if (getting[i].index === result[0].index) {
            getting[i].description = editInput.value;
          }
          empty.push(getting[i]);
          localStorage.setItem('list', JSON.stringify(empty));
        }
        list.replaceChild(listText, editInput);
        listText.textContent = editInput.value;
        list.style.backgroundColor = '#fff';
      }
    });
  });
};

const addToLocalStorage = () => {
  localStorage.setItem('list', JSON.stringify(array));
};

export { todoList, addToLocalStorage };
