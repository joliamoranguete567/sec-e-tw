const express = require("express");
const router = express.Router();
//const variavel constante, que nao muda o conteudo
// var e let sao variaveis que vao mudar -> var funciona so dentro do if (no js)

let clientes = [
    { id: 1, nome: "sophia" },
    { id: 2, nome: "josé" },
    { id: 3, nome: "davi" },
];
//{ id: 1, nome:"Eletrônico"} id:1 -> campo; nome -> nome do campo

//listar categorias
router.get("/", (req, res) => {
    res.json(clientes);
});

//buscar por ID categoria
//:id -> parametro da url - #signfica que atraves da url a informação vai chegar nele
router.get("/:id", (req, res) => {
    //const id -> recebe o parametro :id de url
    const id = parseInt(req.params.id);
    //const categoria -> recebe o id encontrado da lista categorias. 
    const cliente = clientes.find((cli) => cli.id == id); //#cat representa categorias. Cat.id representa a categoria. 
   //se n encontrar categoria, vai retornar a mensagem "categoria nao encontrada" 
    if(!cliente){
    return res.status(404).json({mensagem: "Cliente não encontrada"});
    }
    res.json(cliente);
});

// 🔹 LISTAR clientes
router.get("/", (req, res) => {
  res.json(clientes);
});

// 🔹 BUSCAR cliente por ID
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const cliente = clientes.find((cli) => cli.id === id);

  if (!cliente) {
    return res.status(404).json({ mensagem: "Cliente não encontrada" });
  }

  res.json(cliente);
});

// 🔹 CRIAR novo cliente
router.post("/", (req, res) => {
  const { nome } = req.body;
  const novoCliente = {
    id: clientes.length + 1,
    nome,
  };
  clientes.push(novoCliente);
  res.status(201).json(novoCliente);
});

// 🔹 ATUALIZAR cliente
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { nome } = req.body;

  const cliente = clientes.find((cli) => cli.id === id);

  if (!cliente) {
    return res.status(404).json({ mensagem: "Cliente não encontrada" });
  }

  cliente.nome = nome;

  res.json(cliente);
});

// 🔹 EXCLUIR cliente
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const index = clientes.findIndex((cli) => cli.id === id);

  if (index === -1) {
    return res.status(404).json({ mensagem: "Cliente não encontrada" });
  }

  clientes.splice(index, 1);

  res.json({ mensagem: "Cliente removida com sucesso" });
});

//sempre no final
module.exports = router;