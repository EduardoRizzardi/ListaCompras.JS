LISTA DE COMPRAS

Este projeto é uma aplicação simples de Lista de Compras que permite adicionar e remover itens, salvando-os no LocalStorage do navegador. Os itens adicionados permanecem salvos mesmo após o recarregamento da página.


FUNCIONALIDADES

Adicionar itens à lista.
Remover itens da lista.
Salvar a lista no LocalStorage (itens permanecem após recarregar a página).
Carregar a lista salva automaticamente ao abrir a página.


COMO USAR

Abra o arquivo index.html no navegador.
Digite o nome de um produto no campo de entrada.
Clique no botão "Adicionar" para inserir o item na lista.
Para remover um item, clique no botão "Remover" ao lado do produto.
A lista será salva automaticamente e carregada ao recarregar a página.

ESTRUTURA DO PROJETO

index.html: Estrutura da página (HTML).
styles.css: Estilos da aplicação (CSS).
app.js: Lógica principal para adicionar/remover itens (JavaScript).
storage.js: Lida com o salvamento e carregamento dos dados no LocalStorage.
ui.js: Gerencia a interface do usuário.

COMO FUNCIONA

Adicionar itens: Quando você insere um item e clica em "Adicionar", ele é salvo no LocalStorage e exibido na página.
Remover itens: Ao clicar no botão "Remover", o item é removido da página e do LocalStorage.
Carregamento: Quando a página é recarregada, os itens salvos são carregados automaticamente do LocalStorage.