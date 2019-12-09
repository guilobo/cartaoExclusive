function carregaParceiros(){
    $.post("https://draisistoledo.com/cartao/apiParceiros.php").done(function(data){
      var parceiros = JSON.parse(data);

      $.each(parceiros, function(index, value) {
        console.log(index + ' : ' + value.nome);

        var conteudo =
        "<div class='vc_column_container col-md-3'><div class='wpb_wrapper vc_column-inner'>"+
        "<div class='wpb_raw_code wpb_content_element wpb_raw_html'>"+
          "<div class='wpb_wrapper'>"+
            "<div class='containerParceiro'>"+
                "<div class='tituloParceiro center'>"+
                value.nome +
                "</div>"+
                "<div class='ramoParceiro'>"+
                value.ramo +
                "</div>"+
                "<div class='imageParceiro'>"+
                "<img src='https://draisistoledo.com/cartao/uploads/"+value.logo+"' id='blah' alt=''>" +
                "</div>"+
                "<div style='display: block; line-height: normal;' class='center'>";

                if(value.tipoDesconto == "porcento"){
                  conteudo += "	<span class='dencontoComplementos center'></span>"+
                  "	<span class='valorPrincipal center'>"+value.desconto+"</span>"+
                  "	<span class='dencontoComplementos center'>%</span>";
                }else{
                  conteudo += "	<span class='dencontoComplementos center'>R$</span>"+
                  "	<span class='valorPrincipal center'>"+value.desconto+"</span>"+
                  "	<span class='dencontoComplementos center'>,00</span>";
                }

                conteudo += "	<span class='deDesconto center'>de Desconto</span>"+
                "</div>"+
                "<div class='obsDesconto'>";

                if(value.obsDesconto == ""){
                  conteudo += "**Válido para todos os produtos";
                }else{
                conteudo += "**"+ value.obsDesconto;
              }

              conteudo += "	</div>"+
              "	<div class='horario'>"+
                value.horaFuncionamento +
              "	</div>"+
                "<div class='cidadeParceiro'>"+
                  value.cidade + "<span> - " + value.estado + "</span>"+
                "</div>"+
              "</div>"+
          "</div>"+
        "</div>"+
      "</div></div>";

        $(".parceirosLista").append(conteudo);
      });
    });



}
