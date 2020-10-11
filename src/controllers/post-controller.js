
const postModel = require('../models/post-models');
const helper = require('../helpers/helper');
const { post } = require('../routes/post-routes');

const getPost = (request, response) =>{
  response.status(200).json(postModel);
}

//www.reprograma.com.br/post/:id
const getById =  (request, response) =>{
  const { id } = request.params;
  const post = postModel.find(post => post.id == id);

  response.json(post);

}

//www.reprograma.com.br/titulo?titulo=Mulheres na tecnologia
const getByTitle =  (request, response) => {
  const { titulo } = request.query;
  const baseDeDados = postModel.find(post => post.titulo == titulo);

  response.json(baseDeDados);

}

 const createPost = (request, response) => {
   const { titulo, conteudo, tags, autor } = request.body;

   const novoPost ={
     
     id:  helper.obterNovoValor(postModel), //utilizando o helper
     titulo: titulo,
     conteudo: conteudo,
     tags: tags, 
     autor: autor, 
     dataCriacao: helper.novaData(postModel) //utilizando o helper
   }

   postModel.push(novoPost);

   response.status(201).json(novoPost);
 }

 const deletePost = (request, response) =>{
  const { id } = request.params;

  let postFiltrados = postModel.filter(post => {
    return post.id == id;
  });[0];

  const index = postModel.indexOf(postFiltrados);
  
  postModel.splice(index, 1)

  response.json(postModel)
 }

module.exports ={
  getPost,
  getById,
  getByTitle, 
  createPost,
  deletePost
}