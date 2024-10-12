import { saveProduct, loadProducts, removeProduct } from './storage.js';
import { addProductToUI, clearInput } from './ui.js';

// Carrega os produtos salvos ao carregar a página
document.addEventListener('DOMContentLoaded', loadProducts);

document.getElementById('add-button').addEventListener('click', () => {
    const input = document.getElementById('product-input');
    const productName = input.value.trim();

    if (productName === '') {
        alert('Por favor, insira um produto válido.');
        return;
    }

    // Adiciona o produto na interface do usuário
    addProductToUI(productName, removeProductFromStorage);
    
    // Salva o produto no localStorage
    saveProduct(productName);

    // Limpa o campo de entrada
    clearInput(input);
});

// Função para remover produto do storage ao clicar no botão de remoção
function removeProductFromStorage(productName) {
    removeProduct(productName);
}
