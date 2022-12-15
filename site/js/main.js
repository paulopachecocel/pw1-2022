var url = "http://localhost:8080/products";
let xhr = new XMLHttpRequest();

function buscarProdutos(){
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function (){
        if (xhr.readyState == 4){
            if (xhr.status == 200){
                var produtos = JSON.parse(xhr.responseText);
                produtos.forEach(preencherProdutos);
            }
        }
    }
    xhr.send();
}

function formatValue(value){
    var str = parseFloat(value).toFixed(2);
    str = str.replace(".", ",");
    str = 'R$ ' + str;
    return str;
}

function formatDescription(description){
    var str = description.toLowerCase();
    str = str.charAt(0).toUpperCase() + str.slice(1);
    return str;
}

function preencherProdutos(value){
    var lista = '<div class="col col-desktop-3">\n' +
        '<div class="card" style="width: 12rem;">\n' +
        '  <img src="'+value.imageUri+'" class="card-img-top" alt="...">\n' +
        '  <div class="card-body">\n' +
        '    <h5 class="card-title">'+value.name+'</h5>\n' +
        '    <p class="card-text">'+value.description+'</p>\n' +
        '  </div>\n' +
        '  <div class="card-footer">\n' +
        '    <p class="card-text" id="valor-produto">'+formatValue(value.price)+'</p>\n' +
        '    <a href="#" class="btn btn-primary">Detalhes</a>\n' +
        '  </div>\n' +
        ' </div>\n' +
        '</div>';

    document.getElementById("lista-produtos").innerHTML += lista;
}

buscarProdutos();