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

  });

  $.post("https://draisistoledo.com/cartao/apiADM.php", {acao:"parceiros"})
  .done(function(data){
    var parceiros = JSON.parse(data);

      $.each(parceiros, function(index, parceiro){
        var itemParceiro = "<li>"+
          "<div class='collapsible-header'>"+
            "<i class='material-icons'>store_mall_directory</i>"+
            parceiro.nome;
            if(parceiro.aprovado == null){
              itemParceiro +="<span class='badge red'><a class='white-text'>Pendente</a></span></div>";
            }else{
              itemParceiro +="<span class='badge green'><a class='white-text'>Ativo</a></span></div>";
            }
            itemParceiro +="<div class='collapsible-body'>"+
            "<div class='row'>"+
              "<form class='col s12'>"+
                "<div class='row'>"+
                  "<div class='input-field col s6'>"+
                    "<img class='materialboxed imgLogoAdmParceiro' src='uploads/"+parceiro.logo+"'>"+
                  "</div>"+
                  "<div class='input-field col s6'>"+
                    "<input id='email' type='email' class='validate' value='pedro@bol.com.br'>"+
                    "<label for='email'>Nome da Empresa</label>"+
                  "</div>"+
                "</div>"+
                "<div class='row'>"+
                  "<div class='input-field col s6'>"+
                    "<input id='nome' type='text' class='validate' value='Pedro de Lara'>"+
                    "<label for='nome'>Email</label>"+
                  "</div>"+
                  "<div class='input-field col s6'>"+
                    "<input id='email' type='email' class='validate' value='pedro@bol.com.br'>"+
                    "<label for='email'>CNPJ</label>"+
                  "</div>"+
                "</div>"+
                "<div class='row'>"+
                  "<div class='input-field col s6'>"+
                    "<input id='nome' type='text' class='validate' value='Pedro de Lara'>"+
                    "<label for='nome'>Endereço</label>"+
                  "</div>"+
                  "<div class='input-field col s6'>"+
                    "<input id='email' type='email' class='validate' value='pedro@bol.com.br'>"+
                    "<label for='email'>Cidade</label>"+
                  "</div>"+
                "</div>"+
                "<div class='row'>"+
                  "<div class='input-field col s6'>"+
                    "<input id='nome' type='text' class='validate' value='Pedro de Lara'>"+
                    "<label for='nome'>Estado</label>"+
                  "</div>"+
                  "<div class='input-field col s6'>"+
                    "<input id='email' type='email' class='validate' value='pedro@bol.com.br'>"+
                    "<label for='email'>Telefone</label>"+
                  "</div>"+
                "</div>"+
                "<div class='row'>"+
                  "<div class='input-field col s6'>"+
                    "<input id='nome' type='text' class='validate' value='Pedro de Lara'>"+
                    "<label for='nome'>Ramo de Atuação</label>"+
                  "</div>"+
                  "<div class='input-field col s6'>"+
                    "<input id='email' type='email' class='validate' value='pedro@bol.com.br'>"+
                    "<label for='email'>Horário de Funcionamento</label>"+
                  "</div>"+
                "</div>"+
                "<div class='row'>"+
                  "<div class='input-field col s6'>"+
                    "<input id='nome' type='text' class='validate' value='Pedro de Lara'>"+
                    "<label for='nome'>Desconto</label>"+
                  "</div>"+
                  "<div class='input-field col s6'>"+
                    "<input id='email' type='email' class='validate' value='pedro@bol.com.br'>"+
                    "<label for='email'>Tipo de Desconto</label>"+
                  "</div>"+
                "</div>"+
                "<div class='row'>"+
                  "<div class='input-field col s6'>"+
                    "<input id='email' type='email' class='validate' value='pedro@bol.com.br'>"+
                    "<label for='email'>Observação do Desconto</label>"+
                  "</div>"+
                "</div>"+
                "<div class='row'>"+
                  "<div class='col s6'>"+
                    "<a class='btn-floating btn-small waves-effect waves-light red'><i class='material-icons'>delete</i></a> Excluir"+
                  "</div>"+
                  "<div class='col s6'>"+
                      "<a class='waves-effect waves-light btn right'><i class='material-icons left'>check</i>APROVAR</a>"+
                  "</div>"+
                "</div>"+
              "</form>"+
            "</div>"+
          "</div>"+
        "</li>";

        if(parceiro.aprovado == null){
        $("#divAgardandoParceiro").removeClass("some");
        $("#listaParceirosAguardando").append(itemParceiro);
      }else {
        $("#listaParceiros").append(itemParceiro);
      }
      })

  })

})
