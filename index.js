function buscar() {
    let input = document.getElementById('cep').value;


const ajax = new XMLHttpRequest();
ajax.open('GET','https://viacep.com.br/ws/' + input + '/json/');
ajax.send();

ajax.onload = function() {

    document.getElementById('cep').innerHTML = this.responseText;

    let obj = JSON.parse(this.responseText);

    let logradouro = obj.logradouro
    let cidade = obj.localidade
    let estado = obj.uf

    document.getElementById('texto').innerHTML = "logradouro: "+ logradouro + "<br> cidade: " + cidade + "<br> Estado: " + estado;
  }

};