function validarFormulario(){
    let usuario = document.forms["formLogin"]["usuario"].value;
    let clave = document.forms["formLogin"]["clave"].value;
    if (usuario == "" || clave == "") {
        alert("Los campos 'Usuario' y 'Clave' no pueden estar vacíos");
        return false;
    }
    else if (usuario.search("@") == -1){
        alert('El usuario debe incluir un "@"');
        return false;
   }
}
