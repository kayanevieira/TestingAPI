Feature: Sistema de apresentação de empréstimos bancários
    Eu, como usuário, desejo que, 
    ao consultar o sistema de apresentação de empréstimos bancários, retorne os juros por instituições financeiras e o estado de atuação de cada uma

# Cenário 1: 
  @FailTesting
  Scenario: Consultar os juros e o estado de atuação de todas as instituições financeiras sem utilizar o token de autorização
    Given que eu esteja no sistema de consulta
    When eu preencher a url para consulta de todas as instituições financeiras sem utilizar o token de autorização
    And clicar no botão "Send"
    Then o sistema deve retornar status 401 - Unauthorized

# Cenário 2: 
  @FailTesting
  Scenario: Consultar os juros e o estado de atuação de todas as instituições financeiras com url inválida
    Given que eu esteja no sistema de consulta
    When eu preencher a url incorreta para consulta de todas as instituições financeiras
    And clicar no botão "Send"
    Then o sistema deve retornar status 404 - Not Found

# Cenário 3: 
  @FailTesting
  Scenario: Consultar os juros de instituições financeiras de um estado que não possui nenhuma vinculada
    Given que eu esteja no sistema de consulta
    When eu preencher a url para consulta de todas as instituições financeiras do estado do Rio Grande do Sul
    And clicar no botão "Send"
    Then o sistema deve retornar status 404 - Not Found

# Cenário 4: 
  @FailTesting
  Scenario: Consultar juros abaixo de 0 de instituições financeiras
    Given que eu esteja no sistema de consulta
    When eu preencher a url para consulta com -15% de juros
    And clicar no botão "Send"
    Then o sistema deve retornar status 404 - Not Found

# Cenário 5: 
  @FailTesting
  Scenario: Consultar instituições financeiras e juros de um estado específico com a url inválida
    Given que eu esteja no sistema de consulta
    When eu preencher a url para consulta de estado de atuação com a url inválida
    And clicar no botão "Send"
    Then o sistema deve retornar status 404 - Not Found

# Cenário 6: 
  @HappyTesting
  Scenario: Atualizar as informações de um banco com a URL sem parâmetros
    Given que eu esteja no sistema de consulta
    When eu preencher a url sem os parâmetros necessários
    And clicar no botão "Send"
    Then o sistema deve retornar Status 400 - Bad Request

# Cenário 7: 
  @HappyTesting
  Scenario: Consultar as instituições financeiras por seu ID
    Given que eu esteja no sistema de consulta
    When eu preencher a url para consulta do ID 1
    And clicar no botão "Send"
    Then o sistema deve exibir somente as informações da instituição financeira de ID 1

# Cenário 8: 
  @HappyTesting
  Scenario: Consultar todas as instituições financeiras
    Given que eu esteja no sistema de consulta
    When eu preencher a url para consulta de todas as instituições financeiras
    And clicar no botão "Send"
    Then o sistema deve exibir todas as instituições financeiras com seus juros e estados de atuação

# Cenário 9: 
  @HappyTesting
  Scenario: Alterar as informações de juros e o estado de atuação de uma instituição financeira
    Given que eu esteja no sistema de consulta
    When eu preencher a url para alterar os juros e o estado de atuação da instituição financeira Banco do Brasil
    And clicar no botão "Send"
    Then o sistema deve retornar 200 com a mensagem "Registro alterado com sucesso!"

# Cenário 10: 
  @HappyTesting
  Scenario: Consultar instituições financeiras do estado de Santa Catarina
    Given que eu esteja no sistema de consulta
    When eu preencher a url para consulta de todas as instituições financeiras do estado de Santa Catarina
    And clicar no botão "Send"
    Then o sistema deve exibir todas as instituições financeiras de Santa Catarina com seus juros

# Cenário 11: 
  @HappyTesting
  Scenario: Consultar instituições financeiras e juros do estado de São Paulo
    Given que eu esteja no sistema de consulta
    When eu preencher a url para consulta de todas as instituições financeiras do estado de São Paulo
    And clicar no botão "Send"
    Then o sistema deve exibir todas as instituições financeiras de São Paulo com seus juros

# Cenário 12: 
  @HappyTesting
  Scenario: Consultar instituições financeiras e juros do estado do Paraná
    Given que eu esteja no sistema de consulta
    When eu preencher a url para consulta de todas as instituições financeiras do estado do Paraná
    And clicar no botão "Send"
    Then o sistema deve exibir todas as instituições financeiras de Paraná com seus juros

# Cenário 13: 
  @HappyTesting
  Scenario: Consultar os juros e o estado de atuação da instituição financeira Banco do Brasil
    Given que eu esteja no sistema de consulta
    When eu preencher a url para consulta da instituição financeira Banco do Brasil
    And clicar no botão "Send"
    Then o sistema deve exibir a instituição financeira Banco do Brasil com seus juros e estado de atuação

# Cenário 14: 
  @HappyTesting
  Scenario: Consultar os juros e o estado de atuação da instituição financeira Nubank
    Given que eu esteja no sistema de consulta
    When eu preencher a url para consulta da instituição financeira Nubank
    And clicar no botão "Send"
    Then o sistema deve exibir a instituição financeira Nubank com seus juros e estado de atuação

# Cenário 15: 
  @HappyTesting
  Scenario: Consultar os juros e o estado de atuação da instituição financeira Caixa Econômica Federal
    Given que eu esteja no sistema de consulta
    When eu preencher a url para consulta da instituição financeira Caixa Econômica Federal
    And clicar no botão "Send"
    Then o sistema deve exibir a instituição financeira Caixa Econômica Federal com seus juros e estado de atuação

# Cenário 16: 
  @HappyTesting
  Scenario: Consultar os juros e o estado de atuação da instituição financeira Banco Santander
    Given que eu esteja no sistema de consulta
    When eu preencher a url para consulta da instituição financeira Banco Santander
    And clicar no botão "Send"
    Then o sistema deve exibir a instituição financeira Banco Santander com seus juros e estado de atuação

# Cenário 17: 
  @HappyTesting
  Scenario: Consultar os juros e o estado de atuação da instituição financeira Banco Itaú
    Given que eu esteja no sistema de consulta
    When eu preencher a url para consulta da instituição financeira Banco Itaú
    And clicar no botão "Send"
    Then o sistema deve exibir a instituição financeira Banco Itaú com seus juros e estado de atuação

# Cenário 18: 
  @HappyTesting
  Scenario: Consultar os juros e o estado de atuação da instituição financeira Banco Mercantil do Brasil
    Given que eu esteja no sistema de consulta
    When eu preencher a url para consulta da instituição financeira Banco Mercantil do Brasil
    And clicar no botão "Send"
    Then o sistema deve exibir a instituição financeira Banco Mercantil do Brasil com seus juros e estado de atuação

# Cenário 19: 
  @HappyTesting
  Scenario: Consultar os juros e o estado de atuação da instituição financeira Banco Safra
    Given que eu esteja no sistema de consulta
    When eu preencher a url para consulta da instituição financeira Banco Safra
    And clicar no botão "Send"
    Then o sistema deve exibir a instituição financeira Banco Safra com seus juros e estado de atuação

# Cenário 20: 
  @HappyTesting
  Scenario: Consultar os juros e o estado de atuação da instituição financeira Banco Bradesco
    Given que eu esteja no sistema de consulta
    When eu preencher a url para consulta da instituição financeira Banco Bradesco
    And clicar no botão "Send"
    Then o sistema deve exibir a instituição financeira Banco Bradesco com seus juros e estado de atuação

# Cenário 21: 
  @HappyTesting
  Scenario: Consultar os juros e o estado de atuação da instituição financeira Banco Inter
    Given que eu esteja no sistema de consulta
    When eu preencher a url para consulta da instituição financeira Banco Inter
    And clicar no botão "Send"
    Then o sistema deve exibir a instituição financeira Banco Inter com seus juros e estado de atuação

# Cenário 22: 
  @HappyTesting
  Scenario: Consultar os juros e o estado de atuação da instituição financeira Banco Original
    Given que eu esteja no sistema de consulta
    When eu preencher a url para consulta da instituição financeira Banco Original
    And clicar no botão "Send"
    Then o sistema deve exibir a instituição financeira Banco Original com seus juros e estado de atuação


