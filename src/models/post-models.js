const helper = require('../helpers/helper');

const post = [
  { 
    id: 1, 
    titulo: "Mulheres na tecnologia",
    conteudo: "A importância da mulher no avanço da tecnologia",
    tags: ["mulheres", "tecnologia", "avanço tecnologico", "importância da mulher", "contribuições"], 
    autor: 'Lílian', 
    dataCriacao: helper.novaData()
  },
  { 
    id: 2, 
    titulo: "Promoção de livros",
    conteudo: "Nos próximos dias teremos uma promoção de livros, onde os descontos podem chegar até 70%",
    tags: ["livros", "promoção", "desconto", "livros em promoção"], 
    autor: 'Lílian Teixeira', 
    dataCriacao: helper.novaData()
  }
  
];

module.exports = post;