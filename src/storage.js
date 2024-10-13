
export function loadFromStorage() {
    return JSON.parse(localStorage.getItem('shoppingItems')) || [];
}


export function saveToStorage(itemName) {
    const items = loadFromStorage();
    items.push(itemName);
    localStorage.setItem('shoppingItems', JSON.stringify(items));
}


export function removeFromStorage(itemName) {
    let items = loadFromStorage();
    items = items.filter(item => item !== itemName);
    localStorage.setItem('shoppingItems', JSON.stringify(items));
}
