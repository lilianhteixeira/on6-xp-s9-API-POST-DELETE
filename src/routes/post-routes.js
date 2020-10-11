const express = require('express');
const router = express.Router();
const postController = require('../controllers/post-controller');
const post = require('../models/post-models');

/**
@route GET post
@desc Retornar todas as postagens do blog
@access Public 
@endpoint http://localhost:porta/post
**/
router.get('/post', postController.getPost);

/**
@route GET post/titulo
@desc Retornar apenas os títulos das postagens
@access Public 
@endpoint http://localhost:porta/post/titulo
**/
router.get('/post/titulo', postController.getByTitle);
/**
@route GET post/:id
@desc Retornar apenas uma única postagem, pelo seu id
@access Public 
@endpoint http://localhost:porta/post/:id
**/
router.get('/post/:id', postController.getById);

/**
@route POST post
@desc Criar um novo post
@access Public 
@endpoint http://localhost:porta/post
**/
router.post('/post', postController.createPost);

/**
@route DELETE um post
@desc Deletar uma postagem pelo seu id
@access Public 
@endpoint http://localhost:porta/post/:id
**/
router.delete('/post/:id', postController.deletePost)

module.exports = router;