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
