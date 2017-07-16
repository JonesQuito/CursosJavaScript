
//FUNÇÃO QUE VALIDA O FORMATO DA DATA
function validaData(date){

	var entrada = date;

	var RegExp = /[0-9]{2}\/[0-9]{2}\/[0-9]{4}/;

	if (entrada.search(RegExp) == -1 || entrada.length > 10) {

		//document.write("o formato de data é inválido");
		return false;
	}else{
		return true;
	}
}


// FUNÇÃO QUE VALIDA O FORMATO DO CPF
function validaCpf(cpf){

	var texto = cpf;

	var RegExp = /[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}/;

	if(texto.search(RegExp) != -1){

		document.write("CPF válido!");

	}else{

		document.write("CPF inválido!");
	}
}