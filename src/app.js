import { addItem, loadItems } from './ui.js';
import { saveToStorage, loadFromStorage } from './storage.js';

const addItemBtn = document.getElementById('add-item-btn');
const itemInput = document.getElementById('item-input');


window.addEventListener('DOMContentLoaded', () => {
    const savedItems = loadFromStorage();
    loadItems(savedItems);
});


addItemBtn.addEventListener('click', () => {
    const itemName = itemInput.value.trim();

    if (itemName === '') {
        document.getElementById('message').textContent = 'Por favor, insira um nome válido para o item.';
        return;
    }

    addItem(itemName);
    saveToStorage(itemName);
    itemInput.value = ''; 
});
