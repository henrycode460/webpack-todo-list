 import './style.css';
import {clearAllCompletedTask, addData, populateUI} from './events.js';
 

const clearAll = document.querySelector('#clear');
clearAll.addEventListener('click', clearAllCompletedTask);

const dataEntry = document.querySelector('.dataEntry');
dataEntry.addEventListener('keypress', addData);

// Window Load event
window.addEventListener('load', populateUI);
