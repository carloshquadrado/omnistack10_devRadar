const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes.js');

const app = express();

//MongoDB (Não-relacional)
mongoose.connect('mongodb://<username>:<password>@<base>:27017,@<base>:27017,@<base>:27017/test?ssl=true&replicaSet=OmniStack-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);


app.listen(3333);
