$(document).ready(function(){
  $.post("https://draisistoledo.com/cartao/apiADM.php", {acao:"clientes"})
  .done(function(data){
    var clientes = JSON.parse(data);
    console.log(clientes);
      $(clientes).each(function(index){
        var itemCliente = "<li class=''>"+
          "<div class='collapsible-header'><i class='material-icons'>person</i>Pedro de Lara<span class='badge green white-text'>ativo</span></div>"+
          "<div class='collapsible-body'>"+
            "<div class='row'>"+
         "<form class='col s12'>"+
           "<div class='row'>"+
             "<div class='input-field col s6'>"+
               "<input disabled id='nome' type='text' class='validate' value='Pedro de Lara'>"+
               "<label for='nome'>Nome</label>"+
             "</div>"+
             "<div class='input-field col s6'>"+
               "<input disabled  id='email' type='email' class='validate' value='pedro@bol.com.br'>"+
               "<label for='email'>Email</label>"+
             "</div>"+
           "</div>"+
           "<div class='row'>"+
             "<div class='input-field col s12'>"+
               "<input id='password' type='password' class='validate' value='password'>"+
               "<label for='password'>senha</label>"+
             "</div>"+
           "</div>"+
           "<div class='row'>"+
             "<div class='input-field col s12'>"+
               "<input id='cpf' type='text' class='validate' value='05796412875'>"+
               "<label for='cpf'>CPF</label>"+
             "</div>"+
           "</div>"+
           "<div class='row'>"+
             "<div class='input-field col s12'>"+
               "<input id='validade' type='date' class='validate' value='2020-12-18'>"+
               "<label for='validade'>validade do cartao</label>"+
             "</div>"+
           "</div>"+
           "<div class='row'>"+
             "<div class='col s6'>"+
               "<a class='btn-floating btn-small waves-effect waves-light red'><i class='material-icons'>delete</i></a> Excluir"+
             "</div>"+
             "<div class='col s6'>"+
               "<button class='btn waves-effect waves-light right' type='submit' name='action'>Salvar"+
          "<i class='material-icons right'>save</i>"+
        "</button>"+
             "</div>"+
           "</div>"+
         "</form>"+
       "</div>"+
          "</div>"+
        "</li>";
        $("#listaClientes").append(itemCliente);
      })

  })

})
