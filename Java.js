function validarFormulario() {
    var nombre = document.getElementById('nombre').value;
    var correo = document.getElementById('correo').value;
    var mensaje = document.getElementById('mensaje').value;

    if (nombre === "" || correo === "" || mensaje === "") {
        alert("Por favor, completa todos los campos del formulario.");
        return false;
    }

    return true;
}























