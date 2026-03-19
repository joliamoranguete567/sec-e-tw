const express = require("express");
const router = express.Router();
//const variavel constante, que nao muda o conteudo
// var e let sao variaveis que vao mudar -> var funciona so dentro do if (no js)

let categorias = [
    { id: 1, nome: "Eletrônico" },
    { id: 2, nome: "Vestuário" },
    { id: 3, nome: "Alimento" },
];
//{ id: 1, nome:"Eletrônico"} id:1 -> campo; nome -> nome do campo

//listar categorias
router.get("/", (req, res) => {
    res.json(categorias);
});

//buscar por ID categoria
//:id -> parametro da url - #signfica que atraves da url a informação vai chegar nele
router.get("/:id", (req, res) => {
    //const id -> recebe o parametro :id de url
    const id = parseInt(req.params.id);
    //const categoria -> recebe o id encontrado da lista categorias. 
    const categoria = categorias.find((c) => c.id == id); //#cat representa categorias. Cat.id representa a categoria. 
   //se n encontrar categoria, vai retornar a mensagem "categoria nao encontrada" 
    if(!categoria){
    return res.status(404).json({mensagem: "Categoria não encontrada"});
    }
    res.json(categoria);
});

// 🔹 LISTAR categorias
router.get("/", (req, res) => {
  res.json(categorias);
});

// 🔹 BUSCAR categoria por ID
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const categoria = categorias.find((c) => c.id === id);

  if (!categoria) {
    return res.status(404).json({ mensagem: "Categoria não encontrada" });
  }

  res.json(categoria);
});

// 🔹 CRIAR nova categoria
router.post("/", (req, res) => {
  const { nome } = req.body;
  const novaCategoria = {
    id: categorias.length + 1,
    nome,
  };
  categorias.push(novaCategoria);
  res.status(201).json(novaCategoria);
});

// 🔹 ATUALIZAR categoria
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { nome } = req.body;

  const categoria = categorias.find((c) => c.id === id);

  if (!categoria) {
    return res.status(404).json({ mensagem: "Categoria não encontrada" });
  }

  categoria.nome = nome;

  res.json(categoria);
});

// 🔹 EXCLUIR categoria
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const index = categorias.findIndex((c) => c.id === id);

  if (index === -1) {
    return res.status(404).json({ mensagem: "Categoria não encontrada" });
  }

  categorias.splice(index, 1);

  res.json({ mensagem: "Categoria removida com sucesso" });
});

module.exports = router;

//sempre no final
module.exports = router;

//#req -> informação que vem ou de formulario ou da url
//#cat.id é da lista que ta me cima, o segundo id pegou info do /:id (acho?)
//#if(!) significa que nao encontrou, é tipo o se nao
//#categoriaS é a lsita toda. categoriA (sem s) é so a variavel
//#:id é quando tem uqe encontrar alguma info
