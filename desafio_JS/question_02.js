//escopo global
var produto = "Notbook";
const codProduto = "0015512";


//funcao
function getproduct (){
    let categoria = "Computadores e Informática";
    return categoria;
};

console.log(`Detalhes Produto\n Produto : ${produto}\n Categoria : ${getproduct()}\n Código do Produto :${codProduto}`);