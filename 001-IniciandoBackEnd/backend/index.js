const express = require('express');

const app = express();

app.use(express.json());

//Métodos HTTP: GET, POST, PUT, DELETE

//Tipos de parâmetros:
//Query Params: request.query (Filtros, ordenação, paginação)
//Route Params: request.params (Identificar um recurso na alteração/remoção)
//Body: request.body (Dados para criação ou alteração de um registro)

app.get('/users', (request,response) => {
    console.log(request.query);
    return response.json({ message: 'Hello Omnistack'});
});

app.delete('/users/:id', (request,response) => {
    console.log(request.params);
    return response.json({ message: 'Hello Omnistack'});
});

app.put('/users', (request,response) => {
    console.log(request.body);
    return response.json({ message: 'Hello Omnistack'});
});

app.post('/users', (request,response) => {
    console.log(request.body);
    return response.json({ message: 'Hello Omnistack'});
});

app.listen(3333);
