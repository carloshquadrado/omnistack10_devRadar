const { Router} = require('express');

const routes = Router();


//Métodos HTTP: GET, POST, PUT, DELETE

//Tipos de parâmetros:
//Query Params: request.query (Filtros, ordenação, paginação)
//Route Params: request.params (Identificar um recurso na alteração/remoção)
//Body: request.body (Dados para criação ou alteração de um registro)



routes.get('/users', (request,response) => {
    console.log(request.query);
    return response.json({ message: 'Hello Omnistack'});
});

routes.delete('/users/:id', (request,response) => {
    console.log(request.params);
    return response.json({ message: 'Hello Omnistack'});
});

routes.put('/users', (request,response) => {
    console.log(request.body);
    return response.json({ message: 'Hello Omnistack'});
});

routes.post('/users', (request,response) => {
    console.log(request.body);
    return response.json({ message: 'Hello Omnistack'});
});

module.exports = routes;
