 # Documento de Modelos

Neste documento temos o modelo Conceitual (UML) ou de Dados (Entidade-Relacionamento). Temos também a descrição das entidades e o dicionário de dados.

Para a modelagem pode se usar o Astah UML ou o BrModelo. Uma ferramenta interessante para modelos UML é a [YUML](http://yuml.me), no link temos um exemplo de [Modelo UML com YUML](yuml/monitoria-yuml.md). Atualmente é possível usar a ferramenta **Mermaid** segundo o blog do GitHub [Include diagrams in your Markdown files with Mermaid](https://github.blog/2022-02-14-include-diagrams-markdown-files-mermaid/). A documentação do **Mermaid** pode ser encontrada em [Mermaid in GitHub](https://mermaid-js.github.io/mermaid).

## Modelo Conceitual

### Diagrama de Classes usando Mermaid

```mermaid
classDiagram
  class Pessoa {
    - nome: char
    - email: char
    - numTelefone: char
    - status: boolean
    - dataNascimento: char
    - dataDoDesativo: char
    
    + sets(): void
    + gets(): void
    + incluirPessoa(pes: Pessoa): void
    + alterarPessoa(pes: Pessoa): void
    + desativarPessoa(pes: Pessoa): void
    + listarPessoa(pes: Pessoa): void
  }
  
  class Cliente {
    - cpf: char
    - rg: char
    
    + sets(): void
    + gets(): void
    + consultarCliente(cpf: char): Cliente
  }

    class Fornecedor {
    - cnpj: char
    
    + sets(): void
    + gets(): void
    + consultarFornecedor(cnpj: char): Fornecedor
  }
    class Funcionario {
    - cpf: char
    - cargo: char
    - salario: double
    - cargaHoraria: double
    
    + sets(): void
    + gets(): void
    + consultarFuncionario(cpf: char): Funcionario
    + selecionarCargo(cargo: char): void
    + calcularSalario(salario: double, cargaHoraria: double): double
  }
  
  class Endereco {
    - nome: char
    - numCasa: int
    - complemento: char
    - ownerBairro: Bairro
    
    + sets(): void
    + gets(): void
  }
  
  class Bairro {
    - nome: char
    - codigo: int
    - ownerCidade: Cidade
    
    + sets(): void
    + gets(): void
  }
  
  class Cidade {
    - cep: char
    - nome: int
    - codigo: int
    - ownerEstado: Estado
    
    + sets(): void
    + gets(): void
  }
  
  class Estado {
    - rua: int
    - codigo: int
    - ownerPessoa: Pessoa
    - ownerBairro: Bairro
    - typeOwner: char
    
    + sets(): void
    + gets(): void
  }

class Produto {
    - codigoBarras: char
    - tipo: char
    - dataValidade: char
    - quantMinima: int
    - valor : double
    - status: boolean
    - nome: char
    - quantidade: int
    
    + sets(): void
    + gets(): void
    + incluirProduto(prod: Produto) : void
    + consultarProduto(codigoBarras: char) : Produto
    + desativarProduto(prod: Produto) : void
    + alterarProduto(prod: Produto) : void
    + gerarRelatorioItensQuantMinima(quantMinima: int) : ArrayList
    + gerarRelatorioProdutosDisponiveis(status: boolean) : ArrayList
    + mudarStatus(status: boolean) : void
  }

  class Venda_Produto {
    - codigo: int
    - produto: Produto
    - venda: Venda
    - quantidade: int
    - valor: double
    - status: boolean
    - dataDoDesativo: char
    
    + sets(): void
    + gets(): void
  }

  class Venda {
    - cliente: Pessoa
    - codigo: int
    - data: char
    - total: double

    + sets(): void
    + gets(): void
    + registrarVenda(venda: Venda): void
    + consultarVenda(venda: Venda): void
    + calcularValor(venda: Venda): double
    + gerarNotaFiscal(venda: Venda): void
    + gerarConta(cliente: Pessoa, venda: Venda): void
    + gerarRelatorioVendasMensais(venda: Venda, data: char): ArrayList
  }

  class Venda_MetodoPagamento {
    - venda: Venda
    - metodoPagamento: MetodoPagamento
  }

  class NotaFiscal {
    - DataEmissao: char
    - listVendaProduto: char
    - ownerVenda: char
    
    + sets(): void
    + gets(): void
    + valorTotal(valorBase: double, impostos: double, valorProduto: double): void
  }
  
  class EntradaMercadoria {
    - quantidade: int
    - codigo: int
    - fornecedor: Pessoa
    - data: char
    - valor: double
    
    + sets(): void
    + gets(): void
    + incluirEntrada(entrada: EntradaMercadoria): void
    + gerarConta(entrada: EntradaMercadoria, fornecedor: Pessoa): void
  }

  class EntradaMercadoria_Produto {
    - produto: Produto
    - entradaMercadoria: EntradaMercadoria
  }

  class EntradaMercadoria_MetodoPagamento {
    - ownerEntradaMercadoria: EntradaMercadoria
    - ownerMetodoPagamento: MetodoPagamento
  }

  class MetodoPagamento {
    - codigo: int
    - descricao: char
    - valor: double
  
    + sets(): void
    + gets(): void
  }
  
  class Conta {
    - codigo: int
    - venda: Venda
    - valor: double
    - dataVencimento: char
    - tipoReceber: boolean
    - entradaMercadoria: EntradaMercadoria
    - resolvida: boolean
    
    + sets(): void
    + gets(): void
    + incluirConta(conta: Conta): void
    + alterarConta(conta: Conta): void
    + consultarConta(cod: int): Conta
    + tipoConta(conta: Conta): void
    + gerarRelatorioLucrosMensais(conta: boolean): ArrayList
    + gerarRelatorioDespesasMensais(conta: boolean): ArrayList
  }

  class Caixa {
    - dataHoraAberturaAtual: char
    - idCaixa: int
    - valorInicial: double
    - valorAtual: double
    - isOpen: boolean
  
    + sets(): void
    + gets(): void
    + entrada(valor: double): void
    + saida(valor: double): void
  }

  class Caixa_DiaCaixa {
    - ownerCaixa: Caixa
    - ownerDiaCaixa: DiaCaixa
  }

  class DiaCaixa {
    - dataHoraAbertura: char
    - dataHoraEncerramento: char
    - valorInicial: double
    - valorFinal: double

    + sets(): void
    + gets(): void
  }
  
  class Pagamento {
    - conta: Conta
    - caixa: Caixa
    - valor: double
    - data: char
  
    + sets(): void
    + gets(): void
    + incluirConta(conta: Conta): void
    + alterarConta(conta: Conta): void
    + consultarConta(cod: int): Conta
    + tipoConta(conta: Conta): void
    + gerarRelatorioLucrosMensais(conta: boolean): ArrayList
    + gerarRelatorioDespesasMensais(conta: boolean): ArrayList
  }
  
  

Pessoa "*" -- "1" Endereco : possui
Pessoa "1" -- "*" Venda : possui
Venda "1" -- "1" Conta : possui
Venda "1" -- "1" NotaFiscal : possui
Venda "1" -- "*" Venda_MetodoPagamento : possui
Venda "1" -- "*" Venda_Produto : possui
Venda_MetodoPagamento "*" -- "1" MetodoPagamento : possui
NotaFiscal "1" -- "*" Venda_Produto : possui
Pessoa <|-- Cliente
Endereco "*" -- "1" Bairro : possui
Bairro "*" -- "1" Cidade : possui
Cidade "*" -- "1" Estado : possui
Conta "1" -- "1" EntradaMercadoria : possui
EntradaMercadoria "1" -- "*" EntradaMercadoria_Produto : possui
Pagamento "*" -- "1" Conta : possui
Pagamento "*" -- "1" Caixa : possui
Pessoa <|-- Fornecedor
Pessoa <|-- Funcionario
Produto "1" -- "*" Venda_Produto : possui
Produto "1" -- "*" EntradaMercadoria_Produto : possui
Caixa "1" -- "*" Caixa_DiaCaixa : possui
DiaCaixa "1" -- "*" Caixa_DiaCaixa : possui
EntradaMercadoria "1" -- "*" EntradaMercadoria_MetodoPagamento : possui
MetodoPagamento "1" -- "*" EntradaMercadoria_MetodoPagamento : possui


```

### Descrição das Entidades

Descrição sucinta das entidades presentes no sistema.

| Entidade | Descrição   |
|----------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| Pagamento | Entidade que representa um Pagamento tem as informações: conta, caixa, valor, data, +set's(), +get's(), +incluirConta(), +alterarConta(), +consultarConta(), +tipoConta(), +gerarRelatorioLucrosMensais() +gerarRelatorioDespesasMensais. |
| Caixa | Entidade que representa um Caixa tem as informações: dataHoraAberturaAtual, idCaixa, valorInicial, valorAtual, isOpen, +set's(), +get's(), +entrada(), +saida() |
| Caixa_DiaCaixa | Entidade que representa um Caixa_DiaCaixa tem as informações: ownerCaixa, ownerDiaCaixa |
| DiaCaixa | Entidade que representa um DiaCaixa tem as informações: dataHoraAbertura, dataHoraEncerramento, valorInicial, valorFinal, +set's(), +get's() |
| Bairro | Entidade que representa um Bairro e tem as informações: nome, código, ownerCidade, +set's() e +get's() |
| NotaFiscal | Entidade que representa uma NotaFiscal no sistema, e tem as seguintes informações: dataEmissao, listVendaProduto, ownerVenda, +set's(), +get's() e +valorTotal() |
| Venda | Entidade que representa uma Venda no sistema, e tem as seguintes informações: cliente, código, data, total, +set's(), +get's(), +registrarVenda(), +consultarVenda(), +calcularValor(), +gerarNotaFiscal(), +gerarConta() e +gerarRelatorioVendasMensais() |
| Venda_Produto | Entidade que representa a Venda_Produto e tem como informações: produto, venda, quantidade, valor, status, +set's() e +get's() |
| Venda_MetodoPagamento | Entidade que representa o método de pagamento da venda e tem as informações: venda, metodoPagamento e valor |
| MetodoPagamento | Entidade que representa o MetodoPagamento e tem as seguintes informações: codigo, descricao, +set's() e +get's() |
| Pessoa | Entidade que representa a Pessoa e tem as seguintes informações: nome, email, numTelefone, status, dataNascimento, +set's(), +get's(), +incluirPessoa(), +alterarPessoa(), +desativarPessoa(), +listarPessoa() |
| Cliente | Entidade que representa o Cliente e tem as seguintes informações: cpf, rg, +set's(), +get's(), +consultarCliente() |
| Fornecedor | Entidade que representa o Fornecedor e tem as seguintes informações: cnpj, +set's(), +get's(), +consultarFornecedor() |
| Funcionário | Entidade que representa o Funcionário e tem as seguintes informações: cpf, cargo, cargaHoraria, salario, +set's(), +get's(), +consultarFuncionario(), +selecionarCargo(), +calcularSalario() |
| Estado | Entidade que representa o Estado e tem as seguintes informações: rua, codigo, ownerPessoa, ownerBairro, +set's(), +get's() |
| Cidade | Entidade que representa a Cidade e tem as seguintes informações: cep, nome, codigo, ownerEstado, dataNascimento, +set's(), +get's() |
| Endereço | Entidade que representa o Endereço e tem as seguintes informações: nome, numCasa, complemento, +set's(), +get's() |
| EntradaMercadoria | Entidade que representa a EntradaMercadoria e tem as seguintes informações: quantidade, codigo, fornecedor, data, valor, +set's(), +get's(), +incluirEntrada(), +gerarConta() |
| EntradaMercadoria_Produto | Entidade que representa a EntradaMercadoria_Produto e tem as seguintes informações: produto, entradaMercadoria |
| EntradaMercadoria_MetodoPagamento | Entidade que representa a EntradaMercadoria_MetodoPagamento e tem as seguintes informações: ownerEntradaMercadoria, ownerMetodoPagamento |
| Produto | Entidade que representa o Produto e tem as seguintes informações: codigoBarras, tipo, dataValidade, quantMinima, valor, status, ownerPessoa, +set's(), +get's(), +incluirProduto(), +alterarProduto(), +desativarProduto(), +consultarProduto(), +gerarRelatorioItensQuantMinima(), +gerarRelatorioProdutosDisponiveis(), +mudarStatus() |
| Conta | Entidade que representa a Conta e tem as seguintes informações: codigo, venda, valor, dataVencimento, tipoReceber, entradaMercadoria, +set's(), +get's(), +incluirConta(), +alterarConta(), +consultarConta(), +tipoConta(), +gerarRelatorioLucrosMensais(), +gerarRelatorioDespesasMensais() |


### Dicionário de Dados

* Conta

| Tabela     | Conta                                                                      |
| ---------- | -------------------------------------------------------------------------- |
| Descrição  | Armazena as informações de uma conta                     .                 |
| Observação | A conta poderá ser a pagar (Entrada) ou a receber (Venda)                  |

| Nome          | Descrição                        | Tipo de Dado | Tamanho | Restrições de Domínio |
| ------------- | -------------------------------- | ------------ | ------- | --------------------- |
| codigo             | Identificador gerado automatico   | INT          | ---     | PK / Identity    |
| ownerVenda              | Identificador da venda realizada  | Venda      | ---     | FK         |
| valor              | Valor referente a conta           | DOUBLE     | ---     | Not Null      |
| dataVencimento     | Data de vencimento da conta       | CHAR       | 55      | Not Null      |
| resolvida     | Campo identificador para saber se a conta já foi paga       | BOOLEAN       | ---      | Not Null      |
| tipoReceber        | Campo identificador para saber se é entrada ou saída      | BOOLEAN      | ---     | Not Null    |
| ownerEntradaMercadoria  | Identificador da entradaMercadoria realizada    | EntradaMercadoria      | ---      | FK       |

* Pagamento

| Tabela     | Pagamento                                                                      |
| ---------- | -------------------------------------------------------------------------- |
| Descrição  | Armazena as informações de um Pagamento                     .                 |
| Observação | O usuário poderá concretizar o pagamento de uma conta em determinado caixa    |

| Nome          | Descrição                        | Tipo de Dado | Tamanho | Restrições de Domínio |
| ------------- | -------------------------------- | ------------ | ------- | --------------------- |
| codigo             | Identificador gerado automatico   | INT          | ---     | PK / Identity    |
| ownerConta              | Identificador da conta a ser paga  | Conta      | ---     | FK / Not Null     |
| valor              | Valor referente ao pagamento           | DOUBLE     | ---     | Not Null      |
| data              | Data referente ao pagamento da conta    | CHAR     | 55     | Not Null         |
| ownerCaixa  | Identificador do caixa que será pago a conta  | Caixa      | ---      | FK / Not Null     |

* Caixa

| Tabela     | Caixa                                                                      |
| ---------- | -------------------------------------------------------------------------- |
| Descrição  | Armazena as informações de um Caixa                     .                 |
| Observação | O usuário autorizado poderá abrir e fechar o caixa, além de administrar a entrada e saída de dinheiro    |

| Nome          | Descrição                        | Tipo de Dado | Tamanho | Restrições de Domínio |
| ------------- | -------------------------------- | ------------ | ------- | --------------------- |
| codigo                  | Identificador gerado automatico   | INT          | ---     | PK / Identity    |
| valorInicial            | Valor inicial que o caixa começou a operar em determinado dia | DOUBLE | --- | Not Null |
| valorAtual              | Valor atual em que o caixa se encontra em determinado dia     | DOUBLE | --- | Not Null |
| dataHoraAberturaAtual   | Data referente ao dia e hora que o caixa foi aberto em certo dia | CHAR | 55 | Not Null |
| isOpen                  | Atributo para identificar se o caixa está aberto ou fechado  | BOOLEAN  | ---   | Not Null  |

* Caixa_DiaCaixa

| Tabela     | Caixa_DiaCaixa                                                                      |
| ---------- | -------------------------------------------------------------------------- |
| Descrição  | Armazena as informações de um Caixa_DiaCaixa                     .                   |
| Observação | Ao fechar o caixa será gerado uma tabela com o histórico do mesmo no dia em questão  |

| Nome          | Descrição                        | Tipo de Dado | Tamanho | Restrições de Domínio |
| ------------- | -------------------------------- | ------------ | ------- | --------------------- |
| codigo        | Identificador gerado automatico   | INT          | ---     | PK / Identity    |
| ownerCaixa    | Identificador do caixa que será gerado o histórico em um dia específico | Caixa | --- | FK / Not Null |
| ownerDiaCaixa | Identificador do DiaCaixa que será atribuído a um caixa em um dia específico | DiaCaixa | --- |FK / Not Null |

* DiaCaixa

| Tabela     | DiaCaixa                                                                      |
| ---------- | -------------------------------------------------------------------------- |
| Descrição  | Armazena as informações de um DiaCaixa                     .                   |
| Observação | Essa tabela será gerada após o fechamento de um caixa onde será armazenadas as informações do mesmo no dia do fechamento   |

| Nome          | Descrição                        | Tipo de Dado | Tamanho | Restrições de Domínio |
| ------------- | -------------------------------- | ------------ | ------- | --------------------- |
| codigo        | Identificador gerado automatico   | INT          | ---     | PK / Identity    |
| dataHoraAbertura     | Data e hora em que o caixa foi aberto em um dia específico | CHAR | 55 | Not Null |
| dataHoraEncerramento | Data e hora em que o caixa foi fechado em um dia específico | CHAR | 55 | Not Null |
| valorInicial    | Valor em que o caixa começou a operar em um dia específico | DOUBLE | --- | Not Null |
| valorFinal      | Valor em que o caixa terminou de operar em um dia específico | DOUBLE | --- | Not Null |

* Estado

| Tabela     | Estado                                                                     |
| ---------- | -------------------------------------------------------------------------- |
| Descrição  | Armazena as informações do estado informado                                |
| Observação | Essa tabela será gerada após o preenchimento dos dados do cliente          |

| Nome         | Descrição                                | Tipo de Dado | Tamanho | Restrições de Domínio |
| ------------ | ---------------------------------------- | ------------ | ------- | --------------------- |
| codigo       | Identificador gerado automaticamente     | INT          | ---     | PK / Identity         |
| owner        | Identificador da Pessoa na qual o Estado está vinculado | Pessoa  | ---  | FK / Not Null  |
| nome         | Identificador do nome do estado          | CHAR         | 105     | Not Null              |
| typeOwner    | Campo identificador para saber se o owner é cliente, fornecedor ou funcionário | CHAR  | 105     | Not Null  |

* Cidade
  
| Tabela     | Cidade                                                                     |
| ---------- | -------------------------------------------------------------------------- |
| Descrição  | Armazena as informações da cidade informada                                |
| Observação | Essa tabela será gerada após o preenchimento dos dados do cliente          |

| Nome         | Descrição                                | Tipo de Dado | Tamanho | Restrições de Domínio |
| ------------ | ---------------------------------------- | ------------ | ------- | --------------------- |
| codigo       | Identificador gerado automaticamente     | INT          | ---     | PK / Identity         |
| owner        | Identificador do Estado na qual a Cidade está vinculado | Estado  | ---  | FK / Not Null  |
| nome         | Identificador do nome da cidade          | CHAR         | 105     | Not Null              |
| cep          | Identificador do CEP da cidade           | CHAR         | 105     | Not Null              |

* Bairro
  
| Tabela     | Bairro                                                                     |
| ---------- | -------------------------------------------------------------------------- |
| Descrição  | Armazena as informações do bairro informado                                |
| Observação | Essa tabela será gerada após o preenchimento dos dados do cliente          |

| Nome         | Descrição                                | Tipo de Dado | Tamanho | Restrições de Domínio |
| ------------ | ---------------------------------------- | ------------ | ------- | --------------------- |
| codigo       | Identificador gerado automaticamente     | INT          | ---     | PK / Identity         |
| owner        | Identificador da Cidade na qual o Bairro está vinculado | Cidade  | ---  | FK / Not Null  |
| nome         | Identificador do nome do bairro          | CHAR         | 105     | Not Null              |

* Endereço
  
| Tabela     | Endereço                                                                   |
| ---------- | -------------------------------------------------------------------------- |
| Descrição  | Armazena as informações do endereço informado                              |
| Observação | Essa tabela será gerada após o preenchimento dos dados do cliente          |

| Nome         | Descrição                                | Tipo de Dado | Tamanho | Restrições de Domínio |
| ------------ | ---------------------------------------- | ------------ | ------- | --------------------- |
| codigo       | Identificador gerado automaticamente     | INT          | ---     | PK / Identity         |
| ownerBairro  | Identificador do Bairro na qual o Endereço está vinculado | Bairro | ---  | FK / Not Null |
| rua          | Identificador do nome da rua             | CHAR         | 55      | Not Null              |
| numCasa      | Identificador do número da casa          | INT          | 10      | Not Null              |
| complemento  | Identificador de um ponto de referência  | CHAR         | 55      | Not Null              |

* NotaFiscal
  
| Tabela     | Nota Fiscal                                                                |
| ---------- | -------------------------------------------------------------------------- |
| Descrição  | Armazena as informações de uma Nota Fiscal                                 |
| Observação | Essa tabela será gerada após a confirmação de uma Venda                    |

| Nome         | Descrição                                | Tipo de Dado | Tamanho | Restrições de Domínio |
| ------------ | ---------------------------------------- | ------------ | ------- | --------------------- |
| codigo       | Identificador gerado automaticamente     | INT          | ---     | PK / Identity         |
| ownerVenda   | Indentificador da venda                  | Venda        | ---     | FK / Not Null         |
| dataEmissao  | Data referente a realização da venda     | CHAR         | 55      | Not Null              |
| listVendaProduto | Identificador de VendaProduto        | VendaProduto | ---     | FK / Not Null         |

* MetodoPagamento
  
| Tabela     | Método Pagamento                                                           |
| ---------- | -------------------------------------------------------------------------- |
| Descrição  | Armazena as informações sobre os métodos de pagamento de uma venda         |
| Observação | Essa tabela será gerada na sessão de pagamentos de uma venda               |

| Nome         | Descrição                                | Tipo de Dado | Tamanho | Restrições de Domínio |
| ------------ | ---------------------------------------- | ------------ | ------- | --------------------- |
| codigo       | Identificador gerado automaticamente     | INT          | ---     | PK / Identity         |
| descricao    | Descrição de qual será a forma de pagamento  | CHAR     | 55      | Not Null              |
| valor        | Valor atribuído ao método de pagamento   | DOUBLE       | ---     | Not Null              |

* Venda
  
| Tabela     | Venda                                                                      |
| ---------- | -------------------------------------------------------------------------- |
| Descrição  | Armazena as informações de uma Venda                                       |
| Observação | Essa tabela será gerada na sessão de realização de uma venda               |

| Nome         | Descrição                                | Tipo de Dado | Tamanho | Restrições de Domínio |
| ------------ | ---------------------------------------- | ------------ | ------- | --------------------- |
| codigo       | Identificador gerado automaticamente     | INT          | ---     | PK / Identity         |
| cliente      | Informação do cliente                    | Pessoa       | ---     | FK / Not Null         |
| data         | Data da venda                            | CHAR         | 55      | Not Null              |
| total        | Total da venda                           | DOUBLE       | ---     | Not Null              |

* Venda_Produto
  
| Tabela     | Venda_Produto                                                              |
| ---------- | -------------------------------------------------------------------------- |
| Descrição  | Armazena as informações de uma Venda_Produto                               |
| Observação | Essa tabela será gerada na sessão de realização de uma venda               |

| Nome         | Descrição                                | Tipo de Dado | Tamanho | Restrições de Domínio |
| ------------ | ---------------------------------------- | ------------ | ------- | --------------------- |
| codigo       | Identificador gerado automaticamente     | INT          | ---     | PK / Identity         |
| produto      | Informações de um produto                | Produto      | ---     | FK / Not Null         |
| venda        | Informações de uma venda                 | Venda        | ---     | FK / Not Null         |
| quantidade   | Quantidade do produto                    | INT          | ---     | Not Null              |
| valor        | Valor do produto                         | DOUBLE       | ---     | Not Null              |
| status       | Identificador do status de Venda_Produto | BOOLEAN      | ---     | Not Null              |
| dataDoDesativo | Data no qual foi feito o desativo      | CHAR         | 15      | Not Null              |

* Venda_MetodoPagamento
  
| Tabela     | Venda_MetodoPagamento                                                      |
| ---------- | -------------------------------------------------------------------------- |
| Descrição  | Armazena as informações do método de pagamento de uma venda                |
| Observação | Essa tabela será gerada na sessão de realização de uma venda               |

| Nome         | Descrição                                | Tipo de Dado | Tamanho | Restrições de Domínio |
| ------------ | ---------------------------------------- | ------------ | ------- | --------------------- |
| codigo       | Identificador gerado automaticamente     | INT          | ---     | PK / Identity         |
| ownerVenda   | Informações da venda                     | Venda        | ---     | FK / Not Null         |
| ownerMetodoPagamento   | Informação do método de pagamento escolhido | MetodoPagamento  | --- | FK / Not Null |

* Produto

| Tabela     | Produto                                                                    |
| ---------- | -------------------------------------------------------------------------- |
| Descrição  | Armazena as informações de um produto                                      |
| Observação | Mais do mesmo produto poderão ser cadastrados na mesma tabela              |

| Nome          | Descrição                        | Tipo de Dado | Tamanho | Restrições de Domínio  |
| ------------- | -------------------------------- | ------------ | ------- | ---------------------  |
| codigo             | Identificador gerado automatico            | INT     | ---    | PK / Identity |
| codigoBarras       | Identificador em barras gerado automatico  | INT     | ---    | Not Null      |
| nome               | Nome do produto                            | CHAR    | 155    | Not Null      |
| tipoProduto        | Identificador do tipo do produto           | CHAR    | 55     | Not Null      |
| valor              | Valor referente ao produto                 | DOUBLE  | ---    | Not Null      |
| dataValidade       | Data de validade do produto                | CHAR    | 55     | Not Null      |
| quantidade         | Quantidade em estoque de um produto        | INT     | ---    | Not Null      |
| qtdMinima          | Quantidade mínima que um produto deve ter em estoque | INT    | --- | Not Null|
| status             | Identificador do status do produto         | BOOLEAN | ---    | Not Null      |

* EntradaMercadoria

| Tabela     | EntradaMercadoria                                                          |
| ---------- | -------------------------------------------------------------------------- |
| Descrição  | Armazena as informações da entrada de mercadoria                           |
| Observação | Gera uma conta com o valor total da entrada de mercadoria                  |

| Nome          | Descrição                        | Tipo de Dado | Tamanho | Restrições de Domínio |
| ------------- | -------------------------------- | ------------ | ------- | --------------------- |
| codigo        | Identificador gerado automatico  | INT          | ---     | PK / Identity         |
| ownerFornecedor | Identificador do fornecedor    | Fornecedor   | ---     | FK / Not Null         |
| quantidade    | Quantidade de produtos que estão entrando no estoque  | INT | ---     | Not Null  |
| valor         | Valor referente a conta gerada   | DOUBLE       | ---     | Not Null              |
| data          | Data da entrada de mercadoria    | CHAR         | 55      | Not Null              |
 

* EntradaMercadoria_Produto

| Tabela     | EntradaMercadoria_Produto                                                  |
| ---------- | -------------------------------------------------------------------------- |
| Descrição  | Armazena as informações da entrada de mercadoria de um produto             |
| Observação | Essa tabela será gerada na sessão de realização de uma entrada de mercadoria |

| Nome          | Descrição                        | Tipo de Dado | Tamanho | Restrições de Domínio |
| ------------- | -------------------------------- | ------------ | ------- | --------------------- |
| codigo        | Identificador gerado automatico  | INT          | ---     | PK / Identity         |
| produto       | Identificador do produto que está entrando em estoque     | Produto      | ---    | FK / Not Null |
| entradaMercadoria | Identificador da entrada de mercadoria  | EntradaMercadoria | ---    | FK / Not Null   |

* EntradaMercadoria_MetodoPagamento

| Tabela     | EntradaMercadoria_MetodoPagamento                                          |
| ---------- | -------------------------------------------------------------------------- |
| Descrição  | Identifica o método de pagamento efetuado na entrada de mercadoria         |
| Observação | Essa tabela será gerada na sessão de realização de uma entrada de mercadoria  |

| Nome          | Descrição                        | Tipo de Dado | Tamanho | Restrições de Domínio |
| ------------- | -------------------------------- | ------------ | ------- | --------------------- |
| codigo        | Identificador gerado automatico  | INT          | ---     | PK / Identity         |
| ownerEntradaMercadoria| Identificador de um Entrada de Mercadoria | EntradaMercadoria  | --- | FK / Not Null  |
| ownerMetodoPagamento  | Identificador de um Método de Pagamento   | MetodoPagamento    | --- | FK / Not Null  |

* Pessoa

| Tabela     | Pessoa                                                                     |
| ---------- | -------------------------------------------------------------------------- |
| Descrição  | Armazena as informações comuns dos usuários                                |
| Observação | Poderá ser o cliente, fornecedor ou funcionário.                           |

| Nome          | Descrição                        | Tipo de Dado | Tamanho | Restrições de Domínio |
| ------------- | -------------------------------- | ------------ | ------- | --------------------- |
| nome          | Nome do usuário                  | CHAR         | 255     | Not Null              |
| email         | Email do usuário                 | CHAR         | 255     | Not Null              |
| numTelefone   | Número do telefone do usuário    | CHAR         | 11      | Not Null              |
| status        | Status sobre o usuário ativo ou desativado  | BOOLEAN | ---   | Not Null          |
| dataNascimento| Data de nascimento do usuário    | CHAR         | 15      | Not Null              |
| dataDoDesativo | Data no qual foi feito o desativo | CHAR       | 15      | Not Null              |

* Cliente

| Tabela     | Cliente                                                                    |
| ---------- | -------------------------------------------------------------------------- |
| Descrição  | Armazena as informações do cliente                                         |
| Observação | Herda da classe Pessoa e irá conter as informações adicionais de um Cliente|

| Nome          | Descrição                        | Tipo de Dado | Tamanho | Restrições de Domínio |
| ------------- | -------------------------------- | ------------ | ------- | --------------------- |
| codigo        | Identificador gerado automatico  | INT          | ---     | PK / Identity         |
| cpf           | Cpf do cliente                   | char         | 11      | Not Null              |
| rg            | Rg do cliente                    | char         | 9       | Not Null              |
 
* Funcionário

| Tabela     | Funcionário                                                                |
| ---------- | -------------------------------------------------------------------------- |
| Descrição  | Armazena as informações do funcionário                                     |
| Observação | Herda da classe Pessoa e irá conter as informações adicionais de um Funcionário|

| Nome          | Descrição                        | Tipo de Dado | Tamanho | Restrições de Domínio |
| ------------- | -------------------------------- | ------------ | ------- | --------------------- |
| codigo        | Identificador gerado automatico  | INT          | ---     | PK / Identity         |
| cpf           | Cpf do funcionário               | CHAR         | 11      | Not Null              |
| cargo         | Cargo do funcionário             | CHAR         | 55      | Not Null              |
| salario       | Salário do funcionário           | DOUBLE       | ---     | Not Null              |
| cargaHoraria  | A carga horária de trabalho do funcionário | DOUBLE | --- | Not Null              |

* Fornecedor

| Tabela     | Fornecedor                                                                 |
| ---------- | -------------------------------------------------------------------------- |
| Descrição  | Armazena as informações do fornecedor                                      |
| Observação | Herda da classe Pessoa e irá conter as informações adicionais de um Fornecedor |

| Nome          | Descrição                        | Tipo de Dado | Tamanho | Restrições de Domínio |
| ------------- | -------------------------------- | ------------ | ------- | --------------------- |
| codigo        | Identificador gerado automatico  | INT          | ---     | PK / Identity         |
| cnpj          | CNPJ do fornecedor               | CHAR         | 14      | Not Null              |
  

