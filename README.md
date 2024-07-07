# Sobre o Projeto

Este projeto é um desafio front-end proposto pela Bemobile. Ele consiste em uma página web que exibe informações sobre funcionários, permitindo filtrar a exibição por nome, cargo ou número de telefone. As principais tecnologias utilizadas na construção deste projeto são:

- **React com TypeScript**: para uma experiência de desenvolvimento robusta e tipada.
- **Vite**: para um ambiente de desenvolvimento rápido e otimizado, oferecendo uma experiência de desenvolvimento superior com um servidor de desenvolvimento rápido e build eficiente.
- **CSS Modules**: para garantir uma estilização modular e evitar conflitos de nomes de classes.

O site é completamente responsivo, assegurando uma visualização adequada em diversos dispositivos, desde desktops até dispositivos móveis.

## Funcionalidades

- **Exibição de Informações dos Funcionários**: Mostra uma lista de funcionários com detalhes como foto, nome, cargo, data de admissão e telefone.
- **Filtro de Pesquisa**: Permite a filtragem dos funcionários pelo nome, cargo ou número de telefone.
- **Responsividade**: Design adaptativo que garante uma boa experiência de usuário em diferentes tamanhos de tela.

## Tecnologias Utilizadas

- **React**
- **TypeScript**
- **Vite**

### Pré-requisitos

- **Node.js**
- **npm** ou **yarn**

### Instruções para Rodar o Projeto

#### Acesso aos dados da API simulada

Para ter acesso aos dados que alimentarão o projeto, siga os passos abaixo:

1. Caso você não tenha, instale o pacote [json-server](https://github.com/typicode/json-server);
2. Clone este repositório do GitHub em sua máquina:

    ```sh
    git clone https://github.com/BeMobile/desafio-front-end.git
    ```

3. Entre na pasta do projeto e execute o comando abaixo na linha de comando para consumir a API simulada:

    ```sh
    json-server --watch db.json
    ```

É necessário deixar o json-server rodando no terminal para que os dados sejam visualizados no projeto.

Caso você tenha problemas com o json-server, tente rodá-lo com `npx json-server db.json` ou com `yarn json-server <path>/db.json`, em que `<path>` é o caminho completo até o diretório em que o arquivo db.json está localizado. Se mesmo assim não funcionar, busque ajuda na web.

### Iniciando o Projeto

#### Clone o repositório do GitHub em sua máquina:

1. Clone este repositório do GitHub em sua máquina:

    ```sh
    git clone https://github.com/RamonaS2/be-project.git
    ```

2. Entre na pasta do projeto:

    ```sh
    cd be-project
    ```

3. Instale as dependências:

    ```sh
    npm install
    ```

4. Execute o projeto:

    ```sh
    npm run dev
    ```

---


