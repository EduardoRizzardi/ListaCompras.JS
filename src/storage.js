import { addProductToUI} from './ui.js';
// Função para salvar o produto no localStorage
export function saveProduct(productName) {
    let products = getProducts();
    products.push(productName);
    localStorage.setItem('products', JSON.stringify(products));
}

// Função para carregar produtos salvos e mostrá-los na UI
export function loadProducts() {
    let products = getProducts();
    products.forEach(product => addProductToUI(product, removeProduct));
}

// Função para remover um produto do localStorage
export function removeProduct(productName) {
    let products = getProducts();
    products = products.filter(product => product !== productName);
    localStorage.setItem('products', JSON.stringify(products));
}

// Função para obter os produtos do localStorage
function getProducts() {
    return JSON.parse(localStorage.getItem('products')) || [];
}
