## Teste de API - Respostas

1- Bearer token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJkZXNhZmlvIjoic2VyYXNhIn0.oOMv4kf9hKMtuatZEZJyESVu9Z7h6hGBwrZRJ-9HkCU

2- 	URL: https://8dac9f4e-fcb2-4e8f-857a-e4ed3497a0d8.mock.pstmn.io/bank
	Método: GET
	Retorno: JSON com as informações dos bancos

3- 	URL: https://8dac9f4e-fcb2-4e8f-857a-e4ed3497a0d8.mock.pstmn.io/bank?estadoAtuacao=SC
	Método: GET

4- 	URL: https://8dac9f4e-fcb2-4e8f-857a-e4ed3497a0d8.mock.pstmn.io/bank?ID=1&estadoAtuacao=SP&juros=15,00
	Método: PUT

5- 	URL: https://8dac9f4e-fcb2-4e8f-857a-e4ed3497a0d8.mock.pstmn.io/bank
	Método: POST
	Body:
		{
    	    "banco": "Banco Teste",
	        "estadoAtuacao": "SC",
	        "juros": "10,00"
		}

6- Escrevi os cenários de teste utilizando Gherkin, por se tratar de uma linguagem natural, pode ser compreendida por todo o time do produto e também pode ser integrado com os testes automatizados, se desejado. Os cenários estão em: TestingAPI/cypress/features/EmprestimosBancarios.feature

7- 
<table>
<thead>
<th>Criticidade</th>
<th>Descrição do erro para o dev</th>
</thead>
<tbody>
<tr>
<td>Alto</td>
<td>Encontrei uma falha na segurança da consulta das instituções financeiras, pois está sendo permitido consultar as mesmas informações independente de utilizar o token de autorização ou não. As responses só deveriam ser exibidas com o preenchimento do token, e sem o preenchimento deveria retornar Status 401 - Unauthorized. Utilizei o token: Barear eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJkZXNhZmlvIjoic2VyYXNhIn0.oOMv4kf9hKMtuatZEZJyESVu9Z7h6hGBwrZRJ-9HkCU</td>
</tr>
<tr>
<td>Médio</td>
<td>Quando faço a tentativa de filtrar uma instituição financeira por um estado que não contém uma, é retornado instituições financeiras do estado SC, ao invés disso, deveria retornar Status 404 - Not Found, pois na lista completa dos bancos, o estado consultado não possui nenhuma instituição financeira. Realizei a consulta da seguinte forma:
URL: https://8dac9f4e-fcb2-4e8f-857a-e4ed3497a0d8.mock.pstmn.io/bank?estadoAtuacao=RS Metódo: GET</td>
</tr>
<tr>
<td>Médio</td>
<td>Quando realizo a consulta de instituições que tenham um juros abaixo de 0%, o qual deveria retornar Status 404 - Not Found,retorna sucesso com Status 200. Realizei a consulta da seguinte forma:
URL: https://8dac9f4e-fcb2-4e8f-857a-e4ed3497a0d8.mock.pstmn.io/bank?juros=-15 Metódo: GET</td>
</tr>
<tr>
<td>Médio</td>
<td>Quando realizo a consulta de instituições financeiras e juros de um estado específico com a url inválida, o qual deveria retornar Status 400 - Bad Request, retorna Status 200 com todos os bancos exibidos. Realizei a consulta da seguinte forma:
URL: https://8dac9f4e-fcb2-4e8f-857a-e4ed3497a0d8.mock.pstmn.io/bank?estadoAtuac Metódo: GET</td>
</tr>
<tr>
<td>Médio</td>
<td>Quando realizo a consulta de instituições financeiras por seu ID, o qual deveria retornar Status 200 e somente o banco cujo ID foi consultado, retorna Status 200 com todos os bancos exibidos. Realizei a consulta da seguinte forma:
URL: https://8dac9f4e-fcb2-4e8f-857a-e4ed3497a0d8.mock.pstmn.io/bank?ID=1 Metódo: GET</td>
</tr>
<tr>
<td>Médio</td>
<td>Quando realizo a consulta por banco, o qual deveria retornar Status 200 e somente o banco que foi solicitado, retorna Status 200 com todos os bancos exibidos. Realizei a consulta da seguinte forma:
URL: https://8dac9f4e-fcb2-4e8f-857a-e4ed3497a0d8.mock.pstmn.io/bank?ID=1 Metódo: GET</td>
</tr>

8- Os testes automatizados implementados com a linguagem JavaScript em Cypress estão em: TestingAPI/cypress/e2e/EmprestimosBancarios.cy.js, para roda-los, digitar no terminal com o caminho TestingAPI/cypress, "npm run cypress"
