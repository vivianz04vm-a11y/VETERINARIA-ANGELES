function registrarMascota() {
    let mascota = document.getElementById("mascota").value;
    let dueno = document.getElementById("dueno").value;
    let estado = document.getElementById("estado").value;

    if (mascota === "" || dueno === "") {
        document.getElementById("mensaje").innerText = "Debe completar todos los campos.";
    } else {
        document.getElementById("mensaje").innerText =
            "Mascota registrada: " + mascota + " - Dueño: " + dueno + " - Estado: " + estado;
    }
}
