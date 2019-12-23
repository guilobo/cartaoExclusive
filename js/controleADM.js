$(document).ready(function(){
carregaClientes();
carregaParceiro();



});
function carregaParceiro(){
  $.post("https://draisistoledo.com/cartao/apiADM.php", {acao:"parceiros"})
  .done(function(data){
    $("#listaParceiros").html("");
    $("#barraCarregando").remove()
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
                    "<input id='nome"+parceiro.id+"' type='text' class='validate' value='"+parceiro.nome+"'>"+
                    "<label for='nome"+parceiro.id+"' class='active'>Nome da Empresa</label>"+
                  "</div>"+
                "</div>"+
                "<div class='row'>"+
                  "<div class='input-field col s6'>"+
                    "<input id='email"+parceiro.id+"' type='email' class='validate' value='"+parceiro.email+"'>"+
                    "<label for='email"+parceiro.id+"' class='active'>Email</label>"+
                  "</div>"+
                  "<div class='input-field col s6'>"+
                    "<input id='cnpj"+parceiro.id+"' type='text' class='validate' value='"+parceiro.cnpj+"'>"+
                    "<label for='cnpj"+parceiro.id+"' class='active'>CNPJ</label>"+
                  "</div>"+
                "</div>"+
                "<div class='row'>"+
                  "<div class='input-field col s6'>"+
                    "<input id='endereco"+parceiro.id+"' type='text' class='validate' value='"+parceiro.endereco+"'>"+
                    "<label for='endereco"+parceiro.id+"' class='active'>Endereço</label>"+
                  "</div>"+
                  "<div class='input-field col s6'>"+
                    "<input id='cidade"+parceiro.id+"' type='text' class='validate' value='"+parceiro.cidade+"'>"+
                    "<label for='cidade"+parceiro.id+"' class='active'>Cidade</label>"+
                  "</div>"+
                "</div>"+
                "<div class='row'>"+
                  "<div class='input-field col s6'>"+
                    "<input id='estado"+parceiro.id+"' type='text' class='validate' value='"+parceiro.estado+"'>"+
                    "<label for='estado"+parceiro.id+"' class='active'>Estado</label>"+
                  "</div>"+
                  "<div class='input-field col s6'>"+
                    "<input id='telefone"+parceiro.id+"' type='text' class='validate' value='"+parceiro.telefone+"'>"+
                    "<label for='telefone"+parceiro.id+"' class='active'>Telefone</label>"+
                  "</div>"+
                "</div>"+
                "<div class='row'>"+
                  "<div class='input-field col s6'>"+
                    "<input id='ramo"+parceiro.id+"' type='text' class='validate' value='"+parceiro.ramo+"'>"+
                    "<label for='ramo"+parceiro.id+"' class='active'>Ramo de Atuação</label>"+
                  "</div>"+
                  "<div class='input-field col s6'>"+
                    "<input id='funcionamento"+parceiro.id+"' type='text' class='validate' value='"+parceiro.horaFuncionamento+"'>"+
                    "<label for='funcionamento"+parceiro.id+"' class='active'>Horário de Funcionamento</label>"+
                  "</div>"+
                "</div>"+
                "<div class='row'>"+
                  "<div class='input-field col s6'>"+
                    "<input id='desconto"+parceiro.id+"' type='text' class='validate' value='"+parceiro.desconto+"'>"+
                    "<label for='desconto"+parceiro.id+"' class='active'>Desconto</label>"+
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
                    "<input id='obsDesconto"+parceiro.id+"' type='text' class='validate' value='"+parceiro.obsDesconto+"'>"+
                    "<label for='obsDesconto"+parceiro.id+"' class='active'>Observação do Desconto</label>"+
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
      M.AutoInit();

    });

  });
}
function carregaClientes(){
  $.post("https://draisistoledo.com/cartao/apiADM.php", {acao:"clientes"})
  .done(function(data){
    $("#listaClientes").html("");
    var clientes = JSON.parse(data);

      $.each(clientes, function(index, cliente){

        var itemCliente = "<li class=''>"+
          "<div id='itenClienteLista' class='collapsible-header'><i class='material-icons'>person</i>"+cliente.user_login;
          if( (new Date().getTime() > new Date(cliente.validade).getTime()))
          {
            var vencido = true;
            itemCliente+="<span class='badge red white-text'>vencido</span></div>";
          }else{
            var vencido = false;
            itemCliente+="<span class='badge green white-text'>ativo</span></div>";
          }
          itemCliente+="<div class='collapsible-body'>"+
            "<div class='row'>"+
         "<form class='col s12'>"+
           "<div class='row'>"+
             "<div class='input-field col s6'>"+
               "<input disabled id='Clientenome"+cliente.id+"' type='text' class='validate' value='"+cliente.user_login+"'>"+
               "<label for='Clientenome"+cliente.id+"' class='active'>Nome</label>"+
             "</div>"+
             "<div class='input-field col s6'>"+
               "<input disabled  id='Clienteemail"+cliente.id+"' type='email' class='validate' value="+cliente.user_email+">"+
               "<label for='Clienteemail"+cliente.id+"' class='active'>Email</label>"+
             "</div>"+
           "</div>"+
           "<div class='row'>"+
             "<div class='input-field col s12'>"+
               "<input id='Clientepassword"+cliente.id+"' type='password' class='validate' value=''>"+
               "<label for='Clientepassword"+cliente.id+"' class=''>Definir nova senha</label>"+
             "</div>"+
           "</div>"+
           "<div class='row'>"+
             "<div class='input-field col s12'>"+
               "<input id='Clientecpf"+cliente.id+"' type='text' class='validate' value="+cliente.cpf+">"+
               "<label for='Clientecpf"+cliente.id+"' class='active'>CPF</label>"+
             "</div>"+
           "</div>"+
           "<div class='row'>"+
             "<div class='input-field col s12'>"+
               "<input id='Clientevalidade"+cliente.id+"' type='date' class='validate' value="+cliente.validade+">"+
               "<label for='Clientevalidade"+cliente.id+"' class='active'>Validade</label>"+
             "</div>"+
           "</div>"+
           "<input type='hidden' class='validate' name='Clienteid"+cliente.id+"' value="+cliente.id+">"+
           "<div class='row'>"+
             "<div class='col s6'>"+
             "<a class='btnExcluir btn-floating btn-small waves-effect waves-light red modal-trigger' href='#modal1'><i class='material-icons'>delete</i></a> Excluir"+
             "</div>"+
             "<div class='col s6'>"+
               "<button class='btnSalvar btn waves-effect waves-light right' name='action'>Salvar"+
          "<i class='material-icons right'>save</i>"+
        "</button>"+
             "</div>"+
           "</div>"+
         "</form>"+
       "</div>"+
          "</div>"+
        "</li>";
        if(vencido){
        $("#listaClientes").prepend(itemCliente);
      }else {
        $("#listaClientes").append(itemCliente);
      }
      PesquisaCliente();
      })
      $(".btnExcluir").click(function(){
        $(this).parent().parent().parent().find("input").each(function(){
        $("#modal1>div>h4").text("Excluir usuário?");
        $("#modal1>div>p").html("Você quer DEFINITIVAMENTE excluir o usuário: <b>"+ $(this).parent().parent().parent().find("input").eq(0).val()+"?</b>");

      })
      })

      // Fecha modal
      $(".fechaModal").click(function(){
        $('#modal1').modal('close');
      })

      // Excluir clientes
      $(".excluiCliente").click(function(){
        var dadosCliente = {
      acao : "excluirCliente",
      id :  $(this).parent().parent().parent().find("input").eq(5).val()
      };
      $.post("https://draisistoledo.com/cartao/apiADM.php", dadosCliente)
      .done(function(data){
        M.toast({html: 'Cliente excluído com sucesso', classes:'green'})
      })
      })

      $(".btnSalvar").click(function(event){
        M.toast({
          html: 'Salvando dados...', classes: 'rounded yellow black-text'})
        event.preventDefault();
        var dadosCliente = {
      acao : "editaCliente",
      nome : $(this).parent().parent().parent().find("input").eq(0).val(),
      email :  $(this).parent().parent().parent().find("input").eq(1).val(),
      senha :  $(this).parent().parent().parent().find("input").eq(2).val(),
      cpf :  $(this).parent().parent().parent().find("input").eq(3).val(),
      validade :  $(this).parent().parent().parent().find("input").eq(4).val(),
      id :  $(this).parent().parent().parent().find("input").eq(5).val()
      };
      $.post("https://draisistoledo.com/cartao/apiADM.php", dadosCliente)
      .done(function(data){
        console.log(data);
        carregaClientes();
        M.Toast.dismissAll();
        M.toast({
          html: 'Dados do cliente foram alterados :)', classes: 'rounded green white-text', completeCallback: function(){
            PesquisaCliente();
          }
        })
      })
      })

  });

}

function PesquisaCliente(){
  $("#listaClientes > li").each(function(){
    if ($(this).find("#itenClienteLista").text().toUpperCase().indexOf($("#buscaClientes").val().toUpperCase()) == -1)
    $(this).addClass("some")
    else {
      $(this).removeClass("some")
    }
  })
}

$("#buscaClientes").keypress(function(){
  PesquisaCliente();
});

$("#buscaClientes").focusout(function(){
  PesquisaCliente();
});

$("#fechaBuscaCliente").click(function(){
  $("#buscaClientes").val("");
  PesquisaCliente();
})
