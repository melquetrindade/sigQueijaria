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
    - endereco: Endereco
    - status: boolean
    - dataNascimento: char
    
    + setNome(value: char): void
    + setEmail(value: char): void
    + setNumTelefone(value: char): void
    + setStatus(value: boolean): void
    + getNome(): char
    + getEmail(): char
    + getNumTelefone(): char
    + getStatus(): boolean
    + incluirPessoa(pes: Pessoa): void
    + alterarPessoa(pes: Pessoa): void
    + desativarPessoa(pes: Pessoa): void
  }
  
  class Cliente {
    - pessoa: Pessoa
    - cpf: char
    - rg: char
    
    + set(): void
    + get(): void
    + consultarCliente(cpf: char): Cliente
  }

    class Fornecedor {
    - pessoa: Pessoa
    - cnpj: char
    
    + set(): void
    + get(): void
    + consultarFornecedor(cnpj: char): Fornecedor
  }
    class Funcionario {
    - pessoa: Pessoa
    - cpf: char
    - cargo: char
    - salario: double
    - cargaHoraria: double
    
    + set(): void
    + get(): void
    + consultarFuncionario(cpf: char): Funcionario
    + selecionarCargo(cargo: char): void
    + calcularSalario(salario: double, cargaHoraria: double): double
  }
  
  class Endereco {
    - nome: char
    - numCasa: int
    - complemento: char
    
    + set(): void
    + get(): void
  }
  
  class Bairro {
    - nome: char
    - codigo: int
    
    + set(): void
    + get(): void
  }
  
  class Cidade {
    - cep: char
    - nome: int
    - codigo: int
    
    + set(): void
    + get(): void
  }
  
  class Estado {
    - nome: int
    - codigo: int
    
    + set(): void
    + get(): void
  }
  
  class NotaFiscal {
    - DataEmissao: char
    - quantidade: int
    - valorProduto: double
    - impostos: double
    
    + set(): void
    + get(): void
    + valorTotal(valorBase: double, impostos: double, valorProduto: double): void
  }
  
  class EntradaMercadoria {
    - quantidade: int
    - tipo: char
    - codigo: int
    - fornecedor: Pessoa
    
    + sets(): void
    + gets(): void
    + incluirEntrada(entrada: EntradaMercadoria): void
    - gerarConta(entrada: EntradaMercadoria, fornecedor: Pessoa): void
  }
  
  class Conta {
    - codigo: int
    - venda: Venda
    - cliente: Pessoa
    - valor: double
    - dataVencimento: char
    - statusRecebido: boolean
    - entradaMercadoria: EntradaMercadoria
    
    + sets(): void
    + gets(): void
    + incluirConta(conta: Conta): void
    + alterarConta(conta: Conta): void
    + consultarConta(cod: int): Conta
    + tipoConta(conta: Conta): void
    + gerarRelatorioLucrosMensais(conta: boolean): ArrayList
    + gerarRelatorioDespesasMensais(conta: boolean): ArrayList
  }
  
  class Venda {
    - cliente: Pessoa
    - codigo: int
    - data: char
    - metodoPagamento: Venda_MetodoPagamento
  
    + setCliente(cliente: Pessoa): void
    + setCodigo(codigo: int): void
    + setData(data: char): void
    + setMetodoPagamento(metodo_pagamento: char): void
    + getCliente(): Pessoa
    + getCodigo(): int
    + getData(): char
    + getMetodoPagamento(): char
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
  
  class MetodoPagamento {
    - codigo: int
    - descricao: char
  
    + setCodigo(codigo: int): void
    + setDescricao(descricao: char): void
    + getCodigo(): int
    + getDescricao(): char
  }
  
  class Venda_Produto {
    - produto: Produto
    - venda: Venda
    - quantidade: int
    - valor: double
    
    + setProduto(produto: Produto): void
    + setVenda(venda: Venda): void
    + setQuantidade(quant: int): void
    + setValor(valor: double): void
    + getProduto(): Produto
    + getVenda(): Venda
    + getQuantidade(): int
    + getValor(): double
  }
  
  class NotaFiscal_Produto {
    - notaFiscal: NotaFiscal
    - produto: Produto
  }
  
  class EntradaMercadoria_Produto {
    - produto: Produto
    - entradaMercadoria: EntradaMercadoria
  }
  
  class Pagamento {
    - conta: Conta
    - caixa: Caixa
    - cliente: Pessoa
    - valor: double
    - dataVencimento: char
    - tipoReceber: boolean
    - entradaMercadoria: EntradaMercadoria
  
    + setConta(value: Conta): void
    + setCaixa(value: Caixa): void
    + setCliente(value: Pessoa): void
    + setValor(value: double): void
    + setDataVencimento(value: char): void
    + setTipoReceber(value: boolean): void
    + setEntradaMercadoria(value: EntradaMercadoria): void
    + getConta(): Conta
    + getCaixa(): Caixa
    + getCliente(): Pessoa
    + getValor(): double
    + getDataVencimento(): char
    + getTipoReceber(): boolean
    + getEntradaMercadoria(): EntradaMercadoria
    + incluirConta(conta: Conta): void
    + alterarConta(conta: Conta): void
    + consultarConta(cod: int): Conta
    + tipoConta(conta: Conta): void
    + gerarRelatorioLucrosMensais(conta: boolean): ArrayList
    + gerarRelatorioDespesasMensais(conta: boolean): ArrayList
  }
  
  class Caixa {
    - dataHoraAbertura: char
    - numero: int
    - dataHoraEncerramento: char
    - valorInicial: double
    - valorAtual: double
  
    + setDataHoraAbertura(value: char): void
    + setNumero(value: int): void
    + setDataHoraEncerramento(value: char): void
    + setValorInicial(value: double): void
    + setValorAtual(value: double): void
    + getDataHoraAbertura(): char
    + getNumero(): int
    + getDataHoraEncerramento(): char
    + getValorInicial(): double
    + getValorAtual(): double
    + entrada(valor: double): void
    + saida(valor: double): void
  }

Pessoa "*" -- "1" Endereco : possui
Pessoa "1" -- "*" Venda : possui
Venda "1" -- "1" Conta : possui
Venda "1" -- "1" NotaFiscal : possui
Venda "1" -- "*" Venda_MetodoPagamento : possui
Venda "1" -- "*" Venda_Produto : possui
Venda_MetodoPagamento "*" -- "1" MetodoPagamento : possui
NotaFiscal "1" -- "*" NotaFiscal_Produto : possui
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

```

### Descrição das Entidades

Descrição sucinta das entidades presentes no sistema.

| Entidade | Descrição   |
|----------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| Animal   | Entidade abstrata para representar informações gerais dos Animais: age, gender, isMammal(), mate().                                                  |
| Duck     | Entidade que representa um Pato tem as informações: String beakColor, +swim(), +quack(). A classe Duck estende a classe abstrata Animal. |
| Fish     | Entidade que representa um Peixe tem as informações: sizeInFeet, -canEat(). A classe Peixe estende a classe abstrata Animal.                                                                   |
| Zebra    | Entidade que representa um Zebra tem as informações is_wild, run(). A classe Zebra estende a classe abstrata Animal.                                                                   |

## Modelo de Dados (Entidade-Relacionamento)

Para criar modelos ER é possível usar o BrModelo e gerar uma imagem. Contudo, atualmente é possível criar modelos ER usando a ferramenta **Mermaid**, escrevendo o modelo diretamente em markdown. Acesse a documentação para escrever modelos [ER Diagram Mermaid](https://mermaid-js.github.io/mermaid/#/entityRelationshipDiagram).

```mermaid
erDiagram
    Departamento ||--o{ Laboratorio : labs
    Departamento ||--|{ Docente : docentes
    Docente ||--o| Laboratorio : coordenador
    Docente ||--o| Laboratorio : vice-coordenador
    Laboratorio ||--o{ Membro_Docente : membros
    Docente ||--|{ Membro_Docente : ""
    Laboratorio ||--o{ Membro_Discente : membros
    Membro_Discente }|--|| Discente: ""
```

### Dicionário de Dados

|   Tabela   | Laboratório |
| ---------- | ----------- |
| Descrição  | Armazena as informações de um laboratório acadêmico. |
| Observação | Laboratórios acadêmicos podem ser de Ensino, Pesquisa, Extensão, P&D, etc. |

|  Nome         | Descrição                        | Tipo de Dado | Tamanho | Restrições de Domínio |
| ------------- | -------------------------------- | ------------ | ------- | --------------------- |
| codigo        | identificador gerado pelo SGBD   | SERIAL       | ---     | PK / Identity |
| sigla         | representação em sigla do lab    | VARCHAR      | 15      | Unique / Not Null |
| nome          | nome do laboratório              | VARCHAR      | 150     | Not Null |
| descricao     | detalhes sobre o laboratório     | VARCHAR      | 250     | --- |
| endereco      | endereço e localização do lab    | VARCHAR      | 150     | --- |
| data_criacao  | data de criação do lab           | DATE         | ---     | Not Null |
| portaria      | portaria de criação do lab       | VARCHAR      | 50      | --- |
| link_portaria | URL para a portaria (PDF)        | VARCHAR      | 150     | --- |
| site          | URL para o site do laboratório   | VARCHAR      | 150     | --- |
| e-mail        | e-mail de contato do laboratório | VARCHAR      | 150     | --- |
| departamento  | departamento vinculado ao lab    | SERIAL       | ---     | FK / Not Null |
