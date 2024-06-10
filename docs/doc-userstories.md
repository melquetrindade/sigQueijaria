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
| 10/03/2024 | 1.3     | Adaptação do documento proposto em ESI para a disciplina ESII | Manuelly, Thamiris, Isa, Melque, Erick e Felipe |
| 18/03/2024 | 1.4     | Alteração de user stories (Cliente e Fornecedor) | Manuelly |
| 20/03/2024 | 1.5     | Alteração de user stories (Funcionário e Produto) | Thamiris |
| 03/04/2024 | 1.6     | Adição do user story (Autenticação de Usuários) | Erick |





### User Story US01 - Manter Produto

|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| **Descrição** | O sistema deve manter um cadastro dos produtos a partir da inserção, alteração, exclusão e consulta dos seus dados ao sistema. Um produto tem os atributos tipo, data de validade, quantidade, quantidade mínima aceitável no estoque, código de barras, valor e situação. O registro no sistema poderá ser feito pelos atores funcionário e gerente. |

| **Requisitos envolvidos** |                                                    |
| ------------- | :------------------------------------------------------------- |
| RF01          | Inserir Produto | 
| RF02          | Alterar Produto | 
| RF03          | Consultar Produto | 
| RF04          | Desativar Produto | 
| RF14          | Pagar Conta |

|                           |                                     |
| ------------------------- | ----------------------------------- | 
| **Prioridade** | Essencial |
| **Estimativa** | 3h |
| **Tempo Gasto (real):**   |       | 
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



### User Story US02 - Manter Cliente
|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| **Descrição** | O sistema deve manter um cadastro dos clientes a partir da inserção, alteração, exclusão e consulta dos seus dados ao sistema. Um cliente tem os atributos nome, CPF, data de nascimento, número de telefone, email e endereço. O registro do cliente no sistema poderá ser feito pelos atores funcionário e gerente. |

| **Requisitos envolvidos** |                                                    |
| ------------- | :------------------------------------------------------------- |
| RF05          | Inserir Cliente | 
| RF06          | Alterar Cliente | 
| RF07          | Consultar Cliente | 
| RF08          | Desativar Cliente | 

|                           |                                     |
| ------------------------- | ----------------------------------- | 
| **Prioridade** | Importante |
| **Estimativa** | 3h |
| **Tempo Gasto (real):**   |        | 
| **Tamanho Funcional** | 8 PF (pontos de função) |
| **Analista**| Erick (responsável por especificar/detalhar). |
| **Desenvolvedor** | Isa e Melque (responsáveis por implementar e realizar testes de unidade e testes de integração). |
| **Revisor** | Manuelly (responsável por avaliar a implementação e executar os testes de unidade e testes de integração). |
| **Testador** | Felipe (responsável por executar os Testes de Aceitação e fazer o relatório de testes). |

| Testes de Aceitação (TA) |  |
| ----------- | --------- |
| **Código**      | **Descrição** |
| **TA02.01** | O funcionário/gerente informa, na tela Manter Cliente, todos os dados para registrar corretamente o cliente, ao clicar em Salvar ele é notificado com uma mensagem de sucesso. Mensagem: Cadastro realizado com sucesso. |
| **TA02.02** | O funcionário/gerente informa, na tela Manter Cliente, os dados incorretamente, ao clicar em Salvar ele é notificado com uma mensagem de erro. Mensagem: Cadastro não realizado, o campo “xxxx” não foi informado corretamente. |
| **TA02.03** | O funcionário/gerente tenta alterar um cliente e tem sucesso. |
| **TA02.04** | O funcionário/gerente tenta alterar um cliente e tem erro. |
| **TA02.05** | O funcionário/gerente tenta desativar um cliente e tem sucesso. |
| **TA02.06** | O funcionário/gerente tenta desativar um cliente e tem erro. |
| **TA02.07** | O funcionário/gerente tenta pesquisar um cliente e tem sucesso, a pesquisa é retornada. |
| **TA02.08** | O funcionário/gerente tenta pesquisar um cliente e não há retorno (exibição vazia). |



### User Story US03 - Manter Funcionário
|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| **Descrição** | O sistema deve manter um cadastro dos funcionários a partir da inserção, alteração, exclusão e consulta dos seus dados ao sistema. Um funcionário tem os atributos nome, CPF, data de nascimento, endereço, email, cargo, carga horária e salário. O registro do funcionário no sistema poderá ser feito pelo ator gerente. |

| **Requisitos envolvidos** |                                                    |
| ------------- | :------------------------------------------------------------- | 
|RF10           | Realizar Vendas | 
|RF17           | Inserir Funcionário | 
|RF18           | Alterar Funcionário | 
|RF19           | Consultar Funcionário | 
|RF20           | Desativar Funcionário | 

|                           |                                     |
| ------------------------- | ----------------------------------- | 
| **Prioridade** | Importante |
| **Estimativa** | 3h | 
| **Tempo Gasto (real):**   |              | 
| **Tamanho Funcional** | 8 PF (pontos de função) |
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
| **TA03.08** | O gerente tenta pesquisar um funcionário e tem erro (exibição vazia). |



### User Story US04 - Manter Fornecedor
|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| **Descrição** | O sistema deve manter um cadastro dos fornecedores a partir da inserção, alteração, exclusão e consulta dos seus dados ao sistema. Um fornecedor tem os atributos nome, CNPJ, email, endereço e telefone. O registro do fornecedor no sistema poderá ser feito pelos atores funcionário e gerente. |

| **Requisitos envolvidos** |                                                    |
| ------------- | :------------------------------------------------------------- | 
|RF12           | Controlar Caixa |
|RF21           | Inserir Fornecedor |
|RF22           | Alterar Fornecedor |
|RF23           | Consultar Fornecedor |
|RF24           | Desativar Fornecedor |

|                           |                                     |
| ------------------------- | ----------------------------------- | 
| **Prioridade** | Importante |
| **Estimativa** | 3h | 
| **Tempo Gasto (real):**   |                | 
| **Tamanho Funcional** | 8 PF (pontos de função) |
| **Analista**| Erick (responsável por especificar/detalhar). |
| **Desenvolvedor** | Isa e Melque (responsáveis por implementar e realizar testes de unidade e testes de integração). |
| **Revisor** | Manuelly (responsável por avaliar a implementação e executar os testes de unidade e testes de integração). |
| **Testador** | Felipe (responsável por executar os Testes de Aceitação e fazer o relatório de testes). |

| Testes de Aceitação (TA) |  |
| ----------- | --------- |
| **Código**      | **Descrição** |
| **TA04.01** | O gerente informa, na tela Manter Fornecedor, todos os dados para registrar corretamente o fornecedor, ao clicar em Salvar ele é notificado com uma mensagem de sucesso. Mensagem: Cadastro realizado com sucesso. |
| **TA04.02**n | O gerente informa, na tela Manter Fornecedor, os dados incorretamente, ao clicar em Salvar ele é notificado com uma mensagem de erro. Mensagem: Cadastro não realizado, o campo “xxxx” não foi informado corretamente. |
| **TA04.03** | O gerente tenta alterar os dados de um fornecedor e tem sucesso.  |
| **TA04.04** | O gerente tenta alterar os dados de um fornecedor e tem erro. |
| **TA04.05** | O gerente tenta desativar um fornecedor e tem sucesso. |
| **TA04.06** | O gerente tenta desativar a conta de um fornecedor e tem erro. |
| **TA04.07** | O gerente tenta pesquisar um fornecedor e tem sucesso. |
| **TA04.08** | O gerente tenta pesquisar um fornecedor e tem erro (exibição vazia). |



### User Story US05 - Pagar Conta
|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| **Descrição** | O sistema deve permitir a administração das contas a serem pagas pela empresa. Uma Conta possui os seguintes atributos: código, valor, data de vencimento, tipo (pagar ou receber), além de atributos de objetos do tipo Venda, Pessoa e Entrada de Mercadoria. Essa atividade poderá ser realizada pelos atores funcionário e gerente. |

| **Requisitos envolvidos** |                                                    |
| ------------- | :------------------------------------------------------------- | 
|RF11           | Gerar Relatórios |
|RF14           | Pagar Conta |

|                           |                                     |
| ------------------------- | ----------------------------------- | 
| **Prioridade** | Desejável |
| **Estimativa** | 8h | 
| **Tempo Gasto (real):**   |             | 
| **Tamanho Funcional** | 10 PF (pontos de função) |
| **Analista**| Erick (responsável por especificar/detalhar). |
| **Desenvolvedor** | Isa e Melque (responsáveis por implementar e realizar testes de unidade e testes de integração). |
| **Revisor** | Manuelly (responsável por avaliar a implementação e executar os testes de unidade e testes de integração). |
| **Testador** | Felipe (responsável por executar os Testes de Aceitação e fazer o relatório de testes). |

| Testes de Aceitação (TA) |  |
| ----------- | --------- |
| **Código**      | **Descrição** |
| **TA05.01** | O funcionário/gerente informa ao sistema os dados corretos da conta, ao clicar em Consultar é apresentado na tela os dados da conta em questão. |
| **TA05.02**n | O funcionário/gerente informa ao sistema os dados incorretos da conta, ao clicar em Consultar, ele é notificado com uma mensagem de erro. Mensagem: Nenhuma conta encontrada, o campo “xxxx” não foi informado corretamente ou a conta já foi paga. |
| **TA05.03** | O funcionário/gerente informa ao sistema os dados incorretos ou não preenche os campos necessários, ao clicar em Pagar, ele é notificado com uma mensagem de erro. Mensagem: Pagamento não realizado, dados incorretos ou não preenchidos.  |
| **TA05.04** | O funcionário/gerente informa ao sistema todos os dados para dar baixa corretamente na conta, ao clicar em Pagar, ele é notificado com uma mensagem de sucesso. Mensagem: Pagamento realizado com sucesso. |
| **TA05.05** | O sistema tenta registrar a saída no caixa e tem sucesso. |
| **TA05.06** | O sistema tenta registrar a saída no caixa e tem erro. |


### User Story US06 - Receber Conta
|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| **Descrição** | O sistema deve permitir a administração das contas a serem recebidas pela empresa. Uma Conta possui os seguintes atributos: código, valor, data de vencimento, tipo (pagar ou receber), além de atributos de objetos do tipo Venda, Pessoa e Entrada de Mercadoria. Essa atividade poderá ser realizada pelos atores funcionário e gerente. |

| **Requisitos envolvidos** |                                                    |
| ------------- | :------------------------------------------------------------- | 
|RF13           | Gerar Conta |
|RF14           | Pagar Conta |

|                           |                                     |
| ------------------------- | ----------------------------------- | 
| **Prioridade** | Desejável |
| **Estimativa** | 8h | 
| **Tempo Gasto (real):**   |           | 
| **Tamanho Funcional** | 10 PF (pontos de função) |
| **Analista**| Erick (responsável por especificar/detalhar). |
| **Desenvolvedor** | Isa e Melque (responsáveis por implementar e realizar testes de unidade e testes de integração). |
| **Revisor** | Manuelly (responsável por avaliar a implementação e executar os testes de unidade e testes de integração). |
| **Testador** | Felipe (responsável por executar os Testes de Aceitação e fazer o relatório de testes). |

| Testes de Aceitação (TA) |  |
| ----------- | --------- |
| **Código**      | **Descrição** |
| **TA06.01** | O funcionário/gerente informa ao sistema os dados corretos da conta, ao clicar em Consultar é apresentado na tela os dados da conta em questão. |
| **TA06.02**n | O funcionário/gerente informa ao sistema os dados incorretos da conta, ao clicar em Consultar, ele é notificado com uma mensagem de erro. Mensagem: Nenhuma conta encontrada, o campo “xxxx” não foi informado corretamente ou a conta já foi recebida. |
| **TA06.03** | O funcionário/gerente informa ao sistema os dados incorretos ou não preenche os campos necessários, ao clicar em Receber, ele é notificado com uma mensagem de erro. Mensagem: Recebimento não realizado, dados incorretos ou não preenchidos.  |
| **TA06.04** | O funcionário/gerente informa ao sistema todos os dados para dar baixa corretamente na conta, ao clicar em Receber, ele é notificado com uma mensagem de sucesso. Mensagem: Recebimento realizado com sucesso. |
| **TA06.05** | O sistema tenta registrar a entrada no caixa e tem sucesso. |
| **TA06.06** | O sistema tenta registrar a entrada no caixa e tem erro. |


### User Story US07 - Gerar Nota Fiscal
|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| **Descrição** | Após a venda ter sido efetuada e aprovada, a nota fiscal é gerada e concedida ao cliente. |

| **Requisitos envolvidos** |                                                    |
| ------------- | :------------------------------------------------------------- | 
|RF23           | Consultar Fornecedor |
|RF15           | Receber Conta |

|                           |                                     |
| ------------------------- | ----------------------------------- | 
| **Prioridade** | Desejável |
| **Estimativa** | 3h | 
| **Tempo Gasto (real):**   |        | 
| **Tamanho Funcional** | 6 PF (pontos de função) |
| **Analista**| Erick (responsável por especificar/detalhar). |
| **Desenvolvedor** | Isa e Melque (responsáveis por implementar e realizar testes de unidade e testes de integração). |
| **Revisor** | Manuelly (responsável por avaliar a implementação e executar os testes de unidade e testes de integração). |
| **Testador** | Felipe (responsável por executar os Testes de Aceitação e fazer o relatório de testes). |

| Testes de Aceitação (TA) |  |
| ----------- | --------- |
| **Código**      | **Descrição** |
| **TA07.01** | O sistema recebe da venda realizada e do controle de caixa as informações necessárias para gerar uma nota fiscal para o cliente. |
| **TA07.02** | O sistema gera uma nota fiscal com o dados e a data da venda. |


### User Story US08 - Gerar Relatórios
|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| **Descrição** | O sistema deve ser capaz de gerar relatórios nos setores de vendas, estoque, finanças e produtos. |

| **Requisitos envolvidos** |                                                    |
| ------------- | :------------------------------------------------------------- | 
|RF03           | Consultar Produto |
|RF07           | Consultar Cliente |
|RF19           | Consultar Funcionário |
|RF14           | Pagar Conta |
|RF15           | Receber Conta |

|                           |                                     |
| ------------------------- | ----------------------------------- | 
| **Prioridade** | Desejável |
| **Estimativa** | 3h | 
| **Tempo Gasto (real):**   |          | 
| **Tamanho Funcional** | 5 PF (pontos de função) |
| **Analista**| Erick (responsável por especificar/detalhar). |
| **Desenvolvedor** | Isa e Melque (responsáveis por implementar e realizar testes de unidade e testes de integração). |
| **Revisor** | Manuelly (responsável por avaliar a implementação e executar os testes de unidade e testes de integração). |
| **Testador** | Felipe (responsável por executar os Testes de Aceitação e fazer o relatório de testes). |

| Testes de Aceitação (TA) |  |
| ----------- | --------- |
| **Código**      | **Descrição** |
| **TA08.01** | O gerente informa ao sistema o tipo de relatório escolhendo a opção “Lucros do Mês”.  |
| **TA08.02** | O sistema gera um relatório dos lucros apurados a partir das vendas realizadas do mês atual. |
| **TA08.03** | O gerente informa ao sistema o tipo de relatório escolhendo a opção “Despesas do mês”. |
| **TA08.04** | O sistema gera um relatório com todas as despesas a pagar referentes ao mês atual. |
| **TA08.05** | O gerente informa ao sistema o tipo de relatório escolhendo a opção “Vendas”. |
| **TA08.06** | O gerente informa ao sistema o mês que ele deseja para o relatório.  |
| **TA08.07** | O sistema gera um relatório das vendas realizadas no mês atual. |
| **TA08.08** | O gerente informa ao sistema o tipo de relatório escolhendo a opção “Quantidade de produtos disponíveis”. |
| **TA08.09** | O sistema gera um relatório de todos os produtos que estão disponíveis, para a compra, no estoque. |
| **TA08.10** | O gerente informa ao sistema o tipo de relatório escolhendo a opção “Produtos abaixo da quantidade mínima”. |
| **TA08.11** | O sistema gera um relatório dos produtos do estoque que estão abaixo da quantidade mínima informada no momento do cadastro. |
| **TA08.12** | Se o gerente não informar o mês desejado, o sistema automaticamente gera um relatório do mês atual.  |


### User Story US09 - Gerar Conta
|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| **Descrição** | O sistema pede para gerar uma conta a receber ou a pagar. |

| **Requisitos envolvidos** |                                                    |
| ------------- | :------------------------------------------------------------- | 
|RF23           | Consultar Fornecedor |
|RF16           | Gerar Nota Fiscal |

|                           |                                     |
| ------------------------- | ----------------------------------- | 
| **Prioridade** | Importante |
| **Estimativa** | 3h | 
| **Tempo Gasto (real):**   |        | 
| **Tamanho Funcional** | 10 PF (pontos de função) |
| **Analista**| Erick (responsável por especificar/detalhar). |
| **Desenvolvedor** | Isa e Melque (responsáveis por implementar e realizar testes de unidade e testes de integração). |
| **Revisor** | Manuelly (responsável por avaliar a implementação e executar os testes de unidade e testes de integração). |
| **Testador** | Felipe (responsável por executar os Testes de Aceitação e fazer o relatório de testes). |

| Testes de Aceitação (TA) |  |
| ----------- | --------- |
| **Código**      | **Descrição** |
| **TA09.01** | O sistema recebe da venda ou da entrada de mercadorias as informações necessárias para gerar uma conta a receber ou a pagar, respectivamente. |
| **TA09.02** | O sistema gera uma conta a receber ou a pagar com a data de vencimento para o dia da venda e o valor da conta.  |


### User Story US10 - Realizar Entrada de Mercadoria
|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| **Descrição** | O sistema deve fazer o controle da quantidade dos produtos que entram no estoque. Um produto tem os atributos tipo, data de validade, quantidade, quantidade mínima aceitável no estoque, código de barras e situação. O registro no sistema poderá ser feito pelos atores funcionário e gerente.  |

| **Requisitos envolvidos** |                                                    |
| ------------- | :------------------------------------------------------------- | 
|RF23           | Consultar Funcionário |
|RF14           | Pagar Conta |

|                           |                                     |
| ------------------------- | ----------------------------------- | 
| **Prioridade** | Essencial |
| **Estimativa** | 4h | 
| **Tempo Gasto (real):**   |       | 
| **Tamanho Funcional** | 10 PF (pontos de função) |
| **Analista**| Erick (responsável por especificar/detalhar). |
| **Desenvolvedor** | Isa e Melque (responsáveis por implementar e realizar testes de unidade e testes de integração). |
| **Revisor** | Manuelly (responsável por avaliar a implementação e executar os testes de unidade e testes de integração). |
| **Testador** | Felipe (responsável por executar os Testes de Aceitação e fazer o relatório de testes). |

| Testes de Aceitação (TA) |  |
| ----------- | --------- |
| **Código**      | **Descrição** |
| **TA10.01** | O funcionário/gerente acessa o sistema para solicitar a entrada dos produtos e logo em seguida consulta o produto que deseja dar entrada. O sistema registra a entrada de mercadoria e atualiza a quantidade de produtos no estoque. Mensagem: Entrada de x queijos (id) realizada com sucesso! |
| **TA10.02** | O funcionário/gerente informa, na tela de realizar entrada de mercadoria, os dados de um produto não cadastrado, e ao clicar em Consultar ele é notificado com uma mensagem de erro. Mensagem: Produto não cadastrado no sistema.  |
| **TA10.03** | O funcionário/gerente tenta realizar uma entrada de produto e tem sucesso. |
| **TA10.04** | O funcionário/gerente tenta realizar uma entrada de mercadoria e tem erro.  |
| **TA10.05** | O funcionário/gerente tenta desativar uma entrada de mercadoria e tem sucesso. |
| **TA10.06** | O funcionário/gerente tenta desativar uma entrada de mercadoria e tem erro.  |



### User Story US11 - Realizar Vendas
|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| **Descrição** | O sistema permite a transação de vendas, incluindo informações sobre os produtos vendidos, o preço, o método de pagamento e o cliente. Uma venda pode ser realizada pelo funcionário ou gerente, quando o cliente informa o que deseja comprar, em seguida o funcionário busca o produto cadastrado no sistema e registra a venda com as informações necessárias do produto vendido: preço, método de pagamento e nome do cliente.  |

| **Requisitos envolvidos** |                                                    |
| ------------- | :------------------------------------------------------------- | 
|RF23           | Consultar Fornecedor |
|RF14           | Pagar Conta |

|                           |                                     |
| ------------------------- | ----------------------------------- | 
| **Prioridade** | Essencial |
| **Estimativa** | 7h | 
| **Tempo Gasto (real):**   |         | 
| **Tamanho Funcional** | 10 PF (pontos de função) |
| **Analista**| Erick (responsável por especificar/detalhar). |
| **Desenvolvedor** | Isa e Melque (responsáveis por implementar e realizar testes de unidade e testes de integração). |
| **Revisor** | Manuelly (responsável por avaliar a implementação e executar os testes de unidade e testes de integração). |
| **Testador** | Felipe (responsável por executar os Testes de Aceitação e fazer o relatório de testes). |

| Testes de Aceitação (TA) |  |
| ----------- | --------- |
| **Código**      | **Descrição** |
| **TA11.01** | O cliente informa ao funcionário/gerente o que deseja comprar, e esses buscam o produto para em seguida registrar os dados da venda. A venda é efetuada e seu registro é salvo no sistema. Mensagem: Sua venda foi realizada com sucesso! |
| **TA11.02** | O cliente informa ao funcionário/gerente o que deseja comprar, se o produto está em falta ou ainda não foi cadastrado no sistema, o funcionário/gerente deve oferecer uma nova alternativa de compra. Caso o cliente não deseje comprar, a realização da venda será cancelada.   |
| **TA11.03** | O funcionário/gerente tenta registrar a forma de pagamento da venda e tem sucesso. |
| **TA11.04** | O funcionário/gerente tenta registrar a forma de pagamento da venda e ocorre um erro. Mensagem: forma de pagamento recusada.  |
| **TA11.05** | O funcionário/gerente tenta desativar uma venda e tem sucesso. |
| **TA11.06** | O funcionário/gerente tenta desativar uma venda e tem erro.  |
| **TA11.07** | O funcionário/gerente tenta pesquisar um produto e tem sucesso, a pesquisa é retornada. |
| **TA11.08** | O funcionário/gerente tenta pesquisar um produto e não há retorno (exibição vazia).  |


### User Story US12 - Controlar Caixa
|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| **Descrição** | O sistema permite registrar todas as movimentações financeiras para o devido funcionamento da empresa. O controle de caixa é dirigido pelo funcionário e gerente.  |

| **Requisitos envolvidos** |                                                    |
| ------------- | :------------------------------------------------------------- | 
|RF14           | Pagar Conta |
|RF16           | Gerar Nota Fiscal |
|RF11           | Gerar Relatórios |
|RF13           | Gerar Conta |

|                           |                                     |
| ------------------------- | ----------------------------------- | 
| **Prioridade** | Essencial |
| **Estimativa** | 7h | 
| **Tempo Gasto (real):**   |        | 
| **Tamanho Funcional** | 10 PF (pontos de função) |
| **Analista**| Erick (responsável por especificar/detalhar). |
| **Desenvolvedor** | Isa e Melque (responsáveis por implementar e realizar testes de unidade e testes de integração). |
| **Revisor** | Manuelly (responsável por avaliar a implementação e executar os testes de unidade e testes de integração). |
| **Testador** | Felipe (responsável por executar os Testes de Aceitação e fazer o relatório de testes). |

| Testes de Aceitação (TA) |  |
| ----------- | --------- |
| **Código**      | **Descrição** |
| **TA12.01** | O funcionário/gerente seleciona na tela de controle de caixa qual movimentação quer registrar, se é entrada ou saída. |
| **TA12.02** | O funcionário/gerente informa todos os dados da movimentação, ao clicar em Salvar ele é notificado com uma mensagem de sucesso. Mensagem: Movimentação realizada com sucesso.   |
| **TA12.03** | O sistema tenta registrar a movimentação com sucesso. |
| **TA12.04** | O sistema tenta registrar a movimentação no caixa e tem erro.  |

### User Story US13 - Autenticação de Usuários
|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| **Descrição** | O sistema permite apenas usuários autorizados possam realizar operações para garantir a segurança das informações.  |

| **Requisitos envolvidos** |                                                    |
| ------------- | :------------------------------------------------------------- | 
|RF25           | Login |
|RF26           | Logout |
|RF27           | Cadastro de Conta de Usuário |
|RF28           | Remoção de Conta de Usuário |
|RF29           | Resgate de Conta de Usuário |

|                           |                                     |
| ------------------------- | ----------------------------------- | 
| **Prioridade** | Essencial |
| **Estimativa** | 4h | 
| **Tempo Gasto (real):**   |        | 
| **Tamanho Funcional** | 10 PF (pontos de função) |
| **Analista**| Erick (responsável por especificar/detalhar). |
| **Desenvolvedor** | Isa e Melque (responsáveis por implementar e realizar testes de unidade e testes de integração). |
| **Revisor** | Manuelly (responsável por avaliar a implementação e executar os testes de unidade e testes de integração). |
| **Testador** | Felipe (responsável por executar os Testes de Aceitação e fazer o relatório de testes). |

| Testes de Aceitação (TA) |  |
| ----------- | --------- |
| **Código**      | **Descrição** |
| **TA13.01** | Um usuário não autenticado tenta acessar uma funcionalidade restrita e é redirecionado para a tela de login.  |
| **TA13.02** | Após o login bem-sucedido, o usuário é redirecionado para a página anteriormente acessada.  |
| **TA13.03** | O sistema exibe uma mensagem de erro ao tentar fazer login com credenciais inválidas.  |
| **TA13.04** | Ao fazer logout, o usuário é redirecionado para a tela de login e não pode acessar funcionalidades restritas.  |
| **TA13.05** | Ao cadastrar uma nova conta de usuário, o sistema exige informações obrigatórias como nome, e-mail e senha.  |
| **TA13.06** | O sistema não permite o cadastro de uma conta com um e-mail já registrado.  |
| **TA13.07** | Após o cadastro bem-sucedido, o usuário recebe uma mensagem de confirmação.  |
| **TA13.08** | O sistema exibe uma mensagem de confirmação ao remover uma conta de usuário.  |
| **TA13.09** | Ao resgatar uma conta de usuário, o sistema envia um e-mail com instruções para redefinir a senha.  |


### User Story US14 - Gerar Relatórios de Clientes Ativos
|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| **Descrição** | Fazer a geração de relatórios sobre a quantidade clientes ativos no sistema que possam ser visualizados em determinados intervalos de tempo. |

| **Requisitos envolvidos** |                                                    |
| ------------- | :------------------------------------------------------------- | 
|RF07           | Consultar Cliente |

|                           |                                     |
| ------------------------- | ----------------------------------- | 
| **Prioridade** | Desejável |
| **Estimativa** | 3h | 
| **Tempo Gasto (real):**   |          | 
| **Tamanho Funcional** | 5 PF (pontos de função) |
| **Analista**| Erick (responsável por especificar/detalhar). |
| **Desenvolvedor** | Isa e Melque (responsáveis por implementar e realizar testes de unidade e testes de integração). |
| **Revisor** | Manuelly (responsável por avaliar a implementação e executar os testes de unidade e testes de integração). |
| **Testador** | Felipe (responsável por executar os Testes de Aceitação e fazer o relatório de testes). |

| Testes de Aceitação (TA) |  |
| ----------- | --------- |
| **Código**      | **Descrição** |
| **TA14.01** | O gerente informa ao sistema o intervalo de tempo na qual quer que seja o recorte dos clientes inativos, exemplo: "Nos últimos 3 meses".  |
| **TA14.02** | O sistema gera um relatório dos clientes inativos dentro do intervalo selecionado. |
| **TA14.03** | Se o gerente não informar o intervalo, o sistema automaticamente gera um relatório com todos os clientes inativos do sistema.  |


### User Story US15 - Relatório de Produtos Disponíveis
|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| **Descrição** | Fazer a geração de relatórios detalhados dos produtos disponíveis no sistema na data especificada, incluindo informações como quantidade disponível. |

| **Requisitos envolvidos** |                                                    |
| ------------- | :------------------------------------------------------------- | 
|RF09           | Realizar Entrada de Mercadoria |
|RF10           | Realizar Vendas |
|RF31           | Relatório de Produtos Disponíveis |

|                           |                                     |
| ------------------------- | ----------------------------------- | 
| **Prioridade** | Desejável |
| **Estimativa** | 3h | 
| **Tempo Gasto (real):**   |          | 
| **Tamanho Funcional** | 5 PF (pontos de função) |
| **Analista**| Erick (responsável por especificar/detalhar). |
| **Desenvolvedor** | Isa e Melque (responsáveis por implementar e realizar testes de unidade e testes de integração). |
| **Revisor** | Manuelly (responsável por avaliar a implementação e executar os testes de unidade e testes de integração). |
| **Testador** | Felipe (responsável por executar os Testes de Aceitação e fazer o relatório de testes). |

| Testes de Aceitação (TA) |  |
| ----------- | --------- |
| **Código**      | **Descrição** |
| **TA15.01** | O gerente informa ao sistema que deseja visualizar o relatório dos produtos disponíveis naquela data em questão.  |
| **TA15.02** | O sistema gera um relatório dos produtos disponíveis na data indicada, listando nome do produto e quantidade disponível. |

### User Story US14 - Gerar Relatórios de Funcionários Ativos
|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| **Descrição** | Fazer a geração de relatórios sobre a quantidade funcionários ativos no sistema que possam ser visualizados em determinados intervalos de tempo. |

| **Requisitos envolvidos** |                                                    |
| ------------- | :------------------------------------------------------------- | 
|RF19           | Consultar Funcionário |

|                           |                                     |
| ------------------------- | ----------------------------------- | 
| **Prioridade** | Desejável |
| **Estimativa** | 3h | 
| **Tempo Gasto (real):**   |          | 
| **Tamanho Funcional** | 5 PF (pontos de função) |
| **Analista**| Erick (responsável por especificar/detalhar). |
| **Desenvolvedor** | Isa e Melque (responsáveis por implementar e realizar testes de unidade e testes de integração). |
| **Revisor** | Manuelly (responsável por avaliar a implementação e executar os testes de unidade e testes de integração). |
| **Testador** | Felipe (responsável por executar os Testes de Aceitação e fazer o relatório de testes). |

| Testes de Aceitação (TA) |  |
| ----------- | --------- |
| **Código**      | **Descrição** |
| **TA16.01** | O gerente informa ao sistema o intervalo de tempo na qual quer que seja o recorte dos funcionários inativos, exemplo: "Nos últimos 3 meses".  |
| **TA16.02** | O sistema gera um relatório dos funcionários inativos dentro do intervalo selecionado. |
| **TA16.03** | Se o gerente não informar o intervalo, o sistema automaticamente gera um relatório com todos os funcionários inativos do sistema.  |

### User Story US15 - Gerar Relatórios de Produtos Abaixo da Quantidade Mínima
|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| **Descrição** | Fazer a geração de relatórios sobre os produtos que estão abaixo da quantidade mínima, para assim haver reposições ao estoque e não haver falta no sistema. |

| **Requisitos envolvidos** |                                                    |
| ------------- | :------------------------------------------------------------- | 
|RF03           | Consultar Produto |
|RF02           | Alterar Produto |
|RF09           | Realizar Entrada de Mercadoria |


|                           |                                     |
| ------------------------- | ----------------------------------- | 
| **Prioridade** | Desejável |
| **Estimativa** | 3h | 
| **Tempo Gasto (real):**   |          | 
| **Tamanho Funcional** | 5 PF (pontos de função) |
| **Analista**| Erick (responsável por especificar/detalhar). |
| **Desenvolvedor** | Isa e Melque (responsáveis por implementar e realizar testes de unidade e testes de integração). |
| **Revisor** | Manuelly (responsável por avaliar a implementação e executar os testes de unidade e testes de integração). |
| **Testador** | Felipe (responsável por executar os Testes de Aceitação e fazer o relatório de testes). |

| Testes de Aceitação (TA) |  |
| ----------- | --------- |
| **Código**      | **Descrição** |
| **TA17.01** | O gerente informa ao sistema o número mínimo de cada produto no sistema.  |
| **TA17.02** | O sistema gera automaticamente um relatório dos produtos que estiverem abaixo do número mínimo. |

### User Story US15 - Gerar Relatórios de Produtos Mais Vendidos no Mês
|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| **Descrição** | Fazer a geração de relatórios sobre os produtos que mais foram vendidos em cada mês. |

| **Requisitos envolvidos** |                                                    |
| ------------- | :------------------------------------------------------------- | 
|RF03           | Consultar Produto |
|RF10           | RF10 - Realizar Vendas	 |


|                           |                                     |
| ------------------------- | ----------------------------------- | 
| **Prioridade** | Desejável |
| **Estimativa** | 3h | 
| **Tempo Gasto (real):**   |          | 
| **Tamanho Funcional** | 5 PF (pontos de função) |
| **Analista**| Erick (responsável por especificar/detalhar). |
| **Desenvolvedor** | Isa e Melque (responsáveis por implementar e realizar testes de unidade e testes de integração). |
| **Revisor** | Manuelly (responsável por avaliar a implementação e executar os testes de unidade e testes de integração). |
| **Testador** | Felipe (responsável por executar os Testes de Aceitação e fazer o relatório de testes). |

| Testes de Aceitação (TA) |  |
| ----------- | --------- |
| **Código**      | **Descrição** |
| **TA18.01** | O gerente informa ao sistema o mês que ele deseja saber quais produtos foram mais vendidos. |
| **TA18.02** | Quando solicitado pelo gerente, o sistema gera um relatório dos produtos que mais foram vendidos no mês escolhido. |

### User Story US16 - Gerar Relatórios de Fornecedores Ativos
|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| **Descrição** | Fazer a geração de relatórios sobre a quantidade de fornecedores ativos no sistema que possam ser visualizados em determinados intervalos de tempo. |

| **Requisitos envolvidos** |                                                    |
| ------------- | :------------------------------------------------------------- | 
|RF23           | Consultar Fornecedor |

|                           |                                     |
| ------------------------- | ----------------------------------- | 
| **Prioridade** | Desejável |
| **Estimativa** | 3h | 
| **Tempo Gasto (real):**   |          | 
| **Tamanho Funcional** | 5 PF (pontos de função) |
| **Analista**| Erick (responsável por especificar/detalhar). |
| **Desenvolvedor** | Isa e Melque (responsáveis por implementar e realizar testes de unidade e testes de integração). |
| **Revisor** | Manuelly (responsável por avaliar a implementação e executar os testes de unidade e testes de integração). |
| **Testador** | Felipe (responsável por executar os Testes de Aceitação e fazer o relatório de testes). |

| Testes de Aceitação (TA) |  |
| ----------- | --------- |
| **Código**      | **Descrição** |
| **TA19.01** | O gerente informa ao sistema o intervalo de tempo na qual quer que seja o recorte dos fornecedores ativos, exemplo: "Nos últimos 3 meses".  |
| **TA19.02** | O sistema gera um relatório dos fornecedores ativos dentro do intervalo selecionado. |
| **TA19.03** | Se o gerente não informar o intervalo, o sistema automaticamente gera um relatório com todos os fornecedores ativos do sistema.  |