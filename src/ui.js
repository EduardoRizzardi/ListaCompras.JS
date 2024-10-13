import { removeFromStorage } from './storage.js';


export function loadItems(items) {
    const itemList = document.getElementById('items-list');
    items.forEach(item => {
        const listItem = createListItem(item);
        itemList.appendChild(listItem);
    });
}


export function addItem(itemName) {
    const itemList = document.getElementById('items-list');
    const listItem = createListItem(itemName);
    itemList.appendChild(listItem);
}


function createListItem(itemName) {
    const listItem = document.createElement('li');
    listItem.textContent = itemName;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remover';
    removeBtn.addEventListener('click', () => {
        listItem.remove();
        removeFromStorage(itemName); 
    });

    listItem.appendChild(removeBtn);
    return listItem;
}
