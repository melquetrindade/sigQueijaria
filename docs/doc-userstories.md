# Documento Lista de User Stories

Documento construído a partido da **Lista de User Stories** que pode ser encontrado no link: https://docs.google.com/document/d/1jBfcHx3bSs-VMuy0xYVwWSt4jgNNm3uUKLs1LCVoxz8/edit

## Descrição

Este documento descreve os User Stories criados a partir da Lista de Requisitos no [Documento 001 - Documento de Visão](doc-visao.md). Este documento também pode ser adaptado para descrever Casos de Uso.

## Histórico de revisões

| Data       | Versão  | Descrição                          | Autor                          |
| :--------- | :-----: | :--------------------------------: | :----------------------------- |
| 30/11/2023 | 1.0     | Adição das duas primeiras listas | Manuelly |
| 04/12/2023 | 1.1     | Adição de outras sete listas | Isa, Melque, Erick e Felipe |
| 05/12/2023 | 1.2     | Adição de outras três listas | Felipe e Thamiris |





### User Story US01 - Manter Produto

|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| **Descrição** | O sistema deve manter um cadastro de todos os produtos que têm acesso ao sistema por meio da adição dos dados do produto no sistema. Um produto tem os atributos tipo, data de validade, quantidade, quantidade mínima aceitável no estoque, código de barras, valor e situação. O registro no sistema poderá ser feito pelos atores funcionário e gerente. |

| **Requisitos envolvidos** |                                                    |
| ------------- | :------------------------------------------------------------- |
| RF01          | Manter Produto | 
| RF05          | Pagar Conta |

|                           |                                     |
| ------------------------- | ----------------------------------- | 
| **Prioridade** | Essencial |
| **Estimativa** | 15min |
| **Tempo Gasto (real):**   |     10min                                | 
| **Tamanho Funcional** | 8 PF (pontos de função) |
| **Analista**| Erick (responsável por especificar/detalhar). |
| **Desenvolvedor** | Isa e Melque (responsáveis por implementar e realizar testes de unidade e testes de integração). |
| **Revisor** | Manuelly (responsável por avaliar a implementação e executar os testes de unidade e testes de integração). |
| **Testador** | Felipe (responsável por executar os Testes de Aceitação e fazer o relatório de testes). |

| Testes de Aceitação (TA) |  |
| ----------- | --------- |
| **Código**      | **Descrição** |
| **TA01.01** | O funcionário/gerente informa, na tela Manter Produto, todos os dados para registrar corretamente o produto, ao clicar em Salvar ele é notificado com uma mensagem de sucesso. Mensagem: Cadastro realizado com sucesso. |
| **TA01.02** | O funcionário/gerente informa, na tela Manter Produto, os dados incorretamente, ao clicar em Salvar ele é notificado com uma mensagem de erro. Mensagem: Cadastro não realizado, o campo “xxxx” não foi informado corretamente. |
| **TA01.03** | O funcionário/gerente tenta alterar um produto e tem sucesso. |
| **TA01.04** | O funcionário/gerente tenta alterar um produto e tem erro. |
| **TA01.05** | O funcionário/gerente tenta desativar um produto e tem sucesso. |
| **TA01.06** | O funcionário/gerente tenta desativar um produto e tem erro. |
| **TA01.07** | O funcionário/gerente tenta pesquisar um produto e tem sucesso, a pesquisa é retornada. |
| **TA01.08** | O funcionário/gerente tenta pesquisar um produto e não há retorno (exibição vazia). |



### User Story US05 - Inserir Cliente
|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| **Descrição** | O sistema deve manter um cadastro dos clientes a partir da inserção dos seus dados ao sistema. Um cliente tem os atributos nome, CPF, data de nascimento, número de telefone, email e endereço. O registro do cliente no sistema poderá ser feito pelos atores funcionário e gerente. |

| **Requisitos envolvidos** |                                                    |
| ------------- | :------------------------------------------------------------- |
| RF02          | Manter Cliente | 

|                           |                                     |
| ------------------------- | ----------------------------------- | 
| **Prioridade** | Importante |
| **Estimativa** | 15min |
| **Tempo Gasto (real):**   |      10min                               | 
| **Tamanho Funcional** | 7 PF (pontos de função) |
| **Analista**| Erick (responsável por especificar/detalhar). |
| **Desenvolvedor** | Isa e Melque (responsáveis por implementar e realizar testes de unidade e testes de integração). |
| **Revisor** | Manuelly (responsável por avaliar a implementação e executar os testes de unidade e testes de integração). |
| **Testador** | Felipe (responsável por executar os Testes de Aceitação e fazer o relatório de testes). |

| Testes de Aceitação (TA) |  |
| ----------- | --------- |
| **Código**      | **Descrição** |
| **TA05.01** | O funcionário/gerente informa, na tela Manter Cliente, todos os dados para registrar corretamente o cliente, ao clicar em Salvar, ele é notificado com uma mensagem de sucesso. Mensagem: Cadastro realizado com sucesso. |
| **TA05.02**n | O funcionário/gerente informa, na tela Manter Cliente, os dados incorretamente, ao clicar em Salvar, ele é notificado com uma mensagem de erro. Mensagem: Cadastro não realizado, o campo “xxxx” não foi informado corretamente. |



### User Story US06 - Alterar Cliente
|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| **Descrição** | O sistema deve permitir a alteração dos dados do cliente no sistema. Um cliente tem os atributos nome, CPF, data de nascimento, número de telefone, email e endereço. Esta mudança poderá ser feita pelos atores funcionário e gerente. |

| **Requisitos envolvidos** |                                                    |
| ------------- | :------------------------------------------------------------- |
| RF02          | Manter Cliente | 

|                           |                                     |
| ------------------------- | ----------------------------------- | 
| **Prioridade** | Importante |
| **Estimativa** | 15min |
| **Tempo Gasto (real):**   |      10min                               | 
| **Tamanho Funcional** | 7 PF (pontos de função) |
| **Analista**| Erick (responsável por especificar/detalhar). |
| **Desenvolvedor** | Isa e Melque (responsáveis por implementar e realizar testes de unidade e testes de integração). |
| **Revisor** | Manuelly (responsável por avaliar a implementação e executar os testes de unidade e testes de integração). |
| **Testador** | Felipe (responsável por executar os Testes de Aceitação e fazer o relatório de testes). |

| Testes de Aceitação (TA) |  |
| ----------- | --------- |
| **Código**      | **Descrição** |
| **TA06.01** | O funcionário/gerente tenta alterar os dados de um cliente e tem sucesso. |
| **TA06.02** | O funcionário/gerente tenta alterar os dados de um cliente e tem erro. |



### User Story US07 - Desativar Cliente
|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| **Descrição** | O sistema deve permitir a alteração do status do cliente: ativo ou desativo do sistema. Esta desativação poderá ser feita pelos atores funcionário e gerente. |

| **Requisitos envolvidos** |                                                    |
| ------------- | :------------------------------------------------------------- |
| RF02          | Manter Cliente | 

|                           |                                     |
| ------------------------- | ----------------------------------- | 
| **Prioridade** | Importante |
| **Estimativa** | 15min |
| **Tempo Gasto (real):**   |      10min                               | 
| **Tamanho Funcional** | 7 PF (pontos de função) |
| **Analista**| Erick (responsável por especificar/detalhar). |
| **Desenvolvedor** | Isa e Melque (responsáveis por implementar e realizar testes de unidade e testes de integração). |
| **Revisor** | Manuelly (responsável por avaliar a implementação e executar os testes de unidade e testes de integração). |
| **Testador** | Felipe (responsável por executar os Testes de Aceitação e fazer o relatório de testes). |

| Testes de Aceitação (TA) |  |
| ----------- | --------- |
| **Código**      | **Descrição** |
| **TA07.01** | O funcionário/gerente tenta desativar um cliente e tem sucesso. |
| **TA07.02** | O funcionário/gerente tenta desativar a conta de um cliente e tem erro. |



### User Story US08 - Consultar Cliente
|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| **Descrição** | O sistema deve permitir a realização de consulta dos dados do cliente cadastrado no sistema. A consulta do cliente no sistema poderá ser feita pelos atores funcionário e gerente. |

| **Requisitos envolvidos** |                                                    |
| ------------- | :------------------------------------------------------------- |
| RF02          | Manter Cliente | 

|                           |                                     |
| ------------------------- | ----------------------------------- | 
| **Prioridade** | Importante |
| **Estimativa** | 15min |
| **Tempo Gasto (real):**   |      10min                               | 
| **Tamanho Funcional** | 7 PF (pontos de função) |
| **Analista**| Erick (responsável por especificar/detalhar). |
| **Desenvolvedor** | Isa e Melque (responsáveis por implementar e realizar testes de unidade e testes de integração). |
| **Revisor** | Manuelly (responsável por avaliar a implementação e executar os testes de unidade e testes de integração). |
| **Testador** | Felipe (responsável por executar os Testes de Aceitação e fazer o relatório de testes). |

| Testes de Aceitação (TA) |  |
| ----------- | --------- |
| **Código**      | **Descrição** |
| **TA08.01** | O funcionário/gerente tenta pesquisar um cliente e tem sucesso. |
| **TA08.02** | O funcionário/gerente tenta pesquisar um cliente e tem erro (exibição vazia). |



### User Story US09 - Manter Funcionário
|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| **Descrição** | O sistema deve manter um cadastro dos funcionários a partir da inserção, alteração, exclusão e consulta dos seus dados ao sistema. Um funcionário tem os atributos nome, CPF, data de nascimento, endereço, email, cargo, carga horária e salário. O registro do funcionário no sistema poderá ser feito pelo ator gerente. |

| **Requisitos envolvidos** |                                                    |
| ------------- | :------------------------------------------------------------- | 
|RF11           | Realizar Vendas | 

|                           |                                     |
| ------------------------- | ----------------------------------- | 
| **Prioridade** | Importante |
| **Estimativa** | 20min | 
| **Tempo Gasto (real):**   |     15min                                | 
| **Tamanho Funcional** | 7 PF (pontos de função) |
| **Analista**| Erick (responsável por especificar/detalhar). |
| **Desenvolvedor** | Isa e Melque (responsáveis por implementar e realizar testes de unidade e testes de integração). |
| **Revisor** | Manuelly (responsável por avaliar a implementação e executar os testes de unidade e testes de integração). |
| **Testador** | Felipe (responsável por executar os Testes de Aceitação e fazer o relatório de testes). |

| Testes de Aceitação (TA) |  |
| ----------- | --------- |
| **Código**      | **Descrição** |
| **TA03.01** | O gerente informa, na tela Manter Funcionário, todos os dados para registrar corretamente o funcionário, ao clicar em Salvar ele é notificado com uma mensagem de sucesso. Mensagem: Cadastro realizado com sucesso. |
| **TA03.02**n | O gerente informa, na tela Manter Funcionário, os dados incorretamente, ao clicar em Salvar ele é notificado com uma mensagem de erro. Mensagem: Cadastro não realizado, o campo “xxxx” não foi informado corretamente. |
| **TA03.03** | O gerente tenta alterar os dados de um funcionário e tem sucesso.  |
| **TA03.04** | O gerente tenta alterar os dados de um funcionário e tem erro. |
| **TA03.05** | O gerente tenta desativar um funcionário e tem sucesso. |
| **TA03.06** | O gerente tenta desativar a conta de um funcionário e tem erro. |
| **TA03.07** | O gerente tenta pesquisar um funcionário e tem sucesso. |
| **TA03.08** | O gerente tenta pesquisar um cliente e tem erro (exibição vazia). |



### User Story US13 - Inserir Fornecedor
|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| **Descrição** | O sistema deve manter um cadastro dos fornecedores a partir da inserção dos seus dados ao sistema. Um fornecedor tem os atributos nome, CNPJ, email, endereço e telefone. O registro do fornecedor no sistema poderá ser feito pelos atores funcionário e gerente. |

| **Requisitos envolvidos** |                                                    |
| ------------- | :------------------------------------------------------------- | 
|RF12           | Controle de caixa |

|                           |                                     |
| ------------------------- | ----------------------------------- | 
| **Prioridade** | Importante |
| **Estimativa** | 20min | 
| **Tempo Gasto (real):**   |         15min                            | 
| **Tamanho Funcional** | 7 PF (pontos de função) |
| **Analista**| Erick (responsável por especificar/detalhar). |
| **Desenvolvedor** | Isa e Melque (responsáveis por implementar e realizar testes de unidade e testes de integração). |
| **Revisor** | Manuelly (responsável por avaliar a implementação e executar os testes de unidade e testes de integração). |
| **Testador** | Felipe (responsável por executar os Testes de Aceitação e fazer o relatório de testes). |

| Testes de Aceitação (TA) |  |
| ----------- | --------- |
| **Código**      | **Descrição** |
| **TA13.01** | O funcionário/gerente informa, na tela Manter Fornecedor, todos os dados para registrar corretamente o fornecedor, ao clicar em Salvar, ele é notificado com uma mensagem de sucesso. Mensagem: Cadastro realizado com sucesso. |
| **TA13.02**n | O funcionário/gerente informa, na tela Manter Fornecedor, os dados incorretamente, ao clicar em Salvar, ele é notificado com uma mensagem de erro. Mensagem: Cadastro não realizado, o campo “xxxx” não foi informado corretamente. |


### User Story US14 - Alterar Fornecedor
|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| **Descrição** | O sistema deve permitir a alteração dos dados do fornecedor cadastrado no sistema. A alteração poderá ser feita pelos atores funcionário e gerente. |

| **Requisitos envolvidos** |                                                    |
| ------------- | :------------------------------------------------------------- | 
|RF12           | Controle de caixa |

|                           |                                     |
| ------------------------- | ----------------------------------- | 
| **Prioridade** | Importante |
| **Estimativa** | 20min | 
| **Tempo Gasto (real):**   |         15min                            | 
| **Tamanho Funcional** | 7 PF (pontos de função) |
| **Analista**| Erick (responsável por especificar/detalhar). |
| **Desenvolvedor** | Isa e Melque (responsáveis por implementar e realizar testes de unidade e testes de integração). |
| **Revisor** | Manuelly (responsável por avaliar a implementação e executar os testes de unidade e testes de integração). |
| **Testador** | Felipe (responsável por executar os Testes de Aceitação e fazer o relatório de testes). |

| Testes de Aceitação (TA) |  |
| ----------- | --------- |
| **Código**      | **Descrição** |
| **TA14.01** | O funcionário/gerente tenta alterar os dados de um fornecedor e tem sucesso.  |
| **TA14.02** | O funcionário/gerente tenta alterar os dados de um fornecedor e tem erro. |



### User Story US15 - Desativar Fornecedor
|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| **Descrição** | O sistema deve permitir a alteração do status do fornecedor: ativo ou desativo do sistema. Esta desativação poderá ser feita pelos atores funcionário e gerente. |

| **Requisitos envolvidos** |                                                    |
| ------------- | :------------------------------------------------------------- | 
|RF12           | Controle de caixa |

|                           |                                     |
| ------------------------- | ----------------------------------- | 
| **Prioridade** | Importante |
| **Estimativa** | 20min | 
| **Tempo Gasto (real):**   |         15min                            | 
| **Tamanho Funcional** | 7 PF (pontos de função) |
| **Analista**| Erick (responsável por especificar/detalhar). |
| **Desenvolvedor** | Isa e Melque (responsáveis por implementar e realizar testes de unidade e testes de integração). |
| **Revisor** | Manuelly (responsável por avaliar a implementação e executar os testes de unidade e testes de integração). |
| **Testador** | Felipe (responsável por executar os Testes de Aceitação e fazer o relatório de testes). |

| Testes de Aceitação (TA) |  |
| ----------- | --------- |
| **Código**      | **Descrição** |
| **TA15.01** | O funcionário/gerente tenta desativar um fornecedor e tem sucesso. |
| **TA15.02** | O funcionário/gerente tenta desativar a conta de um fornecedor e tem erro. |



### User Story US16 - Consultar Fornecedor
|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| **Descrição** | O sistema deve permitir a realização de consulta dos dados do fornecedor cadastrado no sistema. A consulta do fornecedor no sistema poderá ser feita pelos atores funcionário e gerente. |

| **Requisitos envolvidos** |                                                    |
| ------------- | :------------------------------------------------------------- | 
|RF12           | Controle de caixa |

|                           |                                     |
| ------------------------- | ----------------------------------- | 
| **Prioridade** | Importante |
| **Estimativa** | 20min | 
| **Tempo Gasto (real):**   |         15min                            | 
| **Tamanho Funcional** | 7 PF (pontos de função) |
| **Analista**| Erick (responsável por especificar/detalhar). |
| **Desenvolvedor** | Isa e Melque (responsáveis por implementar e realizar testes de unidade e testes de integração). |
| **Revisor** | Manuelly (responsável por avaliar a implementação e executar os testes de unidade e testes de integração). |
| **Testador** | Felipe (responsável por executar os Testes de Aceitação e fazer o relatório de testes). |

| Testes de Aceitação (TA) |  |
| ----------- | --------- |
| **Código**      | **Descrição** |
| **TA16.01** | O funcionário/gerente tenta pesquisar um fornecedor e tem sucesso. |
| **TA16.02** | O funcionário/gerente tenta pesquisar um fornecedor e tem erro (exibição vazia). |



### User Story US17 - Pagar Conta
|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| **Descrição** | O sistema deve permitir a administração das contas a serem pagas pela empresa. Uma Conta possui os seguintes atributos: código, valor, data de vencimento, tipo (pagar ou receber), além de atributos de objetos do tipo Venda, Pessoa e Entrada de Mercadoria. Essa atividade poderá ser realizada pelos atores funcionário e gerente. |

| **Requisitos envolvidos** |                                                    |
| ------------- | :------------------------------------------------------------- | 
|RF08           | Gerar Relatórios |
|RF05           | Pagar Conta |

|                           |                                     |
| ------------------------- | ----------------------------------- | 
| **Prioridade** | Desejável |
| **Estimativa** | 20min | 
| **Tempo Gasto (real):**   |         15min                            | 
| **Tamanho Funcional** | 10 PF (pontos de função) |
| **Analista**| Erick (responsável por especificar/detalhar). |
| **Desenvolvedor** | Isa e Melque (responsáveis por implementar e realizar testes de unidade e testes de integração). |
| **Revisor** | Manuelly (responsável por avaliar a implementação e executar os testes de unidade e testes de integração). |
| **Testador** | Felipe (responsável por executar os Testes de Aceitação e fazer o relatório de testes). |

| Testes de Aceitação (TA) |  |
| ----------- | --------- |
| **Código**      | **Descrição** |
| **TA17.01** | O funcionário/gerente informa ao sistema os dados corretos da conta, ao clicar em Consultar é apresentado na tela os dados da conta em questão. |
| **TA17.02**n | O funcionário/gerente informa ao sistema os dados incorretos da conta, ao clicar em Consultar, ele é notificado com uma mensagem de erro. Mensagem: Nenhuma conta encontrada, o campo “xxxx” não foi informado corretamente ou a conta já foi paga. |
| **TA17.03** | O funcionário/gerente informa ao sistema os dados incorretos ou não preenche os campos necessários, ao clicar em Pagar, ele é notificado com uma mensagem de erro. Mensagem: Pagamento não realizado, dados incorretos ou não preenchidos.  |
| **TA17.04** | O funcionário/gerente informa ao sistema todos os dados para dar baixa corretamente na conta, ao clicar em Pagar, ele é notificado com uma mensagem de sucesso. Mensagem: Pagamento realizado com sucesso. |
| **TA17.05** | O sistema tenta registrar a saída no caixa e tem sucesso. |
| **TA17.06** | O sistema tenta registrar a saída no caixa e tem erro. |


### User Story US18 - Receber Conta
|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| **Descrição** | O sistema deve permitir a administração das contas a serem recebidas pela empresa. Uma Conta possui os seguintes atributos: código, valor, data de vencimento, tipo (pagar ou receber), além de atributos de objetos do tipo Venda, Pessoa e Entrada de Mercadoria. Essa atividade poderá ser realizada pelos atores funcionário e gerente. |

| **Requisitos envolvidos** |                                                    |
| ------------- | :------------------------------------------------------------- | 
|RF09           | Gerar Conta |
|RF05           | Pagar Conta |

|                           |                                     |
| ------------------------- | ----------------------------------- | 
| **Prioridade** | Desejável |
| **Estimativa** | 20min | 
| **Tempo Gasto (real):**   |         15min                            | 
| **Tamanho Funcional** | 10 PF (pontos de função) |
| **Analista**| Erick (responsável por especificar/detalhar). |
| **Desenvolvedor** | Isa e Melque (responsáveis por implementar e realizar testes de unidade e testes de integração). |
| **Revisor** | Manuelly (responsável por avaliar a implementação e executar os testes de unidade e testes de integração). |
| **Testador** | Felipe (responsável por executar os Testes de Aceitação e fazer o relatório de testes). |

| Testes de Aceitação (TA) |  |
| ----------- | --------- |
| **Código**      | **Descrição** |
| **TA18.01** | O funcionário/gerente informa ao sistema os dados corretos da conta, ao clicar em Consultar é apresentado na tela os dados da conta em questão. |
| **TA18.02**n | O funcionário/gerente informa ao sistema os dados incorretos da conta, ao clicar em Consultar, ele é notificado com uma mensagem de erro. Mensagem: Nenhuma conta encontrada, o campo “xxxx” não foi informado corretamente ou a conta já foi recebida. |
| **TA18.03** | O funcionário/gerente informa ao sistema os dados incorretos ou não preenche os campos necessários, ao clicar em Receber, ele é notificado com uma mensagem de erro. Mensagem: Recebimento não realizado, dados incorretos ou não preenchidos.  |
| **TA18.04** | O funcionário/gerente informa ao sistema todos os dados para dar baixa corretamente na conta, ao clicar em Receber, ele é notificado com uma mensagem de sucesso. Mensagem: Recebimento realizado com sucesso. |
| **TA18.05** | O sistema tenta registrar a entrada no caixa e tem sucesso. |
| **TA18.06** | O sistema tenta registrar a entrada no caixa e tem erro. |


### User Story US19 - Gerar Nota Fiscal
|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| **Descrição** | Após a venda ter sido efetuada e aprovada, a nota fiscal é gerada e concedida ao cliente. |

| **Requisitos envolvidos** |                                                    |
| ------------- | :------------------------------------------------------------- | 
|RF04           | Manter Fornecedor |
|RF06           | Receber Conta |

|                           |                                     |
| ------------------------- | ----------------------------------- | 
| **Prioridade** | Desejável |
| **Estimativa** | 3min | 
| **Tempo Gasto (real):**   |         2min                            | 
| **Tamanho Funcional** | 5 PF (pontos de função) |
| **Analista**| Erick (responsável por especificar/detalhar). |
| **Desenvolvedor** | Isa e Melque (responsáveis por implementar e realizar testes de unidade e testes de integração). |
| **Revisor** | Manuelly (responsável por avaliar a implementação e executar os testes de unidade e testes de integração). |
| **Testador** | Felipe (responsável por executar os Testes de Aceitação e fazer o relatório de testes). |

| Testes de Aceitação (TA) |  |
| ----------- | --------- |
| **Código**      | **Descrição** |
| **TA19.01** | O sistema recebe da venda realizada e do controle de caixa as informações necessárias para gerar uma nota fiscal para o cliente. |
| **TA19.02** | O sistema gera uma nota fiscal com o dados e a data da venda. |


### User Story US20 - Gerar Relatórios
|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| **Descrição** | O sistema deve ser capaz de gerar relatórios nos setores de vendas, estoque, finanças e produtos. |

| **Requisitos envolvidos** |                                                    |
| ------------- | :------------------------------------------------------------- | 
|RF01           | Manter Produto |
|RF02           | Manter Cliente |
|RF03           | Manter Funcionário |
|RF05           | Pagar Conta |
|RF06           | Receber Conta |

|                           |                                     |
| ------------------------- | ----------------------------------- | 
| **Prioridade** | Desejável |
| **Estimativa** | 1min | 
| **Tempo Gasto (real):**   |         30s                            | 
| **Tamanho Funcional** | 5 PF (pontos de função) |
| **Analista**| Erick (responsável por especificar/detalhar). |
| **Desenvolvedor** | Isa e Melque (responsáveis por implementar e realizar testes de unidade e testes de integração). |
| **Revisor** | Manuelly (responsável por avaliar a implementação e executar os testes de unidade e testes de integração). |
| **Testador** | Felipe (responsável por executar os Testes de Aceitação e fazer o relatório de testes). |

| Testes de Aceitação (TA) |  |
| ----------- | --------- |
| **Código**      | **Descrição** |
| **TA20.01** | O gerente informa ao sistema o tipo de relatório escolhendo a opção “Lucros do Mês”.  |
| **TA20.02** | O sistema gera um relatório dos lucros apurados a partir das vendas realizadas do mês atual. |
| **TA20.03** | O gerente informa ao sistema o tipo de relatório escolhendo a opção “Despesas do mês”. |
| **TA20.04** | O sistema gera um relatório com todas as despesas a pagar referentes ao mês atual. |
| **TA20.05** | O gerente informa ao sistema o tipo de relatório escolhendo a opção “Vendas”. |
| **TA20.06** | O gerente informa ao sistema o mês que ele deseja para o relatório.  |
| **TA20.07** | O sistema gera um relatório das vendas realizadas no mês atual. |
| **TA20.08** | O gerente informa ao sistema o tipo de relatório escolhendo a opção “Quantidade de produtos disponíveis”. |
| **TA20.09** | O sistema gera um relatório de todos os produtos que estão disponíveis, para a compra, no estoque. |
| **TA20.10** | O gerente informa ao sistema o tipo de relatório escolhendo a opção “Produtos abaixo da quantidade mínima”. |
| **TA20.11** | O sistema gera um relatório dos produtos do estoque que estão abaixo da quantidade mínima informada no momento do cadastro. |
| **TA20.12** | Se o gerente não informar o mês desejado, o sistema automaticamente gera um relatório do mês atual.  |


### User Story US21 - Gerar Conta
|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| **Descrição** | O sistema pede para gerar uma conta a receber ou a pagar. |

| **Requisitos envolvidos** |                                                    |
| ------------- | :------------------------------------------------------------- | 
|RF04           | Manter Fornecedor |
|RF07           | Gerar Nota Fiscal |

|                           |                                     |
| ------------------------- | ----------------------------------- | 
| **Prioridade** | Importante |
| **Estimativa** | 3min | 
| **Tempo Gasto (real):**   |         2:30min                            | 
| **Tamanho Funcional** | 9 PF (pontos de função) |
| **Analista**| Erick (responsável por especificar/detalhar). |
| **Desenvolvedor** | Isa e Melque (responsáveis por implementar e realizar testes de unidade e testes de integração). |
| **Revisor** | Manuelly (responsável por avaliar a implementação e executar os testes de unidade e testes de integração). |
| **Testador** | Felipe (responsável por executar os Testes de Aceitação e fazer o relatório de testes). |

| Testes de Aceitação (TA) |  |
| ----------- | --------- |
| **Código**      | **Descrição** |
| **TA21.01** | O sistema recebe da venda ou da entrada de mercadorias as informações necessárias para gerar uma conta a receber ou a pagar, respectivamente. |
| **TA21.02** | O sistema gera uma conta a receber ou a pagar com a data de vencimento para o dia da venda e o valor da conta.  |


### User Story US22 - Realizar Entrada de Mercadoria
|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| **Descrição** | O sistema deve fazer o controle da quantidade dos produtos que entram no estoque. Um produto tem os atributos tipo, data de validade, quantidade, quantidade mínima aceitável no estoque, código de barras e situação. O registro no sistema poderá ser feito pelos atores funcionário e gerente.  |

| **Requisitos envolvidos** |                                                    |
| ------------- | :------------------------------------------------------------- | 
|RF03           | Manter Funcionário |
|RF05           | Pagar Conta |

|                           |                                     |
| ------------------------- | ----------------------------------- | 
| **Prioridade** | Essencial |
| **Estimativa** | 10min | 
| **Tempo Gasto (real):**   |         5min                            | 
| **Tamanho Funcional** | 8 PF (pontos de função) |
| **Analista**| Erick (responsável por especificar/detalhar). |
| **Desenvolvedor** | Isa e Melque (responsáveis por implementar e realizar testes de unidade e testes de integração). |
| **Revisor** | Manuelly (responsável por avaliar a implementação e executar os testes de unidade e testes de integração). |
| **Testador** | Felipe (responsável por executar os Testes de Aceitação e fazer o relatório de testes). |

| Testes de Aceitação (TA) |  |
| ----------- | --------- |
| **Código**      | **Descrição** |
| **TA22.01** | O funcionário/gerente acessa o sistema para solicitar a entrada dos produtos e logo em seguida consulta o produto que deseja dar entrada. O sistema registra a entrada de mercadoria e atualiza a quantidade de produtos no estoque. Mensagem: Entrada de x queijos (id) realizada com sucesso! |
| **TA22.02** | O funcionário/gerente informa, na tela de realizar entrada de mercadoria, os dados de um produto não cadastrado, e ao clicar em Consultar ele é notificado com uma mensagem de erro. Mensagem: Produto não cadastrado no sistema.  |
| **TA22.03** | O funcionário/gerente tenta realizar uma entrada de produto e tem sucesso. |
| **TA22.04** | O funcionário/gerente tenta realizar uma entrada de mercadoria e tem erro.  |
| **TA22.05** | O funcionário/gerente tenta desativar uma entrada de mercadoria e tem sucesso. |
| **TA22.06** | O funcionário/gerente tenta desativar uma entrada de mercadoria e tem erro.  |



### User Story US23 - Realizar Vendas
|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| **Descrição** | O sistema permite a transação de vendas, incluindo informações sobre os produtos vendidos, o preço, o método de pagamento e o cliente. Uma venda pode ser realizada pelo funcionário ou gerente, quando o cliente informa o que deseja comprar, em seguida o funcionário busca o produto cadastrado no sistema e registra a venda com as informações necessárias do produto vendido: preço, método de pagamento e nome do cliente.  |

| **Requisitos envolvidos** |                                                    |
| ------------- | :------------------------------------------------------------- | 
|RF04           | Manter Fornecedor |
|RF05           | Pagar Conta |

|                           |                                     |
| ------------------------- | ----------------------------------- | 
| **Prioridade** | Essencial |
| **Estimativa** | 10min | 
| **Tempo Gasto (real):**   |         5min                            | 
| **Tamanho Funcional** | 8 PF (pontos de função) |
| **Analista**| Erick (responsável por especificar/detalhar). |
| **Desenvolvedor** | Isa e Melque (responsáveis por implementar e realizar testes de unidade e testes de integração). |
| **Revisor** | Manuelly (responsável por avaliar a implementação e executar os testes de unidade e testes de integração). |
| **Testador** | Felipe (responsável por executar os Testes de Aceitação e fazer o relatório de testes). |

| Testes de Aceitação (TA) |  |
| ----------- | --------- |
| **Código**      | **Descrição** |
| **TA23.01** | O cliente informa ao funcionário/gerente o que deseja comprar, e esses buscam o produto para em seguida registrar os dados da venda. A venda é efetuada e seu registro é salvo no sistema. Mensagem: Sua venda foi realizada com sucesso! |
| **TA23.02** | O cliente informa ao funcionário/gerente o que deseja comprar, se o produto está em falta ou ainda não foi cadastrado no sistema, o funcionário/gerente deve oferecer uma nova alternativa de compra. Caso o cliente não deseje comprar, a realização da venda será cancelada.   |
| **TA23.03** | O funcionário/gerente tenta registrar a forma de pagamento da venda e tem sucesso. |
| **TA23.04** | O funcionário/gerente tenta registrar a forma de pagamento da venda e ocorre um erro. Mensagem: forma de pagamento recusada.  |
| **TA23.05** | O funcionário/gerente tenta desativar uma venda e tem sucesso. |
| **TA23.06** | O funcionário/gerente tenta desativar uma venda e tem erro.  |
| **TA23.07** | O funcionário/gerente tenta pesquisar um produto e tem sucesso, a pesquisa é retornada. |
| **TA23.08** | O funcionário/gerente tenta pesquisar um produto e não há retorno (exibição vazia).  |



### User Story US24 - Controle de caixa
|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| **Descrição** | O sistema permite registrar todas as movimentações financeiras para o devido funcionamento da empresa. O controle de caixa é dirigido pelo funcionário e gerente.  |

| **Requisitos envolvidos** |                                                    |
| ------------- | :------------------------------------------------------------- | 
|RF05           | Pagar Conta |
|RF07           | Gerar Nota Fiscal |
|RF08           | Gerar Relatórios |
|RF09           | Gerar Conta |

|                           |                                     |
| ------------------------- | ----------------------------------- | 
| **Prioridade** | Essencial |
| **Estimativa** | 20min | 
| **Tempo Gasto (real):**   |         15min                            | 
| **Tamanho Funcional** | 10 PF (pontos de função) |
| **Analista**| Erick (responsável por especificar/detalhar). |
| **Desenvolvedor** | Isa e Melque (responsáveis por implementar e realizar testes de unidade e testes de integração). |
| **Revisor** | Manuelly (responsável por avaliar a implementação e executar os testes de unidade e testes de integração). |
| **Testador** | Felipe (responsável por executar os Testes de Aceitação e fazer o relatório de testes). |

| Testes de Aceitação (TA) |  |
| ----------- | --------- |
| **Código**      | **Descrição** |
| **TA24.01** | O funcionário/gerente seleciona na tela de controle de caixa qual movimentação quer registrar, se é entrada ou saída. |
| **TA24.02** | O funcionário/gerente informa todos os dados da movimentação, ao clicar em Salvar ele é notificado com uma mensagem de sucesso. Mensagem: Movimentação realizada com sucesso.   |
| **TA24.03** | O sistema tenta registrar a movimentação com sucesso. |
| **TA24.04** | O sistema tenta registrar a movimentação no caixa e tem erro.  |
