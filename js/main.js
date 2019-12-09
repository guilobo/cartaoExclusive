$(function(){
	$('.form-holder').delegate("input", "focus", function(){
		$('.form-holder').removeClass("active");
		$(this).parent().addClass("active");
	})
});

function readURL(input) {
	if (input.files && input.files[0]) {
		var reader = new FileReader();

		reader.onload = function (e) {
			$('#blah').attr('src', e.target.result);
		}

		reader.readAsDataURL(input.files[0]);
	}
}

$("#file-2").change(function(){
	readURL(this);
});

$("#nomeDaEmpresa").change(function(){
	$('.tituloParceiro').text($('#nomeDaEmpresa').val());
});

$("#ramo").change(function(){
	$('.ramoParceiro').text($('#ramo').val());
});

$("#hora").change(function(){
	$('.horario').text($('#hora').val());
});

$("#hora").keypress(function(){
	$('.horario').text($('#hora').val());
});


function realOuPorcento(){

	if ($("#tipoDescontoReal").prop("checked") == true){
		$(".dencontoComplementos").first().text("R$");
		$(".dencontoComplementos").last().text(",00");
	}else{
		$(".dencontoComplementos").first().text("");
		$(".dencontoComplementos").last().text("%");
	}
	if (($('#desconto').val() > 999) && ($("#tipoDescontoReal").prop("checked") == true)){
		if ($('#desconto').val() > 999){
			$('.valorPrincipal').text("999");
			$('#desconto').val(999);
		}else{
			$('.valorPrincipal').text($('#desconto').val()+"");
		}

	}else{
		$('.valorPrincipal').text($('#desconto').val()+"");
		if (($('#desconto').val() > 100) && ($("#tipoDescontoPorcento").prop("checked") == true)){
			$('.valorPrincipal').text("100");
			$('#desconto').val(100);
		}
		if (($('#desconto').val() < 1) && ($("#tipoDescontoPorcento").prop("checked") == true)){
			$('.valorPrincipal').text("1");
			$('#desconto').val(1);
		}
	}

}

$("#obsDesconto").change(function(){
	$(".obsDesconto").text("**"+$("#obsDesconto").val());
});

$("#desconto").change(function(){
	realOuPorcento();
});
$("#tipoDescontoReal").click(function(){
	realOuPorcento();
});

$("#tipoDescontoPorcento").click(function(){
	realOuPorcento();
});



$("#cidade, #estado").change(function(){
	$('.cidadeParceiro').text($('#cidade').val()+" - "+$("#estado").val());
});

$("#nomeDaEmpresa").keypress(function(){
	$('.tituloParceiro').text($('#nomeDaEmpresa').val());
});

$("#ramo").keypress(function(){
	$('.ramoParceiro').text($('#ramo').val());
});

$("#cidade, #estado").keypress(function(){
	$('.cidadeParceiro').text($('#cidade').val()+" - "+$("#estado").val());
});

$("form").submit(function(event){

	if ($("#nomeDaEmpresa").val() == ""){
		alert("Nome da empresa nao pode estar vazio");
			event.preventDefault();
	}else{
		if ($("#nomeDaEmpresa").val() == ""){
			alert("Nome da empresa nao pode estar vazio");
			event.preventDefault();
		}else{	if ($("#cnpj").val() == ""){
			alert("O CNPJ nao pode estar vazio");
			event.preventDefault();
		}else{	if ($("#endereco").val() == ""){
			alert("O Endereço nao pode estar vazio");
			event.preventDefault();
		}else{	if ($("#cidade").val() == ""){
			alert("o campo 'cidade' nao pode estar vazio");
			event.preventDefault();
		}else{	if ($("#telefone").val() == ""){
			alert("O telefone nao pode estar vazio");
			event.preventDefault();
		}else{	if ($("#ramo").val() == ""){
			alert("O ramo de atuação nao pode estar vazio");
			event.preventDefault();
		}else{	if ($("#hora").val() == ""){
			alert("O horário de funcionamento nao pode estar vazio");
			event.preventDefault();
		}else{	if ($("#desconto").val() == ""){
			alert("O desconto oferecido nao pode estar vazio");
			event.preventDefault();
		}else{	if ($("#email").val() == ""){
			alert("O email da empresa nao pode estar vazio");
			event.preventDefault();
		}else{	if ($("#file-2").val() == ""){
			alert("A logo da empresa nao pode estar vazio");
			event.preventDefault();
		}else{




		}}}}}}}}}}
	}
}
);
