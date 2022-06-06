window.addEventListener("DOMContentLoaded", (e)=>{
    let formSubmit = document.getElementById("formSubmit");
    formSubmit.addEventListener("click", (e)=>{
        let canSubmit = true;
        //Recupero el valor de los inputs
        let inputNombre = document.getElementById("inputNombre").value.trim();
        let inputApellido = document.getElementById("inputApellido").value.trim();
        let inputCedula = document.getElementById("inputCedula").value.trim();
        let inputEmail = document.getElementById("inputEmail").value.trim();

        //Validaciones para nombre
        if(inputNombre == ""){
            document.getElementById("errorNombre").innerHTML = "El nombre es requerido";
            canSubmit = false;
        }else if(inputNombre.length < 3 ){
            canSubmit = false;
            document.getElementById("errorNombre").innerHTML = "El nombre debe tener al menos 3 carácteres";
        }else{
            document.getElementById("errorNombre").innerHTML = "";
        }

        //Validaciones para apellido
        if(inputApellido == ""){
            document.getElementById("errorApellido").innerHTML = "El apellido es requerido";
            canSubmit = false;
        }else if(inputNombre.length < 3 ){
            canSubmit = false;
            document.getElementById("errorApellido").innerHTML = "El apellido debe tener al menos 3 carácteres";
        }else{
            document.getElementById("errorApellido").innerHTML = "";
        }
        //Validaciones para cedula
        if(inputCedula == ""){
            document.getElementById("errorCedula").innerHTML = "La cédula es requerida";
            canSubmit = false;
        }else if(isNaN(inputCedula)){
            canSubmit = false;
            document.getElementById("errorCedula").innerHTML = "La cédula debe ser númerica";
        }else if(inputCedula.length != 10){
            canSubmit = false;
            document.getElementById("errorCedula").innerHTML = "La cédula debe tener 10 dígitos";
        }else{
            document.getElementById("errorCedula").innerHTML = "";
        }
        //Validaciones para email
        if(inputEmail == ""){
            document.getElementById("errorEmail").innerHTML = "El email es requerido";
            canSubmit = false;
        }else if(inputEmail.indexOf("@") == -1 || inputEmail.indexOf(".") == -1){
            document.getElementById("errorEmail").innerHTML = "El email debe tener @ y .";
            canSubmit = false;
        }else if(inputEmail.indexOf(" ") != -1){
            document.getElementById("errorEmail").innerHTML = "El email no puede contener espacios";
            canSubmit = false;
        }else if(inputEmail.indexOf("@")>inputEmail.indexOf(".")){
            document.getElementById("errorEmail").innerHTML = "El email no tiene el formato de @ y .";
            canSubmit = false;
        }else if(inputEmail.indexOf("@")+1 == inputEmail.indexOf(".")){
            document.getElementById("errorEmail").innerHTML = "El email debe tener una organización ";
            canSubmit = false;
        }else if(inputEmail.indexOf(".")+1 == inputEmail.length){
            document.getElementById("errorEmail").innerHTML = "El email debe tener un tipo ";
            canSubmit = false;
        }else if(inputEmail.indexOf("@") == 0){
            document.getElementById("errorEmail").innerHTML = "El email debe tener un nombre de usuario ";
            canSubmit = false;
        }else{
            document.getElementById("errorEmail").innerHTML = "";
        }
        if(!canSubmit){
            e.preventDefault();
        }
    })
});
