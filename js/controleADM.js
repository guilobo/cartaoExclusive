$(document).ready(function(){
  $.post("https://draisistoledo.com/cartao/apiADM.php", {acao:"clientes"})
  .done(function(data){
    var clientes = JSON.parse(data);

      $.each(clientes, function(index, cliente){

        var itemCliente = "<li class=''>"+
          "<div class='collapsible-header'><i class='material-icons'>person</i>"+cliente.user_login+"<span class='badge green white-text'>ativo</span></div>"+
          "<div class='collapsible-body'>"+
            "<div class='row'>"+
         "<form class='col s12'>"+
           "<div class='row'>"+
             "<div class='input-field col s6'>"+
               "<input disabled id='nome' type='text' class='validate' value='"+cliente.user_login+"'>"+
               "<label for='nome' class='active'>Nome</label>"+
             "</div>"+
             "<div class='input-field col s6'>"+
               "<input disabled  id='email' type='email' class='validate' value="+cliente.user_email+">"+
               "<label for='email' class='active'>Email</label>"+
             "</div>"+
           "</div>"+
           "<div class='row'>"+
             "<div class='input-field col s12'>"+
               "<input id='password' type='password' class='validate' value='Senha'>"+
               "<label for='password' class='active'>Senha</label>"+
             "</div>"+
           "</div>"+
           "<div class='row'>"+
             "<div class='input-field col s12'>"+
               "<input id='cpf' type='text' class='validate' value="+cliente.cpf+">"+
               "<label for='cpf' class='active'>CPF</label>"+
             "</div>"+
           "</div>"+
           "<div class='row'>"+
             "<div class='input-field col s12'>"+
               "<input id='validade' type='date' class='validate' value="+cliente.validade+">"+
               "<label for='validade' class='active'>Validade</label>"+
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
