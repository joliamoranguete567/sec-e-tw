const express = require('express');
const app = express();

//permite que o server entenda o json
app.use(express.json());

//permite o uso de recursos html e entenda os dados de um form
app.use(express.urlencoded({extended: true}));


//rotas categoria
const categoriaRoutes = require('./routes/categoriaRoutes');
app.use("/categorias", categoriaRoutes);

//rotas clientes
const clienteRoutes = require('./routes/clienteRoutes');
app.use("/cliente", clienteRoutes);

//rotas fornecedor
const fornecedorRoutes = require('./routes/fornecedorRoutes');
app.use("/fornecedor", fornecedorRoutes);


//rota principal
app.get("/", (req, res) => {
    res.send("Servidor ok!")
})
// "/"" significa que é a rota raiz
// res.send("Servidor ok!") -> mostra que o servidor ta funcionando

//server
app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});