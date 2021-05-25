# Api de Games
CRUD - api para banco de dados de games
## Endpoints
### GET /games
Esse endpoint é responsável por retornar a listagem de todos os games cadastrados no banco de dados
#### Parametros
Nenhum
#### Respostas
##### OK! 200
Caso essa respota aconteça você vai receber a listagem de todos os games

Exemplo de resposta: 
```
[
    {
        "id": 1,
        "title": "Resident Evil Village",
        "year": 2021,
        "price": 299,
        "createdAt": "2021-05-22T20:06:19.000Z",
        "updatedAt": "2021-05-23T21:19:02.000Z"
    },
    {
        "id": 5,
        "title": "Call Of Duty - Modern Warfare",
        "year": 2018,
        "price": 100,
        "createdAt": "2021-05-23T00:31:05.000Z",
        "updatedAt": "2021-05-25T18:29:44.000Z"
    },
    {
        "id": 6,
        "title": "Assasin's Creed Valhalla",
        "year": 2020,
        "price": 299,
        "createdAt": "2021-05-23T01:15:56.000Z",
        "updatedAt": "2021-05-23T01:15:56.000Z"
    },
    {
        "id": 7,
        "title": "Cyberpunk 2077",
        "year": 2020,
        "price": 110,
        "createdAt": "2021-05-23T21:02:05.000Z",
        "updatedAt": "2021-05-23T21:02:05.000Z"
    }
]
```
##### Falha na autenticação! 401
Caso essa resposta aconteça, isso significa que aconteceu alguma falha durante o processo de autenticação da requisição. Motivos: Token inválido, Token expirado

Exemplo de resposta: 
```
{
    "err": "Token Invalido"
}
```



### POST /auth
Esse endpoint é responsável por fazer o processo de login
#### Parametros
email: E-mail do usuário cadastrado no sistema.

password: Senha do usuário cadastrado no sistema, com aquele determinado e-mail
#### Respostas
##### OK! 200
Caso essa respota aconteça você vai receber a listagem de todos os games

Exemplo de resposta: 
```
[
    {
        "id": 1,
        "title": "Resident Evil Village",
        "year": 2021,
        "price": 299,
        "createdAt": "2021-05-22T20:06:19.000Z",
        "updatedAt": "2021-05-23T21:19:02.000Z"
    },
    {
        "id": 5,
        "title": "Call Of Duty - Modern Warfare",
        "year": 2018,
        "price": 100,
        "createdAt": "2021-05-23T00:31:05.000Z",
        "updatedAt": "2021-05-25T18:29:44.000Z"
    },
    {
        "id": 6,
        "title": "Assasin's Creed Valhalla",
        "year": 2020,
        "price": 299,
        "createdAt": "2021-05-23T01:15:56.000Z",
        "updatedAt": "2021-05-23T01:15:56.000Z"
    },
    {
        "id": 7,
        "title": "Cyberpunk 2077",
        "year": 2020,
        "price": 110,
        "createdAt": "2021-05-23T21:02:05.000Z",
        "updatedAt": "2021-05-23T21:02:05.000Z"
    }
]
```
##### Falha na autenticação! 401
Caso essa resposta aconteça, isso significa que aconteceu alguma falha durante o processo de autenticação da requisição. Motivos: Token inválido, Token expirado

Exemplo de resposta: 
```
{
    "err": "Token Invalido"
}
```



### POST /game
Esse endpoint é responsável por adicionar um game no banco de dados 
#### Parametros
Nenhum
#### Respostas
##### OK! 200
Caso essa respota aconteça você vai receber um OK

##### Falha na hora de adicionar ao banco de dados! 400
Caso essa resposta aconteça, significa que aconteceu alguma falha durante o processo para adicionar o game. Motivos: Sintaxe inválida

##### Falha na autenticação! 401
Caso essa resposta aconteça, isso significa que aconteceu alguma falha durante o processo de autenticação da requisição. Motivos: Token inválido, Token expirado

Exemplo de resposta: 
```
{
    "err": "Token Invalido"
}
```



### DELETE /game/:id
Esse endpoint é responsável por deletar um game no banco de dados
#### Parametros
id - id do game que você deseja deletar
#### Respostas
##### Falha na hora de consultar o id! 400
Caso essa respota aconteça, siginifica que o ID requisitado não é um número

##### OK! 200
Caso essa resposta aconteça, isso significa que foi deletado um game do banco de dados com sucesso

##### Não encontrado! 404
Casso essa resposta aconteça, significa que não existe nenhum game com o id requisitado

##### Falha na autenticação! 401
Caso essa resposta aconteça, isso significa que aconteceu alguma falha durante o processo de autenticação da requisição. Motivos: Token inválido, Token expirado

Exemplo de resposta: 
```
{
    "err": "Token Invalido"
}
```



### PUT /game/:id
Esse endpoint é responsável por atualizar dados no game
#### Parametros
id - id do game que você deseja atualizar dados
#### Respostas
##### Falha na hora de consultar o id! 400
Caso essa respota aconteça, siginifica que o ID requisitado não é um número

##### OK! 200
Caso essa resposta aconteça, isso significa que foi atualizado dados de um game com sucesso

##### Não encontrado! 404
Casso essa resposta aconteça, significa que não existe nenhum game com o id requisitado

##### Falha na autenticação! 401
Caso essa resposta aconteça, isso significa que aconteceu alguma falha durante o processo de autenticação da requisição. Motivos: Token inválido, Token expirado

Exemplo de resposta: 
```
{
    "err": "Token Invalido"
}
```



### GET /game/:id
Esse endpoint é responsável por procurar apenas um game no banco de dados
#### Parametros
id - id do game que você deseja atualizar dados
#### Respostas
##### Falha na hora de consultar o id! 400
Caso essa respota aconteça, siginifica que o ID requisitado não é um número

##### OK! 200
Caso essa resposta aconteça, isso significa que foi encontrado com sucesso

Exemplo de resposta: 
```
{
  "id": 1,
  "title": "Resident Evil Village",
  "year": 2021,
  "price": 299,
  "createdAt": "2021-05-22T20:06:19.000Z",
  "updatedAt": "2021-05-23T21:19:02.000Z"
}
```

##### Não encontrado! 404
Casso essa resposta aconteça, significa que não existe nenhum game com o id requisitado

##### Falha na autenticação! 401
Caso essa resposta aconteça, isso significa que aconteceu alguma falha durante o processo de autenticação da requisição. Motivos: Token inválido, Token expirado

Exemplo de resposta: 
```
{
    "err": "Token Invalido"
}
```



### GET /users
Esse endpoint é responsável por retornar a listagem de todos os usuários cadastrados no banco de dados
#### Parametros
Nenhum
#### Respostas
##### OK! 200
Caso essa respota aconteça você vai receber a listagem de todos os games

Exemplo de resposta: 
```
[
    {
        "id": 2,
        "name": "Gabriel Julian",
        "email": "gabrielprogramadorti@gmail.com",
        "password": "$2b$10$vpWQMooH5TIUDae8/QFkf.SaH4UYn6tv/GejCF2ylGZXLAAJLQQZC",
        "createdAt": "2021-05-24T19:12:45.000Z",
        "updatedAt": "2021-05-24T19:12:45.000Z"
    },
    {
        "id": 4,
        "name": "Eduardo Oliveira",
        "email": "eduardo.oliveirajr47@gmail.com",
        "password": "$2b$10$O4eY0tQGX1ludH2FJAoU4ueduZD7WFs.Fdy/CPIGQAwqBZtpHRJE.",
        "createdAt": "2021-05-25T21:46:34.000Z",
        "updatedAt": "2021-05-25T21:46:34.000Z"
    }
]

```
##### Falha na autenticação! 401
Caso essa resposta aconteça, isso significa que aconteceu alguma falha durante o processo de autenticação da requisição. Motivos: Token inválido, Token expirado

Exemplo de resposta: 
```
{
    "err": "Token Invalido"
}
```



### POST /user
Esse endpoint é responsável por adicionar um game no banco de dados 
#### Parametros
Nenhum
#### Respostas
##### OK! 200
Caso essa respota aconteça significa que foi adicionado com sucesso os dados do usuário no banco de dados

##### Falha na hora de adicionar ao banco de dados! 400
Caso essa resposta aconteça, significa que aconteceu alguma falha durante o processo para adicionar o user. Motivos: Sintaxe inválida

##### Falha na autenticação! 401
Caso essa resposta aconteça, isso significa que aconteceu alguma falha durante o processo de autenticação da requisição. Motivos: Token inválido, Token expirado

Exemplo de resposta: 
```
{
    "err": "Token Invalido"
}
```



### DELETE /user/:id
Esse endpoint é responsável por deletar um user no banco de dados
#### Parametros
id - id do user que você deseja deletar
#### Respostas
##### Falha na hora de consultar o id! 400
Caso essa respota aconteça, siginifica que o ID requisitado não é um número

##### OK! 200
Caso essa resposta aconteça, isso significa que foi deletado um user do banco de dados com sucesso

##### Não encontrado! 404
Casso essa resposta aconteça, significa que não existe nenhum user com o id requisitado

##### Falha na autenticação! 401
Caso essa resposta aconteça, isso significa que aconteceu alguma falha durante o processo de autenticação da requisição. Motivos: Token inválido, Token expirado

Exemplo de resposta: 
```
{
    "err": "Token Invalido"
}
```



### PUT /user/:id
Esse endpoint é responsável por atualizar dados no user
#### Parametros
id - id do user que você deseja atualizar dados
#### Respostas
##### Falha na hora de consultar o id! 400
Caso essa respota aconteça, siginifica que o ID requisitado não é um número

##### OK! 200
Caso essa resposta aconteça, isso significa que foi atualizado dados de um user com sucesso

##### Não encontrado! 404
Casso essa resposta aconteça, significa que não existe nenhum user com o id requisitado

##### Falha na autenticação! 401
Caso essa resposta aconteça, isso significa que aconteceu alguma falha durante o processo de autenticação da requisição. Motivos: Token inválido, Token expirado

Exemplo de resposta: 
```
{
    "err": "Token Invalido"
}
```



### GET /user/:id
Esse endpoint é responsável por procurar apenas um user no banco de dados
#### Parametros
id - id do user que você deseja atualizar dados
#### Respostas
##### Falha na hora de consultar o id! 400
Caso essa respota aconteça, siginifica que o ID requisitado não é um número

##### OK! 200
Caso essa resposta aconteça, isso significa que foi encontrado com sucesso

Exemplo de resposta: 
```
{
  "id": 1,
  "name": "Gabriel Julian",
  "email": "gabrielprogramadorti@gmail.com",
  "password": "$2b$10$vpWQMooH5TIUDae8/QFkf.SaH4UYn6tv/GejCF2ylGZXLAAJLQQZC",
  "createdAt": "2021-05-22T20:06:19.000Z",
  "updatedAt": "2021-05-23T21:19:02.000Z"
}
```

##### Não encontrado! 404
Casso essa resposta aconteça, significa que não existe nenhum user com o id requisitado

##### Falha na autenticação! 401
Caso essa resposta aconteça, isso significa que aconteceu alguma falha durante o processo de autenticação da requisição. Motivos: Token inválido, Token expirado

Exemplo de resposta: 
```
{
    "err": "Token Invalido"
}
```




