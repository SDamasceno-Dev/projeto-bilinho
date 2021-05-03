![Projeto Bilinho](https://user-images.githubusercontent.com/58818002/116847043-24899900-abc0-11eb-802f-c62f9e6c8a73.png)
# App Bilinho

> Este projeto foi desenvolvido com o objetivo de atender a resolução de um desafio técnico para o preenchimento de uma vaga Fullstack.

## Instalação

Vamos executar o preparo do ambiente para o correto funcionamento do Sistema Bilinho

### Instalação do Backend
1- Para a correta execução do App Bilinho, proceder com a clonagem do repositório do Github;

2- Após a clonagem do repositório, acessar a pasta do projeto (projeto-bilinho) e entrar na pasta *Backend*;

3- Após acessar a pasta backend, executar no terminal o comando
```bash
> yarn
```
para instalar todas as dependências do App;
4- Com a instalação das dependências da pasta Backend agora instalar o banco de dados PostGres. No desenvolvimento desse App foi utilizada a seguinte versão do Postgres junto com o Docker:
PostgreSQL 13.2 (Debian 13.2-1.pgdg100+1) on x86_64-pc-linux-gnu, compiled by gcc (Debian 8.3.0-6) 8.3.0, 64-bit

5- O banco de dados do Bilinho foi criado com a seguinte configuração

```bash
"type": "postgres",
"host": "localhost",
"port": 5432,
"username": "postgres",
"password": "docker",
"database": "bilinho_db",
```

6- Após o banco de dados instalado, executar o comando no terminal

```bash
> yarn dev:server
```

Isso irá fazer os serviços de backend serem iniciados. Se tudo estiver ocorrido bem até esse momento, a seguinte mensagem será exibida no terminal onde o backend estará sendo executado

```bash
> 🏁 Server started on port 3333
```

7- Com o serviço iniciado, vamos proceder com a instalação das tabelas do App Bilinho no Banco de dados. Para a correta instalação das tabelas, é necessário fazer alguns procedimentos pois devido à um bug reconhecido [aqui](https://github.com/typeorm/typeorm/issues/4588) no TypeOrm, não é possível executar todas as migrations com um único comando, pois ele perder ficam sem referência com as tabelas relacionadas enquanto elas não estão completamente instaladas. Dessa forma é necessário proceder da seguinte forma:

I. Renomear todos os arquivos (menos o arquivo 1619650073527-CreateEducInsts.ts) na pasta backend/src/database/migrations inserindo um _ no final da extensão .ts, ficando da seguinte maneira:

```bash
1619650073527-CreateEducInsts.ts
1619650136602-CreateStudents.ts_
1619650232456-CreateEnrollments.ts_
1619650266500-CreateInvoices.ts_
1619650295826-CreateUsers.ts_
1619788639672-AddAvatarFieldtoUsers.ts_
```
II. Após esse procedimento, então teremos somente o arquivo "1619650073527-CreateEducInsts.ts" preparado para a migration, assim executar o seguinte comando
```bash
> yarn typeorm migration:run
```
Com isso a migration irá ocorrer normalmente.

III. Ao finalizar a 1ª migration, renomear o próximo aquivo na sequencia "1619650136602-CreateStudents.ts_" deixando dessa maneira "1619650136602-CreateStudents.ts" e executar de novo o comando
```bash
> yarn typeorm migration:run
```
IV. Proceder da mesma forma, na sequencia dos arquivos listados acima, até que o último arquivo tenha sido migrado;

V. Se todo o procedimento tiver sido executado de maneira correta, todas as migrations terão sido realizadas com sucesso e teremos criado no banco de dados "bilinho_db" as seguintes tabelas:

```bash
educinsts
enrollments
invoices
migrations
students
users
```
8- Com isso terminamos o preparo do Backend para a execução do App Bilinho. Vamos agora proceder com a instalação do Frontend.

### Instalação do Frontend
1- Para a instalação do Frontend, basta acessar com o terminal a pasta "frontend" localizada na raiz do projeto Bilinho;

2- Após o acesso da pasta, executar o seguinte comando
```bash
> yarn
```
Com isso todas as dependências do Frontend serão instaladas

3- Após a conclusão da instalação das dependências do Frontend, basta executar o seguinte comando para inicial o App Bilinho
```bash
> yarn start
```
Com isso, será aberta uma nova aba no seu navegador e será iniciado o App Bilinho

Com todos esse processo executado corretamente, basta agora criar um novo usuário clicando em "Cadastrar aqui", inserir o nome, e-mail e senha, clicar em "Cadastrar" e pronto, já está com o perfil criado para poder acessar o App Bilinho e começar a usar!
