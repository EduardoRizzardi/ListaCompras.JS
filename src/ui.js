// Função para adicionar o produto na interface do usuário
export function addProductToUI(productName, removeProductCallback) {
    const productList = document.getElementById('product-list');
    const li = document.createElement('li');
    li.textContent = productName;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remover';
    removeButton.onclick = () => {
        li.remove();
        removeProductCallback(productName); // Remove do localStorage
    };

    li.appendChild(removeButton);
    productList.appendChild(li);
}

// Função para limpar o campo de entrada após adicionar o produto
export function clearInput(input) {
    input.value = '';
}
