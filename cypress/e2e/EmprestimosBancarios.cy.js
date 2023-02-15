/// <reference types="Cypress" />

/*
 Cenários de teste de API (Backend)
*/

const url = "https://8dac9f4e-fcb2-4e8f-857a-e4ed3497a0d8.mock.pstmn.io";

const authorization = `Bearer ${Cypress.env(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJkZXNhZmlvIjoic2VyYXNhIn0.oOMv4kf9hKMtuatZEZJyESVu9Z7h6hGBwrZRJ-9HkCU"
)}`;

describe("POST", () => {
  it("Consultar os juros e o estado de atuação de todas as instituições financeiras sem utilizar o token de autorização", () => {
    cy.request({
      method: "GET",
      url: url + "/bank",
    }).then((response) => {
      expect(response.status).to.eq(401);
    });
  });

  it("Consultar os juros e o estado de atuação de todas as instituições financeiras com url inválida", () => {
    cy.request({
      method: "GET",
      url: "https://8dac9f4e-fcb2-4e8f-857a-e4ed3497a0d8.mock.pstmn.io/ban",
      headers: { authorization },
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });

  it("Consultar os juros de instituições financeiras de um estado que não possui nenhuma vinculada", () => {
    cy.request({
      method: "GET",
      url: url + "/bank?estadoAtuacao=RS",
      headers: { authorization },
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });

  it("Consultar juros abaixo de 0 de instituições financeiras", () => {
    cy.request({
      method: "GET",
      url: url + "/bank?juros=-15",
      headers: { authorization },
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });

  it("Consultar instituições financeiras e juros de um estado específico com a url inválida", () => {
    cy.request({
      method: "GET",
      url: url + "/bank?estadoAtuac",
      headers: { authorization },
    }).then((response) => {
      expect(response.status).to.eq(400);
    });
  });

  it("Consultar as instituições financeiras por seu ID", () => {
    cy.request({
      method: "GET",
      url: url + "/bank?ID=1",
      headers: { authorization },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.a("array");
      expect(response.body).to.eql([
        {
          id: 1,
          banco: "Banco do  Brasil",
          estadoAtuacao: "SC",
          juros: "11,25%",
        },
      ]);
    });
  });

  it("Consultar todas as instituições financeiras", () => {
    cy.request({
      method: "GET",
      url: url + "/bank",
      headers: { authorization },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.a("array");
    });
  });

  it("Alterar as informações da instituição financeira do ID=1", () => {
    cy.request({
      method: "PUT",
      url: url + "/bank?ID=1&estadoAtuacao=SP&juros=15",
      headers: { authorization },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.a("array");
      expect(response.body).to.deep.equal([
        {
          mensagem: "Registro alterado com sucesso!",
        },
        {
          id: 1,
          banco: "Banco do Brasil",
          estadoAtuacao: "SP",
          juros: "15,00%",
        },
      ]);
    });
  });

  it("Consultar instituições financeiras do estado de Santa Catarina", () => {
    cy.request({
      method: "GET",
      url: url + "/bank?estadoAtuacao=SC",
      headers: { authorization },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.a("array");
      response.body.forEach(function test(item) {
        expect(item.estadoAtuacao).to.eq("SC");
      });
    });
  });

  it("Consultar instituições financeiras e juros do estado de São Paulo", () => {
    cy.request({
      method: "GET",
      url: url + "/bank?estadoAtuacao=SP",
      headers: { authorization },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.a("array");
      response.body.forEach(function test(item) {
        expect(item.estadoAtuacao).to.eq("SP");
      });
    });
  });

  it("Consultar instituições financeiras e juros do estado do Paraná", () => {
    cy.request({
      method: "GET",
      url: url + "/bank?estadoAtuacao=PR",
      headers: { authorization },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.a("array");
      response.body.forEach(function test(item) {
        expect(item.estadoAtuacao).to.eq("PR");
      });
    });
  });

  it("Consultar os juros e o estado de atuação da instituição financeira Banco do Brasil", () => {
    cy.request({
      method: "GET",
      url: url + "/bank?banco=Banco do Brasil",
      headers: { authorization },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.a("array");
      response.body.forEach(function test(item) {
        expect(item.banco).to.eq("Banco do Brasil");
      });
    });
  });

  it("Consultar os juros e o estado de atuação da instituição financeira Nubank", () => {
    cy.request({
      method: "GET",
      url: url + "/bank?banco=Nubank",
      headers: { authorization },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.a("array");
      response.body.forEach(function test(item) {
        expect(item.banco).to.eq("Nubank");
      });
    });
  });

  it("Consultar os juros e o estado de atuação da instituição financeira Caixa Econômica Federal", () => {
    cy.request({
      method: "GET",
      url: url + "/bank?banco=Caixa Econômica Federal",
      headers: { authorization },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.a("array");
      response.body.forEach(function test(item) {
        expect(item.banco).to.eq("Caixa Econômica Federal");
      });
    });
  });

  it("Consultar os juros e o estado de atuação da instituição financeira Banco Santander", () => {
    cy.request({
      method: "GET",
      url: url + "/bank?banco=Banco Santander",
      headers: { authorization },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.a("array");
      response.body.forEach(function test(item) {
        expect(item.banco).to.eq("Banco Santander");
      });
    });
  });

  it("Consultar os juros e o estado de atuação da instituição financeira Banco Itaú", () => {
    cy.request({
      method: "GET",
      url: url + "/bank?banco=Banco Itaú",
      headers: { authorization },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.a("array");
      response.body.forEach(function test(item) {
        expect(item.banco).to.eq("Banco Itaú");
      });
    });
  });

  it("Consultar os juros e o estado de atuação da instituição financeira Banco Mercantil do Brasil", () => {
    cy.request({
      method: "GET",
      url: url + "/bank?banco=Banco Mercantil do Brasil",
      headers: { authorization },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.a("array");
      response.body.forEach(function test(item) {
        expect(item.banco).to.eq("Banco Mercantil do Brasil");
      });
    });
  });

  it("Consultar os juros e o estado de atuação da instituição financeira Banco Safra", () => {
    cy.request({
      method: "GET",
      url: url + "/bank?banco=Banco Safra",
      headers: { authorization },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.a("array");
      response.body.forEach(function test(item) {
        expect(item.banco).to.eq("Banco Safra");
      });
    });
  });

  it("Consultar os juros e o estado de atuação da instituição financeira Banco Bradesco", () => {
    cy.request({
      method: "GET",
      url: url + "/bank?banco=Banco Bradesco",
      headers: { authorization },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.a("array");
      response.body.forEach(function test(item) {
        expect(item.banco).to.eq("Banco Bradesco");
      });
    });
  });

  it("Consultar os juros e o estado de atuação da instituição financeira Banco Inter", () => {
    cy.request({
      method: "GET",
      url: url + "/bank?banco=Banco Inter",
      headers: { authorization },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.a("array");
      response.body.forEach(function test(item) {
        expect(item.banco).to.eq("Banco Inter");
      });
    });
  });

  it("Consultar os juros e o estado de atuação da instituição financeira Banco Original", () => {
    cy.request({
      method: "GET",
      url: url + "/bank?banco=Banco Original",
      headers: { authorization },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.a("array");
      response.body.forEach(function test(item) {
        expect(item.banco).to.eq("Banco Original");
      });
    });
  });
});
