# Documento de Visão

Documento construído a partir do **Documento de Visao** que pode ser encontrado no link: 

## Equipe e Definição de Papéis


Membro     |     Papel   |   E-mail   |
---------  | ----------- | ---------- |
Erick      | Testador     | erickbrtrindade@gmail.com |
Felipe       | Desenvolvedor | felipesouzabenicio@gmail.com |
Isa        |  Desenvolvedor     | isakaillany123@gmail.com |
Manuelly     | Analista     | manuellyvictor2000@gmail.com |
Melque        | Gerente      | melquetrindade654@gmail.com |
Thamiris     | Cliente     | thamirisbgrs@gmail.com |


### Matriz de Competências

Membro     | Competências |
---------  | ----------- |
Erick |Desenvolvedor Python, Kotlin, Flutter, JavaScript, HTML, CSS, Next.js, React |
Felipe | Desenvolvedor Python, JavaScript, HTML, CSS, Next.js, Node.js, React, Flutter, Figma, Trello, Scrum|
Isa | Desenvolvedora Python, JavaScript, HTML, CSS, Dart, Flutter, Next, Figma, Trello |
Manuelly | Desenvolvedora Python, JavaScript, HTML, CSS, Next, Dart, Figma, Notion |
Melque | Desenvolvedor JavaScript, HTML, CSS, Python, Dart, Flutter, Next, React, C |
Thamiris | Desenvolvedora Python, HTML, CSS, JavaScript, Next.js, React, Flutter |

## Perfis dos Usuários

Perfil                                 | Descrição   |
---------                              | ----------- |
Gerente                                | Este usuário utiliza o sistema para gerir a organização do sistema, ele é o responsável principal da organização. Ele é o encarregado pelo controle e administração de todos os setores do Sistema de Queijaria, sobretudo, o financeiro, podendo acessar qualquer um dos relatórios disponíveis no sistema. Ademais, ele é responsável por assegurar que o funcionário da queijaria também esteja cumprindo com o seu papel na empresa.
Funcionário                            | Este usuário é a pessoa responsável por fornecer aos clientes todas as informações sobre os produtos. Além disso, ele é encarregado de manter todos os cadastros do sistema (funcionário, cliente, fornecedor, sobre as vendas e estoque dos produtos), portanto, tem acesso ao cadastro de todas as funcionalidades do sistema, com exceção dos relatórios.

## Lista de Requisitos Funcionais

Requisito                                 | Descrição   | Ator |
---------                                 | ----------- | ---------- |
RF01 - Manter Cliente | Um cliente tem código, nome, cpf ou cnpj, email, telefone, endereço. | Gerente |
RF02 - Manter Funcionário | Um funcionário tem código, nome, cpf, rg, email, telefone, endereço. | Gerente |
RF03 - Manter Material | Um material tem código, descrição e quantidade em estoque. | Gerente |
RF04 - Manter Pedido | É a base da lógica de negócio da empresa. Um pedido tem código, cliente, funcionário, produto, opção de fornecer material, observações, status, valor adicional, desconto, forma de pagamento. | Gerente |
RF05 - Faturar Pedido | Um faturamento de pedido é realizado após a finalização de sua manufatura, o que muda seu status no sistema e o libera para retirada. | Funcionário |
RF06 - Relatórios de Cliente | O acesso a relatórios de clientes pode se provar útil possibilitando o acesso aos dados gerais de clientes sem a necessidade de utilizar seus identificadores | Gerente |
RF07 - Relatórios de Funcionário | Um relatório útil para monitorar a carga de pedidos dos funcionários. | Gerente |
RF08 - Relatórios de Material | Relatórios detalhados com as informações dos materiais utilizados para os bordados. São essenciais para o controle de estoque e garantir que os pedidos poderão ser entregues dentro do prazo. | Gerente |
RF09 - Relatórios de Pedido | É o mais importante do sistema, pois será fundamental para a gestão das demandas. Com esta funcionalidade, o bordadeiro poderá ver todas as demandas e suas informações. | Gerente |

## Lista de Requisitos Não Funcionais

Requisito                                 | Descrição   |
---------                                 | ----------- |
RNF01 - Desenvolvimento de uma interface amigável e intuitiva | Devido ao baixo nível de experiência com tecnologia por parte dos funcionários, é de considerável importância que a interface do sistema possua funcionalidades fáceis de aprender e utilizar. |
RNF02 - O sistema deve exigir poucos recursos do hardware | Acesso a máquinas mais potentes é um investimento inviável. Por isso, é importante que o sistema não exija uma grande quantidade de processamento, armazenamento e memória. A escolha de uma linguagem de programação mais rápida e eficiente deve ser levada em consideração. |

## Riscos

Tabela com o mapeamento dos riscos do projeto, as possíveis soluções e os responsáveis.

Data | Risco | Prioridade | Responsável | Status | Providência/Solução |
------ | ------ | ------ | ------ | ------ | ------ |
04/12/2023 | Não aprendizado das ferramentas utilizadas pelos componentes do grupo | Alta | Gerente | Vigente | Reforçar estudos sobre as ferramentas e aulas com a integrante que conhece a ferramenta |
04/12/2023 | Divisão de tarefas mal sucedida | Baixa | Gerente | Vigente | Acompanhar de perto o desenvolvimento de cada membro da equipe |
| 04/12/2023 | Ausência por qualquer motivo do cliente | Média | Gerente | Vigente | Planejar o cronograma tendo em base a agenda do cliente |
| 04/12/2023 | Implementação de protótipo com as tecnologias | Alto | Todos | Vigente | Encontrar tutorial com a maioria da tecnologia e implementar um caso base do sistema. |
| 04/12/2023 | Falta de comprometimento por parte da equipe | Média | Todos | Pendente | Realocação e simplificação de tarefas |
