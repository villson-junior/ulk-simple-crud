# ulk Simple CRUD

**ulk Simple CRUD** é uma aplicação desenvolvida com Angular, Angular Material e JSON Server para realizar operações CRUD (Criar, Ler, Atualizar, Deletar) em um catálogo de produtos.

## Visão Geral do Projeto
- **Descrição**: Esta aplicação permite a listagem, adição, edição e remoção de um catálogo de produtos, utilizando o JSON Server para simular uma API Rest simples.

## Tecnologias Utilizadas

- **Angular:** Framework para construção da SPA (Single Page Application).
- **Angular Material:** Biblioteca de componentes de interface modernos e responsivos.
- **JSON Server:** Simula uma API RESTful para persistência dos dados.

## Configurações de Ambiente

- Node.js V14+
- NPM

## Como Executar

1. Certifique-se de ter os pré-requisitos instalados.
2. Clone o repositório do projeto.
3. Instale as dependências no diretório raiz do projeto:
    ```console
        npm install
    ```

4. Instale o JSON Server
    ```console
        npm install -g json-server
    ```

5. Inicie o servidor JSON Server
    ```console
        json-server --watch db_simple_crud.json --port 3000
    ```

6. Inicie o servidor Angular em outro terminal
    ```console
        ng serve
    ```

7. Acesse a aplicação pelo browser: [localhost:4200/](http://localhost:4200)