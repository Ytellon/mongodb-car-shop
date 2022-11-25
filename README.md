# Projeto Car Shop 

Consiste em uma API para gerenciar de uma concessionária de veículos. 

* Construída com Node.js, Express, Typescript, MongoDB, Docker e Zod
* Utilizando os princípios SOLID e Programação Orientada a Objetos
* Aplicando Arquitetura de Software, com as camadas de Modelo, Serviço e de Controladores
* Testes unitários criados utilizando Mocha, Chai e Sinon


### Instruções

- Para rodar o repositório localmente, realize o clone do projeto e utilize os comandos a seguir para inicializar o Docker e instalar as dependências:

```
docker-compose up -d
docker exec -it car_shop bash
npm install // para instalar as dependências
docker-compose down // para parar completamente a aplicação
```

E utilize os comandos a seguir para executar a aplicação:

```
npm run dev // para iniciar a aplicação
```

### Endpoints

#### Carros

| Método | Funcionalidade | URL |
|---|---|---|
| `GET` | Retorna uma listagem de todos os carros cadastrados | http://localhost:3001/cars |
| `GET` | Retorna um carro específico | http://localhost:3001/cars/:id |
| `POST` | Realiza o cadastro de um carro | http://localhost:3001/cars |
| `PUT` | Atualiza os campos de um carro específico | http://localhost:3001/cars/:id |
| `DELETE` | Apaga os dados de um carro específico | http://localhost:3001/cars/:id |


<details>
  <summary>
    <strong>Nas requisições POST e PUT é necessário informar o seguinte JSON:</strong>
  </summary>

```
{
  "model": "Palio", // deve ser uma string com, pelo menos, 3 caracteres
  "year": 2011, // deve ser um valor inteiro positivo entre 1900 e 2022
  "color": "Preto", // deve ser uma string com, pelo menos, 3 caracteres
  "status": true, // deve receber valores booleanos e pode ser opcional
  "buyValue": 1000, //  deve receber apenas números inteiros
  "doorsQty": 4, // deve ser um valor inteiro positivo entre 2 e 4
  "seatsQty": 5 // deve ser um valor inteiro positivo entre 2 e 7 
}
```
</details>

#### Motocicleta

| Método | Funcionalidade | URL |
|---|---|---|
| `GET` | Retorna uma listagem de todos as motocicletas cadastrados | http://localhost:3001/motorcycles |
| `GET` | Retorna uma motocicleta específica | http://localhost:3001/motorcycles/:id |
| `POST` | Realiza o cadastro de uma motocicleta | http://localhost:3001/motorcycles |
| `PUT` | Atualiza os campos de uma motocicleta específica | http://localhost:3001/motorcycles/:id |
| `DELETE` | Apaga os dados de uma motocicleta específica | http://localhost:3001/motorcycles/:id |


<details>
  <summary>
    <strong>Nas requisições POST e PUT é necessário informar o seguinte JSON:</strong>
  </summary>
  
```
{
  "model": "Honda", // deve ser uma string com, pelo menos, 3 caracteres
  "year": 2011, // deve ser um valor inteiro positivo entre 1900 e 2022
  "color": "Preto", // deve ser uma string com, pelo menos, 3 caracteres
  "status": true, // deve receber valores booleanos e pode ser opcional
  "buyValue": 1000, //  deve receber apenas números inteiros
  "category": "Street", // deve poder ser apenas Street, Custom ou Trail
  "engineCapacity": 2000, // deve ser um valor inteiro positivo menor ou igual a 2500
}
```
</details>
