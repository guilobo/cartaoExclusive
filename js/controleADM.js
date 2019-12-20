$(document).ready(function(){
  $.post("https://draisistoledo.com/cartao/apiADM.php", {acao:"clientes"})
  .done(function(data){
    var clientes = JSON.parse(data);
    console.log(clientes);
  })

})
