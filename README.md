# 🖥️ Testes funcionais de Regressão do aplicativo CodeLeap
Testes via Cypress com intuíto de testar a aplicação em questão usando meus conhecimentos em automatização QA.

## 🔍 Sobre o Projeto
Foi desenvolvido um teste completo de regressão do aplicativo CodeLeap com a ferramenta *"Cypress"*, utilizando basicamente da sua própria semântica e estrutura de dados/código orientado a **JS**.

Abaixo segue os cases de teste/histórias de usuário que foram montadas para estruturação dos testes funcionais da aplicação.

Testes de níveis de regressão, dados para carga de teste obtidos através do DOM, com a proposta de stress, erros, validações de campos e casos de funcionalidades do app, para teste de API ViaCep utiliza-se de mock.

OBS: Teste de Título com mais de 100 caracteres e Conteúdo com mais de 500 caracteres realmente é para falhar!!

**Link para ver os testes rodando:** <a href="">clique aqui</a>.

## História de Usuário: Ao acessar a aplicação, eu quero adicionar meu username para realizar o login no sistema
OBS: Dados critérios de regra de negócio não é necessário ter conta cadastrada previamente e possuir senha
Sugestão de melhoria: Implementar cadastro de usuário para criar validações de login e agregar segurança

**Cenário: Adicionar usuário para realizar login**
Dado que acesso o sistema
Quando eu adicionar o nome
E clicar no botão de “Enter”
Então deve ser direcionado para o feed do blog

**Cenário: Login sem username**
Dado que eu desejo entrar no feed
Quando eu preencho o campo "Username" com ""
E clico no botão "Enter"
Então uma mensagem de erro é exibida informando que o Username não pode ser vazio
E o campo é obrigatório

## História de Usuário: Ao acessar a tela de criação de post, eu quero ver uma mensagem de erro se algum campo obrigatório não estiver preenchido. Quando todos os campos estiverem corretos, eu gostaria de clicar no botão "Criar" e ver meu post publicado na tela do feed.

**Cenário: Campos obrigatórios para cadastro de post**
Dado que acesso a página de feed
Quando clico em "Novo Post"
Então uma mensagem de erro é exibida informando que o título e o conteúdo não podem ser vazios
E devo ver mensagens de erro ao lado de "Título" e "Conteúdo" se eu tentar criar um post sem preencher esses campos

**Cenário: Criação de um post com campos preenchidos**
Quando preencho o campo "Título" com "Novo Título" e o campo "Conteúdo" com "Novo Conteúdo"
E clico em "Criar"
Então devo ver o novo post criado na página de feed com o título "Novo Título" e o conteúdo "Novo Conteúdo"

**Cenário: Adicionar um post com título vazio**
Dado que eu desejo fazer um post
Quando eu preencho o campo "Title" com ""
E eu preencho o campo "Content" com "Conteúdo de teste para o novo post"
E clico no botão "Create"
Então uma mensagem de erro é exibida informando que o título não pode ser vazio

**Cenário: Adicionar um post com conteúdo vazio**
Dado que eu desejo fazer um post
Quando eu preencho o campo "Title" com "Novo título de teste"
E eu preencho o campo "Content" com ""
E clico no botão "Create"
Então uma mensagem de erro é exibida informando que o conteúdo não pode ser vazio

## História de Usuário: Como usuário, quero verificar se o conteúdo de um post na rede social está sendo exibido corretamente sem estouro de caracteres, para ter uma experiência satisfatória na leitura dos posts.

**Cenário: Título com mais de 100 caracteres**
Dado que eu esteja na página de feed
Quando eu inserir um título com mais de 100 caracteres
Então o sistema deve exibir uma mensagem de erro informando que o título ultrapassou o limite de caracteres

**Cenário: Conteúdo com mais de 500 caracteres**
Dado que eu esteja na página de feed
Quando eu inserir um conteúdo com mais de 500 caracteres
Então o sistema deve exibir uma mensagem de erro informando que o conteúdo ultrapassou o limite de caracteres

## História de Usuário: Como usuário, eu quero ser capaz de editar e excluir os meus próprios posts para manter atualizado o conteúdo que compartilhei na plataforma e impedir que outros usuários façam modificações indevidas em meus posts.

**Cenário: Abrir modal de edição ao acessar o post**
Dado que eu acessei a página "feed" da rede social
Quando eu clicar em meu post já publicado
Então deverá ser exibido o título e o conteúdo corretamente sem estouro de caracteres.

**Cenário: Editar o post**
Dado que eu esteja logado como o autor de um post
Quando eu clico em "Editar" no post já publicado em questão
Então eu sou direcionado para a página de edição
E consigo editar o post

**Cenário: Tentativa de edição de post por usuário não autorizado**
Dado que eu esteja logado como um usuário não autorizado
Quando eu clico em "Editar" em um post que não foi escrito por mim
Então eu recebo uma mensagem de erro indicando que não tenho permissão para editar o post
Verificação de exclusão de post pelo autor

**Cenário: Excluir post**
Dado que eu esteja logado como o autor de um post
Quando eu clico em "Excluir" no post em questão
Então eu sou direcionado para a página de confirmação da exclusão
E clico em "Confirmar" para excluir o post

**Cenário: Tentativa de exclusão de post por usuário não autorizado**
Dado que eu esteja logado como um usuário não autorizado
Quando eu clico em "Excluir" em um post que não foi escrito por mim
Então eu recebo uma mensagem de erro indicando que não tenho permissão para excluir o post

## História de Usuário: Como usuário, eu quero visualizar um post que não se encontra na mesma página que estou, para isso é necessário utilizar a paginação até eu encontrar
**Cenário: Verificar se a paginação está funcionando corretamente**
Dado que eu estou na página inicial do aplicativo
Quando eu clicar na opção de paginação para a próxima página
Então eu deveria ver que a tela mudou para a próxima página com uma quantidade específica de elementos

