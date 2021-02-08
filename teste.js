function potencia() {
	var x = document.getElementById('campo').value
	var valor = x ** 2 
	document.getElementById('campo-2').value = valor

}

function impar_par() {
	var n = document.getElementById('campo-3').value
	var resultado = n % 2 
	if ( resultado == 1) {
		document.getElementById('campo-4').value = "Impar"
	} else {
		document.getElementById('campo-4').value = "Par"
	}
}