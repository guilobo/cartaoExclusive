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
                    "<input id='nome' type='text' class='validate' value='"+parceiro.nome+"'>"+
                    "<label for='text' class='active'>Nome da Empresa</label>"+
                  "</div>"+
                "</div>"+
                "<div class='row'>"+
                  "<div class='input-field col s6'>"+
                    "<input id='email' type='email' class='validate' value='"+parceiro.email+"'>"+
                    "<label for='email' class='active'>Email</label>"+
                  "</div>"+
                  "<div class='input-field col s6'>"+
                    "<input id='cnpj' type='text' class='validate' value='"+parceiro.cnpj+"'>"+
                    "<label for='cnpj' class='active'>CNPJ</label>"+
                  "</div>"+
                "</div>"+
                "<div class='row'>"+
                  "<div class='input-field col s6'>"+
                    "<input id='endereco' type='text' class='validate' value='"+parceiro.endereco+"'>"+
                    "<label for='endereco' class='active'>Endereço</label>"+
                  "</div>"+
                  "<div class='input-field col s6'>"+
                    "<input id='cidade' type='text' class='validate' value='"+parceiro.cidade+"'>"+
                    "<label for='cidade' class='active'>Cidade</label>"+
                  "</div>"+
                "</div>"+
                "<div class='row'>"+
                  "<div class='input-field col s6'>"+
                    "<input id='estado' type='text' class='validate' value='"+parceiro.estado+"'>"+
                    "<label for='estado' class='active'>Estado</label>"+
                  "</div>"+
                  "<div class='input-field col s6'>"+
                    "<input id='telefone' type='text' class='validate' value='"+parceiro.telefone+"'>"+
                    "<label for='telefone' class='active'>Telefone</label>"+
                  "</div>"+
                "</div>"+
                "<div class='row'>"+
                  "<div class='input-field col s6'>"+
                    "<input id='ramo' type='text' class='validate' value='"+parceiro.ramo+"'>"+
                    "<label for='ramo' class='active'>Ramo de Atuação</label>"+
                  "</div>"+
                  "<div class='input-field col s6'>"+
                    "<input id='funcionamento' type='text' class='validate' value='"+parceiro.horaFuncionamento+"'>"+
                    "<label for='funcionamento' class='active'>Horário de Funcionamento</label>"+
                  "</div>"+
                "</div>"+
                "<div class='row'>"+
                  "<div class='input-field col s6'>"+
                    "<input id='desconto' type='text' class='validate' value='"+parceiro.desconto+"'>"+
                    "<label for='desconto' class='active'>Desconto</label>"+
                  "</div>"+

                  "<label>Tipo de Desconto</label>"+
                  "<div class='input-field col s6'>"+
                  "<div class='switch'>"+
                  "<label>"+
                  "R$";
                  if (parceiro.tipoDesconto == 'porcento' ) {
                 itemParceiro += "<input checked type='checkbox'>";
                  }else{
                    itemParceiro += "<input type='checkbox'>";
                  }
                itemParceiro += "<span class='lever'></span>"+
                "%"+
                "</label>"+
                "</div>"+
                  //  "<label for='tipoDesconto' class='active'>Tipo de Desconto</label>"+
                  "</div>"+
                "</div>"+
                "<div class='row'>"+
                  "<div class='input-field col s12'>"+
                    "<input id='obsDesconto' type='text' class='validate' value='"+parceiro.obsDesconto+"'>"+
                    "<label for='obsDesconto' class='active'>Observação do Desconto</label>"+
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
