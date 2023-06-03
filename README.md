# :construction: README em construção ! :construction:
<!-- Projeto Car Shop
Este projeto é uma API que simula uma concessionária de veículos, utilizando MongoDB e Mongoose como banco de dados.

Funcionalidades
A API oferece as seguintes funcionalidades:

Cadastro de carros: permite cadastrar novos carros com informações como marca, modelo, ano e preço.
Cadastro de motocicletas: permite cadastrar novas motocicletas com informações como marca, modelo, ano e preço.
Listagem de carros: exibe todos os carros cadastrados na concessionária.
Listagem de motocicletas: exibe todas as motocicletas cadastradas na concessionária.
Busca por carro: permite buscar um carro específico pelo seu identificador único.
Busca por motocicleta: permite buscar uma motocicleta específica pelo seu identificador único.
Atualização de carro: possibilita atualizar as informações de um carro já cadastrado.
Atualização de motocicleta: possibilita atualizar as informações de uma motocicleta já cadastrada.
Requisitos
Certifique-se de ter os seguintes requisitos instalados em sua máquina:

Node.js (versão 12 ou superior)
MongoDB
Configuração
Clone o repositório:

shell
Copy code
git clone https://github.com/joanamds/projeto-car-shop.git
Instale as dependências:

shell
Copy code
cd projeto-car-shop
npm install
Configure o banco de dados MongoDB. Certifique-se de ter o MongoDB instalado e em execução. Acesse o arquivo config/database.js e verifique se a URL de conexão está correta para o seu ambiente.

Inicie o servidor:

shell
Copy code
npm start
Isso iniciará o servidor na porta 3000 por padrão. Você pode alterar a porta editando o arquivo config/server.js.

Agora você pode utilizar as rotas da API para interagir com a concessionária de veículos. Veja a documentação abaixo para saber como usar cada rota.

Rotas da API
A API oferece as seguintes rotas:

GET /cars
Esta rota retorna todos os carros cadastrados na concessionária.

GET /cars/:id
Esta rota retorna um carro específico com base no seu identificador único (id).

POST /cars
Esta rota permite cadastrar um novo carro. Os dados devem ser enviados no corpo da requisição no formato JSON. Exemplo:

json
Copy code
{
  "brand": "Toyota",
  "model": "Corolla",
  "year": 2021,
  "price": 120000
}
PUT /cars/:id
Esta rota permite atualizar as informações de um carro existente. O id do carro deve ser fornecido na URL e os novos dados devem ser enviados no corpo da requisição no formato JSON.

GET /motorcycles
Esta rota retorna todas as motocicletas cadastradas na concessionária.

GET /motorcycles/:id
Esta rota retorna uma motocicleta específica com base no seu identificador único (id).

POST /motorcycles
Esta rota permite cadastrar uma nova motocicleta. Os dados devem ser enviados no corpo da requisição no formato JSON. Exemplo:

json
Copy code
{
  "brand": "Honda",
  "model": "CBR600RR",
  "year": 2022,
  "price": 25000
}
PUT /motorcycles/:id
Esta rota permite atualizar as informações de uma motocicleta existente. O id da motocicleta deve ser fornecido na URL e os novos dados devem ser enviados no corpo da requisição no formato JSON. -->
