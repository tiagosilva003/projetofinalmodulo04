# **API-livraria-Pedido

Projeto de encerramento do módulo 4 da Resilia Educação.
O projeto consiste no desenvolvimento de uma API para livraria, que possui todas as rotas básicas do CRUD.
As condições principais para a entrega do projeto foram:

o uso do padrão REST, com os verbos referentes ao protocolo HTTP;

o uso do padrão DAO ou de ORM para interagir com o banco de dados - optamos por utilizar o ORM Sequelize e o banco de dados SQLite.;

organização do desenvolvimento com padrão MVC.

## Dependências do projeto:

Para inicializar o projeto precisamos do Node.JS instalado na máquina, entre nesse [link](https://nodejs.org/en/download/) e baixe a versão LTS referente ao seu sistema operacional. Foi utilizado a versão 16.14.0 no projeto.

Quando terminar a instalação, confirme se ocorreu tudo bem abrindo o powershell/terminal do seu computador e digite o comando abaixo, se aparecer a versão que você instalou, então ele já está pronto para ser usado:

```
node -v
```

Clone este repositório em sua máquina:

```
$ git clone https://github.com/priscilarossetto/API-livraria-cliente.git
```

Será necessário instalar as dependências do projeto. Abra o terminal dentro da pasta do projeto e execute o seguinte:

```
npm install
npm install express
npm install sequelize
npm install sqlite3
```

Inicie o projeto:

```
npm run dev
```

ou

```
npm start
```

## Criando uma conexão no Beekeeper

Caso queira observar as alterações no banco de dados, a aplicação open-source Beekeeper é uma opção.

Disponível para download em: https://www.beekeeperstudio.io/

Após a instalação:

Select a connection type: sqlite

database file: Procurar a pasta do projeto e seleciona o arquivo dev.sqlite

Nomear e salvar

Rodar o servidor com npm run dev e recarregar no Beekeeper: a(s) entidade(s) deve(m) aparecer lá

## Rotas do projeto:

A partir de uma ferramenta para consulta de requisições, no projeto utilizamos o [Insomnia](https://insomnia.rest/download/) para testar as rotas GET, POST, PUT e DELETE.
Verifique antes se o seu servidor está rodando, se não, não será possível testar esse e outros métodos.
Passo a passo utilizando a entidade **Pedido**.

### Create - POST:

```
/pedido
```

Cria um registro de pedido no banco de dados. É necessário enviar um body no formato JSON com as informações a seguir:

```
  {
    "book_id" : "",
    "client_id" : "",
    "date" : "",
    "payments" : "",
    "shipping_method" : "",
  
  }
```

### Read - GET:

```
/pedido
```

Retorna as informações de todos os pedidos salvos no banco de dados.

```
/pedido/:id
```

Retorna as informações correspondente a id informada como parâmetro.

### Update - PUT:

```
/pedido/:id
```

Atualiza os dados informados com o id informados no banco de dados. Caso não exista um pedido com a respectiva id é retornado um erro com status 400. É necessário enviar no body da requisição um JSON:

```
  {
   
    "book_id" : "",
    "client_id" : "",
    "date" : "",
    "payments" : "",
    "shipping_method" : "",
  
  }
```

### Delete - DELETE:

```
/pedido/:id
```

Remove um registro de cliente com a id informada do banco de dados. Caso não exista um cliente com a respectiva id é retornado um erro com status 400.

## Tecnologias utilizadas

[![img](https://camo.githubusercontent.com/dc7720a71c57b80b8f747d6ba911f86c1bbb9412e6d9cbc0be94658e1c4e4b4d/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4d616465253230666f722d5653436f64652d3166343235662e737667)](https://camo.githubusercontent.com/dc7720a71c57b80b8f747d6ba911f86c1bbb9412e6d9cbc0be94658e1c4e4b4d/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4d616465253230666f722d5653436f64652d3166343235662e737667) [![img](https://camo.githubusercontent.com/9d07c04bdd98c662d5df9d4e1cc1de8446ffeaebca330feb161f1fb8e1188204/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4a6176615363726970742d4637444631453f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d626c61636b)](https://camo.githubusercontent.com/9d07c04bdd98c662d5df9d4e1cc1de8446ffeaebca330feb161f1fb8e1188204/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4a6176615363726970742d4637444631453f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d626c61636b) [![img](https://camo.githubusercontent.com/dfc69d704694f22168bea3d84584663777fa5301dcad5bbcb5459b336da8d554/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e6f64652e6a732d3433383533443f7374796c653d666f722d7468652d6261646765266c6f676f3d6e6f64652e6a73266c6f676f436f6c6f723d7768697465)](https://camo.githubusercontent.com/dfc69d704694f22168bea3d84584663777fa5301dcad5bbcb5459b336da8d554/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e6f64652e6a732d3433383533443f7374796c653d666f722d7468652d6261646765266c6f676f3d6e6f64652e6a73266c6f676f436f6c6f723d7768697465) [![img](https://camo.githubusercontent.com/6f61ce982d7a61713d63c947148300012945bd4a4cafb8b9313e2426c5a1f273/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f457870726573732e6a732d3430344435393f7374796c653d666f722d7468652d6261646765)](https://camo.githubusercontent.com/6f61ce982d7a61713d63c947148300012945bd4a4cafb8b9313e2426c5a1f273/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f457870726573732e6a732d3430344435393f7374796c653d666f722d7468652d6261646765) [![img](https://camo.githubusercontent.com/6c50eb6f911b1bcb4c0b790fb5e908bf896c525685839fa802c41349dcd1c8bf/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f53657175656c697a652d3532423045373f7374796c653d666f722d7468652d6261646765266c6f676f3d53657175656c697a65266c6f676f436f6c6f723d7768697465)](https://camo.githubusercontent.com/6c50eb6f911b1bcb4c0b790fb5e908bf896c525685839fa802c41349dcd1c8bf/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f53657175656c697a652d3532423045373f7374796c653d666f722d7468652d6261646765266c6f676f3d53657175656c697a65266c6f676f436f6c6f723d7768697465) [![img](https://camo.githubusercontent.com/93ae318132d035a8c007ee1cb244f63a02d87cc0051dfa67323f5bfdc6b222d1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f496e736f6d6e69612d626c61636b3f7374796c653d666f722d7468652d6261646765266c6f676f3d696e736f6d6e6961266c6f676f436f6c6f723d353834394245)](https://camo.githubusercontent.com/93ae318132d035a8c007ee1cb244f63a02d87cc0051dfa67323f5bfdc6b222d1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f496e736f6d6e69612d626c61636b3f7374796c653d666f722d7468652d6261646765266c6f676f3d696e736f6d6e6961266c6f676f436f6c6f723d353834394245)

VSCode

JavaScript

NodeJS

Express

Sequelize ORM

Beekeeper

Insomnia
