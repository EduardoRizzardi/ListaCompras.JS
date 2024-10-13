# Lista de Compras Modular

Esta é uma aplicação simples de lista de compras em JavaScript, agora modularizada para melhor organização. A aplicação permite adicionar e remover itens da lista e salvar os dados no LocalStorage.

## Funcionalidades

- Adicionar itens à lista.
- Remover itens da lista.
- Salvar e carregar itens usando LocalStorage.

## Como funciona

1. **Adicionar um item**: Digite o nome do item no campo e clique em "Adicionar". O item será exibido na lista e salvo no LocalStorage.
2. **Remover um item**: Ao clicar em "Remover", o item será excluído da lista e do LocalStorage.
3. **Persistência de dados**: Os itens adicionados são carregados automaticamente ao abrir a aplicação.

## Arquivos e Módulos

- `index.html`: Estrutura HTML.
- `styles.css`: Estilos da página.
- `app.js`: Arquivo principal que conecta os módulos.
- `ui.js`: Lida com a interface (adicionar e remover itens da lista).
- `storage.js`: Lida com o LocalStorage (salvar, carregar, remover itens).
