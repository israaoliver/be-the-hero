# Be-the-Hero-ProjetoSemanaOmniStack-11

<img src="https://user-images.githubusercontent.com/54954718/77695213-2da24280-6f8a-11ea-9661-735e5da2b0a0.png" width="330" height="200">

## Sobre o Projeto

Projeto feito em conjunto com o [Diego Fernandes](https://github.com/diego3g) na Semana OmniStack 11, utilizando as mesma tecnologias  
usadas pelo Uber, Netflix, Airbnb, Instagram, Medium, Discord, PayPal, Dropbox, Twitter, Microsoft e Facebook.

## BackEnd

O BackEnd foi feito atravez de uma Api utilizando a linguagem NodeJs, e seguindo os padrões MVC(*Model View Controller*).

#### Utilizei o [Postman](https://www.postman.com/), para Acessar as rotas da minha API pelo padrão [REST](https://docs.microsoft.com/pt-br/azure/architecture/best-practices/api-design)

### Instalações do BackEnd
+ [Chocolatey](chocolatey.org)
  + Gerenciador de pacotes.
  + Passo a passo da instalação no [aqui.](chocolatey.org/install)
+ [NodeJs](https://nodejs.org/)
  + Com o Chocolatey instalado execute o comando:
     > cinst nodejs-lts
  
### O Editor Utilizado foi o Visual Studio Code
+ Extensões
  + Dracula theme
  + Matrial icon theme
  + indent-rainbow
  


### Dependencias utilizadas na API
+ Express
  + > npm install express
+ [Nodemon](https://github.com/israaoliver/Be-the-Hero-ProjetoSemanaOmniStack-11/blob/master/Material%20de%20Apoio/back-nodemon.txt) 
  + Utilizado apenas no desenvolvimento
  + Mantem a aplicação sempre atualizanda sem a necessidade de resetar

#### Bando de Dados 
O bando de dados utilizado foi o Sqlite usamos a ferramenta [Knex](http://knexjs.org/) 
+ Para instalar ele no projeto basta aplicar 
  > npm install knex  
  > npm install sqlite3
+ Conexão com o banco atravez do [Knex](http://knexjs.org/) 
  + Cria o arquivo *knexfile.js* onde esta as cofigurações de conexão
  > npx knex init
+ [Migrations](https://github.com/israaoliver/Be-the-Hero-ProjetoSemanaOmniStack-11/blob/master/Material%20de%20Apoio/Migrations.txt)




  




