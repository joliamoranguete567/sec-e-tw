const express = require("express");
const router = express.Router();
//const variavel constante, que nao muda o conteudo
// var e let sao variaveis que vao mudar -> var funciona so dentro do if (no js)

let fornecedores = [
    { id: 1, nome: "ariel" },
    { id: 2, nome: "júlia" },
    { id: 3, nome: "heloisa" },
];
//{ id: 1, nome:"Eletrônico"} id:1 -> campo; nome -> nome do campo

//listar categorias
router.get("/", (req, res) => {
    res.json(fornecedores);
});

//buscar por ID fornecedor
//:id -> parametro da url - #signfica que atraves da url a informação vai chegar nele
router.get("/:id", (req, res) => {
    //const id -> recebe o parametro :id de url
    const id = parseInt(req.params.id);
    //const categoria -> recebe o id encontrado da lista categorias. 
    const fornecedor = fornecedores.find((f) => f.id == id); //#cat representa categorias. Cat.id representa a categoria. 
   //se n encontrar categoria, vai retornar a mensagem "categoria nao encontrada" 
    if(!fornecedor){
    return res.status(404).json({mensagem: "fornecedor não encontrado"});
    }
    res.json(fornecedor);
});

// 🔹 LISTAR fornecedor
router.get("/", (req, res) => {
  res.json(fornecedores);
});

// 🔹 BUSCAR fornecedor por ID
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const fornecedor = fornecedores.find((f) => f.id === id);

  if (!fornecedor) {
    return res.status(404).json({ mensagem: "fornecedor não encontrado" });
  }

  res.json(fornecedor);
});

// 🔹 CRIAR novo fornecedor
router.post("/", (req, res) => {
  const { nome } = req.body;
  const novoFornecedor = {
    id: fornecedores.length + 1,
    nome,
  };
  fornecedores.push(novoFornecedor);
  res.status(201).json(novoFornecedor);
});

// 🔹 ATUALIZAR fornecedor
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { nome } = req.body;

  const fornecedor = fornecedores.find((c) => c.id === id);

  if (!fornecedor) {
    return res.status(404).json({ mensagem: "fornecedor não encontrado" });
  }

  fornecedor.nome = nome;

  res.json(fornecedor);
});

// 🔹 EXCLUIR fornecedor
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const index = fornecedores.findIndex((c) => c.id === id);

  if (index === -1) {
    return res.status(404).json({ mensagem: "fornecedor não encontrado" });
  }

  fornecedores.splice(index, 1);

  res.json({ mensagem: "fornecedor removido com sucesso" });
});

//sempre no final
module.exports = router;