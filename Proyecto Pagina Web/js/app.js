'use strict';

const enviar = document.getElementById('btnSend');
const form = document.getElementById('form');


const formValid = {
    nombre: false,
    email: false,
    telefono: false
};
//envio formulario
enviar.addEventListener("click", function (e) {
    e.preventDefault();//no se hace el envio del fomulario por lo tanto no se refresca
    console.log(Object.values(formValid));
    if (formValidValues(formValid) === -1) {
        alert("Enviando fomulario")
    } else {
        alert("Campos invalidos")
    }
});
const formValidValues = (Objeto) => {
    const valores = Object.values(Objeto);
    let response = valores.findIndex((e) => e === false);
    return response;
}

//validacion a traves del cambio de los elementos del fomulario 
form.addEventListener("change", (e) => {
    const inputId = e.target.id;
    console.log(inputId);
    const myValue = e.target.value;
    console.log(myValue);
    const myClass = e.target.classList;
    console.log(myClass);
    //Funciones que agragan o quita los estilos validos e invalidos
    const validClass = () => {
        myClass.add("is-valid");
        myClass.remove("is-invalid");
    };
    const inValidClass = () => {
        myClass.remove("is-valid");
        myClass.add("is-invalid");
    };
    switch (inputId) {
        case "nombre":
            const nombresV =
                /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g;
            formValid.nombre = myValue.match(nombresV) ? true : false;
            formValid.nombre ? validClass() : inValidClass();
            console.log(Object.values(formValid))
            break;
        case "correo":
            const mailV = /^([\w.]+[^#$%&\/()='"!?¡]\w*-*)([@])(\w)+(\.[a-z]{2,3})$/g;
            formValid.email = myValue.match(mailV) ? true : false;
            formValid.email ? validClass() : inValidClass();
            console.log(Object.values(formValid))
            break;
        case "telefono":
            const telefonoV = /^[0-9]*$/;
            formValid.telefono = myValue.match(telefonoV) ? true : false;
            formValid.telefono ? validClass() : inValidClass();
            console.log(Object.values(formValid))
            break;
    }
});
