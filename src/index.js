import './style.css';
import { displayListItem, inputField } from './todoListSelector.js';

const addtodoItem = (todovalue) => {
  const todoContainer = document.createElement('div');
  todoContainer.classList.add('todoContainer');
  todoContainer.innerHTML = `
            <input type="checkbox" class="checkbox">
            <span>${todovalue}</span>
            <i class="fas fa-ellipsis-vertical"></i>
            <i class="fas fa-trash"></i>
            <hr>

        `;

  displayListItem.appendChild(todoContainer);
};

inputField.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && inputField.value) {
    e.preventDefault();
    addtodoItem(inputField.value);
    inputField.value = '';
  }
});
