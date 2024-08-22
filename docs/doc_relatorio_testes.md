<h1 align="center"> Relatório de Testes de Módulo/Sistema</h1>

### Legenda

>*  Teste: Código ou identificação do Teste.
>*  Descrição: Descrição dos passos e detalhes do teste a ser executado.
>*  Especificação: Informações sobre a função testada e se ela de acordo com a especificação do caso de uso.
>*  Resultado: Resultado do teste, modificações sugeridas ou resultados do teste. No caso de erro ou problema na execução do teste descrever o erro em detalhes e adicionar print's das telas.
<hr>

####  US001 – Manter Produto


| Teste  | Descrição  | Especificação | Resultado |
|----------|----------|----------|--------|
| Teste 01: Incluir Produto   | A1 - Incluir Produto </br> A1.1. O ator preenche os dados; A1.2. O ator seleciona a opção Cadastrar; </br>A1.3. O sistema salva os dados;</br>A1.4. O sistema exibe uma mensagem de acordo com a [MSG001]; </br> A1.5. Fim do fluxo.  | A função implementada não segue os passos A1.4. </br> A implementação não está de acordo com a especificação do User Story.   |   O produto é inserido, contudo a mensagem [MSG001] não foi exibida. |
| Teste 02: Excluir Produto   | A3 – Excluir Produto </br>A3.1 - O ator executa o fluxo de Listar Produtos </br>A3.2 - O ator seleciona o Produto e os dados referentes ao mesmo, são carregados na tela;</br>A3.3 – O ator clica no botão Excluir;</br>A3.3 - O sistema solicita confirmação para exclusão [MSG05];</br>A3.4 - O ator confirma a exclusão;</br>A3.5 - O sistema exclui o registro e exibe uma mensagem de acordo com a 	[MSG03]; </br>A3.6 – Fim do fluxo. (P2)   | Especificação OK.   |   OK     |
| Teste 03: Alterar Produto   | A2 – Alterar Produto </br>A2.1 - O ator executa o 			fluxo. (A4)</br>A2.2 - O ator seleciona o Produto e os dados referentes ao mesmo, são carregados no campos para edição;</br>A2.3 - O ator edita os campos e clica no botão Editar;</br>A2.4 - O sistema salva os 	dados alterados no banco de dados;</br>A2.5 - O sistema exibe uma mensagem de acordo com a [MSG04].</br>A2.6 - Fim do fluxo. (P2) | A função não implementa o passo A2.4, ou seja não altera o Produto. Na execução da função aparece uma mensagem sobre a regra de negócio RN001 que não aparece na especificação.   |   O Produto não é alterado mesmo preenchendo e seguindo todos os passos. Não é apresentada nenhuma mensagem de erro referente a alteração.Ao tentar alterar um produto que tem compras (RN001) é exibida a mensagem MSG002. 			“Produto não pode ser alterado”.     |

<h3 align="center"> Relatório de Bugs e Providências</h3>

####  US001 – Manter Produto

| Teste  | Providência  | Tarefas/Tipo |
|----------|----------|----------|
| Teste 01 – Incluir Produto   | Corrigir a implementação do fluxo do user story.   | Tarefa: Bug de Implementação   | 
| Teste 03 – Alterar Produto   | Corrigir a especificação do fluxo do US e sua implementação.   | Tarefa: Corrigir a análise do US. </br>Tarefa: Bug de Implementação.   |  

<h3 align="center"> US002 – Manter Cliente</h3>

| Teste  | Descrição  | Especificação | Resultado |
|----------|----------|----------|--------|
| Teste 01: teste_get_cliente_por_id| A1 - Recuperar cliente pelo ID </br>A1.1. O ator informa o ID do cliente a ser buscado;</br>A1.2. O sistema busca pelo cliente</br>A1.3. O sistema retorna o cliente; </br>A1.4. Fim do fluxo.| Especificação OK| OK|
|Teste 02: teste_update_de_dados_do_usuario_invalido | A2 - Não pode atualizar o cliente com dados inválidos</br>A2.1. O sistema apresenta os dados possíveis para atualização; </br>A2.2. O ator seleciona o CPF</br>A2.3 O ator preenche o campo com um CPF já cadastrado</br>A2.4 - O ator seleciona a opção de atualizar</br>A2.5 O sistema não atualiza os dados</br>A2.6. O sistema exibe uma mensagem informando o erro e cancela a operação;</br>A2.7. Fim do fluxo.|  Especificação OK| OK|
|Teste 03: teste_nao_pode_deletar_cliente_com_id_invalido |A3 - Não pode deletar cliente com um ID inválido</br>A3.1 – O ator informa um ID de cliente inválido</br>A3.2 - O ator seleciona a opção de deletar cliente</br>A3.3 - O sistema não consegue deletar o cliente</br>A3.4 - O sistema exibe uma mensagem de erro informando que não existe cliente com o ID fornecido e cancela a operação</br>A3.5 – Fim do fluxo. |  Especificação OK| OK|
| Teste 04: teste_nao_pode_cadastrar_clientes_com_cpf_iguais| A4 -  Não pode cadastrar clientes com CPFs iguais</br>A4.1 - O ator preenche os dados com CPF já utilizado por outro cliente</br>A4.2 - O ator seleciona a opção de Cadastrar</br>A4.3 - O sistema não realiza o cadastro</br>A4.4 - O sistema exibe mensagem de erro e cancela a operação</br>A4.5 -Fim do fluxo|  Especificação OK| OK|
|Teste 05: teste_update_de_dados_do_usuario_validoCliente|A5 – Teste Update de Dados do Usuário Válido Cliente</br>A5.1 - O ator solicita a atualização de um ou mais campos do cliente utilizando o ID válido</br>A5.3 - O sistema verifica se o ID fornecido corresponde a um cliente existente e valida os novos dados fornecidos</br>A5.4 - O sistema atualiza os dados do cliente com sucesso e retorna o código de status HTTP 200 OK, indicando que a atualização foi realizada corretamente</br>A5.5 - O sistema salva as alterações no banco de dados</br>A5.6 - Fim do fluxo|  Especificação OK| OK|
|Teste 06: teste_deletar_cliente_com_id_valido|A6 – Teste Deletar Cliente com Id Válido </br>A6.1 - O ator cria um novo cliente com dados válidos e obtém o ID do cliente criado</br>A6.2 - O ator solicita a exclusão do cliente utilizando o ID válido obtido</br>A6.3 - O sistema verifica se o ID fornecido corresponde a um cliente existente</br>A6.4 - O sistema deleta o cliente com sucesso e retorna o código de status HTTP 204 No Content, indicando que o cliente foi excluído e não há conteúdo para retornar</br>A6.5 - O sistema remove o cliente do banco de dados</br>A6.6 - Fim do fluxo|  Especificação OK| OK|
|Teste 07: teste_criar_cliente_com_dados_validos|A7 – Teste Criar Cliente com Dados Válidos</br>A7.1 - O ator preenche todos os campos obrigatórios com dados válidos para criar um novo cliente</br>A7.2 - O sistema valida os dados fornecidos, verificando se todos os campos obrigatórios estão corretamente preenchidos</br>A7.3 - O sistema cria o novo cliente com sucesso e retorna o código de status HTTP 201 Created, indicando que o cliente foi criado</br>A7.4 - O sistema armazena o novo cliente no banco de dados</br>A7.5 - Fim do fluxo|  Especificação OK| OK|
|Teste 08: teste_criar_cliente_com_dados_incompletos|A8 – Teste Criar Cliente com Dados Incompletos</br>A8.1 - O ator tenta criar um cliente preenchendo os campos com dados incompletos, como um e-mail em branco</br>A8.2 - O sistema valida os dados fornecidos e detecta que o campo de e-mail está vazio, o que é obrigatório para a criação de um cliente</br>A8.3 - O sistema exibe uma mensagem de erro informando que o campo de e-mail é obrigatório e retorna o código de status HTTP 400 Bad Request</br>A8.4 - Fim do fluxo|  Especificação OK| OK|
|Teste 09: teste_obter_todos_os_clientes|A9 –  Teste Obter Todos os Clientes</br>A9.1 - O ator solicita todos os clientes utilizando a URL de listagem de clientes</br>A9.2 - O sistema verifica se a requisição foi feita corretamente e retorna todos os clientes cadastrados</br>A9.3 - O sistema exibe a lista de clientes e retorna o código de status HTTP 200</br>A9.4 - Fim do fluxo|  Especificação OK| OK|
|Teste 10: teste_obter_cliente_com_id_invalido|A10 – Teste Obter Cliente com ID Inválido</br>A10.1 - O ator solicita um cliente específico utilizando um ID que não existe (por exemplo, 9999)</br>A10.2 - O sistema verifica se o ID fornecido corresponde a um cliente existente</br>A10.3 - O sistema não encontra o cliente correspondente ao ID fornecido e retorna o código de status HTTP 404 Not Found</br>A10.4 - Fim do fluxo|  Especificação OK| OK|

<h3 align="center"> US11 – Realizar Venda</h3>

| Teste  | Descrição  | Especificação | Resultado |
|----------|----------|----------|--------|
|Teste 01: teste_nao_pode_realizar_venda_sem_cliente|A1 - Não pode realizar venda sem cliente	</br>A1.1. O ator preenche os dados;</br>A1.2. O ator seleciona a opção realizar venda;</br>A1.3. O sistema não salva os dados;</br>A1.4. O sistema exibe uma mensagem informando que precisa ter um cliente ligado a venda</br>A1.5. Fim do fluxo.|  Especificação OK| OK|
|Teste 02: teste_nao_pode_realizar_venda_com_produtos_invalidos|A2 – Não pode realizar venda com produtos inválidos</br>A2.1 - O ator busca o cliente no sistema</br>A2.2 - O ator seleciona o cliente e o atribui a venda</br>A2.3 – O ator preenche a venda com produtos inválidos ou inexistentes</br>A2.4 - O ator seleciona a opção de realizar venda</br>A2.5 - O sistema não conclui a venda</br>A2.6 - O sistema exibe uma mensagem de erro e cancela a operação</br>A2.7 – Fim do fluxo|  Especificação OK| OK|
|Teste 03: teste_nao_pode_gerar_nota_fiscal_sem_lista_de_itens|A3 – Não pode criar nota fiscal sem a lista de itens</br>A3.1 – O ator preenche a venda corretamente</br>A3.2 - O ator seleciona a opção de realizar venda</br>A3.3 - O sistema conclui a venda</br>A3.4 - O ator seleciona a opção de criar nota fiscal</br>A3.5 - O sistema ao tentar criar a nota fiscal não é informado a lista de itens</br>A3.6 - O sistema não conclui a criação da nota fiscal</br>A3.7 - O sistema exibe uma mensagem de erro e cancela a operação</br>A3.8 – Fim do fluxo.|  Especificação OK| OK|
|Teste 04: teste_nao_pode_registrar_forma_de_pagamento_sem_informar_metodo|A4 – Não pode registrar forma de pagamento sem o método de pagamento</br>A4.1 – O ator preenche a forma de pagamento sem informar o método de pagamento</br>A4.2 - O ator seleciona a opção de registrar forma de pagamento</br>A4.3 - O sistema não conclui a forma de pagamento</br>A4.4 - O sistema exibe uma mensagem de erro e cancela a operação</br>A4.5 – Fim do fluxo.|  Especificação OK| OK|
|Teste 05: teste_get_forma_de_pagamento_de_uma_venda_especifica|A5 – Recuperar a forma de pagamento de uma venda específica</br>A5.1 – O ator seleciona uma venda</br>A5.2 - O ator seleciona a opção de buscar forma de pagamento da venda selecionada</br>A5.3 - O sistema busca pela forma de pagamento</br>A5.4 - O sistema retorna a forma de pagamento</br>A5.5 – Fim do fluxo.|  Especificação OK| OK|

<h3 align="center"> US13 – Autenticação de Usuários</h3>

| Teste  | Descrição  | Especificação | Resultado |
|----------|----------|----------|--------|
|Teste 01: teste_usuario_pode_registrar_sem_dados|A1 - Não pode registrar Usuários sem dados	</br>A1.1. O ator não preenche os dados;</br>A1.2. O ator seleciona a opção Cadastrar;</br>A1.3. O sistema não salva os dados;</br>A1.4. O sistema exibe uma mensagem de operação inválida;</br>A1.5. Fim do fluxo.|  Especificação OK| OK|
|Teste 02: teste_usuario_pode_registrar_com_dados_validos|A2 - Registrar Usuários	com dados válidos	</br>A2.1. O ator preenche os dados;</br>A2.2. O ator seleciona a opção Cadastrar;</br>A2.3. O sistema salva os dados;</br>A2.4. O sistema exibe uma mensagem de operação válida;</br>A2.5. Fim do fluxo.|  Especificação OK| OK|
|Teste 03: teste_usuario_nao_pode_fazer_login_com_email_invalido|A3 – Usuário não pode fazer login com email inválido </br>A3.1 - O ator preenche os dados</br>A3.2 - O autor seleciona a opção de cadastrar</br>A3.3 - O sistema verifica se o email fornecido já está em uso</br>A3.4 - O sistema salva os dados caso o email seja válido</br>A3.5 - O sistema realiza o login do usuário cadastrado</br>A3.6. O sistema redireciona o usuário para tela inicial;</br>A3.7 - Fim do fluxo.|  Especificação OK| OK|

<h3 align="center"> US03 – Manter Funcionário</h3>

| Teste  | Descrição  | Especificação | Resultado |
|----------|----------|----------|--------|
|Teste 01: teste_get_funcionario_por_id|A1 - Recuperar funcionário pelo ID;		</br>A1.1. O ator informa o ID do funcionário a ser buscado;</br>A1.2. O sistema busca pelo funcionário;</br>A1.3. O sistema retorna o funcionário;</br>A1.4. Fim do fluxo.|  Especificação OK| OK|
|Teste 02: teste_update_de_dados_do_funcionario_valido|A2. Atualizar funcionário com dados válidos;</br>A2.1. O sistema apresenta os dados possíveis para atualização;</br>A2.2. O ator seleciona o nome;</br>A2.3. O ator preenche o campo com um novo nome;</br>A2.4. - O ator seleciona a opção de atualizar;</br>A2.5. O sistema atualiza os dados com sucesso;</br>A2.6. Fim do fluxo.|  Especificação OK| OK|
|Teste 03: teste_deletar_funcionario_com_id_valido|A3 - Deletar funcionário informando um ID válido;</br>A3.1 - O ator informa um ID de funcionário válido;</br>A3.2 - O ator seleciona a opção de deletar funcionário;</br>A3.3 - O sistema deleta o funcionário com sucesso;</br>A3.4 – Fim do fluxo.|  Especificação OK| OK|
|Teste 04: teste_criar_funcionario_com_dados_validos|A4 -  Cadastrar funcionário com dados válidos;</br>A4.1 - O ator preenche todos os dados do funcionário corretamente;</br>A4.2 - O ator seleciona a opção de Cadastrar;</br>A4.3. O sistema salva os dados;</br>A4.4. O sistema exibe uma mensagem de operação válida;</br>A4.5 -Fim do fluxo|  Especificação OK| OK|
|Teste 05: teste_criar_funcionario_com_dados_incompletos|A5 - Não pode registrar Funcionários com dados incompletos;	</br>A5.1. O ator não preenche todos os dados;</br>A5.2. O ator seleciona a opção Cadastrar;</br>A5.3. O sistema não salva os dados;</br>A5.4. O sistema exibe uma mensagem de operação inválida;</br>A5.5. Fim do fluxo.|  Especificação OK| OK|
|Teste 06: teste_obter_todos_os_funcionario|A6 - Teste Obter Todos os Funcionários</br>A6.1 - O ator solicita todos os funcionários utilizando a URL de listagem de funcionários</br>A6.2 - O sistema verifica se a requisição foi feita corretamente e retorna todos os funcionários cadastrados</br>A6.3 - O sistema exibe a lista de funcionários e retorna o código de status HTTP 200</br>A6.4 - Fim do fluxo|  Especificação OK| OK|
|Teste 07: teste_obter_funcionario_com_id_invalido|A7 - Não pode recuperar funcionário pelo ID inválido;	</br>A7.1. O ator informa um ID inválido de um funcionário;</br>A7.2. O sistema tenta buscar pelo funcionário;</br>A7.3. O sistema não consegue encontrar o funcionário;</br>A7.4 - O sistema exibe uma mensagem de erro informando que não existe funcionário com o ID fornecido e cancela a operação;</br>A7.5. Fim do fluxo.|  Especificação OK| OK|


<h3 align="center"> US04 – Manter Fornecedor</h3>

| Teste  | Descrição  | Especificação | Resultado |
|----------|----------|----------|--------|
|Teste 01: teste_get_fornecedor_por_id|A1 - Recuperar fornecedor pelo ID;		</br>A1.1. O ator informa o ID do fornecedor a ser buscado;</br>A1.2. O sistema busca pelo fornecedor;</br>A1.3. O sistema retorna o fornecedor;</br>A1.4. Fim do fluxo.|  Especificação OK| OK|
|Teste 02: teste_update_de_dados_do_fornecedor_valido|A2. Atualizar fornecedor com dados válidos;</br>A2.1. O sistema apresenta os dados possíveis para atualização;</br>A2.2. O ator seleciona o nome;</br>A2.3. O ator preenche o campo com um novo nome;</br>A2.4. - O ator seleciona a opção de atualizar;</br>A2.5. O sistema atualiza os dados com sucesso;</br>A2.6. Fim do fluxo.|  Especificação OK| OK|
|Teste 03: teste_deletar_fornecedor_com_id_valido|A3 - Deletar fornecedor informando um ID válido;</br>A3.1 - O ator informa um ID de fornecedor válido;</br>A3.2 - O ator seleciona a opção de deletar fornecedor;</br>A3.3 - O sistema deleta o fornecedor com sucesso;</br>A3.4 – Fim do fluxo.|  Especificação OK| OK|
|Teste 04: teste_criar_fornecedor_com_dados_validos|A4 -  Cadastrar fornecedor com dados válidos;</br>A4.1 - O ator preenche todos os dados do fornecedor corretamente;</br>A4.2 - O ator seleciona a opção de Cadastrar;</br>A4.3. O sistema salva os dados;</br>A4.4. O sistema exibe uma mensagem de operação válida;</br>A4.5 -Fim do fluxo|  Especificação OK| OK|
|Teste 05: teste_criar_fornecedor_com_dados_incompletos|A5 - Não pode registrar fornecedores com dados incompletos;	</br>A5.1. O ator não preenche todos os dados;</br>A5.2. O ator seleciona a opção Cadastrar;</br>A5.3. O sistema não salva os dados;</br>A5.4. O sistema exibe uma mensagem de operação inválida;</br>A5.5. Fim do fluxo.|  Especificação OK| OK|
|Teste 06: teste_obter_todos_os_fornecedores|A6 - Teste Obter Todos os fornecedores</br>A6.1 - O ator solicita todos os fornecedores utilizando a URL de listagem de fornecedores</br>A6.2 - O sistema verifica se a requisição foi feita corretamente e retorna todos os fornecedores cadastrados</br>A6.3 - O sistema exibe a lista de fornecedores e retorna o código de status HTTP 200</br>A6.4 - Fim do fluxo|  Especificação OK| OK|
|Teste 07: teste_obter_fornecedor_com_id_invalido|A7 - Não pode recuperar fornecedor pelo ID inválido;	</br>A7.1. O ator informa um ID inválido de um fornecedor;</br>A7.2. O sistema tenta buscar pelo fornecedor;</br>A7.3. O sistema não consegue encontrar o fornecedor;</br>A7.4 - O sistema exibe uma mensagem de erro informando que não existe fornecedor com o ID fornecido e cancela a operação;</br>A7.5. Fim do fluxo.|  Especificação OK| OK|

<h3 align="center"> User Story US10 - Realizar Entrada de Mercadoria</h3>

| Teste  | Descrição  | Especificação | Resultado |
|----------|----------|----------|--------|
|Teste 01: teste_adicionar_mercadoria_com_dados_validos|A1 - Cadastra uma entrada de mercadoria com dados válidos;</br>A1.1 -  O ator informa os dados da entrada de mercadoria;</br>A1.2 - O sistema cadastra a nova entrada de mercadoria.|  Especificação OK| OK|
|Teste 02: teste_adicionar_mercadoria_com_dados_incompletos|A2 - Não pode ser cadastrado com dados inválidos;</br>A2.1 - O ator informa dados inválidos para a entrada de mercadoria;</br>A2.2 - O sistema gera um erro e não cadastra a nova entrada de mercadoria;|  Especificação OK| OK|
