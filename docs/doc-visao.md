# Documento de Visão

Documento construído a partir do **Documento de Visao** que pode ser encontrado no link: https://docs.google.com/document/d/1KIQy14inIqcfcoBIEikXlnksvtnJw7yplUlvLV9PtQk/edit

## Equipe e Definição de Papéis


Membro     |     Papel   |   E-mail   |
---------  | ----------- | ---------- |
Erick Bezerra     | Testador     | erickbrtrindade@gmail.com |
Felipe Souza      | Desenvolvedor | felipesouzabenicio@gmail.com |
Isa Kaillany       |  Desenvolvedor     | isakaillany123@gmail.com |
Manuelly Rodrigues    | Analista     | manuellyvictor2000@gmail.com |
Melque Rodrigues       | Gerente      | melquetrindade654@gmail.com |
Thamiris Borges    | Cliente     | thamirisbgrs@gmail.com |


### Matriz de Competências

Membro     | Competências |
---------  | ----------- |
Erick Bezerra |Desenvolvedor Python, Kotlin, Flutter, JavaScript, HTML, CSS, Next.js, React |
Felipe Souza | Desenvolvedor Python, JavaScript, HTML, CSS, Next.js, Node.js, React, Flutter, Figma, Trello, Scrum|
Isa Kaillany| Desenvolvedora Python, JavaScript, HTML, CSS, Dart, Flutter, Next, Figma, Trello |
Manuelly Rodrigues| Desenvolvedora Python, JavaScript, HTML, CSS, Next, Dart, Figma, Notion |
Melque Rodrigues| Desenvolvedor JavaScript, HTML, CSS, Python, Dart, Flutter, Next, React, C |
Thamiris Borges| Desenvolvedora Python, HTML, CSS, JavaScript, Next.js, React, Flutter |

## Perfis dos Usuários

Perfil                                 | Descrição   |
---------                              | ----------- |
Gerente                                | Este usuário utiliza o sistema para gerir a organização do sistema, ele é o responsável principal da organização. Ele é o encarregado pelo controle e administração de todos os setores do Sistema de Queijaria, sobretudo, o financeiro, podendo acessar qualquer um dos relatórios disponíveis no sistema. Ademais, ele é responsável por assegurar que o funcionário da queijaria também esteja cumprindo com o seu papel na empresa.
Funcionário                            | Este usuário é a pessoa responsável por fornecer aos clientes todas as informações sobre os produtos. Além disso, ele é encarregado de manter todos os cadastros do sistema (funcionário, cliente, fornecedor, sobre as vendas e estoque dos produtos), portanto, tem acesso ao cadastro de todas as funcionalidades do sistema, com exceção dos relatórios.

## Lista de Requisitos Funcionais

Requisito                                 | Descrição   | Ator |
---------                                 | ----------- | ---------- |
RF01 - Inserir Produto |Permitir o cadastro de todos os tipos de queijo no sistema.  | Funcionário e gerente |
RF02 - Alterar Produto | Permitir a edição dos dados do produto no sistema. | Funcionário e gerente |
RF03 - Consultar Produto | Permitir a pesquisa do produto no sistema. | Funcionário e gerente |
RF04 - Desativar Produto | Permitir a desativação do produto no sistema. | Funcionário e gerente |
RF05 - Inserir Cliente |Permitir o cadastro do cliente no sistema.  | Funcionário e gerente |
RF06 - Alterar Cliente | Permitir a edição dos dados do cliente no sistema. | Funcionário e gerente |
RF07 - Consultar Cliente | Permitir a pesquisa do cliente no sistema. | Funcionário e gerente |
RF08 - Desativar Cliente | Permitir a desativação do cliente no sistema. | Funcionário e gerente |
RF09 - Realizar Entrada de Mercadoria | Controlar a quantidade de produtos que entram no estoque.  | Funcionário e gerente  |
RF10 - Realizar Vendas | Permitir a transação de venda no sistema, incluindo informações sobre os produtos vendidos, o preço, o método de pagamento e o cliente. | Funcionário e gerente  |
RF11 - Gerar Relatórios | Fazer a geração de relatórios nos setores de finanças, vendas, estoque e produtos. | Gerente |
RF12 - Controlar Caixa | Registrar as movimentações financeiras para o devido funcionamento da empresa. | Funcionário e gerente  |
RF13 - Gerar Conta | Gerar uma conta a receber ou a pagar. | Funcionário e gerente |
RF14 - Pagar Conta | Permitir a administração das contas a serem pagas geradas pelo sistema. | Funcionário e gerente |
RF15 - Receber Conta | Permitir a administração do recebimento de contas do cliente. | Funcionário e gerente |
RF16 - Gerar Nota Fiscal | Após a venda ter sido efetuada e aprovada, a nota fiscal é gerada e concedida ao cliente. | Funcionário e gerente |
RF17 - Inserir Funcionário |Permitir o cadastro do funcionário no sistema.  | Funcionário e gerente |
RF18 - Alterar Funcionário | Permitir a edição dos dados do funcionário no sistema. | Funcionário e gerente |
RF19 - Consultar Funcionário | Permitir a pesquisa do funcionário no sistema. | Funcionário e gerente |
RF20 - Desativar Funcionário | Permitir a desativação do funcionário no sistema. | Funcionário e gerente |
RF21 - Inserir Fornecedor |Permitir o cadastro do fornecedor no sistema.  | Funcionário e gerente |
RF22 - Alterar Fornecedor | Permitir a edição dos dados do fornecedor no sistema. | Funcionário e gerente |
RF23 - Consultar Fornecedor | Permitir a pesquisa do fornecedor no sistema. | Funcionário e gerente |
RF24 - Desativar Fornecedor | Permitir a desativação do fornecedor no sistema. | Funcionário e gerente |
RF25 - Login  | Permitir a entrada e realização de operações do usuário no sistema. O login será feito com email e senha, e terá a possibilidade de recuperar a senha. | Funcionário e gerente |
RF26 - Logout | Permitir a saída do usuário do sistema. O sistema terá um botão para caso o usuário deseje encerrar sua sessão. | Funcionário e gerente  |

## Lista de Requisitos Não Funcionais

Requisito                                 | Descrição   |
---------                                 | ----------- |
RNF01 - Segurança | Prover a segurança das informações com o uso da criptografia, juntamente da autenticação e autorização dos usuários. Além disso, oferece atualizações e patches com correções de segurança mais recentes. |
RNF02 - Disponibilidade | Garantir que o sistema esteja sempre disponível para atender às necessidades dos usuários, a partir do monitoramento regular do desempenho do sistema e backups, como também um planejamento de contingência para garantir que, se ocorrer uma interrupção no sistema, os usuários ainda possam acessar as informações e os serviços necessários. |
RNF03 - Usabilidade | Uma interface que seja fácil e de rápido entendimento, provendo acessibilidade e um design centrado e padronizado para que os usuários possam aprender rapidamente a usá-lo e terem fácil acesso às informações necessárias. |
RNF04 - Confiabilidade | Preservar o ambiente do sistema para manter a confiabilidade das informações que serão registradas nele. Além disso, com uma boa confiabilidade o desempenho é afetado positivamente. Portanto, os backups e instalação de atualizações de software são bem vindos. |
RNF05 - Performance | O sistema deve ter um desempenho adequado para garantir que as operações sejam realizadas muito mais rápidas que o comum. Aumentando a produtividade e minimizando o tempo das pequenas atividades dentro do sistema.  |
RNF06 - Interface de usuário | O sistema deve ter uma interface limpa e de fácil entendimento que possa aumentar a rapidez das vendas e organização das mesmas. De maneira que todas as informações presentes na tela, como botões, caixas de texto e lista de tarefas possam trazer organização e produtividade, bem como uma interface bem projetada pode trazer uma grande satisfação para o usuário e uma experiência bem mais agradável. |
RNF07 - Acessibilidade | O sistema deve permitir apenas o cadastro de pessoas maiores de dezoito anos ou emancipadas. Ademais, o sistema só funcionará no desktop da empresa, ou seja, ele não deverá rodar em dispositivos móveis.|

## Riscos

Tabela com o mapeamento dos riscos do projeto, as possíveis soluções e os responsáveis.

Data | Risco | Prioridade | Responsável | Status | Providência/Solução |
------ | ------ | ------ | ------ | ------ | ------ |
30/11/2023 | Não aprendizado das ferramentas utilizadas pelos componentes do grupo | Alta | Gerente | Vigente | Reforçar estudos sobre as ferramentas e aulas com a integrante que conhece a ferramenta |
30/11/2023 | Ausência por qualquer motivo do cliente | Média | Gerente | Vigente | Planejar o cronograma tendo em base a agenda do cliente |
| 30/11/2023 | Divisão de tarefas mal sucedida | Baixa | Gerente | Resolvido | Acompanhar de perto o desenvolvimento de cada membro da equipe |
| 30/11/2023 | Implementação de protótipo com as tecnologias | Alto | Todos | Vigente | Encontrar tutorial com a maioria da tecnologia e implementar um caso base do sistema. |
| 30/11/2023 | Implementação de requisitos não funcionais exigidos pelo cliente | Médio | Desenvolvedores | Vigente | Buscar mecanismos que contribuam para a aplicação dos requisitos indicados de forma que não prejudique ambas as partes |
| 30/11/2023 | Não cumprimento dos prazos pré-estabelecidos | Médio | Todos | Vigente | Procurar estabelecer metas semanais e bem distribuídas entre os membros da equipe. Tal atividade sendo monitorada por alguma ferramenta como Trello/Notion |
| 30/11/2023 | Mudanças frequentes nos requisitos | Médio | Desenvolvedores | Vigente | Ser conversado com antecedência com as partes envolvidas para o pleno entendimento das necessidades do sistema em questão.  |
