function forcePsswd() {
	let idPsswd = document.getElementById("psswd").value;
	let count = 0;
	let i = 0;

	console.log(idPsswd.length)
	if (idPsswd.length >= 10 && idPsswd.length <= 15){
		while (idPsswd[i]) {
			if (idPsswd[i] >= "A" && idPsswd[i] <= "Z")
				count++
			i++;
		}
		if (count < 2){
			event.preventDefault();
			alert("Contraseña no válida, al menos inserte 2 mayúsculas.");
		}

		count = 0;
		i = 0;
		while (idPsswd[i]) {
			if (idPsswd[i] == "*" || idPsswd[i] == "/" || idPsswd[i] == "-" || idPsswd[i] == "#" || idPsswd[i] == "~")
				count++;
			i++;
		}
		if (count < 1){
			event.preventDefault();
			alert("Contraseña no válida, al menos 1 de estos símbolos: * / - # ~");
		}

		count = 0;
		i = 0;
		while (idPsswd[i]) {
			if (idPsswd[i] >= "5" && idPsswd[i] <= "9")
				count++
			i++;
		}
		if (count < 3){
			event.preventDefault();
			alert("Contraseña no válida, al menos 3 números entre el 5 y el 9.");
		}
	} else {
		event.preventDefault();
		alert("Contraseña no válida, al menos debe ser mínimo 10 y máximo 15 de longitud");
	}
}

function confirPsswd () {
	let idPsswd = document.getElementById("psswd").value;
	let idConfirmPsswd = document.getElementById("confirm-psswd").value;


	if (idConfirmPsswd !== idPsswd) {
		alert("Las contraseñas no coinciden.");
	}
}